import {ChainId} from '@layerzerolabs/lz-sdk';
import {AppConfig, createAppConfig} from '@layerzerolabs/ui-app-config';

import {WrappedTokenBridgeConfig} from '@layerzerolabs/ui-bridge-wrapped-token';
import {Coin, Token} from '@layerzerolabs/ui-core';

export const wrapped_mainnet: WrappedTokenBridgeConfig = {
  version: 2,
  original: [
    {address: '0x9c5ebCbE531aA81bD82013aBF97401f5C6111d76', chainId: ChainId.ETHEREUM},
    {address: '0x9c5ebCbE531aA81bD82013aBF97401f5C6111d76', chainId: ChainId.ARBITRUM},
    {address: '0x9c5ebCbE531aA81bD82013aBF97401f5C6111d76', chainId: ChainId.BSC},
    {address: '0x9c5ebCbE531aA81bD82013aBF97401f5C6111d76', chainId: ChainId.POLYGON},
    {address: '0x9c5ebCbE531aA81bD82013aBF97401f5C6111d76', chainId: ChainId.AVALANCHE},
  ],
  wrapped: {
    address: '0x9c5ebCbE531aA81bD82013aBF97401f5C6111d76',
    chainId: ChainId.TELOS,
  },
  tokens: [
    [
      // USDC
      new Token(ChainId.TELOS, '0x8D97Cea50351Fb4329d591682b148D43a0C3611b', 6, 'USDC'),
      new Token(ChainId.ETHEREUM, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC'),
      new Token(ChainId.ARBITRUM, '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', 6, 'USDC'),
      new Token(ChainId.BSC, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC'),
    ],
    [
      // ETH
      new Coin(ChainId.ETHEREUM, 18, 'ETH'),
      // WETH
      new Token(ChainId.TELOS, '0xA0fB8cd450c8Fd3a11901876cD5f17eB47C6bc50', 18, 'WETH'),
      new Token(ChainId.ARBITRUM, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH'),
      new Token(ChainId.POLYGON, '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', 18, 'WETH'),
    ],
    [
      // USDT
      new Token(ChainId.TELOS, '0x975Ed13fa16857E83e7C493C7741D556eaaD4A3f', 6, 'USDT'),
      new Token(ChainId.ETHEREUM, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT'),
      new Token(ChainId.POLYGON, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 6, 'USDT'),
    ],
    [
      // BTC.b
      new Token(ChainId.TELOS, '0x7627b27594bc71e6Ab0fCE755aE8931EB1E12DAC', 8, 'BTC.b'),
      new Token(ChainId.AVALANCHE, '0x152b9d0FdC40C096757F570A51E494bd4b943E50', 8, 'BTC.b'),
    ],
    [
      // BNB
      new Coin(ChainId.BSC, 18, 'BNB'),
      // WBNB
      new Token(ChainId.TELOS, '0x26Ed0F16e777C94A6FE798F9E20298034930Bae8', 18, 'WBNB'),
    ],
  ],
};

export const wrapped_testnet: WrappedTokenBridgeConfig = {
  version: 2,
  original: [
    {address: '0xBCD4a2c19DC010d1Da2D7985CF18A5251774dF46', chainId: ChainId.GOERLI},
    {address: '0xbF625D717de1a6e5a8446424CF08D4269D51ab96', chainId: ChainId.ARBITRUM_GOERLI},
    {address: '0x8168C0704Ff49F8e89AF45f04f898144C459b156', chainId: ChainId.BSC_TESTNET},
    {address: '0x0c372d3f89d1ce9f11a50b98374f7846a37f7d99', chainId: ChainId.MUMBAI},
    {address: '0x2a3a50f458AaAae618C54C1670fD49e338b795c2', chainId: ChainId.FUJI},
  ],
  wrapped: {
    address: '0x137d4e9C2431A3DCBa6e615E9438F2c558353a17',
    chainId: ChainId.TELOS_TESTNET,
  },
  tokens: [
    [
      // USDC
      new Token(ChainId.GOERLI, '0x31190a205713Bd825a0c237E26f67CE89B5C4dD8', 6, 'USDC'),
      new Token(ChainId.ARBITRUM_GOERLI, '0x6463C73809EE3F85BeCD0a82c55cb808474101D0', 6, 'USDC'),
      new Token(ChainId.BSC_TESTNET, '0x9D5859A95A0b9d7739fCBec82c800B56ef143fe9', 6, 'USDC'),
      new Token(ChainId.TELOS_TESTNET, '0x22FdA4Efc62d72f0E0804e205c2c858D5c2cF959', 6, 'USDC'),
    ],
    [
      // WETH
      new Token(ChainId.TELOS_TESTNET, '0xe83F5959A58cb21E3B3B1682a898143C3f4AFEe0', 18, 'WETH'),
    ],
    [
      // USDT
      new Token(ChainId.GOERLI, '0xdddacBBFa219b9579596886032b826552c8E9810', 6, 'USDT'),
      new Token(ChainId.MUMBAI, '0x6cc732BB947569e5560F380c8d3E24844bA2DDb3', 6, 'USDT'),
      new Token(ChainId.TELOS_TESTNET, '0xe1aFB545B5701D884a674d90b31927BBd0fcA380', 6, 'USDT'),
    ],
    [
      // BTC.b
      new Token(ChainId.FUJI, '0x576d96722c79aB0469BE3a632521d100de0AE3E3', 8, 'BTC.b'),
      new Token(ChainId.TELOS_TESTNET, '0xDbCE5f022203c36578F5D751E9c5e669AF35C62B', 8, 'BTC.b'),
    ],
    [
      // WBNB
      new Token(ChainId.TELOS_TESTNET, '0x15a7cad43E5F24d1B08fDE151CE00D1cf360f6C7', 6, 'WBNB'),
    ],
  ],
};

export const appConfig: AppConfig = createAppConfig({
  bridge: {
    wrappedToken: [
      //
      wrapped_mainnet,
      // wrapped_testnet,
    ],
  },
});
