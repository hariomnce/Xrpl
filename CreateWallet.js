const { Wallet, Client } = require("xrpl");
const ECDSA = require("xrpl/dist/npm/ECDSA");

async function createWallet() {
    let newWallet = Wallet.generate(ECDSA.ed25519);
    console.log(newWallet);
 //   document.getElementById("newData").innerHTML = newWallet
}

// function createWallet():string {
//     let newWallet=Wallet.generate(ECDSA.ed25519);
//     console.log(newWallet);
//     return newWallet.seed+"";
// }

async function fundWallet() {
//    let wallet=Wallet.fromSeed(seed);
//  let wallet = Wallet.fromSeed("sEd716b5piTG9dvBmUMAyVCQiUXUcAK");
    let wallet = Wallet.fromSeed("sEd7NBfMZn6P5MDzdQHQeuwRSnDx55R");
    let client = new Client("wss://s.altnet.rippletest.net/");

    await client.connect();
    console.log("are we connected? " + client.isConnected());

    let result = await client.fundWallet(wallet);
    console.log(result);
}

createWallet();
//fundWallet(createWallets());
//fundWallet();
