<template>

	<div class="view-marking-express">
		<ui-settings-panel-views-view-marking-express-button 
			:buttonData = "uiMarkingExpressButtons[key]"
			 v-for = "(item, key) in uiMarkingExpressButtons"
			 :key = "key"
		></ui-settings-panel-views-view-marking-express-button>
	</div>

</template>

<script>

	import {mapGetters} from 'vuex'
	import uiSettingsPanelViewsViewMarkingExpressButton from './_ui-settings-panel-views__view-marking-express-button.vue'

	export default {

		name: 'ui-settings-panel-views__view-marking-express',
		components: {
			uiSettingsPanelViewsViewMarkingExpressButton,
		},
		data () {
			return {

			}
		},
		computed: {
			...mapGetters([
				'get_uiMarkingExpressButtons',
			]),
			uiMarkingExpressButtons(){
				return this.get_uiMarkingExpressButtons
			},
		},

		watch: {
			uiMarkingExpressButtons(newCount, oldCount){},
		},
	}

</script>

<style lang="sass">

	.view-marking-express
		@include shadow(2)
		@include border(2)
		background-color: $color-white


</style>