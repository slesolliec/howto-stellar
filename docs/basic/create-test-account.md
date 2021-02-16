# How to create an account on the Stellar Network with JavaScript

A common mistake is to believe that creating a key pair is enough to create an account
on the Stellar blockchain. This isn't the case.

**To create an account on the Stellar Network, you need to send it some minimum amount of XLM**, known as the **minimum balance**
(currently 1 XLM).

If you are on the Testnet, then you can tell **Friendbot, a faucet**, the address you want to create.
Friendbot will send 10 000 XLM for free to this address. The action of sending these XLM to
the address will create it.

Asking Friendbot for Lumens is as easy as visiting  
https://friendbot.stellar.org?addr=RECIPIENT_ADDRESS

As this is the Testnet, these 10 000 Lumens are worth nothing of course.

Here is a basic JavaScript function that will create an account on the Stellar Test network:

<<< @/js/basic/create-test-account.js


If you are on the main network, then simply send at least 1 XLM to the address you want to create.
See [How to send XLM on Stellar blockchain with JavaScript](send-xlm-with-javascript).


::: warning
It is actually recommended to fund any account with more than 1 Lumen because: each operation that you make on the Stellar Blockchain will cost 0.001 Lumen. So an account with only 1 XLM cannot execute a single operation on Stellar without going under the minimal balance: it's operations will all be rejected.

Also, adding a trustline to an account increases the minimal balance of that account of 0.5 XLM per trustline. (You need one trustline per different asset type you want to store in your account.)

So funding a new account with half a dozen Lumens is surely a good idea.
:::

<Footer/>
<Stellar-payments account="GD24ZNCKDYYKWDCHN77W6IZMYRCTBODLSJBQ4WJBIXVPYFJB66IGHOW2"/>
