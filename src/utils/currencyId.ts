import { Currency, ETHER, Token } from 'moonwalkerswap-avalanche-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'AVAX'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
