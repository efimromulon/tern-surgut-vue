<template>
	<div class="view-fuelstock-info">
		<p>Всего резервуаров: <span>{{currentInfoProp.totalFuelTanks}}</span></p>
		<p>Время до исчерпания: <span>{{currentInfoProp.timeToExhaustion}}</span></p>
	</div>
</template>

<script>
export default {

	name: 'view-fuelstock-info',
	props: {
		currentInfoProp: {
			type: Object,
			required: true,
			activeComponentInfo: ''
		},
	},
	data () {
		return {

		}
	}
}
</script>

<style lang="sass">
	.view-fuelstock-info
		padding: 30px
		p
			font-size: 16px
			margin-top: 15px
			&:first-child
				margin-top: 0
		span
			font-family: 'Oswald-Regular'
			margin-left: 10px
</style>