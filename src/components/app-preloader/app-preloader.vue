<template>
	<div class="app-preloader">
		<canvas ref="preloaderCanvas"></canvas>
	</div>
</template>

<script>

	import {TimelineMax, TweenMax} from 'gsap'
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
				]
				;

			pixiApp.stage.addChild(container);

			class Circle {
				constructor(container, color, cx, cy, cr, coords, curCoords){
					this.decorate(container, color, cx, cy, cr, coords, curCoords);
					//this.move(coords, curCoords);
					this.tl = new TimelineMax({repeat: -1});
					let tw1, tw2, tw3;
					switch(true){
						case curCoords === 0:
							tw1 = 1;
							tw2 = 2;
							tw3 = 0;
							break;
						case curCoords === 1:
							tw1 = 2;
							tw2 = 0;
							tw3 = 1;
							break;
						case curCoords === 2:
							tw1 = 0;
							tw2 = 1;
							tw3 = 2;
							break;
					};
					this.tween1 = TweenMax.to(this.circle, 1, {x: coords[tw1].x, y: coords[tw1].y});
					this.tween2 = TweenMax.to(this.circle, 1, {x: coords[tw2].x, y: coords[tw2].y});
					this.tween3 = TweenMax.to(this.circle, 1, {x: coords[tw3].x, y: coords[tw3].y});
					this.tl.add([this.tween1, this.tween2, this.tween3], "+=0", "sequence", 0.0)

				}
				decorate(container, color, cx, cy, cr, coords, curCoords){
					this.circle = new PIXI.Graphics();
					this.circle.x = coords[curCoords].x;
					this.circle.y = coords[curCoords].y;
					this.circle.beginFill(color);
					this.circle.drawCircle(cx, cy, cr);
					this.circle.endFill();
					container.addChild(this.circle);
				}
				move(coords, curCoords){
					var numb;
					this.tl.play();
					// this.tween_2 = TweenMax.to(this.circle, 1, {x: coords[2].x, y: coords[2].y})
					// this.tween_3 = TweenMax.to(this.circle, 1, {x: coords[0].x, y: coords[0].y})
					
					//tl.add(this.tween_1,this.tween_2,this.tween_3);
						
					
					
				}
			}

			for (let i = 0; i < colors.length; i+=1) {
				const circ = new Circle(
					container,
					colors[i], 
					_cx, 
					_cy, 
					_radius,
					coords,
					i
				);
				circles.push(circ);

			};
			function animate(){
				//console.log(circles),
				pixiApp.ticker.add(() => {
				//console.log(circles)
					for (let i = 0; i < circles.length; i+=1) {
						circles[i].move(coords, i) 
					};
				});
			};
			animate();
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