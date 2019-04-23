<template>
	<div class="popup-large__menu-vertical">
		<menu-vertical-button
			:buttonData = "menuVerticalButtons[key]"
			 v-for = "(item, key) in menuVerticalButtons"
			 :key = "key"
		></menu-vertical-button>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import menuVerticalButton from './_menu-vertical-button.vue'
	export default {

		name: 'menu-vertical',

		data() {
			return {
			
			};
		},

		components: {
			'menu-vertical-button': menuVerticalButton,
		},

		computed: {
			...mapGetters([
				'get_uiPopupLargeMenuVerticalButtons',
			]),
			menuVerticalButtons(){
				return this.get_uiPopupLargeMenuVerticalButtons
			},
		},
		watch: {
			menuVerticalButtons(newCount, oldCount){
				//this.UPDATE_BUTTON_ANIMATION();
			},
		},

	};
</script>

<style lang="sass">
	.popup-large__menu-vertical
		width: 100%
		position: relative
		top: 50%
		transform: translateY(-50%)
</style>
