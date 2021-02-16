# How to send XLM on Stellar blockchain with JavaScript

Here is a little function that sends XLM to another account on the Stellar network.

This function needs two things:
  1. **the network pass phrase**. Please, don't put StellarSdk.Networks.TESTNET or StellarSdk.Networks.PUBLIC directly 
  in your functions. You'll forget it's there and your code will break when you switch network.
  1. **the key pair of the sending account**. Of course, never ever publish your private S..... key on the web like I'm just doing. That account is now compromised. Anybody can use it as his.

<<< @/js/basic/send-lumen.js

I've just run that script on the Test net, and [here is the transaction](https://stellar.expert/explorer/testnet/tx/1b32a28a27e7be5c014067e1811ddecb0a8ea8a75031ef925dc29280846acf0b).
(You won't be able to see that transaction after the Testnet next restarts.)

<Footer/>
<Stellar-payments account="GD24ZNCKDYYKWDCHN77W6IZMYRCTBODLSJBQ4WJBIXVPYFJB66IGHOW2"/>
