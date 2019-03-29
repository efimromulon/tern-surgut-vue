<template>
	<li class="search-snippet-view">
		<div class="search-snippet-name">{{searchItemArr[0].category}}</div>
		<ul>
			<li  v-for="i in searchItemArr">
				<div class="search-business-snippet-view">
					<div class="search-business-snippet-view__header">
						{{i.stationName}}<br/>
					</div>
					<div class="search-business-snippet-view__body">
						{{i.stationAddress}}<br/>
					</div>
					<div class="search-business-snippet-view__footer">
						{{i.stationAddress}}<br/>
					</div>
				</div>
			</li>
		</ul>
	</li>
</template>
<script>

	import {mapActions, mapGetters} from 'vuex'
	import Scrollbar from 'smooth-scrollbar'
	import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
	export default {

		name: 'search-list-item',
		props: {
			searchItemArr: {
				type: Array,
				required: true,
			}
		},
		data () {
			return {
			}
		},
		computed: {
		},
		methods: {

		},
		mounted(){

		},
		components: {
		},
		watch: {
		}
	}
</script>

<style lang='sass'>
	.search-snippet-view
		display: list-item
		padding: 16px
		background-color: #fff
		user-select: none
		text-decoration: none
		color: #333
		list-style: none
		padding: 0
		margin: 0
		border-style: none
		min-height: 50px
		position: relative
		&:after
			position: absolute
			top: 0
			margin-bottom: 0
			display: block
			margin-right: 0px
			margin-left: 0px
			content: ''
			background-color: #ededed
			height: 1px
			width: 100%
		ul
			list-style: none
	.search-snippet-name
		padding: 16px
	.search-business-snippet-view
		padding: 16px
	.search-business-snippet-view__header
	.search-business-snippet-view__body
	.search-business-snippet-view__footer


	.sidebar-left-panel-header-view
		border-bottom: 1px solid #ededed
		padding-right: 70px
		user-select: none
		background-color: #fff
		flex-shrink: 0
	.sidebar-left-panel-header-view__title
		position: relative
	.sidebar-left-panel-header-view__title-text
		white-space: nowrap
		text-overflow: ellipsis
		overflow: hidden
		font-size: 13px
		line-height: 36px
		padding-left: 16px
		padding-right: 70px
		color: #999
</style>