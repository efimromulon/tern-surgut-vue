<template>
	<keep-alive>
		<view-layout
			:vueSlider="vueSlider"
			:datePicker="datePicker"
			:min="min"
			:max="max"
			:viewName="viewName"
		></view-layout>
	</keep-alive>
</template>

<script>

	import {mapGetters} from 'vuex'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings__view-fuelstock',
		components: {
		},
		data () {
			return {
				viewName: 'fuelstock',
				vueSlider: true,
				datePicker: false,
				min: -100,
				max: 100
			}
		},
		computed: {
		},

		watch: {
		},
	}
</script>

<style lang="sass">


</style>