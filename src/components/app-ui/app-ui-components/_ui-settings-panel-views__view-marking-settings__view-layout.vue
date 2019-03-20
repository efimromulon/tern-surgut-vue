<template>
	<vue-slider 
		v-model="range_current"
		:min-range="1"
		:max-range="100"
		:enable-cross="false"
	></vue-slider>
</template>

<script>

	import {mapGetters} from 'vuex'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings__view-layout',
		components: {
		},

		props: {
			vueSlider: {
				type: Boolean,
				required: false,
			},
			datePicker: {
				type: Boolean,
				required: false,
			},
		},
		data () {
			return {

			}
		},
		computed: {
			...mapGetters([
				'GET_range_current',
			]),
			range_current(){
				return this.GET_range_current;
			},
		},
		watch: {
			range_current(newCount, oldCount){
			},
		},
	}
</script>

<style lang="sass">


</style>