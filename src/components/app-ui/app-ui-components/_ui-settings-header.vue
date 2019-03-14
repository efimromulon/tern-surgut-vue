<template>
	<div class="ui-settings-view">
		<button-square 
			:onClick = "TOGGLE_BUTTON_FUNNEL" 
			:buttonClass = "`button_funnel`" 
			:buttonBackroundActive = "true"
			:buttonID="buttonFunnelId"
		>
			<svg-icon-funnel></svg-icon-funnel>
		</button-square>
		<settings-color-switch></settings-color-switch>
	</div>
</template>

<script>

	import {mapGetters} 		from 'vuex'
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
				buttonFunnelId: 0,
			};
		},

		computed: {
			...mapGetters([
				'getButtonSquareById',
			]),
			getFunnelState(){
				return this.getButtonSquareById(this.buttonFunnelId)
			},
		},

		mounted(){

			this.UPDATE_BUTTON_FUNNEL();

		},

		methods: {

			UPDATE_BUTTON_FUNNEL(){

				this.buttonFunnelActive = this.getFunnelState;

			},

			TOGGLE_BUTTON_FUNNEL(){

				let payload = {
					buttonArray: 'uiButtonSquare', 
					id: this.buttonFunnelId
				};

				this.$store.dispatch('toggle_ui_settings_button', payload);

			},

		},
		watch: {

			getFunnelState(newCount, oldCount){

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
