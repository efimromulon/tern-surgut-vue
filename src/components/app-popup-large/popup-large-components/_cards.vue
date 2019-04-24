<template>
	<div class="cards">
		<card-item v-for="card in fuelSellInfo.data" :cardData="card"></card-item>
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
		id: {
			type: String,
			required: true,
		},
	},
	data () {
		return {

		}
	},
	computed: {

		...mapGetters([
			'T_GET_azsExtendedInfo',
		]),
		fuelSellInfo(){
			return this.T_GET_azsExtendedInfo({datatype: 'oReservoir', id: this.id})
		}



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
	.card-item
		flex-basis: 100%
		border: 1px solid blue
</style>