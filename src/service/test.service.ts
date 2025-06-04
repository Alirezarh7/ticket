import {useQuery} from '@tanstack/react-query';
import {http} from "./superAPP.service.ts";
import type {IGetInformationDetailZaerHaj} from "../type/getInformationDetailZaerHaj.ts";


const getInformationDetailZaerHaj = async () => {

  return await http.get(`https://my.haj.ir/api/ExportApi/api/haj/GetInformationDetailZaerHaj`) as IGetInformationDetailZaerHaj;
};
const useGetInformationDetailZaerHaj = () => {

  return useQuery({
    queryFn: () => getInformationDetailZaerHaj(),
    queryKey: ['getInformationDetailZaerHaj'],
  });
};
export {useGetInformationDetailZaerHaj}
