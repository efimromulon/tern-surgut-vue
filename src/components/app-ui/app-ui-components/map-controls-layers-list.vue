<template>
	<div class="interfaceTopLeftLayersList">
		
		<ul>
			<li 
				v-for="(item, key) in layersStates"
				:class="{'layerActive' : item.state == true}" 
				@click="toggleLayer(item.id)"
			>
				{{item.name}}
			</li>
		</ul>

	</div>
</template>

<script>


	export default {

		name: 'map-controls-layers-list',
		props: {
			layersStates: {
				type: Object,
				required: true,
			},
		},
		data () {
			return {
			}
		},
		computed: {
		},
		mounted(){


		},
		methods: {
			toggleLayer(id){
				let payload = {filterName: 'layersByType', filterItemId: id}
				this.$store.dispatch('toggle_filters_top_by_filter', payload);
			},
		},
		watch: {


		},
		components: {



		}

	}
</script>

<style lang='sass'>
	@import "@/sass/base/_typography.sass"
	@import "@/sass/abstracts/_variables.sass"
	@import "@/sass/abstracts/_mixins.sass"

	.interfaceTopLeftLayersList
		position: absolute
		top: calc(45px + 6px)
		left: 0
		width: 63px
		height: auto
		z-index: 99999
		ul
			li
				margin: 5px 0 0 0
				height: 30px
				background: $background-color-white
				color: $black-grey
				@include shadow(2)
				&:hover
					background: lighten($background-color-white, 15%)
					color: darken($black-grey, 15%)
					@include shadow(3)
				&:active
					background: darken($background-color-white, 35%)
					color: lighten($black-grey, 35%)
					@include shadow(1)
			.layerActive
				background: darken($background-color-white, 35%)
				color: lighten($black-grey, 35%)
				@include shadow(1)
				&:hover
					background: lighten($background-color-white, 5%)
					color: darken($black-grey, 5%)
					@include shadow(2)
</style>