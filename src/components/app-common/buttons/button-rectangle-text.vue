<template>
	<button
		:class="['button-rectangle-text', getBtnTypeName(), btnClassName]"
		@click = "btnTextClick"
		ripple
		ref='ripple'

	>
		<span>{{btnText}}</span>
	</button>
</template>

<script>

	import debounce from 'lodash/debounce'

	export default {

		name: 'button-rectangle-text',
		components: {
		},
		props: {
			btnClassName: {
				type: String,
				required: false,
			},
			btnType: {
				type: String,
				required: false,
			},
			btnText: {
				type: String,
				required: false,
			},
			btnDisable: {
				type: Boolean,
				required: false,
			},
			btnClick: {
				type: Function,
				required: true,
			},
		},
		data() {
			return {
				rippleTarget: null,
				rippleContainer: null,
			};
		},
		mounted(){
			this.buttonText = 'Сбросить';
			this.rippleTarget = this.$refs.ripple;
			this.rippleContainer = document.createElement('div');
			this.rippleContainer.className = 'ripple--container';
			this.rippleTarget.insertBefore(this.rippleContainer, this.rippleTarget.childNodes[0]);
		},
		methods: {
			getBtnTypeName(){
				let a = this.btnType;//button_>>G<< 7 - G
				let b = a;
				return b;
			},
			btnTextClick(e){
				console.log('BUTTON TEXT');
				this.rippleEffect(e);
				this.btnClick();
				// switch (true){
				// 	case this.btnType === '' :
				// 		//this.$store.dispatch('');
				// };

			},
			rippleEffect(e){
				let ripple = this.rippleTarget,
					rippleContainer = this.rippleContainer;

				let size, pos, x, y, style, rippler;
				size = ripple.offsetWidth;
				pos = ripple.getBoundingClientRect();
				rippler  = document.createElement('span');
				x = e.pageX - pos.left - (size / 2);
				y = e.pageY - pos.top  - (size / 2);
				style = 'top:' + y + 'px; left:' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;';
				rippleContainer.append(rippler);
				rippler.setAttribute('style', style);



				setTimeout(function() {
					while (rippleContainer.firstChild) {
						rippleContainer.removeChild(rippleContainer.firstChild);
					}
				}, 800);

			},
		},
	};

</script>

<style lang="sass">

	.button-rectangle-text
		background-color: transparent
		cursor: pointer
		padding-left: 1rem
		padding-right: 1rem
		text-align: center
		vertical-align: middle
		border-radius: 2px
		font-family: 'Montserrat-Bold'
		text-decoration: none
		text-transform: uppercase
		overflow: visible
		position: relative
		display: inline-block
		background-clip: border-box
		font-size: .6rem
		line-height: 1.675rem
		white-space: normal
		user-select: none
		span
			position: relative
			z-index: 9999999
	.search-business-snippet-view__button
	.search-business-snippet-view__button-detailed
		background-color: transparent
		&:hover
			transition: all 150ms
			color: rgba(#fff, 1)
			background-color: $button-text--hover
	[ripple]
		position: relative
		overflow: hidden
		.ripple--container
			position: absolute
			top: 0
			right: 0
			bottom: 0
			left: 0
			span
				transform: scale(0)
				border-radius: 100%
				position: absolute
				animation: ripple 800ms
				z-index: 9999998
				background-color: $button-text--pressed
	.button-rectangle-text
		color: $button-text-color
		.ripple--container
			span
	@keyframes ripple
		to
			opacity: 0
			transform: scale(3)
</style>
