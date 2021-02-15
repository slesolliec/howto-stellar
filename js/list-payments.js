// one simple dependency
const fetch = require('node-fetch');

// choose test network or main
// const horizonURL = 'https://horizon-testnet.stellar.org';
const horizonURL = 'https://horizon.stellar.org';

// this is the main function
async function getIncomingPayments(addr) {
    const response = await fetch(
        horizonURL + '/accounts/' + addr + '/payments?' +
        // we don't want failed paiements
        'include_failed=false' +
        // because we want the memos
        '&join=transactions' +
        '&order=desc' +
        // default: 10, max: 200
        '&limit=20'
    );
    const responseJSON = await response.json();
    const payments = responseJSON['_embedded']['records']
        // we dont want outgoing payments
        .filter(p => !(p.type == 'payment' && p.from == addr))
        // we don't want create_account payments we made to others
        .filter(p => !(p.type == 'create_account' && p.account != addr));

    return payments;
}


// this is the demo function to illustrate how that works
async function demo() {
    // we get the payments
    const payments = await getIncomingPayments('GATA...SOME...ADDRESS');

    // we display the payments
    for (let i in payments) {
        const onePay = payments[i];
        console.log('----');
        if (onePay.type == 'create_account') {
            // this is the initial payment that created the account
            // on the Stellar network
            console.log("From  :", onePay.funder);
            console.log('Amount:', onePay.starting_balance);
        } else {
            // that's a normal payment
            console.log("From  :", onePay.from);
            console.log('Amount:', onePay.amount);
        }
        console.log('At    :', new Date(onePay.created_at));
        if (onePay.transaction.memo) {
            console.log('Memo  :', onePay.transaction.memo);
        }
    }

    // if we want older payments, we will need
    // let cursor = onePay.paging_token
    // and add + '&cursor=' + cursor after line 18
}

demo();