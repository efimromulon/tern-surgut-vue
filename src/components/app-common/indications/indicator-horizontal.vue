<template>
	<ul class="page-indicator">
		<li class="indicator1" :class="{ active: uiMarkingMenuDatafilter[0].buttonState }">
			<div class="bar"></div>
		</li>
		<li class="indicator2" :class="{ active: uiMarkingMenuDatafilter[1].buttonState }">
			<div class="bar"></div>
		</li>
		<li class="indicator3" :class="{ active: uiMarkingMenuDatafilter[2].buttonState }">
			<div class="bar"></div>
		</li>
		<li class="indicator4" :class="{ active: uiMarkingMenuDatafilter[3].buttonState }">
			<div class="bar"></div>
		</li>
		<li class="indicator5" :class="{ active: uiMarkingMenuDatafilter[4].buttonState }">
			<div class="bar"></div>
		</li>
		<li class="indicator6" :class="{ active: uiMarkingMenuDatafilter[5].buttonState }">
			<div class="bar"></div>
		</li>
		<li class="indicator7" :class="{ active: uiMarkingMenuDatafilter[6].buttonState }">
			<div class="bar"></div>
		</li>
	</ul>
</template>

<script>

	import {mapGetters} from 'vuex'
	import {TimelineMax} from 'gsap'

	export default {

		name: 'indicator-fluid',
		components: {
		},
		data () {
			return {
				timeline: null,
			}
		},
		computed: {
			...mapGetters([
				'get_uiMarkingMenuDatafilter',
			]),
			uiMarkingMenuDatafilter(){
				return this.get_uiMarkingMenuDatafilter
			},
		},

		watch: {
			uiMarkingMenuDatafilter(newCount, oldCount){
			},
		},

		mounted(){
			this.timeline = new TimelineMax();
		},
		methods: {
			animateIndicator(e, t){
				
				var n = this.$element.find("li.active"), 
					a = n.find(".bar"), 
					i = this.$element.find("li.indicator" + e), 
					r = i.find(".bar");

				n.removeClass("active"),
				i.addClass("active");

				var s = 0.7, 
					l = t ? "right top" : "left top",
					d = t ? "left top" : "right top";

				0 < n.length && (o.to(n, s, {
					width: 30,
					ease: Power3.easeInOut
				}),
				o.to(a, s, {
					transformOrigin: l,
					scaleX: 0,
					ease: Power3.easeInOut
				})),
				o.to(i, s, {
					width: 60,
					ease: Power3.easeInOut
				}),
				o.to(r, s, {
					transformOrigin: d,
					scaleX: 1,
					ease: Power3.easeInOut
				})

			},
		},
		watch: {
		},
	}
</script>

<style lang="sass">

	.page-indicator
		list-style: none
		padding: 0
		display: block
		overflow: hidden
		width: auto
		position: relative
		left: 0px
		top: 0px
		z-index: 380
		background: rgba(182, 188, 206, 0.2)
		li 
			list-style: none
			margin: 0 2px 0 3px
			padding: 0
			display: inline-block
			clear: left
			height: 2px
			width: 30px
			background: rgba(182, 188, 206, 0.7)
			position: relative
			overflow: hidden

	.active
		width: 60px

	.bar
		width: 60px
		height: 2px
		background: #FFFFFF
		transform: scaleY(0)
</style>