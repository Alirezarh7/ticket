import { useEffect } from "react";


const convertNumbersToPersian = (str: string) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str.replace(/\d/g,(d)=>persianDigits[Number(d)])
};

const usePersianNumbers = () => {
    useEffect(() => {
        const walkDOM = (node:Node) => {
            if (node.nodeType === 3) {
                node.nodeValue = convertNumbersToPersian(node.nodeValue || '');
            } else if ((node as HTMLElement).tagName !== "SCRIPT" && (node as HTMLElement).tagName !== "STYLE") {
                node.childNodes.forEach(walkDOM)
            }
        }
        const updateTextNodes = () => {
            walkDOM(document.body);
        }
        updateTextNodes();

        const observer = new MutationObserver(() => updateTextNodes());
        observer.observe(document.body, { childList: true, subtree: true });
        return () => observer.disconnect()
    }, []);
};

export default usePersianNumbers;