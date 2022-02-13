import { MenuEntry } from 'moonwalkerswap-uikit-avalanche'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://home.moonwalker.network',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://home.moonwalker.network/farms',
   },
   {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://home.moonwalker.network/pools',
   },


  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.moonwalker.network',
      },
      {
        label: 'Tokens',
        href: 'https://info.moonwalker.network/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.moonwalker.network/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.moonwalker.network/accounts',
      },
    ],
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MoonWalkerJim',
      },
      {
        label: 'Docs',
        href: 'https://avalanche-docs.moonwalker.network',
      },
    ],
  },
]

export default config
