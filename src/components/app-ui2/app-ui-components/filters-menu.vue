<template>
	<div class="center_group_filters_menu_wrapper">
		<filters-menu-button
			:buttonData = "buttonsArray[buttonID]"
			:keyOfButton = "buttonID"
			:buttonState = "buttonsArray[buttonID].buttonState"
			 v-for = "(buttonName, buttonID) in buttonsArray"
			:key = "buttonID"
			></filters-menu-button>
	</div>
</template>

<script>
	import filtersMenuButton from './filters-menu/filters-menu-button.vue'
	export default {
		name: 'filters-menu',
		data () {
			return {
				buttonsArray: [],
			}
		},
		computed: {
			/*	get_buttonFiltersMenuById(){
				return this.$store.getters.get_buttonFiltersMenuById(this.buttonID).buttonState;
			},*/
			get_buttonFiltersMenuL(){
				return this.$store.getters.get_buttonFiltersMenuL;
			},
			get_buttonFiltersMenuArray(){
				let a = [];
				for(var i = 0; i < this.get_buttonFiltersMenuL; i++){
					var s = this.$store.getters.get_buttonFiltersMenuById(i);
					a[i] = {buttonID: s.buttonID, buttonName: s.buttonName, buttonState: s.buttonState};
				};
				return a;
			},
		},
		created(){
			this.UPDATE_BUTTON_DATA_STATE();
		},
		mounted(){
			console.log('12455')
		},
		methods: {
			UPDATE_BUTTON_DATA_STATE(){
				for(var i = 0; i < this.get_buttonFiltersMenuL; i++){
					this.buttonsArray[i] = this.get_buttonFiltersMenuArray[i];
				};
			},
		},
		watch: {
			get_buttonFiltersMenuArray(newCount, oldCount){
				this.UPDATE_BUTTON_DATA_STATE();
			},
		},
		components: {
			filtersMenuButton,
		}
	}
</script>

<style lang='sass'>
	@import "@/sass/base/_typography.sass"
	@import "@/sass/abstracts/_variables.sass"
	@import "@/sass/abstracts/_mixins.sass"
	.center_group_filters_menu_wrapper
		width: 100%
		overflow: hidden
		position: absolute 
		top: calc(100% + 10px)
		left: 0
		height: 0px
		background: $background-color-white
		@include shadow(2)
		display: flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		justify-content: space-between
		//line-height: 45px
	.header_menu_item
		vertical-align: middle
		position: relative
		cursor: pointer
		&:nth-child(1n)
			padding-left: 8px
			padding-right: 4px
		&:nth-child(2n)
			padding-left: 4px
			padding-right: 8px
		&:hover
			&:after
				content: ''
				position: absolute
				bottom: 0
				left: 0
				color: black
				width: 100%
				height: 3px
				background-image: linear-gradient(135deg,#5EFCE8 10%,#736EFE 100%)
</style>