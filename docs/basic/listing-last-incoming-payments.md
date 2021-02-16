# How to list the last incoming payment to an account on the Stellar Network with JavaScript

Phew guys, this one gave me some headaches. I first started using the Stellar-SDK for listing the last incoming payments to a particular account, but all I could find on the web was listening to future payement stream, and that's not what I wanted.

Still, I almost managed with Stellar-SDK, but I could not figure out how to get the transaction data in the same request as the payment list request. And I wanted the tx data, because that is where the memos are stored.

So, in the end, I simply fetched on [the Horizon API](https://developers.stellar.org/api/resources/accounts/payments/) and analysed the answer.

Yeah, thanks to the Horizon API, getting data from Stellar blockchain is as simple as an HTTP GET!!! And no need for a heavy SDK.

So, here is the code. It's as simple as I can get it. It's as less sophisticated as I can write it, because the goal of how2Stellar.ooo is to bring Stellar blockchain to any 15 year old high-school kid.

<<< @/js/basic/list-payments.js

Of course you will probably want to put this in an HTML page instead of writing it to the console.

<Footer/>
<Stellar-payments account="GD24ZNCKDYYKWDCHN77W6IZMYRCTBODLSJBQ4WJBIXVPYFJB66IGHOW2"/>
