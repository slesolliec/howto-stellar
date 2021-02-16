const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

async function accountExists(account2check) {
    try {
        await server.loadAccount(account2check);
        console.log("Account " + account2check + " does exist.");
        return true;
    } catch (error) {
        if (error instanceof StellarSdk.NotFoundError) {
            console.log("Account " + account2check + " does NOT exist.");
            return false;
        } else {
            throw error;
        }
    }
}

async function demo() {
    console.log(
        await accountExists('GA22MG3BXFBEWMEMUDIRZOTUQNRVNJJZON2G33ZRYOML3PI5OMYSCHAD')
    );
    console.log(
        await accountExists('GA22FAQTBLHQ7HO4BRYHQWWMTQ3GBK6N3S7JMIAPU32S73NUADFTERRY')
    );
}

demo();