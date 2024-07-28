import { z } from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const CryptoCurrencySchema = z.object({
    Name: z.string(),
    Fullname: z.string()
})

export const CryptoCurrenciesSchema = z.array(CryptoCurrencySchema)