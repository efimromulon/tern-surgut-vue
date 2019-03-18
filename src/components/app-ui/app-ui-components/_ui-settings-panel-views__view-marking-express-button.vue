<template>

		<div :class="['marking-express__btn', getButtonClass()]"
			@click = "TOGGLE_CURRENT_MARKING_EXPRESS_BUTTON"
		>
			<span>
				{{ buttonData.buttonName }}
			</span>
		</div>

</template>

<script>

	import {mapGetters} from 'vuex'
	import {TimelineMax} from 'gsap'

	export default {

		name: 'ui-settings-panel-views__view-marking-express-button',

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
				'get_uiMarkingExpressButtonsById',
			]),
			uiMarkingExpressButtonsById(){
				return this.get_uiMarkingExpressButtonsById(this.buttonData.buttonID)
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
			TOGGLE_CURRENT_MARKING_EXPRESS_BUTTON(){
				let payload = {buttonArray: 'uiMarkingExpressButtons', id: this.buttonData.buttonID};
				this.$store.dispatch('toggle_ui_settings_button', payload);
			},
			getButtonClass(){
				let a = this.buttonData.buttonID;//button_>>G<< 7 - G
				let b = 'marking-express__btn-' + a;
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
			uiMarkingExpressButtonsById(newCount, oldCount){
				this.UPDATE_BUTTON_ANIMATION();
			},
		},

	}

</script>

<style lang="sass">

	.marking-express__btn
		@include border-top-bottom-child(2)
		max-width: 100%
		white-space: pre-wrap
		display: flex
		margin: auto
		height: 75px
		line-height: 75px
		text-align: center
		span
			display: inline-block
			margin: auto
			vertical-align: middle
			line-height: normal

</style>