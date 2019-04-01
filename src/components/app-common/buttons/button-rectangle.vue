<template>
	<button
		:class="['button-rectangle', getBtnTypeName(), btnClassName]"
		@click = "resetToDefault"
		ripple
		ref='ripple'

	>
		<span>{{btnText}}</span>
	</button>
</template>

<script>

	import debounce from 'lodash/debounce'

	export default {

		name: 'button-rectangle',
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
			resetToDefault(e){
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

	.button-rectangle
		cursor: pointer
		padding-left: 1rem
		padding-right: 1rem
		text-align: center
		vertical-align: middle
		border-radius: 5px
		font-family: 'Montserrat-Bold'
		text-decoration: none
		text-transform: none
		overflow: visible
		position: relative
		display: inline-block
		background-clip: border-box
		font-size: .75rem
		line-height: 1.875rem
		white-space: normal
		user-select: none
		span
			position: relative
			z-index: 9999999

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
	.btn-reset
		.ripple--container
			span
				background-color: $button-reset--pressed
	.btn-accept	
		color: rgba(#000, .74)
		.ripple--container
			span
				background-color: $button-accept--pressed
	@keyframes ripple
		to
			opacity: 0
			transform: scale(3)
	.view-layout-btn
		margin-left: 1rem
	.btn-reset
		border: 2px solid transparent
		background-color: transparent
		&:hover
			transition: all 150ms
			color: rgba(#fff, 1)
			border: 2px solid $button-reset--hover
			background-color: $button-reset--hover
	.btn-accept
		background-color: $button-accept--enabled
		border: 2px solid $button-accept--enabled
		&:hover 
			transition: all 150ms
			border: 2px solid $button-accept--hover
			background-color: $button-accept--hover
</style>
