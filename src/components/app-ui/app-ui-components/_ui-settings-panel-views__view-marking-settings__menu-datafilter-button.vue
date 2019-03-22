<template>

		<div 
			:class="['menu-datafilter__btn', 
			{'menu-datafilter__btn_active_left': (buttonData.buttonState && (buttonData.buttonID < activeBtnPrv))}, 
			{'menu-datafilter__btn_active_right': (buttonData.buttonState && (buttonData.buttonID > activeBtnPrv))}, 
			{'menu-datafilter__btn_not_active_left': (!buttonData.buttonState && (buttonData.buttonID > activeBtnCur))}, 
			{'menu-datafilter__btn_not_active_right': (!buttonData.buttonState && (buttonData.buttonID < activeBtnCur))}, 
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

		name: 'ui-settings-panel-views__view-marking-settings__menu-datafilter-button',

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
				'get_uiMarkingMenuDatafilterById',
				'get_uiMarkingMenuDatatypeButton_active',
				'get_uiMarkingMenuDatafilterActive',
			]),
			uiMarkingMenuDatafilterById(){
				return this.get_uiMarkingMenuDatafilterById(this.buttonData.buttonID)
			},
			uiMarkingMenuDatatypeButton_active(){
				return this.get_uiMarkingMenuDatatypeButton_active
			},
			activeBtnId(){
				return this.get_uiMarkingMenuDatafilterActive
			},
		},

		watch: {
			uiMarkingMenuDatafilterById(newCount, oldCount){
				//this.UPDATE_BUTTON_ANIMATION();
			},
			uiMarkingMenuDatatypeButton_active(newCount, oldCount){
			},
			activeBtnId(newCount, oldCount){
				console.log('old',this.buttonData.buttonState, this.activeBtnPrv, this.activeBtnCur);
				this.activeBtnPrv = oldCount;
				this.activeBtnCur = newCount;
				console.log('new',this.buttonData.buttonState, this.activeBtnPrv, this.activeBtnCur);
			},
		},

		created(){
			this.animateTargetClass = '.' + this.getButtonClass().toString();
		},
		mounted(){
			this.animateTarget = document.querySelector(''+ this.animateTargetClass);
			this.timelinebutton = new TimelineMax();
			//this.UPDATE_BUTTON_ANIMATION();
		},

		methods: {
			TOGGLE_CURRENT_MENU_DATAFILTER_BUTTON(){
				let payload = {buttonArray: this.uiMarkingMenuDatatypeButton_active, id: this.buttonData.buttonID};
				this.$store.dispatch('toggle_ui_settings_button', payload);
			},
			getButtonClass(){
				let a = this.buttonData.buttonID;//button_>>G<< 7 - G
				let b = 'menu-datafilter__btn-' + a;
				return b;
			},
			UPDATE_BUTTON_ANIMATION(){

				this.buttonData.buttonState ? this.animateButtonIn() : this.animateButtonOut();

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

	}

</script>

<style lang="sass">

	.menu-datafilter__btn
		vertical-align: middle
		position: relative
		cursor: pointer
		//line-height: 38.5px для того, чтобы текс не выравнивался по центру
		height: 32.5px
		font-family: 'Montserrat-Medium'
		font-size: 14px
		width: 50px
		text-align: center
		overflow: hidden
		&:before
			content: ""
			position: absolute
			width: 100%
			height: 3px
			border-radius: 1px
			bottom: 0
			left: 0
			background-color: #2FD782
			z-index: 2
			transition: all 0.3s ease-in-out 0s


	.menu-datafilter__btn_active_left, .menu-datafilter__btn_active_right, .menu-datafilter__btn_not_active_left, .menu-datafilter__btn_not_active_right
	.menu-datafilter__btn_active_left
		color: #4D4D4D
		&:before
			visibility: visible
			transform: translate3d(0px,0,0)
			transform-origin: left top
	.menu-datafilter__btn_active_right
		color: #4D4D4D
		&:before
			visibility: visible
			transform: translate3d(0px,0,0)
			transform-origin: right top
	.menu-datafilter__btn_not_active_left
		color: #BEBEBE
		&:before
			visibility: hidden
			transform: translate3d(-50px,0,0)
			transform-origin: left top
	.menu-datafilter__btn_not_active_right
		color: #BEBEBE
		&:before
			visibility: hidden
			transform: translate3d(50px,0,0)
			transform-origin: right top
</style>
