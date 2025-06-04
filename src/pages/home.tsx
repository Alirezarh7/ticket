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
import {useGetInformationDetailZaerHaj} from "../service/test.service.ts";
import {enqueueSnackbar} from "notistack";


const TicketCard = () => {

  const {data: data2, isLoading} = useGetInformationDetailZaerHaj()

  console.log(data2)
  if (data2?.passengers?.length === 0) {enqueueSnackbar('هیچ دیتای یافت نشد', {variant: 'warning'})}

  usePersianNumbers()

  if (isLoading) return <p>در حال بارگذاری...</p>;
  return (
    <div className='p-1'>
      {data2 && data2?.passengers?.length > 0 ? data2?.passengers.map((item) => (
          <div
            className="max-w-md h-screen   mx-auto bg-gray-200 rounded-2xl shadow-xl overflow-hidden border border-gray-600  text-black ">
            {/* Header */}
            <div className="bg-[#059669] text-white px-4 py-3 flex w-full justify-between items-center">
              <div className="text-lg font-bold">بلیط پرواز</div>
              <div className="text-sm">کد زائر: {item.zaerNo}</div>
            </div>

            {/* Passenger Info */}
            <div className="p-4 grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-black">
                <FaUser/>
                <p>{item.name} {item.family}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaIdCard/> کد ملی: {item.ssn}
              </div>
              <div className="flex items-center gap-2">
                <FaPassport/> پاسپورت: {item.passNo}
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt/> تولد: {item.birthdate}
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt/> استان: {item.provinceName}
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt/> {item.cell}
              </div>
            </div>

            {/* Flight Info */}
            <div className=" bg-white p-4">
              <div className="flex justify-between items-center text-sm font-medium mb-2">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <FaPlaneDeparture/> پرواز رفت
                </div>
                {(() => {
                  const [date, flight] = item.enterDate?.split('-') ?? ["--", "--"];
                  return (
                    <div className="flex flex-col text-end">
                      <span>تاریخ: {date}</span>
                      <span>شماره پرواز: {flight}</span>
                    </div>
                  );
                })()}
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex flex-col">
                  <span className="font-semibold">فرودگاه مبدا:</span>
                  <span>{item.enterFport}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">مقصد:</span>
                  <span>{item.enterSport}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center text-sm font-medium">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <FaPlaneArrival/> پرواز برگشت
                </div>
                {(() => {
                  const [date, flight] = item.exitDate?.split('-') ?? ["--", "--"];
                  return (
                    <div className="flex flex-col text-end">
                      <span>تاریخ: {date}</span>
                      <span>شماره پرواز: {flight}</span>
                    </div>
                  );
                })()}
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm mt-2">
                <div className="flex flex-col">
                  <span className="font-semibold">فرودگاه خروج:</span>
                  <span>{item.eXitFport ?? "--"}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">مقصد:</span>
                  <span>{item.exitSport ?? "--"}</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="px-4 py-3 text-sm  text-black">
              <div className="grid grid-cols-2 gap-2">
                <div>نام پدر: {item.fathername}</div>
                <div>تحصیلات: {item.education}</div>
                <div>شغل: {item?.job}</div>
                <div>دین: {item.religion}</div>
                <div>اولویت: {item.olaveyatDate}</div>
                <div>کد کاروان: {item?.karevanno}</div>
              </div>
              <div className="mt-2">
                <strong>ساختمان
                  مدینه:</strong> {item.madinehbuildname} - {item.madinehbuildnameAddress}
              </div>
              <div className="mt-1">
                <strong>ساختمان
                  مکه:</strong> {item.meccabuildname} - {item.meccabuildnameAddress}
              </div>
            </div>
          </div>
        ))
        : null }
    </div>
  );
};

export default TicketCard;
