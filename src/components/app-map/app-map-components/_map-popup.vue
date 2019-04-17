<template>
<l-popup>
	<div class="app-map-popup">
		<h3 v-if="activeAzs && activeAzs.stationLabel"> {{activeAzs.stationLabel}}</h3>		
	</div>
	</l-popup>
</template>

<script>

import {  LPopup } from 'vue2-leaflet'
import { mapState } from 'vuex'

export default {
	name: 'map-popup',
	components: {
		LPopup
	},
	props: {
		popupCaller: {
			type: Object,
			required: true,
		},	
	},
	data() {
		return {
			
		};
	},
	computed: {
		...mapState({ activeAzs: state => state.map.active_station })
	},
	watch: {
		activeAzs: {
			handler(val, oldVal) {
			},
			immediate: true
		}
		
	}
};
</script>

<style lang="sass">
.app-map-popup
	width: 3vw
.app-map-popup > h3
	width: 100%
	text-align: center
</style>
