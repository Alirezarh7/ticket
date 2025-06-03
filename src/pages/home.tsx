import {
    FaPlaneDeparture,
    FaPlaneArrival,
    FaPassport,
    FaUser,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaIdCard
} from "react-icons/fa";
import usePersianNumbers from "../hook/usePersianNumber.ts";
import {useEffect, useState} from "react";
import {http} from "../service/superAPP.service.ts";

const TicketCard = () => {
    const [data2, setData2] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res =  await http.get('https://my.haj.ir/api/exportapi/api/GetInformationDetailZaerHaj');
                setData2(res)
            } catch (error) {
                console.error('خطا در گرفتن داده:', error);
            } finally {
                setLoading(false);
            }
        };
        console.log(data2)
        fetchData();
    }, []);
    console.log(data2)
    usePersianNumbers()
    if (loading) return <p>در حال بارگذاری...</p>;
    return (
        <div className='p-1'>
            <div
                className="max-w-md h-screen   mx-auto bg-gray-200 rounded-2xl shadow-xl overflow-hidden border border-gray-600  text-black ">
                {/* Header */}
                <div className="bg-[#059669] text-white px-4 py-3 flex w-full justify-between items-center">
                    <div className="text-lg font-bold">بلیط پرواز</div>
                    <div className="text-sm">کد زائر: {data2.ZaerNo}</div>
                </div>

                {/* Passenger Info */}
                <div className="p-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-black">
                        <FaUser/>
                        <p>{data2.name} {data2.Family}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaIdCard/> کد ملی: {data2.ssn}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPassport/> پاسپورت: {data2.PassNo}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt/> تولد: {data2.birthdate}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt/> استان: {data2.ProvinceName}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt/> {data2.cell}
                    </div>
                </div>

                {/* Flight Info */}
                <div className=" bg-white p-4">
                    <div className="flex justify-between items-center text-sm font-medium mb-2">
                        <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                            <FaPlaneDeparture/> پرواز رفت
                        </div>
                        <span>{data2.EnterDate}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex flex-col">
                            <span className="font-semibold">فرودگاه مبدا:</span>
                            <span>{data2.EnterFport}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">مقصد:</span>
                            <span>{data2.EnterSport}</span>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center text-sm font-medium">
                        <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                            <FaPlaneArrival/> پرواز برگشت
                        </div>
                        <span>{data2.ExitDate ?? "مشخص نیست"}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm mt-2">
                        <div className="flex flex-col">
                            <span className="font-semibold">فرودگاه خروج:</span>
                            <span>{data2.EXitFport ?? "نامشخص"}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">مقصد:</span>
                            <span>{data2.ExitSport ?? "نامشخص"}</span>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="px-4 py-3 text-sm  text-black">
                    <div className="grid grid-cols-2 gap-2">
                        <div>نام پدر: {data2.fathername}</div>
                        <div>تحصیلات: {data2.Education}</div>
                        <div>شغل: {data2.job}</div>
                        <div>دین: {data2.Religion}</div>
                        <div>اولویت: {data2.OlaveyatDate}</div>
                        <div>کد کاروان: {data2.karevanno}</div>
                    </div>
                    <div className="mt-2">
                        <strong>ساختمان مدینه:</strong> {data2.madinehbuildname} - {data2.MadinehbuildnameAddress}
                    </div>
                    <div className="mt-1">
                        <strong>ساختمان مکه:</strong> {data2.meccabuildname} - {data2.MeccabuildnameAddress}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
