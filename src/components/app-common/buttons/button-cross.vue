<template>
	<div 
		:class="['btn-cross', getBtnClassName()]"
		title="Закрыть"
		@click = "close"
	>
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path fill-rule="evenodd" d="M12 10.586L8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 0 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 1 0-1.414-1.414L12 10.586z">
					
				</path>
			</svg>
		</span>
	</div>
</template>

<script>
export default {

	name: 'button-cross',
	props: {
		btnClassName: {
			type: String,
			required: true,
		},
		btnType: {
			type: String,
			required: true,
		},
		btnClick: {
			type: Function,
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
			let b = a + '__close';
			return b;
		},
		close(){
			switch (true){
				case this.btnType === 'search' :
					this.$store.dispatch('close_search_result_tab');
					this.btnClick();
			};			
		},
	},
};
</script>

<style lang="sass">
	.btn-cross
		width: 24px
		height: 24px
		margin: 6px
		cursor: pointer
		opacity: .4
</style>
