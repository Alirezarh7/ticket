
import {useQuery} from '@tanstack/react-query';
import {http} from "./superAPP.service.ts";
import type {IGetInformationDetailZaerHaj} from "../type/getInformationDetailZaerHaj.ts";
import singleUiAxios from "../baseURL/singleUiAxios.ts";


const getInformationDetailZaerHaj = async () => {

  return await singleUiAxios(`/GetInformationDetailZaerHaj`) as IGetInformationDetailZaerHaj;
};
const useGetInformationDetailZaerHaj = () => {

  return useQuery({
    queryFn: () => getInformationDetailZaerHaj(),
    queryKey: ['getInformationDetailZaerHaj'],
  });
};
export {useGetInformationDetailZaerHaj}
