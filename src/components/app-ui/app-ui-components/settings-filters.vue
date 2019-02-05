<template>
	<div class="appInterfaceFilters">
		<transition
			@before-enter 		="beforeEnter" 
			@enter 				="enter" 
			@after-enter 		="afterEnter" 
			@enter-cancelled 	="enterCancelled" 
			@before-leave 		="beforeLeave" 
			@leave 				="leave" 
			@after-leave 		="afterLeave" 
			@leave-cancelled 	="leaveCancelled"
		>
			<filters-menu v-if="get_buttonInterfaceTopActiveById" v-bind:key="0"></filters-menu>
		</transition>
		<transition
			@before-enter 		="beforeEnter" 
			@enter 				="enter" 
			@after-enter 		="afterEnter" 
			@enter-cancelled 	="enterCancelled" 
			@before-leave 		="beforeLeave" 
			@leave 				="leave" 
			@after-leave 		="afterLeave" 
			@leave-cancelled 	="leaveCancelled"
		>
			<filters-container v-if="get_buttonInterfaceTopActiveById" v-bind:key="1"></filters-container>
		</transition>		
	</div>
</template>

<script>
	import filtersMenu from './settings-filters/filters-menu.vue'
	import filtersContainer from './settings-filters/filters-container.vue'
	export default {
		name: 'settings-filters',
		data () {
			return {

				timelineFiltersMenu: null,
				timelineFiltersMenuLeave: null,
				timelineFiltersBody: null,
				timelineFiltersBodyLeave: null,
				tGroupArr: [
					{id: 0, item: 'appInterfaceFiltersMenu'},
					{id: 1, item: 'appInterfaceFiltersBody'},
				],
			}
		},
		computed: {
			get_buttonInterfaceTopActiveById(){
				return this.$store.getters.get_buttonInterfaceTopActiveById(0).buttonState;
			},
		},
		created(){

		},
		mounted(){
			this.timelineFiltersMenu 		= new TimelineMax();
			this.timelineFiltersMenuLeave 	= new TimelineMax();
			this.timelineFiltersBody 		= new TimelineMax();
			this.timelineFiltersBodyLeave 	= new TimelineMax();
		},
		methods: {
			//transition FiltersMenu
				beforeEnter: function(el) {
					let fMenu = 'center_group_filters_menu_wrapper',
						fBody = 'center_group_filters_body_wrapper';
					if(el.classList[0] == fMenu){					
					this.timelineFiltersMenu.
					set(el,{autoAlpha: 0, height: '0px', width: '0%'});
					};
					//this.timelineFiltersMenu.add(this.timelineFiltersBody);
					if(el.classList[0] == fBody){
					this.timelineFiltersBody.
					set(el,{autoAlpha: 0, height: '0px', width: '0%'});
					};
				},
				enter: function(el, done) {
					
					let fMenu = 'center_group_filters_menu_wrapper',
						fBody = 'center_group_filters_body_wrapper';
					if(el.classList[0] == fMenu){
						this.timelineFiltersMenu
						.to(el, .3,{
							autoAlpha: 1,
							height: '1.5px',
							ease: Power4.easeOut})
						.to(el, .6,{
							width: '100%', 
							ease: Power4.easeOut})
						.to(el, .3,{
							height: '45px', 
							ease: Power4.easeOut});
					};
					if(el.classList[0] == fBody){
						this.timelineFiltersBody
						.to(el, .3,{
							autoAlpha: 1,
							height: '1.5px',
							ease: Power4.easeOut}, 1.2)
						.to(el, .6,{
							width: '100%', 
							ease: Power4.easeOut})
						.to(el, .3,{
							height: '600px', 
							ease: Power4.easeOut, 
							onComplete: done});
					};

				},
				afterEnter: function(el) {
				},
				enterCancelled: function(el) {
				},
				beforeLeave: function(el) {
				},
				leave: function(el, done) {
					let fMenu = 'center_group_filters_menu_wrapper',
						fBody = 'center_group_filters_body_wrapper';
					if(el.classList[0] == fMenu){
						this.timelineFiltersMenuLeave
						.to(el, .3,{
							autoAlpha: 0,
							height: '0px',
							ease: Power4.easeOut, 
							onComplete: done}, .3);						
					};
					//this.timelineFiltersMenuLeave.add(this.timelineFiltersBodyLeave);
					if(el.classList[0] == fBody){
						this.timelineFiltersBodyLeave
						.to(el, .3,{
							autoAlpha: 0,
							height: '0px',
							ease: Power4.easeOut});						
					};

				},
				afterLeave: function(el) {
					let fMenu = 'center_group_filters_menu_wrapper',
						fBody = 'center_group_filters_body_wrapper';
					if(el.classList[0] == fMenu){
						this.timelineFiltersMenu.clear();
						this.timelineFiltersMenuLeave.clear();
					};
					if(el.classList[0] == fBody){
						this.timelineFiltersBody.clear();
						this.timelineFiltersBodyLeave.clear();
					};
				},
				leaveCancelled: function(el) {
				}
		},
		watch: {

		},
		components: {
			filtersMenu,
			filtersContainer,
		}
	}
</script>

<style lang='sass'>
	@import "@/sass/base/_typography.sass"
	@import "@/sass/abstracts/_variables.sass"
	@import "@/sass/abstracts/_mixins.sass"
	.appInterfaceFilters
		width: 100%
		//position: relative
</style>