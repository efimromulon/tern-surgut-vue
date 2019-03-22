<template>
	<button
		:class="['btn-accept', getBtnClassName()]"
		@click = "accept"

	>
		Применить
	</button>
</template>

<script>


	export default {

		name: 'button-accept',
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

			};
		},
		methods: {
			getBtnClassName(){
				let a = this.btnClassName;//button_>>G<< 7 - G
				let b = a;
				return b;
			},
			accept(){
				// switch (true){
				// 	case this.btnType === '' :
				// 		//this.$store.dispatch('');
				// };			
			},
		},
	};

</script>

<style lang="sass">

	.btn-accept
		cursor: pointer
		padding-left: 1rem
		padding-right: 1rem

		text-align: center
		vertical-align: middle

		background-color: $btn-accept-bg-color
		border: 2px solid $btn-accept-border-color
		color: $btn-accept-font-color
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
		//transition: color .05s linear,background-color .05s linear
		&:hover 
			background-color: $color-green--hover

</style>
