import axios from "axios"
import { CryptoCurrenciesSchema, CryptoPriceSchema } from "../schema/crypto-schema"
import { Pair } from "../types"

export const getCryptos = async () => {
    const cryptoUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
    const {data: { Data }} = await axios(cryptoUrl)
    const result = CryptoCurrenciesSchema.safeParse(Data)
    
    if(result.success) {
        return result.data
    }
}

export const CurrenyCryptoPrice = async (pair: Pair) => {
    const dataUrl = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`        
    const { data: { DISPLAY } } = await axios(dataUrl)
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
    
    if(result.success){
        return result.data
    }
}