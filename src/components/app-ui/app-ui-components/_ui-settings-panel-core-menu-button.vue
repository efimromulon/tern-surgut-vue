<template>
	<div :class="['core-menu__btn', getButtonClass()]"
		@click = "TOGGLE_CURRENT_FILTER_MENU_BUTTON"
	>
		{{ buttonData.buttonName }}
	</div>
</template>

<script>

	import {mapGetters} from 'vuex'
	import {TimelineMax} from 'gsap'
	//import appInterfaceButton from './appInterfaceButton.vue'

	export default {

		name: 'ui-settings-panel-core-menu-button',

		components: {

		},

		props: {
			buttonData: {
				type: Object,
				required: true,
			},
		},

		data () {
			return {
				timelinebutton: null,
				animateTarget: null,
				animateTargetClass: null,				
			}
		},

		computed: {
			...mapGetters([
				'get_uiCoreMenuButtonsById',
			]),
			uiCoreMenuButtons(){
				return this.get_uiCoreMenuButtonsById(this.buttonData.buttonID)
			},

		},

		mounted(){
			this.timelinebutton = new TimelineMax();
			this.UPDATE_BUTTON_ANIMATION();
		},

		methods: {

			TOGGLE_CURRENT_FILTER_MENU_BUTTON(){
				
				let payload = {buttonArray: 'uiCoreMenuButtons', id: this.buttonData.buttonID};
				this.$store.dispatch('toggle_ui_settings_button', payload);


				switch (this.buttonData.buttonName) {
					case 'Отчёты':
					this.$store.dispatch('setComponent', {
						componentPosition: 'leftMenuComponent',
						componentName: 'reports-navigation'
					})	
					break;
					case 'Графика':
					this.$store.dispatch('setComponent', {
						componentPosition: 'leftMenuComponent',
						componentName: 'heatmap-controls'
					})
					this.$store.dispatch('setComponent', {
						componentPosition: 'centralComponent',
					    componentName: 'heatmap-graph'
					})	
					break;
				
					default:
					 this.$store.dispatch('resetComponents')
				}


			},
			UPDATE_BUTTON_ANIMATION(){

				this.animateTargetClass = '.' + this.getButtonClass().toString();
				this.animateTarget = document.querySelector(''+ this.animateTargetClass);
				this.buttonData.buttonState ? this.animateButtonIn() : this.animateButtonOut();

			},
			getButtonClass(){
				let a = this.buttonData.buttonID;//button_>>G<< 7 - G
				let b = 'core-menu__btn-' + a;
				return b;
			},
			animateButtonIn(){
				this.timelinebutton
				.to(this.animateTarget, .3,{
					backgroundColor: '#ededed',
					ease: Power4.easeOut});
			},
			animateButtonOut(){
				this.timelinebutton
				.to(this.animateTarget, .3,{
					backgroundColor: '#ffffff',
					ease: Power4.easeOut});
			},
		},
		watch: {
			uiCoreMenuButtons(newCount, oldCount){
				this.UPDATE_BUTTON_ANIMATION();
			},
		},
	}
</script>

<style lang='sass'>
	.core-menu__btn
		vertical-align: middle
		position: relative
		cursor: pointer
		line-height: 37px
		font-family: 'Montserrat-Medium'
		font-size: 14px
		white-space: nowrap
		text-overflow: ellipsis
		overflow: hidden
		padding: 0 16px
		&:hover
			&:after
				content: ''
				position: absolute
				bottom: 0
				left: 0
				color: black
				width: 100%
				height: 3px
</style>