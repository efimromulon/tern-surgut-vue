<template>

	<div 
		:class="['btn-erase', getBtnClassName()]"
		title="Сбросить"
		@click = "erase"
	>
		<span>
			<svg-icon-erase/>
		</span>
	</div>

</template>

<script>

	import svgIconErase from '@/components/app-common/svg/svg-icon-erase'

	export default {

		name: 'button-erase',
		components: {
			svgIconErase,
		},
		props: {
			btnClassName: {
				type: String,
				required: true,
			},
			btnType: {
				type: String,
				required: true,
			},
		},
		data() {
			return {

			};
		},
		methods: {
			getBtnClassName(){
				let a = this.btnClassName;//button_>>G<< 7 - G
				let b = a + '__erase';
				return b;
			},
			erase(){
				switch (true){
					case this.btnType === 'core-menu' :
						//this.$store.dispatch('erase_search_result_tab');
				};			
			},
		},
	};

</script>

<style lang="sass">

	.btn-erase
		width: 24px
		height: 24px
		margin: 6px
		cursor: pointer
		opacity: .4

</style>
