<template>

		<div 
			:class="['menu-vertical-button__btn', 
			{'menu-vertical-button__btn_active_left': (buttonData.buttonState && (buttonData.buttonID < activeBtnPrv))}, 
			{'menu-vertical-button__btn_active_right': (buttonData.buttonState && (buttonData.buttonID > activeBtnPrv))}, 
			{'menu-vertical-button__btn_not_active_left': (!buttonData.buttonState && (buttonData.buttonID > activeBtnCur))}, 
			{'menu-vertical-button__btn_not_active_right': (!buttonData.buttonState && (buttonData.buttonID < activeBtnCur))}, 
			getButtonClass()]"
			@click = "TOGGLE_CURRENT_MENU_DATAFILTER_BUTTON"
		>
			<span>{{ buttonData.buttonName }}</span>
		</div>

</template>

<script>

	import {mapGetters} from 'vuex'
	import {TimelineMax} from 'gsap'

	export default {

		name: 'menu-vertical-button',

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
				activeBtnPrv: null,
				activeBtnCur: null
			}
		},
		computed: {
			...mapGetters([
				'get_uiPopupLargeMenuVerticalButtonsActiveId',
			]),
			activeBtnId(){
				return this.get_uiPopupLargeMenuVerticalButtonsActiveId
			},
		},

		watch: {
			activeBtnId(newCount, oldCount){
				this.activeBtnPrv = oldCount;
				this.activeBtnCur = newCount;
			},
		},

		created(){
			this.animateTargetClass = '.' + this.getButtonClass().toString();
		},
		mounted(){
			this.animateTarget = document.querySelector(''+ this.animateTargetClass);
		},

		methods: {
			TOGGLE_CURRENT_MENU_DATAFILTER_BUTTON(){
				let payload = {buttonArray: 'uiPopupLargeMenuVerticalButtons', id: this.buttonData.buttonID};
				this.$store.dispatch('toggle_ui_settings_button', payload);
			},
			getButtonClass(){
				let a = this.buttonData.buttonID;//button_>>G<< 7 - G
				let b = 'menu-vertical-button__btn-' + a;
				return b;
			},
		},

	}

</script>

<style lang="sass">

	.menu-vertical-button__btn
		vertical-align: middle
		position: relative
		cursor: pointer
		font-family: 'Montserrat-Medium'
		font-size: 1.1rem
		text-align: left
		overflow: hidden
		padding-left: 50px
		padding-right: 30px
		padding-bottom: 15px
		padding-top: 15px
		span
			white-space: normal
		&:before
			content: ""
			position: absolute
			width: 3px
			height: 100%
			border-radius: 1px
			bottom: 0
			left: 0
			background-color: #682AC2
			z-index: 2
			transition: all 0.3s ease-in-out 0s


	.menu-vertical-button__btn_active_left, .menu-vertical-button__btn_active_right, .menu-vertical-button__btn_not_active_left, .menu-vertical-button__btn_not_active_right
	.menu-vertical-button__btn_active_left
		color: #4D4D4D
		&:before
			visibility: visible
			transform: translate3d(0,0%,0)
			transform-origin: left bottom
	.menu-vertical-button__btn_active_right
		color: #4D4D4D
		&:before
			visibility: visible
			transform: translate3d(0,0%,0)
			transform-origin: left top
	.menu-vertical-button__btn_not_active_left
		color: #BEBEBE
		&:before
			visibility: hidden
			transform: translate3d(0,-100%,0)
			transform-origin: left bottom
	.menu-vertical-button__btn_not_active_right
		color: #BEBEBE
		&:before
			visibility: hidden
			transform: translate3d(0,100%,0)
			transform-origin: left top
</style>
