<template>
	<div class="app-map">
	<l-map
		style="height: 100%; width: 100%"
		:zoom="zoom"
		:minZoom="minZoom"
		:maxZoom="maxZoom"
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
				<map-popup 
					:popupCaller = "popupCaller"
				>
				</map-popup>
			</l-popup>
		</l-feature-group>

		<v-marker-cluster :options="clusterOptions_g" @clusterclick="click()">
			<l-marker 
				v-for="i in markers_knp_g"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_g"
				:visible="knpIsVisible && gIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_kas_g"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_g"
				:visible="kasIsVisible && gIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_nnp_g"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_g"
				:visible="nnpIsVisible && gIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_pnp_g"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_g"
				:visible="pnpIsVisible && gIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_tnp_g"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_g"
				:visible="tnpIsVisible && gIsVisible"
			>
			</l-marker>
		</v-marker-cluster>
		<v-marker-cluster :options="clusterOptions_o" @clusterclick="click()">
			<l-marker 
				v-for="i in markers_knp_o"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_o"
				:visible="knpIsVisible && oIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_kas_o"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_o"
				:visible="kasIsVisible && oIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_nnp_o"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_o"
				:visible="nnpIsVisible && oIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_pnp_o"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_o"
				:visible="pnpIsVisible && oIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_tnp_o"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_o"
				:visible="tnpIsVisible && oIsVisible"
			>
			</l-marker>
		</v-marker-cluster>
		<v-marker-cluster :options="clusterOptions_r" @clusterclick="click()">
			<l-marker 
				v-for="i in markers_knp_r"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_r"
				:visible="knpIsVisible && rIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_kas_r"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_r"
				:visible="kasIsVisible && rIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_nnp_r"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_r"
				:visible="nnpIsVisible && rIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_pnp_r"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_r"
				:visible="pnpIsVisible && rIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_tnp_r"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_r"
				:visible="tnpIsVisible && rIsVisible"
			>
			</l-marker>
		</v-marker-cluster>

		<v-marker-cluster :options="clusterOptions_c" @clusterclick="click()">
			<l-marker 
				v-for="i in markers_knp_c"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_c"
				:visible="knpIsVisible && cIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_kas_c"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_c"
				:visible="kasIsVisible && cIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_nnp_c"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_c"
				:visible="nnpIsVisible && cIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_pnp_c"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_c"
				:visible="pnpIsVisible && cIsVisible"
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_tnp_c"
				:key = "i.id"
				:lat-lng="i.latlng" 
				@click="openPopUp(i)"
				:icon = "marker_icon_c"
				:visible="tnpIsVisible && cIsVisible"
			>
			</l-marker>
		</v-marker-cluster>
	</l-map>
	</div>
</template>
<script>
//error with loading png leaflet markers //https://github.com/KoRiGaN/Vue2Leaflet/issues/103
//пришлось добавить в markersLatLng 1 любой объект маркера, чтобы при первичном рендере в created не повалилось, 
//тк не может из null сгенерить маркеры
import { L, LMap, LTileLayer, LMarker, LFeatureGroup, LPopup, LIcon, LControlZoom } from 'vue2-leaflet'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
import mapPopup from './app-map-components/_map-popup.vue'
import { mapGetters } from 'vuex'

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
			mapPopup,
			'v-marker-cluster': Vue2LeafletMarkerCluster
		},
		data(){
			return {
				tileLayer: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
				center: [59.938504,30.305786],
				zoom: 11,
				minZoom: 6,
				maxZoom: 11,
				bounds: null,
				markers_knp_g: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_knp_o: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_knp_r: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_knp_c: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_kas_g: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_kas_o: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_kas_r: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_kas_c: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_nnp_g: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_nnp_o: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_nnp_r: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_nnp_c: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_pnp_g: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_pnp_o: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_pnp_r: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_pnp_c: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_tnp_g: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_tnp_o: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_tnp_r: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				markers_tnp_c: [
					{
						lat: 54.707738,
						lng: 20.572911,
						id: '1'
					},
				],
				marker_icon_g: L.icon({
					iconUrl: 'marker_g.svg',
					//shadowUrl: 'marker_red.png',
					iconSize:     [32, 37], // size of the icon
					//shadowSize:   [50, 64], // size of the shadow
					iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
					//shadowAnchor: [4, 62],  // the same for the shadow
					popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
				}),
				marker_icon_o: L.icon({
					iconUrl: 'marker_o.svg',
					//shadowUrl: 'marker_red.png',
					iconSize:     [32, 37], // size of the icon
					//shadowSize:   [50, 64], // size of the shadow
					iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
					//shadowAnchor: [4, 62],  // the same for the shadow
					popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
				}),
				marker_icon_r: L.icon({
					iconUrl: 'marker_r.svg',
					iconSize:     [32, 37],
					iconAnchor:   [16, 37], 
					popupAnchor:  [19, -32]
				}),
				marker_icon_c: L.icon({
					iconUrl: 'marker_c.svg',
					//shadowUrl: 'marker_red.png',
					iconSize:     [32, 37], // size of the icon
					//shadowSize:   [50, 64], // size of the shadow
					iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
					//shadowAnchor: [4, 62],  // the same for the shadow
					popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
				}),
				clusterOptions_g: {  
					disableClusteringAtZoom: 11,
					spiderfyOnMaxZoom: false,
					showCoverageOnHover: false,
					zoomToBoundsOnClick: false,
					iconCreateFunction: function (cluster) {
						var childCount = cluster.getChildCount();

						var c = ' marker-cluster-g-';
						if (childCount < 10) {
							c += 'small';
						} else if (childCount < 100) {
							c += 'medium';
						} else {
							c += 'large';
						}

						return new L.DivIcon(
							{ 
								html: '<div><span>' + childCount + '</span></div>', 
								className: 'marker-cluster' + c, 
								iconSize: new L.Point(40, 40) 
							}
						);
					}
				},
				clusterOptions_o: {  
					disableClusteringAtZoom: 11,
					spiderfyOnMaxZoom: false,
					showCoverageOnHover: false,
					zoomToBoundsOnClick: false,
					iconCreateFunction: function (cluster) {
						var childCount = cluster.getChildCount();

						var c = ' marker-cluster-o-';
						if (childCount < 10) {
							c += 'small';
						} else if (childCount < 100) {
							c += 'medium';
						} else {
							c += 'large';
						}

						return new L.DivIcon(
							{ 
								html: '<div><span>' + childCount + '</span></div>', 
								className: 'marker-cluster' + c, 
								iconSize: new L.Point(40, 40) 
							}
						);
					}
				},
				clusterOptions_r: {  
					disableClusteringAtZoom: 11,
					spiderfyOnMaxZoom: false,
					showCoverageOnHover: false,
					zoomToBoundsOnClick: false,
					iconCreateFunction: function (cluster) {
						var childCount = cluster.getChildCount();

						var c = ' marker-cluster-r-';
						if (childCount < 10) {
							c += 'small';
						} else if (childCount < 100) {
							c += 'medium';
						} else {
							c += 'large';
						}

						return new L.DivIcon(
							{ 
								html: '<div><span>' + childCount + '</span></div>', 
								className: 'marker-cluster' + c, 
								iconSize: new L.Point(40, 40) 
							}
						);
					}
				},
				clusterOptions_c: {  
					disableClusteringAtZoom: 11,
					spiderfyOnMaxZoom: false,
					showCoverageOnHover: false,
					zoomToBoundsOnClick: false,
					iconCreateFunction: function (cluster) {
						var childCount = cluster.getChildCount();

						var c = ' marker-cluster-c-';
						if (childCount < 10) {
							c += 'small';
						} else if (childCount < 100) {
							c += 'medium';
						} else {
							c += 'large';
						}

						return new L.DivIcon(
							{ 
								html: '<div><span>' + childCount + '</span></div>', 
								className: 'marker-cluster' + c, 
								iconSize: new L.Point(40, 40) 
							}
						);
					}
				},
				popupCaller: {},
				popupCallerId: 'knp-m1_1',
				knpIsVisible: true,
				kasIsVisible: true,
				nnpIsVisible: true,
				pnpIsVisible: true,
				tnpIsVisible: true,
				gIsVisible: true,
				oIsVisible: true,
				rIsVisible: true,
				cIsVisible: true,
				gId: 0,
				oId: 1,
				rId: 2,
				cId: 3,
			}
		},
		computed:  {
			...mapGetters([
				'GET_stations_knp_g',
				'GET_stations_knp_o',
				'GET_stations_knp_r',
				'GET_stations_knp_c',
				'GET_stations_kas_g',
				'GET_stations_kas_o',
				'GET_stations_kas_r',
				'GET_stations_kas_c',
				'GET_stations_nnp_g',
				'GET_stations_nnp_o',
				'GET_stations_nnp_r',
				'GET_stations_nnp_c',
				'GET_stations_pnp_g',
				'GET_stations_pnp_o',
				'GET_stations_pnp_r',
				'GET_stations_pnp_c',
				'GET_stations_tnp_g',
				'GET_stations_tnp_o',
				'GET_stations_tnp_r',
				'GET_stations_tnp_c',
				'searchCollapsed',
				'get_uiColorSwitchButtonsById',
			]),
			colorSwitchButtonG(){
				return this.get_uiColorSwitchButtonsById(this.gId);
			},
			colorSwitchButtonO(){
				return this.get_uiColorSwitchButtonsById(this.oId);
			},
			colorSwitchButtonR(){
				return this.get_uiColorSwitchButtonsById(this.rId);
			},
			colorSwitchButtonC(){
				return this.get_uiColorSwitchButtonsById(this.cId);
			},
		},
		beforeCreate(){
		},
		created(){
		},
		beforeMounted(){
		},
		mounted(){
			this.UPDATE_stations();
			this.UPDATE_colors_states();
		},
		methods: {
			click: function (e) {
				alert("clusterclick")
			},
			UPDATE_stations(){
				this.markers_knp_g = this.GET_stations_knp_g;
				this.markers_knp_o = this.GET_stations_knp_o;
				this.markers_knp_r = this.GET_stations_knp_r;
				this.markers_knp_c = this.GET_stations_knp_c;
				this.markers_kas_g = this.GET_stations_kas_g;
				this.markers_kas_o = this.GET_stations_kas_o;
				this.markers_kas_r = this.GET_stations_kas_r;
				this.markers_kas_c = this.GET_stations_kas_c;
				this.markers_nnp_g = this.GET_stations_nnp_g;
				this.markers_nnp_o = this.GET_stations_nnp_o;
				this.markers_nnp_r = this.GET_stations_nnp_r;
				this.markers_nnp_c = this.GET_stations_nnp_c;
				this.markers_pnp_g = this.GET_stations_pnp_g;
				this.markers_pnp_o = this.GET_stations_pnp_o;
				this.markers_pnp_r = this.GET_stations_pnp_r;
				this.markers_pnp_c = this.GET_stations_pnp_c;
				this.markers_tnp_g = this.GET_stations_tnp_g;
				this.markers_tnp_o = this.GET_stations_tnp_o;
				this.markers_tnp_r = this.GET_stations_tnp_r;
				this.markers_tnp_c = this.GET_stations_tnp_c;
			},
			UPDATE_colors_states(){
				this.gIsVisible = this.colorSwitchButtonG;
				this.oIsVisible = this.colorSwitchButtonO;
				this.rIsVisible = this.colorSwitchButtonR;
				this.cIsVisible = this.colorSwitchButtonC;
			},
			openPopUp (i) {
				this.popupCaller 	= i;
				this.popupCallerId 	= i.id;
				this.$refs.features.mapObject.openPopup(i.latlng);
			},
			zoomUpdated(zoom){
				this.zoom = zoom;
				this.UPDATE_stations();
				this.$refs.features.mapObject.closePopup();
			},
			centerUpdated(center){
				this.center = center;
			},
			boundsUpdated(bounds){
				if (this.searchCollapsed === false){this.$store.dispatch('close_search');};
				this.bounds = bounds;
			},
			
		},
		watch: {
			
			searchCollapsed(newCount, oldCount){},
			get_uiColorSwitchButtonsById(newCount, oldCount){
				console.log('get_uiColorSwitchButtonsById');
				this.UPDATE_colors_states();
			},
			colorSwitchButtonG(newCount, oldCount){
				console.log('colorSwitchButtonG');
				this.UPDATE_colors_states();
			},
			colorSwitchButtonO(newCount, oldCount){
				console.log('colorSwitchButtonO');
				this.UPDATE_colors_states();
			},
			colorSwitchButtonR(newCount, oldCount){
				console.log('colorSwitchButtonR');
				this.UPDATE_colors_states();
			},
			colorSwitchButtonC(newCount, oldCount){
				console.log('colorSwitchButtonC');
				this.UPDATE_colors_states();
			},
			GET_stations_knp_c(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_knp_g(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_knp_o(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_knp_r(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_knp_c(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_kas_g(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_kas_o(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_kas_r(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_kas_c(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_nnp_g(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_nnp_o(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_nnp_r(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_nnp_c(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_pnp_g(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_pnp_o(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_pnp_r(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_pnp_c(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_tnp_g(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_tnp_o(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_tnp_r(newCount, oldCount){
				
				this.UPDATE_stations();
			},
			GET_stations_tnp_c(newCount, oldCount){
				
				this.UPDATE_stations();
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
	.fuck
		background-color: green 
	.marker-cluster-red
		background-clip: padding-box
		border-radius: 20px
	.marker-cluster-red
		div
			width: 30px
			height: 30px
			margin-left: 5px
			margin-top: 5px
			text-align: center
			border-radius: 15px
			font-family: 'Exo2-Light'
			font: 16px
		span
			line-height: 30px
	.marker-cluster-g-small
		background-color: rgba(81, 204, 0, 0.6)
		div 
			background-color: rgba(81, 204, 0, 0.6)
	.marker-cluster-g-medium 
		background-color: rgba(81, 204, 0, 0.6)
		div 
			background-color: rgba(81, 204, 0, 0.6)
	.marker-cluster-g-large 
		background-color: rgba(81, 204, 0, 0.6)
		div
			background-color: rgba(81, 204, 0, 0.6)
			
	.marker-cluster-o-small
		background-color: rgba(255, 145, 0, 0.6)
		div 
			background-color: rgba(255, 145, 0, 0.6)
	.marker-cluster-o-medium 
		background-color: rgba(255, 145, 0, 0.6)
		div 
			background-color: rgba(255, 145, 0, 0.6)
	.marker-cluster-o-large
		background-color: rgba(255, 145, 0, 0.6)
		div
			background-color: rgba(255, 145, 0, 0.6)
			
	.marker-cluster-r-small
		background-color: rgba(253, 0, 0, 0.6)
		div 
			background-color: rgba(241, 0, 0, 0.6)
	.marker-cluster-r-medium 
		background-color: rgba(253, 0, 0, 0.6)
		div 
			background-color: rgba(241, 0, 0, 0.6)
	.marker-cluster-r-large
		background-color: rgba(253, 0, 0, 0.6)
		div
			background-color: rgba(241, 0, 0, 0.6)
			
	.marker-cluster-c-small
		background-color: rgba(200, 200, 200, 0.6)
		div 
			background-color: rgba(200, 200, 200, 0.6)
	.marker-cluster-c-medium 
		background-color: rgba(200, 200, 200, 0.6)
		div 
			background-color: rgba(200, 200, 200, 0.6)
	.marker-cluster-c-large
		background-color: rgba(200, 200, 200, 0.6)
		div
			background-color: rgba(200, 200, 200, 0.6)
</style>