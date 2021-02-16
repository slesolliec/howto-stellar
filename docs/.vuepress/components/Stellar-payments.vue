
<template>
  <ol>
	  <li v-for="row in rows">
    		<div v-if="row.type == 'create_account'" class="amount">
            	{{row.starting_balance.split('.')[0]}}.<span class="decimals">{{row.starting_balance.split('.')[1].slice(0,2)}}</span>
				<span class="xlm">XLM</span>
			</div>
        	<div v-if="row.type == 'payment'" class="amount">
            	{{row.amount.split('.')[0]}}.<span class="decimals">{{row.amount.split('.')[1].slice(0,2)}}</span>
				<span class="xlm">XLM</span>
			</div>

			<div v-if="row.transaction.memo" class="memo">
            	<small>Memo:</small> {{ row.transaction.memo }}
			</div>

    		<div v-if="row.type == 'create_account'" class="from">
            	<small>From: <span class="address">{{row.funder | shortAddress}}</span></small><br>
			</div>
        	<div v-if="row.type == 'payment'" class="from">
				<small>From: <span class="address">{{row.from | shortAddress }}</span></small><br>
			</div>

			<div class="time"><small>At: {{ row.created_at.split('T').join(' ').slice(0, -1) }} UTC</small></div>
	  </li>
  </ol>
</template>

<script>

export default {
	props: ['account'],

	data() {
		return {
			rows: []
		}
	},

	methods: {
		getRows: async function () {
			const response = await fetch(
				'https://horizon.stellar.org/accounts/' + this.account + '/payments?' +
    			    'include_failed=false' +  // no failed paiements
			        '&join=transactions' +  // for the memos
			        '&order=desc&limit=20'
		    );
    		const responseJSON = await response.json();
    		this.rows = responseJSON['_embedded']['records']
        		// we dont want outgoing payments
        		.filter(p => !(p.type == 'payment' && p.from == this.account))
        		// we don't want create_account payments we made to others
        		.filter(p => !(p.type == 'create_account' && p.account != this.account));
		}
	},

	filters: {
		shortAddress: function(addr) {
			return addr.slice(0,8) + '......' + addr.slice(-8);
		}
	},

	async mounted() {
		this.getRows();
	}
}
</script>

<style lang="stylus" scoped>

ol
	list-style none
	padding 0

ol li
	margin 0
	background #339933
	color white
	margin 0.5em 0
	padding 0.5em 2em
	box-shadow 1px 1px 10px silver
	opacity 0.6
	line-height 0.8em

ol li small
	opacity 0.7

ol li div.amount
	float left
	font-size 2em
	text-align center
	line-height 0.7em

ol li div.amount span.decimals
	font-size 0.7em

ol li div.amount span.xlm
	display block
	font-size 0.35em
	line-height 2em

ol li div.memo
ol li div.from
ol li div.time
	margin-left 5em

ol li span.address
	font-family 'Courier New'
	font-size 0.8em
	font-weight bold

</style>
