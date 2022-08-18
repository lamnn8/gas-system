var mnemonic =
  "conduct awkward satoshi stove deposit jump garlic chuckle drastic sunny liberty rather";
var kovanUrl = "https://kovan.infura.io/v3/c3422181d0594697a38defe7706a1e5b";
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      // host: "127.0.0.1",
      // port: 8545,
      // network_id: "*",
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    testnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    Rinkeby: {
      provider: () =>
        new HDWalletProvider(mnemonic, `https://rinkeby.arbitrum.io/rpc`),
      network_id: 421611,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.7.6",
    },
  },
};
