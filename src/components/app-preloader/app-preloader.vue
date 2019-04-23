<template>
	<div class="app-preloader">
		<!-- <canvas ref="preloaderCanvas"></canvas> -->
		<div ref="testR" class="testR">
			<canvas ref="preloaderCanvas"></canvas>
		</div>
	</div>
</template>

<script>

	import {TimelineMax, TweenMax, TweenLite} from 'gsap'
	import { CSSRulePlugin } from "gsap/all"
	import * as PIXI from 'pixi.js'

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
			//let tl = new TimelineMax();
			// var rule = CSSRulePlugin.getRule(".testR:after"); //get the rule
			// var rule1 = CSSRulePlugin.getRule(".testR:before"); //get the rule
			// TweenLite.to(rule, 3, {cssRule:{yPercent: 100}});
			//TweenLite.to(this.$refs.testR, 3, { ease: Power3.easeInOut, yPercent: -100, force3D: true , delay: 2});
			//TweenLite.to(rule1, 3, {cssRule:{yPercent: -100}});
			//tl.to(this.$refs.testR);
			let canvas 	= this.$refs.preloaderCanvas,
				pixiApp = new PIXI.Application({
					view: canvas,
					width: window.innerWidth,
					height: window.innerHeight, 
					resolution: window.devicePixelRatio,
					autoresize: true,
					antialias: true
				}),
				container = new PIXI.Container(),
				_rw = pixiApp.renderer.width,
				_rh = pixiApp.renderer.height,
				_radius = 7,
				_rwidth = 15,
				_cx = 0,
				_cy = 0,
				circles = [],
				colors = ['0x51cc00', '0xff9100', '0xcc0000'],
				coords = [
					{x: _rw / 2, 			y: _rh / 2 + Math.sqrt(3) * _rwidth / 2},
					{x: _rw / 2 - _rwidth, 	y: _rh / 2 - Math.sqrt(3) * _rwidth / 2},
					{x: _rw / 2 + _rwidth, 	y: _rh / 2 - Math.sqrt(3) * _rwidth / 2}
				];

			function createGradTexture(){
				// adjust it if somehow you need better quality for very very big images
				const quality = 256;
				const canvas = document.createElement('canvas');
				canvas.width = 1;
				canvas.height = 1;

				const ctx = canvas.getContext('2d');

				// use canvas2d API to create gradient
				
				const grd = ctx.createRadialGradient(75, 50, 0, 90, 60, quality);
				grd.addColorStop(0, "blue");
				grd.addColorStop(1, "white");

				// Fill with gradient
				ctx.fillStyle = grd;
				ctx.fillRect(0, 0, quality, 1);


				return PIXI.Texture.from(canvas);
			};
			const gradTexture = createGradTexture();

			const sprite = new PIXI.Sprite(gradTexture);
			sprite.position.set(100, 100);
			sprite.width = _rw;
			sprite.height = _rh;
			pixiApp.stage.addChild(sprite);

			function animate(){
				pixiApp.ticker.add(() => {

				});
			};
			animate();
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
	// canvas 
	// 	position: absolute
	// 	top: 0
	// 	left: 0
.testR
	position: absolute 
	height: 100vh
	width: 100vw
	top: 0
	left: 0
	will-change: transform
	background-color: #131313
	z-index: 5
	transform: matrix(1, 0, 0, 1, 0, 0)

	// &:before, &:after
	// 	content: ""
	// 	position: absolute
	// 	top: 0px
	// 	left: 0
	// 	width: 100%
	// 	height: 100%
	// 	will-change: transform
	// &:before
	// 	opacity: 1
	// 	background: red
	// 	transition: opacity .4s cubic-bezier(.165,.84,.44,1)
	// &:after
	// 	position: absolute
	// 	top: 0%
	// 	left: 0%
	// 	opacity: 1
	// 	background: blue
	// 	transition: opacity 1.2s cubic-bezier(.165,.84,.44,1)
	// 	transform-origin: top
.testP
	z-index: 6
	font-size: 18.68vw
	text-transform: capitalize
	opacity: 1
	white-space: nowrap
	transform: translateX(0%) translateZ(0)
	color: white
	font-size: 90px 
</style>