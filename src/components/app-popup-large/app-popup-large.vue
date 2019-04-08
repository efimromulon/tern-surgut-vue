<template>
	<div class="importantshit">{{stationInfo}}</div>
</template>

<script>

	import { mapGetters } 	from 'vuex'

	import header 			from './popup-large-components/_header.vue'
	import sidebar 			from './popup-large-components/_sidebar.vue'
	import body 			from './popup-large-components/_body.vue'

	export default {

		name: 'app-popup-large',

		components: {
			'app-popup-header': 	header,
			'app-popup-sidebar': 	sidebar,
			'app-popup-body': 		body,
		},

		data () {
			return {
				stationId: 'nnp-m1_117',
			}
		},

		computed: {

			...mapGetters([
				'GET_station_info_by_Id',
			]),
			stationInfo(){
				return this.GET_station_info_by_Id(this.stationId);
			},

		},

		watch: {

			stationInfo(newCount, oldCount){
				console.log('VUE',this.stationInfo);
			},

		},


	}

</script>

<style lang="sass">
	.importantshit
		position: absolute
		top: 50%
		left: 50%
		z-index: 3
		width: 200px
		height: 400px
		transform: translate(-50%,-50%)
		background-color: white
</style>