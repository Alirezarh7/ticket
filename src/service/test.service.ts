// import singleUiAxios from "../baseURL/singleUiAxios.ts";
import {useQuery} from '@tanstack/react-query';
import {http} from "./superAPP.service.ts";
const getInformationDetailZaerHaj = async () => {
  const response = await http.get(`https://my.haj.ir/api/ExportApi/api/haj/GetInformationDetailZaerHaj`);
  return response.data;
};
const useGetInformationDetailZaerHaj = () => {

  return useQuery({
    queryFn: () => getInformationDetailZaerHaj(),
    queryKey: ['getInformationDetailZaerHaj'],
  });
};
export {useGetInformationDetailZaerHaj}
