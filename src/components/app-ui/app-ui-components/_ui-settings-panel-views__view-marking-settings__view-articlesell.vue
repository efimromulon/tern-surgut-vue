<template>

		<view-layout
			:vueSlider="vueSlider"
			:datePicker="datePicker"
			:min="min"
			:max="max"
			:viewName="viewName"
		></view-layout>

</template>

<script>

	import {mapGetters} from 'vuex'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings__view-articlesell',
		components: {
		},
		data () {
			return {
				viewName: 'articlesell',
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