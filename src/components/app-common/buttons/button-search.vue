<template>
	<div class="button_search_wrapper button-color">
		<div class="button-name">
			<svg-icon-search></svg-icon-search>
		</div>
	</div>
</template>

<script>
	import SvgIconSearch from '@/components/app-common/svg/svg-icon-search.vue'
	export default {

		name: 'button-search',

		data() {
			return {

			};
		},
		components: {
			SvgIconSearch
		}

	};
</script>

<style lang="sass">
@import "@/sass/abstracts/_variables.sass"
.button_search_wrapper
	width: 45px
	height: 45px
	line-height: 45px
	text-align: center
.button-color
	background: $button-color-white
.button-name
	height: 30px
	width: 30px
	display: inline-block
	vertical-align: middle
	svg
		//height: 30px
		//width: 0%//30px
		fill: black
		stroke: black
#SvgSearchIcon_id
	height: 100%
	width: 100%
	path
		fill: transparent !important
.button_search
	height: 30px
	width: 30px
	background-position: center center
	background-repeat: no-repeat
	display: inline-block
	vertical-align: middle
.button_search
	//background-image: url(svg/icon-search.svg)
	line-height: 45px
</style>
