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
			get_buttonInterfaceTopActiveById(){
				return this.$store.getters.get_buttonInterfaceTopActiveById(this.buttonID).buttonState;
			},
		},
		mounted(){
			this.UPDATE_BUTTON_FUNNEL_STATE();
		},
		methods: {
			UPDATE_BUTTON_FUNNEL_STATE(){
				this.buttonFunnelActive = this.get_buttonInterfaceTopActiveById;
			},
			toggleButtonFunnel(){
				let payload = {buttonArray: 'buttonInterfaceTopActive', id: this.buttonID};
				this.$store.dispatch('toggle_interfacetop_button', payload);
			},
		},
		watch: {
			get_buttonInterfaceTopActiveById(newCount, oldCount){
				this.UPDATE_BUTTON_FUNNEL_STATE();
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
