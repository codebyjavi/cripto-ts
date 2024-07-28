import { create } from "zustand";
import axios from "axios";
import { CryptoCurrenciesSchema } from "./schema/crypto-schema";


const getCryptos = async () => {
    const cryptoUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
    const {data: { Data }} = await axios(cryptoUrl)
    const result = CryptoCurrenciesSchema.safeParse(Data)
    console.log(result);
    
}

export const useCryptoStore = create(() => ({
    fetchCryptos: async () => {
        getCryptos()
    }
}))