import { create } from "zustand";
import axios from "axios";

type CryptoState = {
    cryptocurrencies: CryptoCurrencySchema
}

const getCryptos = async () => {
    const cryptoUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
    const {data: { Data }} = await axios(cryptoUrl)
    console.log(Data);
}

export const useCryptoStore = create(() => ({
    fetchCryptos: async () => {
        getCryptos()
    }
}))