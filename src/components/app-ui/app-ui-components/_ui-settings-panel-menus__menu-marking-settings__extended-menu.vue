<template>
	<div class="marking-settings-menu-main">

		<div class="marking-settings-menu-main_wrapper">
			<div class="marking-settings-menu-main_item" 
				:class="{'marking-settings-menu-main_typeActive' : item.active == true}"
				v-for="(item, key) in get_indicatorsMainMenuButtons" 
				@click="TOGGLE_MAIN_MENU_BUTTON(key)"
			>
				{{ item.mainMenuButtonName }}
			</div>
		</div>

	</div>
</template>

<script>
	import { FluentRevealEffect } from "fluent-reveal-effect"
	export default {
		name: 'ui-settings-panel-menus__menu-marking-settings__extended-menu',
		data () {
			return {
				indicatorsMenuButtons: {a:'main', b:'indicator'},
				buttonsState: [],
			}
		},
		computed: {
			/*get_indicatorsMenuButtons(){
				let w = this.indicatorsMenuButtons;
				return this.$store.getters.get_indicatorsMenuButtons(w);
			},*/
			get_indicatorsMainMenuButtons(){
				return this.$store.getters.get_indicatorsMainMenuButtons;
			},
		},
		created(){
		},
		beforeMounted(){
			this.$data.indicatorsMenuButtons = {a:'main', b:'indicator'};
		},
		mounted(){
			this.fluent();
		},
		methods: {
			UPDATE_BUTTONS_STATE(){

			},
			fluent(){
				FluentRevealEffect.applyEffect(".marking-settings-menu-main_item", {
					lightColor: "rgba(255,255,255,0.1)",
					gradientSize: 150
				});
				FluentRevealEffect.applyEffect(".marking-settings-menu-main_item", {
					clickEffect: true
				});
				FluentRevealEffect.applyEffect(".marking-settings-menu-main-types", {
					clickEffect: true,
					lightColor: "rgba(255,255,255,0.6)",
					gradientSize: 80,
					isContainer: true,
					children: {
						borderSelector: ".marking-settings-menu-main_wrapper",
						elementSelector: ".marking-settings-menu-main_item",
						lightColor: "rgba(255,255,255,0.3)",
						gradientSize: 150
					}
				});
			},
			TOGGLE_MAIN_MENU_BUTTON(id){

				let pseudoMoveX, notCurrentTypes;
				console.log('id iz comp', id);

				this.$store.dispatch('toggle_marking_settings_main_menu_item', id);


				//if(type.typeId == 0){ pseudoMoveX = '16.5%' };
				//if(type.typeId == 1){ pseudoMoveX = '83.5%' };

			},
		},
		watch: {
			get_indicatorsMainMenuButtons(oldCount, newCount){

			},
		},
		components: {

		}
	}
</script>

<style lang='sass'>

	.marking-settings-menu-main_wrapper
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

	.marking-settings-menu-main_item
		cursor: pointer
		color: #6c6c6c
		width: calc(100%/2)
		text-align: center
		padding: 3px 1.5px
		background-color: $btn-color
		display: inline-block
		font-size: 14px 

	.marking-settings-menu-main_typeActive
		background-color: pink !important
		
</style>