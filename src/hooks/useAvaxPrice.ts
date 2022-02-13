import { useEffect, useState, useCallback } from 'react'
import { AbiItem } from 'web3-utils'
import BigNumber from 'bignumber.js'
import SolarV2LPABI from '../constants/abis/SolarV2LP.json'
import { getWeb3NoAccount } from '../utils/web3'
import useBlock from './useBlocks'

const web3 = getWeb3NoAccount()
const AvaxUSDTPairAddress = '0x3fb0087842b7ebd57be8024aaf32cc6a390c13d5'
const AvaxUsdtPairContract = new web3.eth.Contract(SolarV2LPABI as unknown as AbiItem, AvaxUSDTPairAddress)

const SolarAvaxPairAddress = '0x3fb0087842b7ebd57be8024aaf32cc6a390c13d5'
const SolarAvaxPairContract = new web3.eth.Contract(SolarV2LPABI as unknown as AbiItem, SolarAvaxPairAddress)

const useAvaxPrice = () => {
  const [price, setPrice] = useState(0)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    try {
      const avaxObj = await AvaxUsdtPairContract.methods.getReserves().call();
      if (!new BigNumber(avaxObj._reserve1).eq(new BigNumber(0))) {
        const avaxPrice = new BigNumber(avaxObj._reserve0).div(avaxObj._reserve1).times(1e12)
        const solarObj = await SolarAvaxPairContract.methods.getReserves().call();
        if (!new BigNumber(solarObj._reserve1).eq(new BigNumber(0))) {
          
          const solarPrice = new BigNumber(solarObj._reserve0).div(solarObj._reserve1).times(avaxPrice)
          if (!avaxPrice.isEqualTo(price)) {
            setPrice(avaxPrice.toNumber())
          }
        }
      }
    } catch (e) {
      setPrice(0)
     }
  }, [price])

  useEffect(() => {
    if (AvaxUsdtPairContract && SolarAvaxPairContract) {
      fetchBalance()
    }
  }, [setPrice, fetchBalance, block])

  return price
}

export default useAvaxPrice