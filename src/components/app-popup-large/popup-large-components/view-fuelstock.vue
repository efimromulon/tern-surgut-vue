<template>
	<div class="view-fuelstock">
		<cards  :id="stationId"></cards>
		<component :is="currentInfo"></component>
	</div>
</template>

<script>

	import { mapGetters } 	from 'vuex'

	import cards 	from './_cards.vue'
	import cardItem from './_card-item.vue'
	import cardItemInfo 	from './_card-item-info.vue'
	import viewFuelstockInfo 	from './_view-fuelstock-info.vue'

	export default {

		name: 'view-fuelstock',

			components: {
				'cards': 		cards,
				'card-item': 	cardItem,
				'card-item-info': 		cardItemInfo,
				'view-fuelstock-info': 		viewFuelstockInfo,
			},
			props: {
				stationId: {
					type: String,
					required: true,
				},
			},
			data () {
				return {
					currentInfo: 'view-fuelstock-info'
				}
			},

			computed: {

				...mapGetters([
					'GET_station_info_by_Id',
				]),



			},

			watch: {


			},

			methods: {

			}
	}
</script>

<style lang="sass">
.view-fuelstock
	height: 100%
	width: 100%
</style>