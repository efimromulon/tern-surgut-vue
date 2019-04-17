<template>
	<div class="app-map-popup">
		<h2> {{popupCaller.stationLabel}}</h2>

		<p> {{popupCaller.stationCity}} <br/>
			 {{popupCaller.stationAddress}} </p>

	</div>
</template>

<script>
export default {

	name: 'map-popup',
	props: {
		popupCaller: {
			type: Object,
			required: true,
		},	
	},
	data() {
	return {

	};
	},
};
</script>

<style lang="sass">
.app-map-popup
	width: 100%

</style>
