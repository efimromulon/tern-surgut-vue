<template>
	<div class="Search-wrapper">

		<div class="Search-tab Search-controls">
			
			<div class="Search-item search-button-wrapper" @click="TOGGLE_SEARCH_ACTIVE()">
				<button-search></button-search>
			</div>
			<div class="Search-item input-wrapper">
				<input class="search-input" type="text" v-model="SearchInput" placeholder="Поиск АЗС, городов и населенных пунктов" autocomplete="off" autocorrect="off">
			</div>
			
		</div>

		<div class="Search-tab Search-options">

			<div class="Search-options-curtain"></div>

			<div class="Search-options_wrapper">
				<div class="Search-options_item" 
					:class="{'optionActive' : optionItem.active == true}" 
					v-for="optionItem in SearchOptions" 
					:key="optionItem.option" 
					@click="TOGGLE_OPTION(optionItem)"
				>
					{{optionItem.option}}
				</div>
			</div>

		</div>

		<div class="Search-tab Search-results-wrapper" v-show="SearchInput !== '' ">

			<div class="Search-results-wrapper__pseudo"></div>
			<div class="Search-results">
				<search-results :SearchInput="SearchInput"></search-results>
			</div>

		</div>
		
	</div>
</template>

<script>
	import searchResults from './map-controls-search/search-results.vue'
	import buttonSearch from '@/components/app-common/buttons/button-search.vue'
	import { FluentRevealEffect } from "fluent-reveal-effect"
	import { TimelineMax } from 'gsap'
	export default {
		name: 'Search',
		data () {
			return {
				SearchActive: null,
				SearchInput: '',
				SearchOptions: [

					{active: true, option: 'АЗС'},
					{active: false, option: 'Трассы'},
					{active: false, option: 'Нас. пункты'}

				],
				timelinepseudo: null,
				timelineoptions: null,
				pseudoMoveX: '',
			}
		},
		computed: {
			get_markers_info_primary(){
				return this.$store.getters.get_markers_info_primary;
			},
			searchResults(){
				let keyword = this.SearchInput.toLowerCase();
				let newarr = this.get_markers_info_primary.map(item=>{
					var new_item = {category: item.category, label: item.label};
					return new_item;
				});
				let filtered = newarr.filter(item=>{
					if(item.label.toLowerCase().indexOf(keyword)!==-1){
						var ty = item.label;
						return ty;
					} else {return false};
				});
				return filtered;
			},
			get_appSearchButtonActive(){
				return this.$store.getters.get_appSearchButtonActive;
			},
			get_clearSearch(){
				return this.$store.getters.get_clearSearch;
			},
		},
		created(){
			this.UPDATE_SEARCH_ACTIVE();
		},
		beforeMounted(){
			this.fluent();
		},
		mounted(){
			this.timelinepseudo = new TimelineMax();
			this.timelineoptions = new TimelineMax();
			
			//Animation of CURTAIN options
			this.timelineoptions.add("searchbutton")
			.to('.search-button-wrapper',0.15,{scaleX: 0.015,ease: Power2.easeInOut}, "searchbutton")
			.to('.button-name',0.15,{height: '45px', width: '45px',ease: Power2.easeInOut}, "searchbutton")
			.to('.search-button-wrapper',0.45,{left: '-22px',ease: Power4.easeIn})
			.add("input-anim")
			.to('.search-button-wrapper',0.15,{autoAlpha: 0}, "input-anim")
			.to('.input-wrapper',0.45,{width: '100%',ease: Power4.easeOut}, "input-anim")
			.add("options")
			.set('.Search-options-curtain',{visibility: 'visible'}, "options")
			.to('.Search-options-curtain',0.45,{width: '100%',ease: Power2.easeInOut, delay: 0.1})
			.set('.Search-options-curtain',{boxShadow: 'none'})
			.set('.Search-options_wrapper',{visibility: 'visible'})
			.to('.Search-options-curtain',0.45,{width: '0%', left: '100%',ease: Power2.easeInOut, delay: 0.1});
			//Animation of CURTAIN options END
		},
		methods: {
			fluent(){
				FluentRevealEffect.applyEffect(".Search-options_item", {
					lightColor: "rgba(255,255,255,0.1)",
					gradientSize: 150
				});
				FluentRevealEffect.applyEffect(".Search-options_item", {
					clickEffect: true
				});
				FluentRevealEffect.applyEffect(".Search-options", {
					clickEffect: true,
					lightColor: "rgba(255,255,255,0.6)",
					gradientSize: 80,
					isContainer: true,
					children: {
						borderSelector: ".Search-options_wrapper",
						elementSelector: ".Search-options_item",
						lightColor: "rgba(255,255,255,0.3)",
						gradientSize: 150
					}
				});
			},
			TOGGLE_OPTION(optionItem){

				optionItem.active === true ? optionItem.active = !optionItem.active : optionItem.active = true;

				let a = this.SearchOptions.filter(item => {
					return item.option != optionItem.option
				});
				for(var i = 0; i < a.length; i++){
					a[i].active = false
				};
	
				if(optionItem.option == 'АЗС'){ this.pseudoMoveX = '16.5%' };
				if(optionItem.option == 'Трассы'){ this.pseudoMoveX = '50%' };
				if(optionItem.option == 'Нас. пункты'){ this.pseudoMoveX = '83.5%' };

				this.timelinepseudo.to('.Search-results-wrapper__pseudo',.3,{left: this.pseudoMoveX});

			},
			UPDATE_SEARCH_ACTIVE(){
				this.SearchActive = this.get_appSearchButtonActive;
			},
			TOGGLE_SEARCH_ACTIVE(){
				this.$store.dispatch('toggle_search_button');
			},
			refreshButtonState(){
				this.buttonOpen = this.get_search_button_active;
			},
			search_button_animation(newCount){
				let animationState = newCount;
				//box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(black, 0.23)

				
				if ( animationState ) { this.timelineoptions.play(0); } else { this.timelineoptions.reverse() };				

			},
			CHG(){
				this.$store.dispatch('change_searchResults', this.searchResults)
				let searchtl = new TimelineMax();
				let scaleYto = '', scaleUp = '', scaleYtoP = '';
				if(this.searchResults !== 0){scaleYto = '100%'; scaleUp = '0%'; scaleYtoP = '1';};
				if(this.searchResults.length === 0){scaleYto = '0%'; scaleUp = '0%'; scaleYtoP = '0';};
				searchtl.to('.Search-results-wrapper__pseudo',.2,{scaleY: scaleYtoP,ease: Power2.easeInOut}, 0)
						.to('.Search-results-wrapper',.2,{height: scaleYto, top: scaleUp,ease: Power2.easeInOut}, 0)
			}
		},
		watch: {
			SearchActive(newCount, oldCount){
				this.search_button_animation(newCount);
			},
			get_appSearchButtonActive(newCount, oldCount){
				this.UPDATE_SEARCH_ACTIVE();
			},
			get_searchResults(newCount, oldCount){

			},
			get_search_button_active(newCount, oldCount){
				this.refreshButtonState();
			},
			searchResults(newCount, oldCount){
				this.CHG();
				this.fluent();
			},
			get_clearSearch(newCount, oldCount){
				if(this.get_clearSearch){this.SearchInput = ''; this.$store.dispatch('clear_search_input');}
			},
		},
		components: {
			searchResults,
			buttonSearch,
		}
	}
</script>

<style lang="sass">
//SVG STYLE
.st0
	fill: #FFFFFF
	stroke: #292929
	stroke-width: 2.5
	stroke-linecap: round
	stroke-miterlimit: 10
//SVG WTYLE END

.Search-wrapper
	width: 100%//calc(100% - 45px)
	//height: 60vh
	//position: fixed //выезжает до конца страницы весь инпут
	z-index: 7002
.Search-controls
	flex-wrap: nowrap !important
	width: 100%
.Search-tab
	display: flex
	flex-basis: auto
	flex-direction: row
	flex-grow: 0
	flex-shrink: 1
	flex-wrap: wrap
	position: relative
	&:nth-child(1)
		//width: 45px//100%		
			//box-shadow: -3px 3px 3px 0 rgba(0, 0, 0, 0.4)
	&:nth-child(3)
		width: 100%
		background: $Search-tab-color
		@include shadow(2)
		margin-top: 12px
		/* &:before
			content: ''
			width: 0
			height: 0
			border-left: 13px solid transparent
			border-right: 13px solid transparent
			border-bottom: 13px solid white
			position: absolute
			top: -13px
			left: 50%
			transform: translateX(-50%) */
	&:nth-child(2)
		width: 100%
		height: 30px		
		margin-top: 11px
	input
		width: 100%//100%
		height: 100%
		margin: 0
		padding: 0
		border: none
		font-size: inherit
		text-align: center
		//background-color: red
		&:focus
			border: none
			outline: none
	.Search-item
		height: 45px
		&:first-child
			//width: 0%//45px
			position: absolute
			left: 0px
		&:last-child
			width: 0%//calc(100% - 45px)
.Search-options-curtain
	visibility: hidden
	position: absolute
	top: 0%
	left: 0%
	height: 100%
	width: 0%
	background: #E5E5E5
	visibility: visible
	z-index: 7010
	@include shadow(2)
.Search-options
	z-index: 7009
.Search-results-wrapper__pseudo
	position: absolute
	top: calc(-22.63px / 2)
	overflow: hidden
	left: 50%
	width: calc(100% / 3)
	height: calc(22.63px / 2)
	display: block
	transform: translateX(-50%)
	&:before
		content: ""
		position: absolute
		width: 0
		height: 0
		top: 100%
		margin-left: -4px
		left: 50%
		box-sizing: border-box
		border: 8px solid black
		border-color: transparent transparent #fff #fff
		transform-origin: 0 0
		transform: rotate(135deg) translate(-65%, -65%)
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.02), 0 1px 0px rgba(0, 0, 0, 0.14)
.Search-results-wrapper
	height: 50vh
	//background: transparent !important
/*	&:before
		content: ""
		position: absolute
		width: 0
		height: 0
		top: 0px
		margin-left: -4px
		left: 50%
		box-sizing: border-box
		border: 8px solid black
		border-color: transparent transparent #fff #fff
		transform-origin: 0 0
		transform: rotate(135deg) translate(-50%, -50%)*/
@keyframes beforeanimate
  100%
    transform: translateX(-50px)
.search-button-wrapper
	width: 45px
.input-wrapper
	background-color: white
	@include shadow(2)
.Search-options
.Search-options_wrapper
	visibility: hidden
	position: absolute
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
.Search-options_item
	cursor: pointer
	color: #6c6c6c
	width: calc(100%/3)
	text-align: center
	padding: 3px 1.5px
	background-color: $btn-color
.optionActive
	background-color: pink !important
.scrollbar-track-y
	width: 3px !important
.scrollbar-thumb-y
	width: 3px !important
</style>