# How to create a Stellar payment link in HTML

Basically, the URL scheme is web+stellar:pay?destination=[address]&amount=[amount]&memo=[memo]&memo_type=MEMO_TEXT

So, in HTML, this gives you:

```html
<a href="web+stellar:pay?destination=GD24ZNCKDYYKWDCHN77W6IZMYRCTBODLSJBQ4WJBIXVPYFJB66IGHOW2&amount=1.50&memo=thank%20you%20for%20how2Stellar.ooo&memo_type=MEMO_TEXT">Send me 1.50 Lumens</a>
```

If you are writing MarkDown (like in a wiki, vuepress, ...) there is the code:

```markdown
[Send me 1.50 Lumens](web+stellar:pay?destination=GD24ZNCKDYYKWDCHN77W6IZMYRCTBODLSJBQ4WJBIXVPYFJB66IGHOW2&amount=1.50&memo=Thanks+for+how2Stellar.ooo&memo_type=MEMO_TEXT)
```

Here is the result:
[Send me 1.50 Lumens](web+stellar:pay?destination=GD24ZNCKDYYKWDCHN77W6IZMYRCTBODLSJBQ4WJBIXVPYFJB66IGHOW2&amount=1.50&memo=Thanks+for+how2Stellar.ooo&memo_type=MEMO_TEXT)



If you want more details, like how to put a complete transaction inside a link, go to [SEP-0007: URI Scheme to facilitate delegated signing](https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0007.md).

<Footer/>
<Stellar-payments account="GD24ZNCKDYYKWDCHN77W6IZMYRCTBODLSJBQ4WJBIXVPYFJB66IGHOW2"/>
