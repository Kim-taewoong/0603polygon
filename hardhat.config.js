require('@nomiclabs/hardhat-ethers');
//accounts 에 PK 셋팅
module.exports = {
  solidity: {
    version: '0.8.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
  },
  defaultNetwork: 'matic',
  networks: {
    hardhat: {},
    matic: {
      url: 'https://rpc-mumbai.matic.today',
      accounts: ['0x2304056D7Fb4337CdED86b46Fd5587a10dF0B313'],
    },
  },
};