<template>

	<div class="ui__map-controls">

		<div class="map-controls__item">

			<map-controls-search></map-controls-search>

		</div>

	</div>

</template>

<script>
	import mapControlsSearch 			from './ui-map-controls/map-controls-search.vue'
	import buttonSquare 				from '@/components/app-common/buttons/button-square.vue'
	import SvgButtonLayers 				from '@/components/app-common/svg/svg-icon-layers.vue'
	//import interfaceTopLeftLayersList 	from '@/components/app-main/app-interface/interface-map-controls/map-controls-layers-list.vue'
	import {mapGetters} from 'vuex'

	export default {

		name: 'ui-map-controls',
		data () {
			return {

				buttonLayersActive: null,
				buttonClass: 'button_layers',
				buttonBackroundActive: false,
				buttonID: 1,

			}
		},
		computed: {

			get_buttonInterfaceTopActiveById(){
				return this.$store.getters.get_buttonInterfaceTopActiveById(this.buttonID).buttonState;
			},
			get_filterLayers(){
				return this.$store.getters.get_filterTopByKey('layersByType');
			},

		},
		mounted(){

			this.UPDATE_BUTTON_LAYERS_STATE();

		},
		methods: {

			UPDATE_BUTTON_LAYERS_STATE(){
				this.buttonLayersActive = this.get_buttonInterfaceTopActiveById;
			},
			toggleButtonLayers(){
				let payload = {buttonArray: 'buttonInterfaceTopActive', id: this.buttonID};
				this.$store.dispatch('toggle_interfacetop_button', payload);
			},

		},
		watch: {

			get_buttonInterfaceTopActiveById(newCount, oldCount){
				this.UPDATE_BUTTON_LAYERS_STATE();
			},

		},
		components: {

			mapControlsSearch,
			buttonSquare,
			SvgButtonLayers,
			//interfaceTopLeftLayersList

		}

	}
</script>

<style lang='sass'>
	.ui__map-controls
		width: 32%
		position: relative
	.map-controls__item
		display: flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: wrap
		width: calc( 64%)
		max-width: calc(64%)
		margin-left: 0px
		margin-right: 20px
</style>