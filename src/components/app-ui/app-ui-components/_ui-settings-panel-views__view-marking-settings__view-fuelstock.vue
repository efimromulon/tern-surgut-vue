<template>
	<view-layout
		:vueSlider="vueSlider"
		:datePicker="datePicker"
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
				datePicker: false
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