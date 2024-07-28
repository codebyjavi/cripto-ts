import { z } from 'zod'
import { CurrencySchema, CryptoCurrencySchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>