<template>
	<div ref="appp" class="app-preloader">
		<!-- <canvas ref="preloaderCanvas"></canvas> -->
		<!-- <div class="preloader_top"></div>
		<div class="preloader_bot"></div>

		<div ref="progressLine" class="preloaderLine"></div> -->
		
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

			this.UPDATE_SLIDER();
			////////////////////
		},

		methods: {
			UPDATE_SLIDER(){
				let PLine = this.$refs.progressLine;
				
				
				// var tl = new TimelineMax();
				// tl.to(PLine, 5.3, {scaleX: 1, backgroundColor: '#00FF00', force3D: true, ease: Power2.easeIn});

const app = new PIXI.Application({ antialias: true });
this.$refs.appp.appendChild(app.view);

app.stage.interactive = true;

const bg = PIXI.Sprite.from('logo.png');

bg.anchor.set(0.5);

bg.x = app.screen.width / 2;
bg.y = app.screen.height / 4;

app.stage.addChild(bg);
console.log(app.stage);
const container = new PIXI.Container();
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// add a bunch of sprites
const bgFront = PIXI.Sprite.from('logo.png');
bgFront.anchor.set(0.5);

container.addChild(bgFront);

app.stage.addChild(container);

// let's create a moving shape
const thing = new PIXI.Graphics();
app.stage.addChild(thing);
thing.x = app.screen.width / 2;
thing.y = app.screen.height / 2;
thing.lineStyle(0);

container.mask = thing;

let count = 0;

app.stage.on('pointertap', () => {
    if (!container.mask) {
        container.mask = thing;
    } else {
        container.mask = null;
    }
});

const help = new PIXI.Text('Click or tap to turn masking on / off.', {
    fontFamily: 'Arial',
    fontSize: 12,
    fontWeight: 'bold',
    fill: 'white',
});
help.y = app.screen.height - 26;
help.x = 10;
app.stage.addChild(help);

app.ticker.add(() => {
    bg.rotation += 0.01;
    bgFront.rotation -= 0.01;

    count += 0.1;

    thing.clear();

    thing.beginFill(0x8bc5ff, 0.4);
    thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
    thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
    thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
    thing.rotation = count * 0.1;
});

			},
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
		width: 100vw
		height: 100vh
		z-index: 6
.preloader_top
	width: 100%
	height: 50vh
	background-color: #f4f3f3
	background-image: $topleft, $topright
	position: absolute
	top: 0
	left: 0
.preloader_bot
	width: 100%
	height: 50vh
	background-color: #f4f3f3
	background-image: $bottomleft, $bottomright
	position: absolute
	top: 50vh
	left: 0
.preloaderLine
	//background-color: #E5E5E5
	background-color: #FF0000
	//visibility: hidden
	position: absolute
	top: 50%
	left: 0%
	transform: translateX(0%) translateY(-38%) scaleX(0)
	transform-origin: left bottom
	width: 100%
	height: 3px
	// &:before
	// 	content: ""
	// 	position: absolute
	// 	width: 100%
	// 	height: 3px
	// 	//border-radius: 1px
	// 	bottom: 0
	// 	will-change: transform
	// 	//left: 15px
	// 	transform-origin: left bottom
	// 	transform: scaleX(0)
	// 	background-color: rgba(#682AC2, .13)
	// 	z-index: 2
	// 	transition: all 0.3s ease-in-out 0s
	//border-radius: 50%
</style>