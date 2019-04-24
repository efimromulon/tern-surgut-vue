<template>
	<div class="card-item">
		{{cardData}}
	</div>
</template>

<script>
export default {

	name: 'card-item',
	props: {
		cardData: {
			type: String,
			required: true,
		},
	},
	data () {
		return {

		}
	},
}
</script>

<style lang="css" scoped>
</style>