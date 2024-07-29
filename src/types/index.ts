import { z } from 'zod'
import { CurrencySchema, CryptoCurrencySchema, PairSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>
export type Pair = z.infer<typeof PairSchema>