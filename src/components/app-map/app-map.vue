<template>
	<div class="app-map">
	<l-map
		style="height: 100%; width: 100%"
		:zoom="zoom"
		:center="center"
		:bounds="bounds"
		:options="{zoomControl: false}"
		@update:zoom="zoomUpdated"
		@update:center="centerUpdated"
		@update:bounds="boundsUpdated"
	>
		<l-control-zoom position="topright"></l-control-zoom>
		<l-tile-layer :url="tileLayer"></l-tile-layer>
		<l-feature-group ref="features">
			<l-popup>
				<!-- <map-popup-info 
					:callerInfo = "callerInfo" 
					:caller = "caller"
				>
				</map-popup-info> -->
			</l-popup>
		</l-feature-group>
	</l-map>
	</div>
</template>

<script>
//error with loading png leaflet markers //https://github.com/KoRiGaN/Vue2Leaflet/issues/103
//пришлось добавить в markersLatLng 1 любой объект маркера, чтобы при первичном рендере в created не повалилось, 
//тк не может из null сгенерить маркеры
import {LMap, LTileLayer, LMarker, LFeatureGroup, LPopup, LIcon, LControlZoom } from 'vue2-leaflet';
	export default {
		name: 'app-map',
		components: {
			LMap,
			LTileLayer,
			LMarker,
			LFeatureGroup,
			LPopup,
			LIcon,
			LControlZoom,
		},
		data(){
			return {
				tileLayer: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
				center: [59.938504,30.305786],
				zoom: 12,
				bounds: null,
				caller: {},
				callerId: 'knp-m1_1',
				callerInfo: {},
				callerImgUrl: '',
				markersLatLngKNP: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngKNPgreen: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngKNPorange: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngKNPred: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngKASgreen: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngKASorange: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngKASred: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngNNPgreen: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngNNPorange: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngNNPred: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngPNPgreen: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngPNPorange: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngPNPred: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngTNPgreen: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngTNPorange: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngTNPred: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markersLatLngKAS: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '2'
					},
				],
				markersLatLngNNP: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '3'
					},
				],
				markersLatLngPNP: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '4'
					},
				],
				markersLatLngTNP: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '5'
					},
				],
				knpIsVisible: true,
				kasIsVisible: true,
				nnpIsVisible: true,
				pnpIsVisible: true,
				tnpIsVisible: true,
				greenIsVisible: true,
				orangeIsVisible: true,
				redIsVisible: true,
				icon: L.icon({
					iconUrl: 'assets/marker_red.png',
					iconSize: [32, 37],
					iconAnchor: [16, 37]
				}),
			}
		},
		computed:  {
			get_buttonColorsAll(){
				return this.$store.getters.get_buttonColorsAll;
			},
			dynamicSize () {
				return [this.iconSize, this.iconSize * 1.15];
			},
			dynamicAnchor () {
				return [this.iconSize / 2, this.iconSize * 1.15];
			},
			get_currentUser(){
				return this.$store.getters.get_currentUser;
			},
			get_mapStationsKNP(){
				return this.$store.getters.get_mapStationsKNP;
			},
			get_mapStationsKAS(){
				return this.$store.getters.get_mapStationsKAS;
			},
			get_mapStationsNNP(){
				return this.$store.getters.get_mapStationsNNP;
			},
			get_mapStationsPNP(){
				return this.$store.getters.get_mapStationsPNP;
			},
			get_mapStationsTNP(){
				return this.$store.getters.get_mapStationsTNP;
			},
			get_mapStationsKNPgreen(){
				return this.$store.getters.get_mapStationsKNPgreen;
			},
			get_mapStationsKNPorange(){
				return this.$store.getters.get_mapStationsKNPorange;
			},
			get_mapStationsKNPred(){
				return this.$store.getters.get_mapStationsKNPred;
			},
			get_mapStationsKASgreen(){
				return this.$store.getters.get_mapStationsKASgreen;
			},
			get_mapStationsKASorange(){
				return this.$store.getters.get_mapStationsKASorange;
			},
			get_mapStationsKASred(){
				return this.$store.getters.get_mapStationsKASred;
			},
			get_mapStationsNNPgreen(){
				return this.$store.getters.get_mapStationsNNPgreen;
			},
			get_mapStationsNNPorange(){
				return this.$store.getters.get_mapStationsNNPorange;
			},
			get_mapStationsNNPred(){
				return this.$store.getters.get_mapStationsNNPred;
			},
			get_mapStationsPNPgreen(){
				return this.$store.getters.get_mapStationsPNPgreen;
			},
			get_mapStationsPNPorange(){
				return this.$store.getters.get_mapStationsPNPorange;
			},
			get_mapStationsPNPred(){
				return this.$store.getters.get_mapStationsPNPred;
			},
			get_mapStationsTNPgreen(){
				return this.$store.getters.get_mapStationsTNPgreen;
			},
			get_mapStationsTNPorange(){
				return this.$store.getters.get_mapStationsTNPorange;
			},
			get_mapStationsTNPred(){
				return this.$store.getters.get_mapStationsTNPred;
			},
			get_mapStationsInfo(){
				return this.$store.getters.get_mapStationsInfo(this.callerId);
			},
			get_filterValues(){
				return this.$store.getters.get_filterTopByKey('filtersTop');
			},
		},
		beforeCreate(){
		},
		created(){
			this.createMarkers();
		},
		beforeMounted(){
			//this.createMarkers();
		},
		mounted(){
			this.createMarkers();
				
			/*this.$nextTick(() => {
				this.createMarkers();
			});*/
				

		},
		methods: {
			createMarkers(){
				this.markersLatLngKNP 		= [];
				this.markersLatLngKNPgreen 	= [];
				this.markersLatLngKNPorange = [];
				this.markersLatLngKNPred 	= [];
				this.markersLatLngKAS 		= [];
				this.markersLatLngKASgreen 	= [];
				this.markersLatLngKASorange = [];
				this.markersLatLngKASred 	= [];
				this.markersLatLngNNP 		= [];
				this.markersLatLngNNPgreen 	= [];
				this.markersLatLngNNPorange = [];
				this.markersLatLngNNPred 	= [];
				this.markersLatLngPNP 		= [];
				this.markersLatLngPNPgreen 	= [];
				this.markersLatLngPNPorange = [];
				this.markersLatLngPNPred 	= [];
				this.markersLatLngTNP 		= [];
				this.markersLatLngTNPgreen 	= [];
				this.markersLatLngTNPorange = [];
				this.markersLatLngTNPred 	= [];

				this.markersLatLngKNP 		= this.get_mapStationsKNP;
				this.markersLatLngKNPgreen 	= this.get_mapStationsKNPgreen;
				this.markersLatLngKNPorange = this.get_mapStationsKNPorange;
				this.markersLatLngKNPred 	= this.get_mapStationsKNPred;
				this.markersLatLngKAS 		= this.get_mapStationsKAS;
				this.markersLatLngKASgreen 	= this.get_mapStationsKASgreen;
				this.markersLatLngKASorange = this.get_mapStationsKASorange;
				this.markersLatLngKASred 	= this.get_mapStationsKASred;
				this.markersLatLngNNP 		= this.get_mapStationsNNP;
				this.markersLatLngNNPgreen 	= this.get_mapStationsNNPgreen;
				this.markersLatLngNNPorange = this.get_mapStationsNNPorange;
				this.markersLatLngNNPred 	= this.get_mapStationsNNPred;
				this.markersLatLngPNP 		= this.get_mapStationsPNP;
				this.markersLatLngPNPgreen 	= this.get_mapStationsPNPgreen;
				this.markersLatLngPNPorange = this.get_mapStationsPNPorange;
				this.markersLatLngPNPred 	= this.get_mapStationsPNPred;
				this.markersLatLngTNP 		= this.get_mapStationsTNP;
				this.markersLatLngTNPgreen 	= this.get_mapStationsTNPgreen;
				this.markersLatLngTNPorange = this.get_mapStationsTNPorange;
				this.markersLatLngTNPred 	= this.get_mapStationsTNPred;
			},
			openPopUp (marker, caller) {
				this.caller 				= marker;
				this.callerId 				= marker.id;
				this.callerInfo 			= this.get_mapStationsInfo;
				this.callerImgUrl 			= this.callerInfo.sStationImage;
				this.$refs.features.mapObject.openPopup(marker);
			},
			zoomUpdated(zoom){
				this.zoom = zoom;
			},
			centerUpdated(center){
				this.center = center;
			},
			boundsUpdated(bounds){
				console.log(bounds);
				this.bounds = bounds;
			},
			MAP_INIT(){
				this.map = L.map('map').setView([this.center_lat,this.center_lng],this.map_zoom);
				this.tileLayer = L.tileLayer(
				'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
					{
					maxZoom: this.map_zoom_max,
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
					}
				);
				this.tileLayer.addTo(this.map);
			},
			SET_VIEW_BY_USER(){
				let target = this.get_currentUser;
				let x, y, zoom;

				if(!target && !target.sdo_coord_x) {
					x = target.sdo_coord_x;
					y = target.sdo_coord_y;
					zoom = target.sdo_zoom;
				} else {
					x = 58.019737000187305;
					y = 32.12841823697091;
					zoom = 6;
				};

				this.map_set_view(x,y,zoom);
			},
			map_set_view(x, y, zoom){
				this.map.setView([x, y], zoom);
			},
			map_get_bounds(){
				return this.map.getBounds();
			},
			map_build_layers_data(){
					let THIS = this,
						LENGTH_OF_SDO,
						filtersLengths;
				//get length of each filter object
					filtersLengths = [];

					Object.keys(this.get_filterValues).forEach(function(e){
						filtersLengths.push(
							{
								e_name: e,
								e_length: Object.keys(THIS.get_filterValues[e]).length
							}
						);
					});

					LENGTH_OF_SDO = filtersLengths[0].e_length;
				//---------------------------------
				//build data for SDO's
					for (var i = 0; i < LENGTH_OF_SDO; i++) {
						let currentSDO = THIS.get_filterValues['SDOavailable'][i];
		
							THIS.layers.push(
								{
									id: currentSDO.id, 
									name: currentSDO.name, 
									active: true, 
									features: []
								}
							);

					};
				//---------------------------------
				//push features by SDO's
					for (var i = 0; i < LENGTH_OF_SDO; i++) {

						let currentSDO 			= THIS.layers[i].name;
						let currentFeautures 	= THIS.layers[i].features;
						let markers 			= THIS.get_map_dataOriginal.filter(item => item.sStationCategory == currentSDO);

						markers.forEach(function(a){

							currentFeautures.push(
								{									
									id: 			a.sStationId, 
									//sdo: 			a.sStationCategory,
									name: 			a.sStationName, 
									type: 			'marker', 
									coords: 		[a.dStationLatitude,a.dStationLongitude], 
									isOwn: 			a.sIsOwn,//////
									adsress: 		a.sStationAddress,
									city: 			a.sStationCity,
									image: 			'../static/' + a.sStationImage,
									label: 			a.sStationLabel,
									cname: 			a.sCompanyName,
									phone: 			a.sStationPhone,
									markerFeatures: a.aFeatures
								}
							);

						});
					};
				//---------------------------------
			},
		},
		watch: {
			get_mapStationsInfo(newCount, oldCount){

			},
			get_mapStationsKNPgreen(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsKNPorange(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsKNPred(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsKAS(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsKASgreen(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsKASorange(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsKASred(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsNNP(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsNNPgreen(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsNNPorange(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsNNPred(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsPNP(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
			get_mapStationsTNP(newCount, oldCount){
				console.log('this.createMarkers');
				this.createMarkers();
			},
		},
	}
</script>

<style lang="sass">
	#map
		height: 100vh
		width: 100vw
		position: absolute
		top: 0
		left: 0
	.app-map
		height: 100vh
		width: 100vw
		position: absolute
		top: 0
		left: 0
</style>