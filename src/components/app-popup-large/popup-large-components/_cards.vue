<template>
	<div class="cards">
		<card-item v-for="card in cardsInfo.data" :cardData="card"></card-item>
	</div>
</template>

<script>
	import { mapGetters } 	from 'vuex'
	import cardItem 	from './_card-item.vue'
export default {

	name: 'cards',
	components: {
		'card-item': 	cardItem,
	},
	props: {
		cardsInfo: {
			type: Object,
			required: true,
		},
	},
	data () {
		return {

		}
	},
	computed: {




	},

	watch: {
		fuelSellInfo(newCount, oldCount){},

	},
}
</script>

<style lang="sass">
	.cards
		display: flex
		user-select: none
		white-space: nowrap
		flex-direction: row
		position: relative
		height: 40%
</style>