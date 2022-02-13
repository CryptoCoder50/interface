import { ChainId } from 'moonwalkerswap-avalanche-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.AVALANCHE]: '0x83567d09afb9453a9e05c91c9e2f16ef6b4bd47d', 
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
