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





		<v-marker-cluster :options="clusterOptions_g" @clusterclick="click()">
			<l-marker 
				v-for="i in markers_knp_g"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_kas_g"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_nnp_g"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_pnp_g"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_tnp_g"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
		</v-marker-cluster>
		<v-marker-cluster :options="clusterOptions_o" @clusterclick="click()">
			<l-marker 
				v-for="i in markers_knp_o"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_kas_o"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_nnp_o"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_pnp_o"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_tnp_o"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
		</v-marker-cluster>
		<v-marker-cluster :options="clusterOptions_r" @clusterclick="click()">
			<l-marker 
				v-for="i in markers_knp_r"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_kas_r"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_nnp_r"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_pnp_r"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_tnp_r"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
		</v-marker-cluster>

		<v-marker-cluster :options="clusterOptions_c" @clusterclick="click()">
			<l-marker 
				v-for="i in markers_knp_c"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_kas_c"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_nnp_c"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_pnp_c"
				:key = "i.id"
				:lat-lng="i.latlng" 
			>
			</l-marker>
			<l-marker 
				v-for="i in markers_tnp_c"
				:key = "i.id"
				:lat-lng="i.latlng" 
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
			'v-marker-cluster': Vue2LeafletMarkerCluster
		},
		data(){
			return {
				tileLayer: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
				center: [59.938504,30.305786],
				zoom: 12,
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
				clusterOptions_g: { 
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
				caller: {},
				a: "assets/svgassets/marker_red.svg",
				callerId: 'knp-m1_1',
				callerInfo: {},
				callerImgUrl: '',
				knpIsVisible: true,
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
				'GET_stations_tnp_c'
			]),
		},
		beforeCreate(){
		},
		created(){
		},
		beforeMounted(){
		},
		mounted(){

					// disableClusteringAtZoom: 11,
					// spiderfyOnMaxZoom: false,
					// showCoverageOnHover: false,
					// zoomToBoundsOnClick: false,
			this.UPDATE_stations();
		},
		methods: {
			click: function (e) {
				alert("clusterclick")
			},
			UPDATE_stations(){
				this.markers_knp_g = [];
				this.markers_knp_o = [];
				this.markers_knp_r = [];
				this.markers_knp_c = [];
				this.markers_kas_g = [];
				this.markers_kas_o = [];
				this.markers_kas_r = [];
				this.markers_kas_c = [];
				this.markers_nnp_g = [];
				this.markers_nnp_o = [];
				this.markers_nnp_r = [];
				this.markers_nnp_c = [];
				this.markers_pnp_g = [];
				this.markers_pnp_o = [];
				this.markers_pnp_r = [];
				this.markers_pnp_c = [];
				this.markers_tnp_g = [];
				this.markers_tnp_o = [];
				this.markers_tnp_r = [];
				this.markers_tnp_c = [];
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
			CLUSTER(){
				//.$nextTick(() =>{
					this.clusterOptions = { 
						disableClusteringAtZoom: 11,
						spiderfyOnMaxZoom: false,
						showCoverageOnHover: false,
						zoomToBoundsOnClick: false,
						iconCreateFunction: function (cluster) {
							var childCount = cluster.getChildCount();

							var c = ' marker-cluster-red-';
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
									className: 'marker-cluster-red' + c + '', 
									iconSize: new L.Point(40, 40) 
								}
							);
						},
					};
				//});
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
				this.UPDATE_stations();
			},
			centerUpdated(center){
				this.center = center;
			},
			boundsUpdated(bounds){
				this.bounds = bounds;
			},

			
		},
		watch: {
			
			GET_stations_knp_c(newCount, oldCount){
				console.log('w');
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