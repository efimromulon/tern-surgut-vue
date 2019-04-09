<template>
	<div class="app-preloader">
		<canvas ref="preloaderCanvas"></canvas>
	</div>
</template>

<script>

	import {TimelineMax} from 'gsap'
	import * as PIXI from 'pixi.js'

	export default {

		name: 'app-preloader',

		data () {
			return {
				tl: null,
				mapTime: 1200,
				delta: 0
			}
		},
		watch: {
		},
		mounted(){
		/* eslint-disable */
		let that = this,
			canvas = that.$refs.preloaderCanvas,
			circle;
		class Circlec {
			constructor(x, y, color, cx, cy, cr){
				this.circle = new PIXI.Graphics();
				this.circle.x = x;
				this.circle.y = y;
				this.circle.beginFill(0x51cc00);
				this.circle.drawCircle(cx, cy, cr);
				this.circle.endFill();
			}
		}
		class ParticleText {

			constructor(){

				this.pixiapp = new PIXI.Application({
					view: canvas,
					width: window.innerWidth,
					height: window.innerHeight, 
					resolution: window.devicePixelRatio,
					autoresize: true
				});
				this.container = new PIXI.Container();
				this.pixiapp.stage.addChild(this.container);
				this._rw = this.pixiapp.renderer.width;
				this._rh = this.pixiapp.renderer.height;
				this._radius = 15;
				this._cx = 0;
				this._cy = 0;
				this.circles = [];
				this.colors = ['0x51cc00', '0xff9100', '0xcc0000'];
				this.coords = [
					{x: this._rw / 2, 		y: this._rh * 2 / 3},
					{x: this._rw * 1 / 3, 	y: this._rh * 1 / 3},
					{x: this._rw * 2 / 3, 	y: this._rh * 1 / 3}
				];
				console.log('coords', this.coords, 'colors', this.colors, '_radius', this._radius);

				this.addObjects();

			}

			addObjects(){



				
				

				for (let i = 0; i < this.colors.length; i+=1) {
					console.log(
						'x', this.coords[i].x, 
						'y', this.coords[i].y, 
						'colors', this.colors[i], 
						'_cx', this._cx, 
						'_cy', this._cy, 
						'_radius', this._radius
					);
					
					const circ = new Circlec(
						this.coords[i].x, 
						this.coords[i].y, 
						this.colors[i], 
						this._cx, 
						this._cy, 
						this._radius
					);

					this.circles.push(circ);
					this.container.addChild(circ);
					cosnsole.log(this.circles);

				};

				this.animate();

			}

			animate(){
				let delta = 0;
				this.pixiapp.ticker.add(() => {
					
					//that.delta += 0.1;
					//this.circle.x += Math.sin(that.delta)*10;
					//this.mouse = this.pixiapp.renderer.plugins.interaction.mouse.global;
					// this.particless.forEach(p => {
					// 	p.update(this.mouse);
					// });

				});

			}
		};

		let PT = new ParticleText();
		console.log('end',PT);
		},

		methods: {
			animateButtonOut(){

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
	background-color: #131313
	z-index: 4
	canvas 
		position: absolute
		top: 0
		left: 0

</style>