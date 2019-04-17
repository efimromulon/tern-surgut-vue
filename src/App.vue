<template>
	<div id="app">
		<app-map></app-map>
		<app-ui></app-ui>
		<!-- <app-popup-large></app-popup-large> -->
		<!-- <app-preloader></app-preloader> -->
	</div>
</template>

<script>

	import { mapActions, mapGetters } 	from 'vuex'

	import appPreloader 				from '@/components/app-preloader/app-preloader.vue'
	import appUi 						from '@/components/app-ui/app-ui.vue'
	import appMap 						from '@/components/app-map/app-map.vue'
	import appPopupLarge 				from '@/components/app-popup-large/app-popup-large.vue'

	import jsongetCurrentUser 			from '../public/json/getCurrentUser.json'
	import jsongetAzsInfo 				from '../public/json/getAzsInfo.json'
	import jsongetFuelStock 			from '../public/json/getFuelStock.json'
	import jsongetFuelSell 				from '../public/json/getFuelSell.json'
	import jsongetArticleSell 			from '../public/json/getArticleSell.json'
	import jsongetStationsLatLng 		from '../public/json/getStationsLatLng.json'
	import jsongetStationsInfo 			from '../public/json/getStationsInfo.json'
	import jsongetDepartmentFull 		from '../public/json/getDepartmentFull.json'

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
			...mapActions(['get_local_json', 'get_indicator_json', 'set_stations', 'set_stations_colors', 'get_json_map', 'set_fuel_sell', 'stations_sort_by_colors']),

			/// MAP - JSON's
			LOAD_JSONS_FOR_MAP(){
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
				).then(
					result => {
						this.$store.dispatch('set_ui_marking_menu_gas_buttons');
					}
				).then(
					result => {
						console.log('app', this.uiMarkingMenuDatatypeButton_active);
						var m = this.uiMarkingMenuDatatypeButton_active;
						console.log('app - datatype', m)
						this.$store.dispatch('set_stations_colors', m);
					}
				).then(
					result => {
						this.$store.dispatch('stations_sort_by_colors');
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
		font-family: 'Montserrat-Medium'
</style>
