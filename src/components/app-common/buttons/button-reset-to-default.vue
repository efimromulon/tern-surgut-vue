<template>
	<button
		:class="['btn-reset-to-default', getBtnClassName()]"
		@click = "resetToDefault"
		ripple
		ref='ripple'

	>
		Сбросить
	</button>
</template>

<script>

	import debounce from 'lodash/debounce'

	export default {

		name: 'button-reset-to-default',
		components: {
		},
		props: {
			btnClassName: {
				type: String,
				required: false,
			},
			btnDisable: {
				type: Boolean,
				required: false,
			},
		},
		data() {
			return {
				rippleTarget: null,
				rippleContainer: null,
			};
		},
		mounted(){
			console.log(this.$refs.ripple);
			this.rippleTarget = this.$refs.ripple;
			this.rippleContainer = document.createElement('div');
			this.rippleContainer.className = 'ripple--container';
			this.rippleTarget.appendChild(this.rippleContainer);
		},
		methods: {
			getBtnClassName(){
				let a = this.btnClassName;//button_>>G<< 7 - G
				let b = a;
				return b;
			},
			resetToDefault(e){
				this.rippleEffect(e);
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
				rippleContainer.appendChild(rippler);
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

	.btn-reset-to-default
		cursor: pointer
		padding-left: 1rem
		padding-right: 1rem
		text-align: center
		vertical-align: middle
		border: 2px solid $color-green--enabled
		background-color: $color-green--enabled
		border-radius: 5px
		color: #000
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
		&:hover
			border: 2px solid $color-green--hover
			background-color: $color-green--hover
</style>
