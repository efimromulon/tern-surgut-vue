<template>
	<div class="center_group_filters_body_wrapper">
		<component v-bind:is="currentFilter"></component>
	</div>
</template>

<script>
	import filterMarkingSettings from './filters-container/filter-marking-settings.vue'
	import filterLayersSettings from './filters-container/filter-layers-settings.vue'
	export default {
		name: 'filters-container',
		data () {
			return {
				buttonsArray: [],
				currentFilter: '',
			}
		},
		computed: {
			get_buttonFiltersMenuCurrent(){
				return this.$store.getters.get_buttonFiltersMenuCurrent;
			},
		},
		created(){
			this.UPDATE_CURRENT_FILTER();
		},
		mounted(){
		},
		methods: {
			UPDATE_CURRENT_FILTER(){
				this.currentFilter = this.get_buttonFiltersMenuCurrent;
			},
		},
		watch: {
			get_buttonFiltersMenuCurrent(newCount, oldCount){
				this.UPDATE_CURRENT_FILTER();
			},
		},
		components: {
			filterLayersSettings,
			filterMarkingSettings,
		}
	}
</script>

<style lang='sass'>
	@import "@/sass/base/_typography.sass"
	@import "@/sass/abstracts/_variables.sass"
	@import "@/sass/abstracts/_mixins.sass"
	.center_group_filters_body_wrapper
		width: 0%
		overflow: hidden
		position: absolute 
		top: calc(200% + 20px)
		left: 0
		height: 0px
		display: flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		justify-content: space-between
		//line-height: 45px

</style>