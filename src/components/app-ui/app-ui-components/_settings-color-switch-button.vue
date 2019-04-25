<template>
	<button class="colors_buttons_wrapper_item" 
		:class = "buttonsData.buttonName"
		@click = "TOGGLE_CURRENT_COLOR_BUTTON"
	>
		<div class="button_circle_part">
			<div :class="['circle_part', getColorClass()]"></div>
		</div>
		<div class="button_rect_part"><span v-if="buttonsData.buttonState">{{stations_color_value_by_color}}</span></div>
	</button>
</template>

<script>

	// в props buttonsData приходит инфа о названии кнопки и ее класс
	// из props ButtonName с пом. methods.getColorClass() получается
	// доп класс для кнопки 'circle_' + G или O, R и т.д.

	import {mapGetters} from 'vuex'
	import debounce from 'lodash/debounce'

	export default {

		name: 'settings-color-switch-button',

		props: {
			buttonsData: {
				type: Object,
				required: true,
			},
		},

		data () {
			return {
			}
		},

		computed: {
			...mapGetters([
				'GET_stations_color_value_by_color',
			]),
			stations_color_value_by_color(){
				return this.GET_stations_color_value_by_color(this.buttonsData.buttonName.substring(7).charAt(0).toLowerCase())
			},
		},

		watch: {
			stations_color_value_by_color(newCount, oldCount){}
		},

		mounted(){
		},

		methods: {		
			getColorClass(){
				let a = this.buttonsData.buttonName.substring(7);//button_>>Green<< 7 
				let b = 'circle_' + a;
				return b;
			},
			TOGGLE_CURRENT_COLOR_BUTTON:
				debounce(
					function(){
						// console.log(this.buttonsData.buttonID)
						let payload = {buttonArray: 'uiColorSwitchButtons', id: this.buttonsData.buttonID};
						this.$store.dispatch('toggle_ui_settings_button', payload);

						let buttonName = this.buttonsData.buttonName.substring(7);

						this.$store.dispatch('toggleColorType', { name: buttonName.toLowerCase() })
					},
					125
			)
		},

	}
</script>

<style lang='sass'>

	.colors_buttons_wrapper_item
		background: $background-color-white
		@include shadow(2)
		width: calc(((100% - 60px)/ 4))
		position: relative
		display: inline-flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		justify-content: space-between
		margin-right: 20px
		height: 45px
		&:last-child
			margin-right: 0
		.button_circle_part
			position: absolute
			top: 50%
			left: 0%
			transform: translate(-50%, -50%)
			width: 25px
			.circle_part
				vertical-align: middle
				height: 25px
				width: 25px
				border-radius: 50%
			.circle_Green
				transition: all .3s
				box-shadow: 0 3px 6px rgba(#51CC00, 0.16), 0 3px 6px rgba(#51CC00, 0.23)
				background: #51CC00
			.circle_Orange
				transition: all .3s
				box-shadow: 0 3px 6px rgba(#FF9100, 0.16), 0 3px 6px rgba(#FF9100, 0.23)
				background: #FF9100
			.circle_Red
				transition: all .3s
				box-shadow: 0 3px 6px rgba(#CC0000, 0.16), 0 3px 6px rgba(#CC0000, 0.23)
				background: #CC0000
			.circle_Colorless
				transition: all .3s
				box-shadow: 0 3px 6px rgba(#C8C8C8, 0.16), 0 3px 6px rgba(#C8C8C8, 0.23)
				background: #C8C8C8
		.button_rect_part
			position: absolute
			transform: translate(0%, -50%)
			top: 50%
			right: 0% 
			height: 45px
			width: calc(100% - 12.5px)
			span
				line-height: 45px

	.colors_buttons_wrapper_item
		transition: all .3s
		&:hover
			//background: leighter($background-color-white, 10%)
			//@include shadow(3)
			.button_circle_part
				.circle_G
					box-shadow: 0 10px 20px rgba(#51CC00, 0.16), 0 6px 6px rgba(#51CC00, 0.23)
				.circle_O
					box-shadow: 0 10px 20px rgba(#FF9100, 0.16), 0 6px 6px rgba(#FF9100, 0.23)
				.circle_R
					box-shadow: 0 10px 20px rgba(#CC0000, 0.16), 0 6px 6px rgba(#CC0000, 0.23)
		&:active
			background: darker($background-color-white, 10%)
			@include shadow(1)
</style>