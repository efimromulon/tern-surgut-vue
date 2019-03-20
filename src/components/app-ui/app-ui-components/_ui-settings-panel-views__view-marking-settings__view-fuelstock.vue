<template>
	<view-layout
		:vueSlider="vueSlider"
		:min="min"
		:max="max"
	></view-layout>
</template>

<script>

	import {mapGetters} from 'vuex'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings__view-fuelstock',
		components: {
		},
		data () {
			return {
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