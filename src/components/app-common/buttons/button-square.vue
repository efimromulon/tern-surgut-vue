<template>
	<button 
		@click="onClick" 
		class="app-ui__button" 
		:class="[
			buttonBackroundActive ? 'appInterface_button' : '', 
			buttonClass, 
			isActive ? buttonClass + '_active' : ''
		]"
	>
		<slot></slot>
	</button>
</template>

<script>
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
				isActive: true
			}
		},
		computed: {
			r(){
				return this.$store.getters.getButtonSquare;
			},
		},
		methods: {

		},
		watch: {

		},
		components: {

		}
	}
</script>

<style lang='sass'>
	.app-ui__button
		outline: none
		background: $background-color-white
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
			//vertical-align: middle
	.appInterface_button
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