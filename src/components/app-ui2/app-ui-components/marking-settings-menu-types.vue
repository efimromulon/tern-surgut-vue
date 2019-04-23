<template>
	<div class="marking-settings-menu-types">
		<div class="marking-settings-menu-types_wrapper">
			<div class="marking-settings-menu_item" 
				:class="{'typeActive' : type.typeState == true}"
				v-for="type in menuTypes" 
				:key="type.typeId"
				@click="TOGGLE_TYPE(type)"
			>
				{{ type.typeName }}
			</div>
		</div>
	</div>
</template>

<script>
	//:class="{'optionActive' : optionItem.active == true}" 
	//v-for="optionItem in SearchOptions" 
	//:key="optionItem.option" 
	//@click="TOGGLE_OPTION(optionItem)"
	//import filtersMenuButton from './filtersMenuButton.vue'
	import { FluentRevealEffect } from "fluent-reveal-effect"
	export default {
		name: 'marking-settings-menu-types',
		data () {
			return {
				menuTypes: [
					{typeId: 0, typeName: 'Экспресс маркировка', typeState: true},
					{typeId: 1, typeName: 'Расширенные настройки', typeState: false},
				],

			}
		},
		computed: {
			get_markingSettingsMenuTypesAll(){
				return this.$store.getters.get_markingSettingsMenuTypesAll;
			},
			get_markingSettingsMenuTypesL(){
				return this.$store.getters.get_markingSettingsMenuTypesL;
			},
		},
		created(){
			this.UPDATE_MENU_TYPES();
		},
		mounted(){
			this.fluent();
		},
		methods: {
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
			UPDATE_MENU_TYPES(){
				for(var i = 0; i < this.get_markingSettingsMenuTypesL; i++){
					this.menuTypes[i] = this.get_markingSettingsMenuTypesAll[i];
				};
				
			},
			TOGGLE_TYPE(type){

				let pseudoMoveX, notCurrentTypes;

				this.$store.dispatch('toggle_marking_settings_menu_types', type.typeId);


				//if(type.typeId == 0){ pseudoMoveX = '16.5%' };
				//if(type.typeId == 1){ pseudoMoveX = '83.5%' };

			},
		},
		watch: {
			get_markingSettingsMenuTypesAll(newCount, oldCount){
				this.UPDATE_MENU_TYPES();
			},
		},
		components: {

		}
	}
</script>

<style lang='sass'>
@import "@/sass/base/_typography.sass"
@import "@/sass/abstracts/_variables.sass"
@import "@/sass/abstracts/_mixins.sass"
.marking-settings-menu-types_wrapper
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
.marking-settings-menu_item
	cursor: pointer
	color: #6c6c6c
	width: calc(100%/2)
	text-align: center
	padding: 3px 1.5px
	background-color: $btn-color
.typeActive
	background-color: pink !important
</style>