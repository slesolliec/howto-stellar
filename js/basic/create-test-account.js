const StellarSdk = require('stellar-sdk');
const fetch = require('node-fetch');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');


async function createTestAccount(pubKey) {
    const response = await fetch(
        'https://friendbot.stellar.org?addr=' + pubKey
    );
    const responseJSON = await response.json();
    // account created
    if (responseJSON.successful) {
        console.log(pubKey.slice(-4) + "'s account created on TestNet");
    } else if (responseJSON.detail.startsWith('createAccountAlreadyExist')) {
        console.log(pubKey.slice(-4) + "'s account already exists on TestNet");
    } else {
        throw "Account not created because: " + responseJSON.title + ": " + responseJSON.detail;
    }
    // if you wan to see the full response
    // console.log(responseJSON);
}

createTestAccount('GA22MG3BXFBEWMEMUDIRZOTUQNRVNJJZON2G33ZRYOML3PI5OMYSCHAD');