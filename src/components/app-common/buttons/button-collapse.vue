<template>
	<div 
		:class="['btn-collapse', getBtnClassName()]"
		title="Свернуть"
		@click = "collapse"
	>
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path d="M15.293 14.707a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L12 11.414l3.293 3.293z">
				
				</path>
			</svg>
		</span>
	</div>
</template>

<script>
export default {

	name: 'button-collapse',
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
			let b = a + '__collapse';
			return b;
		},
		collapse(){
			// switch (true){
			// 	case this.btnType === 'search' :
		
					this.$store.dispatch('collapse_search');
			// };			
		},
	},
};
</script>

<style lang="sass">
	.btn-collapse
		width: 24px
		height: 24px
		margin: 6px
		cursor: pointer
		opacity: .4
</style>
