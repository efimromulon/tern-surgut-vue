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
			...mapActions(['get_local_json', 'get_indicator_json']),
			LOAD_JSON_CURRENT_USER(){
				var payload = {jsonName: 'getCurrentUser', jsonData: jsongetCurrentUser};
				this.get_local_json(payload);
			},
			LOAD_JSON_AZS_INFO(){
				var payload = {jsonName: 'getAzsInfo', jsonData: jsongetAzsInfo};
				this.get_local_json(payload);
			},
			LOAD_JSON_FUEL_STOCK(){
				let payload = {
					jsonName: 'getFuelStock', 
					jsonData: jsongetFuelStock.data,
					jsonIndicator: jsongetFuelStock.indicator,
					jsonExpress: jsongetFuelStock.express,
				};
				this.get_indicator_json(payload);
			},
			LOAD_JSON_FUEL_SELL(){
				let payload = {
					jsonName: 'getFuelSell', 
					jsonData: jsongetFuelSell.data,
					jsonIndicator: jsongetFuelSell.indicator,
					jsonExpress: jsongetFuelSell.express,
				};
				this.get_indicator_json(payload);
			},
			LOAD_JSON_ARTICLE_SELL(){
				let payload = {
					jsonName: 'getArticleSell', 
					jsonData: jsongetArticleSell.data,
					jsonIndicator: jsongetArticleSell.indicator,
					jsonExpress: jsongetArticleSell.express,
				};
				this.get_indicator_json(payload);
			},
			LOAD_JSON_STATION_COORDS(){
				var payload = {jsonName: 'getStationsLatLng', jsonData: jsongetStationsLatLng};
				this.get_local_json(payload);
			},
			LOAD_JSON_STATION_INFO(){
				var payload = {jsonName: 'getStationsInfo', jsonData: jsongetStationsInfo};
				this.get_local_json(payload);
			},
			LOAD_JSON_STATION_FULL(){
				var payload = {jsonName: 'getDepartmentFull', jsonData: jsongetDepartmentFull};
				this.get_local_json(payload);
			},

		},
		mounted() {
			this.LOAD_JSON_CURRENT_USER();
			this.LOAD_JSON_STATION_FULL();
			this.LOAD_JSON_AZS_INFO();
			this.LOAD_JSON_FUEL_STOCK();
			this.LOAD_JSON_FUEL_SELL();
			this.LOAD_JSON_ARTICLE_SELL();
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
