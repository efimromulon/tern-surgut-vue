<template>
	<keep-alive>
		<view-layout
			:vueSlider="vueSlider"
			:datePicker="datePicker"
			:min="min"
			:max="max"
		></view-layout>
	</keep-alive>
</template>

<script>

	import {mapGetters} from 'vuex'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings__view-fuelsell',
		components: {
		},
		data () {
			return {
				vueSlider: true,
				datePicker: true,
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