import { create } from "zustand";
import axios from "axios";
import { CryptoCurrenciesSchema } from "./schema/crypto-schema";
import { CryptoCurrency } from "./types";

type CryptoStore = {
    cryptocurrencies: CryptoCurrency[],
    fetchCryptos: () => Promise<void>

}

const getCryptos = async () => {
    const cryptoUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
    const {data: { Data }} = await axios(cryptoUrl)
    const result = CryptoCurrenciesSchema.safeParse(Data)
    
    if(result.success) {
        return result.data
    }
}

export const useCryptoStore = create<CryptoStore>((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
        
    }
}))