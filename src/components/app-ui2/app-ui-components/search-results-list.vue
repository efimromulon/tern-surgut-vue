<template>
	<div class="Search-results_item">
		<div v-for="item in searchData" v-if="item.data.length !== 0">
			<div class="Search-item_name">{{ item.name }}</div>
			<div class="Search-item_data">
				
					<div class="data-item" v-for="item in item.data">
						<div class="btn">
							{{ item }}
						</div>
					</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import { FluentRevealEffect } from "fluent-reveal-effect"
	export default {

		name: 'search-results-list',
		props: [ 'searchData'],

		data() {
			return {
				searchData1: this.searchData
			};
		},
		copmuted: {
			searchDataSDOList(){
				return this.searchData1;
			}
		},
		mounted(){
			FluentRevealEffect.applyEffect(".btn", {
				lightColor: "rgba(255,255,255,0.1)",
				gradientSize: 150
			});
			FluentRevealEffect.applyEffect(".btn", {
				clickEffect: true
			});
			FluentRevealEffect.applyEffect(".Search-item_data", {
				clickEffect: true,
				lightColor: "rgba(255,255,255,0.6)",
				gradientSize: 80,
				isContainer: true,
				children: {
					borderSelector: ".data-item",
					elementSelector: ".btn",
					lightColor: "rgba(255,255,255,0.3)",
					gradientSize: 150
				}
			});
		},
		watch: {
			searchData(newCount, oldCount){
							FluentRevealEffect.applyEffect(".btn", {
				lightColor: "rgba(0,0,0,0.1)",
				gradientSize: 150
			});
			FluentRevealEffect.applyEffect(".btn", {
				clickEffect: true
			});
			FluentRevealEffect.applyEffect(".Search-item_data", {
				clickEffect: true,
				lightColor: "rgba(0,0,0,0.6)",
				gradientSize: 80,
				isContainer: true,
				children: {
					borderSelector: ".data-item",
					elementSelector: ".btn",
					lightColor: "rgba(0,0,0,0.3)",
					gradientSize: 150
				}
			})
			},
			searchData1(newCount, oldCount){
							FluentRevealEffect.applyEffect(".btn", {
				lightColor: "rgba(0,0,0,0.1)",
				gradientSize: 150
			});
			FluentRevealEffect.applyEffect(".btn", {
				clickEffect: true
			});
			FluentRevealEffect.applyEffect(".Search-item_data", {
				clickEffect: true,
				lightColor: "rgba(0,0,0,0.6)",
				gradientSize: 80,
				isContainer: true,
				children: {
					borderSelector: ".data-item",
					elementSelector: ".btn",
					lightColor: "rgba(0,0,0,0.3)",
					gradientSize: 150
				}
			});
			}
		},
	};
</script>

<style lang="sass">	
@import "@/sass/base/_typography.sass"
@import "@/sass/abstracts/_variables.sass"
@import "@/sass/abstracts/_mixins.sass"
.Search-item_data
	display: flex
	padding: 0
	margin: 0
	flex-flow: row wrap
	background-color: $search-item-data-color
	text-align: center


.data-item
	background: $usual-color
	padding: 0px
	color: black
	font-size: 12px
	text-align: center
	width: calc((100% / 5))
	line-height: 100px
	vertical-align: middle
	display: inline-block
	line-height: 34px
	transition: all 0.9s
	z-index: 9997
	opacity: 0.7
	//margin: 5px
	background-color: $search_data-item-color
	@media screen and (min-width: 768px) {width: calc((100% / 2)}
	@media screen and (min-width: 1024px) {width: calc((100% / 3)}
	@media screen and (min-width: 1428px) {width: calc((100% / 4)}

.data-item_wrapper
	line-height: 100px
	vertical-align: middle
	display: inline-block
	border: 0
	background-color: #333
	transition: all 200ms ease
.Search-item_name
	font-size: 23px
	font-family: 'MPLUS1p-Bold'
	padding: 10px 15px
	text-align: center
.btn 
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif
	padding: 1rem 2rem
	background-color: $search_btn-color
	color: $search_btn-text-color
	display: block
	border: 0
	transition: all 200ms ease

/*.data-item
	&:nth-child(-n+5)
		.btn 
			margin-top: 5px !important
	&:nth-child(5n + 1)
		.btn 
			margin-left: 5px !important
	&:nth-child(5n + 5)
		.btn 
			margin-right: 5px !important
	&:nth-last-child(n)
		.btn 
			margin-right: 2.5px
			margin-left: 2.5px
			margin-top: 2.5px
			margin-bottom: 2.5px*/
.btn 
	margin-right: 2.5px
	margin-left: 2.5px
	margin-top: 2.5px
	margin-bottom: 2.5px
/* 	&:last-child
		.btn 
			margin-right: 5px !important
			margin-bottom: 5px !important */
</style>