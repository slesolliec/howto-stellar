# How to check that an account exists on Stellar blockchain with JavaScript

Here is a little function that checks if an account exists on the Stellar Network.

It's usually a good idea to do that kind of check before doing things with an account.

<<< @/js/basic/account-exist.js

::: tip
Remember that you don't need an account to exist before sending it Lumens. If you are sending
more than the minimal balance (1 XLM) to an account that does not exist, sending these XLM will 
create that account on the Stellar Blockchain.
:::


<Footer/>