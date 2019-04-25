<template>
	<!-- <div class="marking-settings-menu_item" 
		:class="{'typeActive' : type.typeState == true}"
		v-for="type in menuTypes" 
		:key="type.typeId"
		@click="TOGGLE_TYPE(type)"
	>
		{{ type.typeName }}
	</div> -->
	<div :class="['menu-marking__btn', getButtonClass()]"
		@click = "TOGGLE_CURRENT_FILTER_MENU_LAYERS_BUTTON"
	>
		{{ buttonData.buttonName }}
	</div>
</template>

<script>

	import {mapGetters} from 'vuex'
	import {TimelineMax} from 'gsap'

	export default {

		name: 'ui-settings-panel-menus__menu-layers-settings-button',

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
				'get_uiMarkingMenuButtonsById',
			]),
			uiMarkingMenuButtonsById(){
				return this.get_uiMarkingMenuButtonsById(this.buttonData.buttonID)
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
			TOGGLE_CURRENT_FILTER_MENU_MARKING_BUTTON(){
				let payload = {buttonArray: 'uiMarkingMenuButtons', id: this.buttonData.buttonID};
				this.$store.dispatch('toggle_ui_settings_button', payload);
			},
			getButtonClass(){
				let a = this.buttonData.buttonID;//button_>>G<< 7 - G
				let b = 'menu-marking__btn-' + a;
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
			fluent(){
				FluentRevealEffect.applyEffect(".marking-settings-menu_item", {
					lightColor: "rgba(255,255,255,0.1)",
					gradientSize: 150
				});
				FluentRevealEffect.applyEffect(".marking-settings-menu_item", {
					clickEffect: true
				});
				FluentRevealEffect.applyEffect(".marking-settings-menu-types", {
					clickEffect: true,
					lightColor: "rgba(255,255,255,0.6)",
					gradientSize: 80,
					isContainer: true,
					children: {
						borderSelector: ".marking-settings-menu-types_wrapper",
						elementSelector: ".marking-settings-menu_item",
						lightColor: "rgba(255,255,255,0.3)",
						gradientSize: 150
					}
				});
			},
		},

		watch: {
			uiMarkingMenuButtonsById(newCount, oldCount){
				this.UPDATE_BUTTON_ANIMATION();
			},
		},

	}

</script>

<style lang='sass'>
	.menu-marking__btn
		vertical-align: middle
		position: relative
		cursor: pointer
		line-height: 37px
		font-family: 'Montserrat-Medium'
		font-size: 14px
		text-align: center
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
		cursor: pointer
		color: #6c6c6c
		width: 50%

	.typeActive
		background-color: $color-grey
</style>