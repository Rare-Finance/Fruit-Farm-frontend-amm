import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.vikingswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.vikingswap.finance/farms'
  },
  {
    label: 'Armory',
    icon: 'PoolIcon',
    href: 'https://www.vikingswap.finance/nests'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x896eDE222D3f7f3414e136a2791BDB08AAa25Ce0',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x9b989a7b8963f4b08ec094710e2966fb3c7f6c43',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/VikingDefi/",
      },
      {
        label: "Docs",
        href: "https://vikingswap.gitbook.io/viking-swap/",
      },
      {
        label: "Blog",
        href: "https://viking-swap.medium.com/",
      },
    ],
  }
]

export default config
