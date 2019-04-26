<template>
	<div class="view-fuelstock">
		<cards  :cardsInfo="fuelSellInfo"></cards>
		<component :is="currentInfo" :currentInfoProp="currentInfoProp"></component>
	</div>
</template>

<script>

	import { mapGetters, mapState } 	from 'vuex'

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
					activeComponentInfo: ''
				},
			},
			data () {
				return {
					currentInfo: '',
					currentInfoProp: '',
				}
			},
			computed: {
				...mapState({
					dataItemActive: state => state.popupLarge.dataItemActive
				}),
				...mapGetters([
					'GET_station_info_by_Id',
					'T_GET_azsExtendedInfo',
				]),
				fuelSellInfo(){
					return this.T_GET_azsExtendedInfo({datatype: 'oReservoir', id: this.id})
				}
			},
			mounted(){
				this.UPDATE_ACTIVE_COMPONENT_INFO();
			},
			methods: {
				UPDATE_ACTIVE_COMPONENT_INFO(){
					if(this.dataItemActive === null){this.currentInfo = 'view-fuelstock-info'} else {this.currentInfo = 'card-item-info'};
				},
				UPDATE_COMPONENT_PROP(){
					if(
						this.currentInfo === 'view-fuelstock-info'
					){
						this.currentInfoProp = this.fuelSellInfo.summary
					} else {
						this.currentInfoProp = this.fuelSellInfo.data[this.dataItemActive]
					};
				}
			},

			watch: {
				fuelSellInfo(newCount, oldCount){},
				dataItemActive(newCount, oldCount){
					this.UPDATE_ACTIVE_COMPONENT_INFO();
				},
				currentInfo(newCount, oldCount){
					this.UPDATE_COMPONENT_PROP();
				},

			}
	}
</script>

<style lang="sass">
.view-fuelstock
	height: 100%
	width: 100%
</style>