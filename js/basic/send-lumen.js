const StellarSdk = require('stellar-sdk');

// we are on the Test network
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const networkPassphrase = StellarSdk.Networks.TESTNET;

const myKeyPair = StellarSdk.Keypair.fromSecret('SD66RPM6UF262YJYRVBA3BPYJFVNRWS72KBBTA26QY3TL4PUGC6EK565');


async function sendLumen(destAddress, amountInXLM, memo) {

    const myAccount = await server.loadAccount(myKeyPair.publicKey());

    const fee = await server.fetchBaseFee();

    let tx = new StellarSdk.TransactionBuilder(myAccount, {
            fee,
            networkPassphrase
        })
        // Add a payment operation to the transaction
        .addOperation(StellarSdk.Operation.payment({
            destination: destAddress,
            asset: StellarSdk.Asset.native(), // native means lumens
            amount: amountInXLM.toString(), // yes, amount is specified as a string, to avoid errors
        }))
        // the transaction will be valid for only 30 seconds
        .setTimeout(30);

    // adding a memo is optionnal, but often usefull
    if (memo) {
        tx.addMemo(StellarSdk.Memo.text(memo));
    }

    tx = tx.build();

    // all transactions need to be signed by the issuer of the transaction
    tx.sign(myKeyPair);

    // send transaction to network
    result = await server.submitTransaction(tx);

    console.log(result);
}

sendLumen('GA2A6J75FC7VJUJMJFDFFYKLEQLHRAUIJV42PKVHGI3HL6T5AOCCFRED', '10', 'payment for order 00123');