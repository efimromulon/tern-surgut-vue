<template>
	<div id="app">
		<app-map></app-map>
		<app-ui></app-ui>
		<!-- <app-popup-large></app-popup-large> -->
		<!-- <app-preloader></app-preloader> -->
		
	</div>
</template>

<script>


	import axios from 'axios'

	import { mapActions, mapGetters, mapState } 	from 'vuex'

	import appPreloader 				from '@/components/app-preloader/app-preloader.vue'
	import appUi 						from '@/components/app-ui/app-ui.vue'
	import appMap 						from '@/components/app-map/app-map.vue'
	import appPopupLarge 				from '@/components/app-popup-large/app-popup-large.vue'
	import link from './constants.js'

	

	export default {
		name: 'app',
		components: {
			'app-ui': appUi,
			'app-map': appMap,
			'app-popup-large': appPopupLarge,
			'app-preloader': appPreloader,
		},
		data(){
			return {

			}
		},
		computed: {
			
			...mapGetters([
				'get_uiMarkingMenuDatatypeButton_active',
			]),
			uiMarkingMenuDatatypeButton_active(){
				return this.get_uiMarkingMenuDatatypeButton_active
			},
		},
		watch: {
			uiMarkingMenuDatatypeButton_active(newCount, oldCount){
			},
		},
		methods: {
			...mapActions(['get_local_json', 'get_indicator_json', 'set_stations', 'set_stations_colors', 'get_json_map', 'set_fuel_sell']),

			/// MAP - JSON's
			async LOAD_JSONS_FOR_MAP(){
				
				const jsongetCurrentUser = await axios.get(link.getCurrentUser).then(res => res.data)
				const jsongetAzsInfo = await axios.get(link.getAzsInfo).then(res => res.data) 
				const jsongetStationsLatLng = await axios.get(link.getStationsLatLng).then(res => res.data) 
				const jsongetStationsInfo = await axios.get(link.getStationInfo).then(res => res.data) 
				const jsongetFuelStock = await axios.get(link.getFuelStock).then(res => res.data) 
				const jsongetFuelSell = await axios.get(link.getFuelSell).then(res => res.data)
				const jsongetArticleSell = await axios.get(link.getArticleSell).then(res => res.data)
				const jsongetDepartmentFull = await axios.get(link.getDepartmentFull).then(res => res.data)

				var a = {jsonName: 'getFuelSell', jsonData: jsongetFuelSell},
					b = {jsonName: 'getFuelStock', jsonData: jsongetFuelStock},
					c = {jsonName: 'getArticleSell', jsonData: jsongetArticleSell},
					d = {jsonName: 'getDepartmentFull', jsonData: jsongetDepartmentFull};

				

				this.$store.dispatch('set_fuel_sell', a).then(
					result => {
						this.$store.dispatch('get_json_map', b);
						this.$store.dispatch('get_json_map', c);
					}
				).then(
					result => {
						this.$store.dispatch('set_stations', d);
					}
				).then(
					result => {
						this.$store.dispatch('stations_sort_by_sdo');
					}
				)
				
			},

			/// USER

			// LOAD_JSON_CURRENT_USER(){
			// 	var payload = {jsonName: 'getCurrentUser', jsonData: jsongetCurrentUser};
			// 	this.get_local_json(payload);
			// },


		},
		mounted() {
			this.LOAD_JSONS_FOR_MAP();
			// this.LOAD_JSON_MAP_FUEL_SELL();
			// this.LOAD_JSON_MAP_FUEL_STOCK();
			// this.LOAD_JSON_MAP_ARTICLE_SELL();
			// this.LOAD_JSON_MAP_STATIONS();

		}

	}
</script>

<style lang="sass">
	body
		user-select: none
		overflow: hidden
		// font-family: 'Montserrat-Medium'
		font-family: 'SegoeUI'

	.left-component-wrapper
		@include shadow(2)
		border-radius: 4px
		overflow: hidden
		position: absolute
		top: 64px
		left: 12px
		background-color: white
		height: calc(100vh - 64px - 12px)
		z-index: 9999
		width: 20vw
	.center-component-wrapper
		@include shadow(2)
		border-radius: 4px
		overflow: hidden
		position: absolute
		top: 64px
		left: calc(20vw + 32px)
		background-color: white
		height: calc(100vh - 64px - 12px)
		width: calc(80vw - 64px)
		z-index: 9999


</style>
