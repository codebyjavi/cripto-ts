import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, Pair } from "./types";
import { getCryptos, CurrenyCryptoPrice } from "./services/CryptoService";

type CryptoStore = {
    cryptocurrencies: CryptoCurrency[],
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
        
    },
    fetchData: async (pair) => {
        const result = await CurrenyCryptoPrice(pair)
        console.log(result);
    }
})))