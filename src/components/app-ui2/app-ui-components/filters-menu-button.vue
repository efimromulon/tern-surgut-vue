<template>
	<div :class="['header_menu_item', getButtonClass()]"
		@click = "TOGGLE_CURRENT_FILTER_MENU_BUTTON"
	>
		{{ buttonData.buttonName }}
	</div>
</template>

<script>
	//import appInterfaceButton from './appInterfaceButton.vue'
	export default {
		name: 'filters-menu-button',
		props: {
			buttonData: {
				type: Object,
				required: true,
			},
			keyOfButton: {
				type: Number,
				required: true,
			},
			buttonState: {
				type: Boolean,
				required: true,
			},
		},
		data () {
			return {
				buttonActive: false,
				timelinebutton: null,
				animateTarget: null,
				animateTargetClass: null,				
			}
		},
		computed: {
			get_buttonFiltersMenuById(){
				return this.$store.getters.get_buttonFiltersMenuById(this.keyOfButton).buttonState;
			},
		},
		created(){
			this.UPDATE_BUTTON_STATE();
		},
		beforeMounted(){

		},
		mounted(){
			this.timelinebutton = new TimelineMax();
			this.UPDATE_BUTTON_ANIMATION();
		},
		methods: {
			TOGGLE_CURRENT_FILTER_MENU_BUTTON(){
				let payload = {buttonArray: 'buttonFiltersMenu', id: this.keyOfButton};
				this.$store.dispatch('toggle_interfacetop_button', payload);
			},
			UPDATE_BUTTON_STATE(){
				this.buttonActive = this.get_buttonFiltersMenuById;
			},
			UPDATE_BUTTON_ANIMATION(){
				this.animateTargetClass = '.' + this.getButtonClass().toString();
				this.animateTarget = document.querySelector(''+ this.animateTargetClass);
				this.buttonActive ? this.animateButtonIn() : this.animateButtonOut();
			},
			getButtonClass(){
				let a = this.keyOfButton;//button_>>G<< 7 - G
				let b = 'filtersButton_' + a;
				return b;
			},
			animateButtonIn(){
				this.timelinebutton
				.to(this.animateTarget, .3,{
					backgroundColor: '#ff00ff',
					ease: Power4.easeOut});
			},
			animateButtonOut(){
				this.timelinebutton
				.to(this.animateTarget, .3,{
					backgroundColor: '#ffffff',
					ease: Power4.easeOut});
			},
		},
		watch: {
			get_buttonFiltersMenuById(newCount, oldCount){
				this.UPDATE_BUTTON_STATE();
				this.UPDATE_BUTTON_ANIMATION();
			},
		},
		components: {

		}
	}
</script>

<style lang='sass'>
</style>