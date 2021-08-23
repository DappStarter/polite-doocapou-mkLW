require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan rate sad unaware gesture lock tail gate'; 
let testAccounts = [
"0x4b087a3f5b3f81ecc0bd5b1a52cf4e07c4fe12868b03b0d19d5c73eaa4076cf1",
"0xfa7901896695b46c9c3d167d8b30d63c3fa5da1c6655d3b79c5e7bc16148b920",
"0xab0fea01d995ca8abb6388adc24799c4912e8788521c6a2365081492070170fa",
"0xd7d5952c173d27a30a9eefa63b31ad95134904a7db88a83a3fa422cd9f02f2f0",
"0x9aec22bef0d1bd4cdfa956838e91b381f82c76221b9b6eaea9ca48f46e8b7bcc",
"0x3a15355c7e685fc7d2795a51c4c548d182b4c91e984a0a90860644be765d1fd2",
"0xe791857d62934e409104dafee1fb7f33452f1ee3446b256818109685b89783b9",
"0x77c6adb2557c6bd57b226fdf63323e0cd50cc3222809ba58770965b44a3a6ddb",
"0xdd05de5a94f946d822e950403de5ce0c038d8ff7d0b95bfabe33fd7a608caf88",
"0xa96e6ab9f41b79046e8b22458e53b31af460af14ea9a501938d351e44d893779"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

