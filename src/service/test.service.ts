import {useQuery} from '@tanstack/react-query';
import {http} from "./superAPP.service.ts";
import type {IGetInformationDetailZaerHaj} from "../type/getInformationDetailZaerHaj.ts";


const getInformationDetailZaerHaj = async () => {

  return await http.get(`/GetInformationDetailZaerHaj`) as IGetInformationDetailZaerHaj;
};
const useGetInformationDetailZaerHaj = () => {

  return useQuery({
    queryFn: () => getInformationDetailZaerHaj(),
    queryKey: ['getInformationDetailZaerHaj'],
  });
};
export {useGetInformationDetailZaerHaj}
