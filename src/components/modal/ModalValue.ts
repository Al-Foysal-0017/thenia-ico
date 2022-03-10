export const chainItems = [
   {
      name: 'Ethereum'
   },
   {
      name: 'Ropsten'
   },
   {
      name: 'Kovan'
   },
   {
      name: 'Rinkeby'
   },
   {
      name: 'Goerli'
   }
]

export const recommendedCoins = [
   {
     id: 4,
    name: "USDT",
    image: "https://s2.coinmarketcap.com/static/img/coins/200x200/825.png",
  },
   {
   id: 5,
    name: "USDC",
    image:
      "https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png",
   },
   {
      id: 6,
    name: "DAI",
    image: "https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png",
   },
]
export const coinData = [
   {
      id: 0,
    name: "ETH",
    image: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
   },
   {
      id: 1,
    name: "BTC",
    image: "https://bitcoin.org/img/icons/opengraph.png?1643058474",
   },
   {
     id: 2,
    name: "BNB",
    image: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
   },
   {
      id: 3,
    name: "COMP",
    image: "https://s2.coinmarketcap.com/static/img/coins/200x200/5692.png",
   },
   {
      id: 4,
    name: "USDT",
    image: "https://s2.coinmarketcap.com/static/img/coins/200x200/825.png",
  },
   {
      id: 5,
    name: "USDC",
    image:
      "https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png",
   },
   {
      id: 6,
    name: "DAI",
    image: "https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png",
   },
  
];

export const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

export interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}