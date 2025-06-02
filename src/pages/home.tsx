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

const TicketCard = () => {
    const data = {
        "EnterDate": "1404/02/26-16MAY1684",
        "ExitDate": null,
        "PassNo": "Z61358513",
        "birthdate": "1330/05/05",
        "karevanno": 10004,
        "EnterSport": "جده",
        "sexid": 1,
        "medineh": "بعد",
        "MeccaState": 4,
        "cell": "09924769276",
        "ssn": "0035366508",
        "KarevanPrice": 2327239723,
        "ZaerNo": 15970005,
        "ProvinceName": "اردبيل",
        "MadinehbuildnameAddress": "المنطقة المرکزیة الجنوبیة - شارع أبو أیوب الأنصاري - جوار المحکمة العامة",
        "meccabuildname": "قصر العلیان",
        "mainmaktab": 7,
        "Education": "بيسواد",
        "passengerStepId": 1,
        "IsEmergency": true,
        "managername": "سپهدار پروانه",
        "EXitFport": null,
        "PassengerId": 100040068,
        "sex": "مرد",
        "EnterFport": "اردبيل",
        "Religion": "شيعه",
        "idno": "1568",
        "madinehbuildname": "منازلی المدینه",
        "MeccabuildnameAddress": "ریع بخش -  شارع أجیاد، امام فندق الغدیر أجیاد",
        "fathername": "داداش بالا",
        "ExitSport": null,
        "name": "حسین",
        "Family": "بابایی پیرالقیر",
        "OlaveyatDate": "1386/09/08",
        "passengerstepName": "دريافت استان",
        "job": "کشاورز",
        "VisaNo": 17132626
    }
    usePersianNumbers()
    return (
        <div className='p-1'>
            <div
                className="max-w-md h-screen   mx-auto bg-gray-200 rounded-2xl shadow-xl overflow-hidden border border-gray-600  text-black ">
                {/* Header */}
                <div className="bg-[#059669] text-white px-4 py-3 flex w-full justify-between items-center">
                    <div className="text-lg font-bold">بلیط پرواز</div>
                    <div className="text-sm">کد زائر: {data.ZaerNo}</div>
                </div>

                {/* Passenger Info */}
                <div className="p-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-black">
                        <FaUser/>
                        <p>{data.name} {data.Family}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaIdCard/> کد ملی: {data.ssn}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPassport/> پاسپورت: {data.PassNo}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt/> تولد: {data.birthdate}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt/> استان: {data.ProvinceName}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt/> {data.cell}
                    </div>
                </div>

                {/* Flight Info */}
                <div className=" bg-white p-4">
                    <div className="flex justify-between items-center text-sm font-medium mb-2">
                        <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                            <FaPlaneDeparture/> پرواز رفت
                        </div>
                        <span>{data.EnterDate}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex flex-col">
                            <span className="font-semibold">فرودگاه مبدا:</span>
                            <span>{data.EnterFport}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">مقصد:</span>
                            <span>{data.EnterSport}</span>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center text-sm font-medium">
                        <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                            <FaPlaneArrival/> پرواز برگشت
                        </div>
                        <span>{data.ExitDate ?? "مشخص نیست"}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm mt-2">
                        <div className="flex flex-col">
                            <span className="font-semibold">فرودگاه خروج:</span>
                            <span>{data.EXitFport ?? "نامشخص"}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">مقصد:</span>
                            <span>{data.ExitSport ?? "نامشخص"}</span>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="px-4 py-3 text-sm  text-black">
                    <div className="grid grid-cols-2 gap-2">
                        <div>نام پدر: {data.fathername}</div>
                        <div>تحصیلات: {data.Education}</div>
                        <div>شغل: {data.job}</div>
                        <div>دین: {data.Religion}</div>
                        <div>اولویت: {data.OlaveyatDate}</div>
                        <div>کد کاروان: {data.karevanno}</div>
                    </div>
                    <div className="mt-2">
                        <strong>ساختمان مدینه:</strong> {data.madinehbuildname} - {data.MadinehbuildnameAddress}
                    </div>
                    <div className="mt-1">
                        <strong>ساختمان مکه:</strong> {data.meccabuildname} - {data.MeccabuildnameAddress}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
