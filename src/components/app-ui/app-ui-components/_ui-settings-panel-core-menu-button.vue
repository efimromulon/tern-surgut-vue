<template>
	<div :class="['core-menu__btn', getButtonClass()]"
		@click = "TOGGLE_CURRENT_FILTER_MENU_BUTTON"
	>
		{{ buttonData.buttonName }}
	</div>
</template>

<script>
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
			keyOfButton: {
				type: Number,
				required: true,
			},
			buttonState: {
				type: Boolean,
				required: true,
			},
		},
		data () {
			return {
				buttonActive: false,
				timelinebutton: null,
				animateTarget: null,
				animateTargetClass: null,				
			}
		},
		computed: {
			get_buttonFiltersMenuById(){
				return this.$store.getters.get_buttonFiltersMenuById(this.keyOfButton).buttonState;
			},
		},
		created(){
			this.UPDATE_BUTTON_STATE();
		},
		beforeMounted(){

		},
		mounted(){
			this.timelinebutton = new TimelineMax();
			this.UPDATE_BUTTON_ANIMATION();
		},
		methods: {
			TOGGLE_CURRENT_FILTER_MENU_BUTTON(){
				let payload = {buttonArray: 'buttonFiltersMenu', id: this.keyOfButton};
				this.$store.dispatch('toggle_interfacetop_button', payload);
			},
			UPDATE_BUTTON_STATE(){
				this.buttonActive = this.get_buttonFiltersMenuById;
			},
			UPDATE_BUTTON_ANIMATION(){
				this.animateTargetClass = '.' + this.getButtonClass().toString();
				this.animateTarget = document.querySelector(''+ this.animateTargetClass);
				this.buttonActive ? this.animateButtonIn() : this.animateButtonOut();
			},
			getButtonClass(){
				let a = this.keyOfButton;//button_>>G<< 7 - G
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
			get_buttonFiltersMenuById(newCount, oldCount){
				this.UPDATE_BUTTON_STATE();
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