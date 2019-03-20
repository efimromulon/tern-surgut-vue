<template>
	<div class="marking-settings__view-layout">
		<vue-slider 
			v-model="sliderValue"
			:min="min"
			:max="max"
			:min-range="1"
			:enable-cross="false"
		></vue-slider>
	</div>
</template>

<script>

	import {mapGetters, mapState} from 'vuex'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings__view-layout',
		components: {
		},

		props: {
			vueSlider: {
				type: Boolean,
				required: false,
			},
			min: {
				type: Number,
				required: false,
			},
			max: {
				type: Number,
				required: false,
			},
		},
		data () {
			return {
				sliderValue: [33, 47],
			}
		},
		computed: {
			...mapGetters([
				'get_range_Datafilter_default',
			]),
			range_Datafilter_default(){
				return this.get_range_Datafilter_default
			},
		},
		watch: {
			range_Datafilter_default(newCount, oldCount){
			},
		},
		mounted(){
			this.SET_DEFAULT_VALUE();
		},
		methods: {
			SET_DEFAULT_VALUE(){
				this.sliderValue.length === 0 ? this.sliderValue = this.range_Datafilter_default : this.sliderValue;
				//this.sliderValue = this.range_Datafilter_default;
			},
		},
	}
</script>

<style lang="sass">
	.marking-settings__view-layout
		width: 100%
		position: relative
		top: 26px
</style>