<template>
	<div id="app">
		<!-- <app-preloader></app-preloader> -->
		<!-- <app-map></app-map> -->
		<app-ui></app-ui>
		<!-- <app-popup-extended></app-popup-extended> -->
	</div>
</template>

<script>

	import appUi 	from '@/components/app-ui/app-ui.vue';
	import $ 		from 'jquery';

export default {
	name: 'app',
	components: {
		appUi,
	}
}
</script>

<style lang="sass">
</style>
