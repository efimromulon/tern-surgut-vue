<template>
	<transition
		v-on:enter="enter"
		v-on:leave="leave"
		v-bind:css="false"
		mode="out-in"
	>
		<button 
			@click="buttonSquareClick" 
			class="app-ui__button" 
			:class="[
				buttonBackroundActive ? 'appInterface_button' : '', 
				buttonClass, 
				isActive ? buttonClass + '_active' : ''
			]"
		>
			<slot></slot>
		</button>
	</transition>
</template>

<script>

	import { TimelineMax } from 'gsap'

	export default {
		name: 'button-square',
		props: {
			onClick: {
				type: Function,
				required: true
			},
			buttonClass: {
				type: String,
				required: true
			},
			buttonBackroundActive: {
				type: Boolean,
				required: true
			},
			buttonID: {
				type: Number,
				required: false
			},

		},
		data () {
			return {
				isActive: true,
				tl: null,
			}
		},
		computed: {
			r(){
				return this.$store.getters.getButtonSquare;
			},
		},
		created(){
			this.tl = new TimelineMax();
		},
		methods: {
			buttonSquareClick(e){
				//this.rippleEffect(e);
				this.onClick();
			},
			beforeEnter: function (el) {
			},
			enter: function (el, done) {
				console.log("Enter button", this.tl);
				this.tl.fromTo(el, .5,{scaleX: 0.035, scaleY: 1.115, left: '-5%'},{scaleX: 1.0, scaleY: 1.0, left: '0%', ease: Power2.easeInOut, onComplete: done}, +1.0);
				console.log("Enter button", this.tl);
			},
			afterEnter: function (el) {
			},
			enterCancelled: function (el) {
			},
			beforeLeave: function (el) {
			},
			leave: function (el, done) {
				console.log("Leave button", this.tl);
				this.tl
				.to(el, .5, {scaleX: 0.035, scaleY: 1.115, ease: Power2.easeInOut})
				.to(el, .5, {left: '-5%', ease: Power2.easeInOut, onComplete: done});
				console.log("Leave button", this.tl);
				
			},
			afterLeave: function (el) {
			},
			// leaveCancelled only available with v-show
			leaveCancelled: function (el) {

			}
		},
		watch: {

		},
		components: {

		}
	}
</script>

<style lang='sass'>
	.app-ui__button
		background: transparent
		outline: none
		border: none
		height: $buttonHW
		width: $buttonHW
		display: inline-block
		position: absolute
		top: 0
		left: 0
		svg
			height: 30px
			width: 30px
	.appInterface_button
		background: $background-color-white
		@include shadow(2)
	.button_funnel
		svg
			.st0				
				fill: #ffffff
				stroke: #ffffff
			.st1
				fill: none
				stroke: #292929
				stroke-width: 2.5
				stroke-linejoin: round
				stroke-miterlimit: 10
		&:hover
			svg
				.st0
					fill: #252525
					stroke: #252525
	.button_funnel_active
		svg
			.st0
				fill: #313131
				stroke: #313131
		transform: scale(0.99)
		@include shadow(1)
		&:hover
			svg
				.st0
					fill: #ffffff
					stroke: #ffffff
	.button_search
		svg
			.st0
				fill: none
				stroke: #000000
				stroke-miterlimit: 10
		&:hover
			opacity: .5




	.button_layers	
		svg
			.st0
				fill: none
				stroke: #292929
				stroke-width: 2.5
				stroke-linecap: square
				stroke-miterlimit: 10
		&:hover
			svg
				.st0
					stroke: #292929
					stroke-width: 4.0
					stroke-linecap: square
					stroke-miterlimit: 10
	.button_layers_active
		svg
			.st0
				stroke: #292929
				stroke-width: 4.0
				stroke-linecap: square
				stroke-miterlimit: 10
		transform: scale(0.99)
		&:hover
			svg
				.st0
					stroke: #292929
					stroke-width: 2.5
					stroke-linecap: square
					stroke-miterlimit: 10

	.button-white

	.filters_header_button
		height: 45px
		width: 45px
		text-align: center
		line-height: 45px
</style>