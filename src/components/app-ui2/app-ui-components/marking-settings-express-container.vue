<template>
	<div class="marking-settings-express-container">

		<div class="marking-settings-express-container_wrapper"
				v-for="button in get_indicatorsButtonsExpress" 
				:key="button.id"
				@click="TOGGLE_BUTTON_EXPRESS(button)"
		>
			<div class="marking-settings-express-container_item" 
				:class="{'marking-settings-express_button__active' : button.active == true}"

			>
				{{ button.mainMenuButtonName }}
			</div>
		</div>

	</div>
</template>

<script>
	//import markingSettingsMenuMain 	from './marking-settings-container/marking-settings-menu-main.vue'
	import { FluentRevealEffect } from "fluent-reveal-effect"
	export default {
		name: 'marking-settings-express-container',
		data () {
			return {

			}
		},
		computed: {
			get_indicatorsButtonsExpress(){
				return this.$store.getters.get_indicatorsButtonsExpress;
			},
		},
		created(){
			this.fluent();
		},
		mounted(){
			this.fluent();
		},
		methods: {
			fluent(){
				FluentRevealEffect.applyEffect(".marking-settings-express-container_item", {
					lightColor: "rgba(255,255,255,0.1)",
					gradientSize: 150
				});
				FluentRevealEffect.applyEffect(".marking-settings-express-container_item", {
					clickEffect: true
				});
				FluentRevealEffect.applyEffect(".marking-settings-express-container", {
					clickEffect: true,
					lightColor: "rgba(255,255,255,0.6)",
					gradientSize: 80,
					isContainer: true,
					children: {
						borderSelector: ".marking-settings-express-container_wrapper",
						elementSelector: ".marking-settings-express-container_item",
						lightColor: "rgba(255,255,255,0.3)",
						gradientSize: 150
					}
				});
			},
			TOGGLE_BUTTON_EXPRESS(button){
				this.$store.dispatch('toggle_indicators_buttons_express', button.id);
			},
		},
		watch: {

		},
		components: {
		}
	}
</script>

<style lang='sass'>
@import "@/sass/base/_typography.sass"
@import "@/sass/abstracts/_variables.sass"
@import "@/sass/abstracts/_mixins.sass"
.marking-settings-express-container
	margin-top: 5px
.marking-settings-express-container_wrapper
	//visibility: hidden
	//position: absolute
	display: flex
	flex-basis: auto
	flex-direction: column
	flex-grow: 0
	flex-shrink: 1
	flex-wrap: no-wrap
	min-height: 30px
	width: 100%
	@include shadow(2)
	background-color: $data-item-color
	padding: 3px 3px
.marking-settings-express-container_item
	cursor: pointer
	color: #6c6c6c
	width: calc(100% - 6px)
	text-align: center
	height: 30px
	background-color: $btn-color
.marking-settings-express_button__active
	background-color: pink !important
</style>