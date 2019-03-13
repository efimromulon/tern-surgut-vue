<template>
	<div class="core-menu">
		<ui-settings-panel-core-menu-button
			:buttonData = "buttonsArray[buttonID]"
			:keyOfButton = "buttonID"
			:buttonState = "buttonsArray[buttonID].buttonState"
			 v-for = "(buttonName, buttonID) in buttonsArray"
			:key = "buttonID"
			></ui-settings-panel-core-menu-button>
		<button-cross
			:btnClassName = "`core-menu`"
			:btnType = "`core-menu`"
		></button-cross>
	</div>
</template>
<script>
	import uiSettingsPanelCoreMenuButton from './_ui-settings-panel-core-menu-button.vue'
	import buttonCross from '@/components/app-common/buttons/button-cross.vue'
	export default {
		name: 'ui-settings-panel-core-menu',
		components: {
			uiSettingsPanelCoreMenuButton,
			buttonCross,
		},
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
	}
</script>

<style lang='sass'>
	.core-menu
		width: 100%
		overflow: hidden
		position: relative
		top: 0
		left: 0
		height: 37px
		display: flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		justify-content: start
		background-color: $color-white
		@include shadow(2)
		@include border(2)
	.core-menu__close
		position: absolute
		top: 0
		right: 0
</style>