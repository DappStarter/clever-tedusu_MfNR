require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet riot night modify inflict praise army giggle'; 
let testAccounts = [
"0x6839e6ffcd865b9162e1093911bffc95563b80095b2ba1aeb902e025af56deb9",
"0x0ccae0dd787d7e67ec4b9ec9c58d5f0e0a9ad3c4db7924979880a9dbf1b33d81",
"0xace61062639ca0eebf98b181d220b01bf54cc09b1ef6abf4d2522e6b1b5360a6",
"0x0d8505293578f88a23ad01cdc3d1dc0e6c2e3affe34c9d36c3eb5c90c38a1e19",
"0x6d49b777d3b8ee0ed0a876e0fa131d49112a8ae72e8c39f8dad46ca7cc1e220b",
"0xb74b9a87fe8497eb1868e2c6de26a859dbdabf9fc8c4dfaf67570a8e5cdc0764",
"0xb15b5cfd4d3393331ad393e290dc35a4947544d628551feafe597b418410b95c",
"0xc67329bac4de583e605080afedfd0990e623aef6a46fe896e01a72174fef0f1f",
"0x765fb5cac9f39eb295f9c7a03a331e18f15b808c9b17479aeddeee24867d453a",
"0xa3873c62177e1d341bb8530159a1d2eabc4654adf4ed1d10b4fac3dc70b13a11"
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

