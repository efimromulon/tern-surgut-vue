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





	let size = 1600;
	let canvas = this.$refs.preloaderCanvas;
	let ctx = canvas.getContext('2d');
	canvas.width = size;
	canvas.height = size;
	let number = 100;
	let radius = 100;
	let x,y;

	function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
	}

	function draw(){
		ctx.clearRect(0,0,size,size);

		// ctx.fillRect(100,600*Math.random(),10,10);
		// ctx.fillRect(100,600*Perlin(time/100,0,0),10,10);
		ctx.save();
		ctx.translate(size/2,100);
		ctx.fillRect(0,0,10,10);

		var gradient = ctx.createRadialGradient(110,90,0, 100,100,0);

		// Add three color stops
		gradient.addColorStop(0, '#89D099');
		gradient.addColorStop(1, '#D8EEDD');

		// Set the fill style and draw a rectangle
		ctx.fillStyle = gradient;

		//ctx.fillStyle = col1;
		ctx.beginPath();
		for (var i = 0; i < number; i++) {
			// ctx.fillRect(i,0,1,200*Perlin(i/10,time/100,0))
			let angle = i*2*Math.PI/number;
			x = radius*Math.sin(angle) + 40*Perlin(Math.sin(angle),time/100,0);
			y = radius*Math.cos(angle) + 40*Perlin(Math.cos(angle),time/100,0);
			ctx.lineTo(x,y);

		}
		ctx.closePath();
		ctx.fill()


		ctx.fillStyle = '#D8EEDD';
		ctx.beginPath();
		for (var i = 0; i < number; i++) {
			// ctx.fillRect(i,0,1,200*Perlin(i/10,time/100,0))
			let angle = i*2*Math.PI/number;
			x = 8*radius*Math.sin(angle) + 40*Perlin(Math.sin(angle) + time/100,time/1000,0);
			y = 8*radius*Math.cos(angle) + 40*Perlin(Math.cos(angle) + time/100,time/1000,0);
			ctx.lineTo(x,y);

		}
		ctx.closePath();
		ctx.fill();
		ctx.restore()
	}

	let time = 0;
	function render(){
		let col1= getRandomColor(),col2 =getRandomColor(), col3 =getRandomColor(), col4 = getRandomColor();
		draw();
		
		time++;
		window.requestAnimationFrame(render);
	}
		
	render();
			
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
		filter: blur(20px)
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