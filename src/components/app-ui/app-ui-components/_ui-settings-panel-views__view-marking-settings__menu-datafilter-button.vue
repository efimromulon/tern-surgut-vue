<template>

		<div :class="['menu-datafilter__btn', getButtonClass()]"
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
			}
		},
		computed: {
			...mapGetters([
				'get_uiMarkingMenuDatafilterById',
			]),
			uiMarkingMenuDatafilterById(){
				return this.get_uiMarkingMenuDatafilterById(this.buttonData.buttonID)
			},
		},
		created(){
			this.animateTargetClass = '.' + this.getButtonClass().toString();
		},
		mounted(){
			this.animateTarget = document.querySelector(''+ this.animateTargetClass);
			this.timelinebutton = new TimelineMax();
			this.UPDATE_BUTTON_ANIMATION();
		},

		methods: {
			TOGGLE_CURRENT_MENU_DATAFILTER_BUTTON(){
				let payload = {buttonArray: 'uiMarkingMenuDatafilterFuelStockButtons', id: this.buttonData.buttonID};
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
				console.log('animateButtonIn');
				this.timelinebutton
				.to(this.animateTarget, .3,{
					backgroundColor: '#ededed',
					ease: Power4.easeOut});
			},
			animateButtonOut(){
				console.log('animateButtonOut');
				this.timelinebutton
				.to(this.animateTarget, .3,{
					backgroundColor: '#ffffff',
					ease: Power4.easeOut});
			},
		},

		watch: {
			uiMarkingMenuDatafilterById(newCount, oldCount){
				this.UPDATE_BUTTON_ANIMATION();
			},
		},

	}

</script>

<style lang="sass">

	.menu-datafilter__btn
		vertical-align: middle
		position: relative
		cursor: pointer
		line-height: 37px
		margin: 0 10px
		font-family: 'Montserrat-Medium'
		font-size: 14px
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