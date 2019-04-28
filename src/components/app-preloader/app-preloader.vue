<template>
	<div class="app-preloader">
		<!-- <canvas ref="preloaderCanvas"></canvas> -->
		<div ref="BG" class="preloader_bg">
			<div ref="BG1" class="preloader_bg_1"></div>
			<canvas ref="preloaderCanvas"></canvas>
		</div>
	</div>
</template>

<script>

	import {TimelineMax, TweenMax, TweenLite} from 'gsap'
	import { CSSRulePlugin } from "gsap/all"
	import * as PIXI from 'pixi.js'
	import Perlin from '@/js/Perlin';
	export default {

		name: 'app-preloader',

		data () {
			return {
				tl: null,
				mapTime: 1200,
				delta: 0,
				uniforms: {},
				smokeShader: null,
			}
		},
		watch: {
		},
		mounted(){
			/* eslint-disable */

			let canvas = this.$refs.preloaderCanvas,
				app = new PIXI.Application(
					{
						width: window.innerWidth, 
						height: window.innerHeight, 
						view: canvas,
						antialias: true,
						transparent: false,
						resolution: 1
					}
				),
				loader = PIXI.loader,
				resources = PIXI.loader.resources,
				Sprite = PIXI.Sprite;

			app.renderer.backgroundColor = 0x061639;
			app.renderer.autoResize = true;
			app.renderer.view.style.position = "absolute";
			app.renderer.view.style.display = "block";

			loader
				.add("logo.png")
				.on("progress", loadProgressHandler)
				.load(setup);
			function loadProgressHandler(loader, resource) {
				console.log("loading: " + resource.url); 

				//Display the percentage of files currently loaded
				console.log("progress: " + loader.progress + "%");  
			}
			function setup() {
				let doge = new Sprite(
					resources["logo.png"].texture
				);
				doge.x = window.innerWidth / 2;
				doge.y = window.innerHeight / 2;
				doge.scale.set(0.5,0.5);
				doge.rotation = 0.5;
				doge.anchor.x = 0.5;
				doge.anchor.y = 0.5;
				doge.pivot.set(0.5, 0.5);
				app.stage.addChild(doge);

			};
			////////////////////
		},

		methods: {
		},
	}

</script>

<style lang="sass">
$strokecolor: #555555
.app-preloader
	position: absolute
	top: 0
	left: 0
	width: 100vw
	height: 100vh
	z-index: 4
	canvas 
		position: absolute
		top: 0
		left: 0
.preloader_bg
	position: absolute 
	height: 100vh
	width: 100vw
	top: 0
	left: 0
	will-change: transform, blur
	background-image: radial-gradient(circle closest-side, #89D099, #F9F8ED)
	z-index: 5
	transform: matrix(1, 0, 0, 1, 0, 0)
	z-index: 6
	canvas
		//filter: blur(20px)
.preloader_top
	width: 100%
	height: 50vh
	background-color: #f4f3f3
	background-image: $topleft, $topright
	position: absolute
	top: 0
	left: 0
	z-index: 6
</style>