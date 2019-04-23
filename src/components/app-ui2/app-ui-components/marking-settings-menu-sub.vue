<template>
	<div class="marking-settings-menu-sub">

		<div class="marking-settings-menu-sub_wrapper">
			<div class="marking-settings-menu-sub_item" 
				:class="{'marking-settings-menu-sub_typeActive' : item.active == true}"
				v-for="(item, key) in subMenuButtons" 
				@click="TOGGLE_SUB_MENU_BUTTON(item)"
			>
				{{ item.subFilterName }}
			</div>
		</div>

	</div>
</template>

<script>
	import { FluentRevealEffect } from "fluent-reveal-effect"
	export default {
		name: 'marking-settings-menu-sub',
		data () {
			return {
				mainMenuButtonActive: '',
				subMenuButtons: null,
			}
		},
		computed: {
			get_indicatorsMainMenuButtonActive(){
				return this.$store.getters.get_indicatorsMainMenuButtonActive[0].mainMenuButtonJson;
			},
			get_indicatorsSubMenuButtons(mainMenuButtonActive){
				return this.$store.getters.get_indicatorsSubMenuButtons(this.mainMenuButtonActive);
			},
		},
		created(){
			this.fluent();
		},
		beforeMounted(){
			//this.UPDATE_MAIN_MENU_BUTTON_ACTIVE();
			
		},
		mounted(){
			this.UPDATE_MAIN_MENU_BUTTON_ACTIVE();
			this.UPDATE_SUB_MENU_BUTTONS();
			this.fluent();
		},
		methods: {
			fluent(){
				FluentRevealEffect.applyEffect(".marking-settings-menu-sub_item", {
					lightColor: "rgba(255,255,255,0.1)",
					gradientSize: 150
				});
				FluentRevealEffect.applyEffect(".marking-settings-menu-sub_item", {
					clickEffect: true
				});
				FluentRevealEffect.applyEffect(".marking-settings-menu-sub-types", {
					clickEffect: true,
					lightColor: "rgba(255,255,255,0.6)",
					gradientSize: 80,
					isContainer: true,
					children: {
						borderSelector: ".marking-settings-menu-sub_wrapper",
						elementSelector: ".marking-settings-menu-sub_item",
						lightColor: "rgba(255,255,255,0.3)",
						gradientSize: 150
					}
				});
			},
			UPDATE_MAIN_MENU_BUTTON_ACTIVE(){
				this.mainMenuButtonActive = this.get_indicatorsMainMenuButtonActive;

			},
			UPDATE_SUB_MENU_BUTTONS(){
				this.subMenuButtons = this.get_indicatorsSubMenuButtons;
			},
			TOGGLE_SUB_MENU_BUTTON(x){
				let pseudoMoveX, notCurrentTypes;

				let payload = {subFilterId: x.subFilterId, mainMenuButtonActive: this.mainMenuButtonActive};

				if( x.active === false ){

					this.$store.dispatch('toggle_marking_settings_sub_menu_item', payload);

				} else {

					false

				};
				


				//if(type.typeId == 0){ pseudoMoveX = '16.5%' };
				//if(type.typeId == 1){ pseudoMoveX = '83.5%' };

			},
		},
		watch: {
			get_indicatorsMainMenuButtonActive(oldCount, newCount){
				this.UPDATE_MAIN_MENU_BUTTON_ACTIVE();
				this.fluent();
			},
			get_indicatorsSubMenuButtons(oldCount, newCount){
				this.UPDATE_SUB_MENU_BUTTONS();
				this.fluent();
			},
		},
		components: {

		}
	}
</script>

<style lang='sass'>
@import "@/sass/abstracts/_variables.sass"
@import "@/sass/abstracts/_mixins.sass"
.marking-settings-menu-sub_wrapper
	//visibility: hidden
	//position: absolute
	display: flex
	flex-basis: auto
	flex-direction: row
	flex-grow: 0
	flex-shrink: 1
	flex-wrap: no-wrap
	min-height: 30px
	width: 100%
	@include shadow(2)
	background-color: $data-item-color
	margin-top: 5px
.marking-settings-menu-sub_item
	cursor: pointer
	color: #6c6c6c
	width: calc(100%/2)
	text-align: center
	padding: 3px 1.5px
	background-color: $btn-color
.marking-settings-menu-sub_typeActive
	background-color: pink !important
</style>