<template>
	<div class="ui-settings-view">
		<button-square 
			:onClick = "toggleButtonFunnel" 
			:buttonClass = "buttonClass" 
			:buttonBackroundActive = "buttonBackroundActive"
			:buttonID="buttonID"
		>
			<svg-icon-funnel></svg-icon-funnel>
		</button-square>
		<settings-color-switch></settings-color-switch>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import settingsColorSwitch 	from './_settings-color-switch.vue'
	import buttonSquare 		from '@/components/app-common/buttons/button-square.vue'
	import svgIconFunnel 		from '@/components/app-common/svg/svg-icon-funnel.vue'
	export default {

		name: 'ui-settings-header',
		components: {
			buttonSquare,
			settingsColorSwitch,
			svgIconFunnel
		},
		data() {
			return {
				buttonFunnelActive: null,
				buttonClass: 'button_funnel',
				buttonBackroundActive: true,
				buttonID: 0,
			};
		},
		computed: {
			...mapGetters([
				'getButtonSquareById',
			]),
			get_buttonInterfaceTopActiveById(){
				return this.$store.getters.get_buttonInterfaceTopActiveById(this.buttonID).buttonState;
			},
		},
		mounted(){
			this.UPDATE_BUTTON_FUNNEL();
		},
		methods: {
			UPDATE_BUTTON_FUNNEL(){
				this.buttonFunnelActive = this.getButtonSquareById(this.buttonID);
			},
			toggleButtonFunnel(){
				let payload = {
					buttonArray: 'buttonInterfaceTopActive', 
					id: this.buttonID
				};
				this.$store.dispatch('toggle_interfacetop_button', payload);
			},
		},
		watch: {
			getButtonSquareById(newCount, oldCount){
				this.UPDATE_BUTTON_FUNNEL();
			},
		},
	};
</script>

<style lang="sass">
	.ui-settings-view
		width: 100%
		position: relative
		top: 0
		left: 0
</style>
