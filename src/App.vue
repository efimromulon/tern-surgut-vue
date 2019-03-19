<template>
	<div id="app">
		<!-- <app-preloader></app-preloader> -->
		<app-map></app-map>
		<app-ui></app-ui>
		<!-- <app-popup-extended></app-popup-extended> -->
	</div>
</template>

<script>

	import appUi 	from '@/components/app-ui/app-ui.vue';
	import appMap 	from '@/components/app-map/app-map.vue';
	import { mapActions } from 'vuex'
	import jsongetCurrentUser from '../public/json/getCurrentUser.json'
	import jsongetAzsInfo from '../public/json/getAzsInfo.json'
	import jsongetFuelStock from '../public/json/getFuelStock.json'
	import jsongetFuelSell from '../public/json/getFuelSell.json'
	import jsongetArticleSell from '../public/json/getArticleSell.json'
	import jsongetStationsLatLng from '../public/json/getStationsLatLng.json'
	import jsongetStationsInfo from '../public/json/getStationsInfo.json'
	import jsongetDepartmentFull from '../public/json/getDepartmentFull.json'

	export default {
		name: 'app',
		data(){
			return {

			}
		},
		computed: {

		},
		methods: {
			...mapActions(['get_local_json', 'get_indicator_json', 'get_json_map', 'testaction', 'stations_sort_by_colors']),

			/// MAP - JSON's
			LOAD_JSONS_FOR_MAP(){
				var a = {jsonName: 'getFuelSell', jsonData: jsongetFuelSell};
				var b = {jsonName: 'getFuelStock', jsonData: jsongetFuelStock};
				var c = {jsonName: 'getArticleSell', jsonData: jsongetArticleSell};
				var d = {jsonName: 'getDepartmentFull', jsonData: jsongetDepartmentFull};
				this.$store.dispatch('testaction', a).then(
					result => {
						this.$store.dispatch('get_json_map', b);
						this.$store.dispatch('get_json_map', c);
						this.$store.dispatch('get_json_map', d);
					}
				).then(
					result => {
						this.$store.dispatch('stations_sort_by_sdo');
					}
				).then(
					result => {
						this.$store.dispatch('stations_sort_by_colors');
					}
				).then(
					result => {
						this.$store.dispatch('set_ui_marking_menu_gas_buttons');
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

		},
		watch: {

		},
		components: {
			appUi,
			appMap,
		}
	}
</script>

<style lang="sass">
	body
		user-select: none
		overflow: hidden
		font-family: 'Montserrat-Medium'
</style>
