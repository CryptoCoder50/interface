import { ChainId, Fraction, JSBI, Percent, Token, WETH } from 'moonwalkerswap-avalanche-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { injected, walletconnect, walletlink } from '../connectors'

export const ROUTER_ADDRESS = '0xde8922465457beaebbe7e9dc35c6ae56650be685'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const DAIe = new Token(ChainId.AVALANCHE, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin')
export const BUSDe = new Token(ChainId.AVALANCHE, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD')
export const USDTe = new Token(ChainId.AVALANCHE, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD')
export const USDC = new Token(ChainId.AVALANCHE, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD')
export const ETH = new Token(
  ChainId.AVALANCHE,
  '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token'
)

const WETH_ONLY: ChainTokenList = {
  [ChainId.AVALANCHE]: [WETH[ChainId.AVALANCHE]],
}


// export const GOVERNANCE_ADDRESS = '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'

const SOLAR_ADDRESS = '0x5ce9680bddc91d955a51b959f5cabaf466b0be5a'
export const SOLAR: { [chainId in ChainId]: Token } = {
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, SOLAR_ADDRESS, 18, 'SLR', 'Solar Moonwalkerswap'),
}

// TODO: specify merkle distributor for mainnet
export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.AVALANCHE]: '0x5751b2880d7fe4b1c9e7845ea58221456530afe7',
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.AVALANCHE]: [...WETH_ONLY[ChainId.AVALANCHE], DAIe, BUSDe, USDTe, ETH],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.AVALANCHE]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.AVALANCHE]: [...WETH_ONLY[ChainId.AVALANCHE], DAIe, BUSDe, USDTe],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.AVALANCHE]: [...WETH_ONLY[ChainId.AVALANCHE], DAIe, BUSDe, USDTe],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.AVALANCHE]: [
    [
      new Token(ChainId.AVALANCHE, '0x5ce9680bddc91d955a51b959f5cabaf466b0be5a', 18, 'SOLAR', 'Moonwalkerswap Token'),
      new Token(ChainId.AVALANCHE, '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18, 'WAVAX', 'Wrapped AVAX'),
    ],
    [BUSDe, USDTe],
    [DAIe, USDTe],
  ],
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const ONE_BIPS_FRACTION = new Fraction(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))

// the Moonwalkerswap Default token list lives here
export const DEFAULT_TOKEN_LIST_URL = `'https://unpkg.com/moonwalkerswap-default-token-lists@1.0.6/src/tokens/avalanche.json'`
