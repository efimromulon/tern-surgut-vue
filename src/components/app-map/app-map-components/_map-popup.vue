<template>
	<div class="app-map-popup">
		{{popupCaller.stationLabel}}<br/>
		{{popupCaller.category}}<br/>
		{{popupCaller.color}}<br/>
		{{popupCaller.stationCity}}<br/>
		{{popupCaller.stationAddress}}<br/>
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

</style>
