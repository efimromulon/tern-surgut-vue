<template>

</template>

<script>

	import { FluentRevealEffect } from "fluent-reveal-effect"
	export default {
		name: 'ui-settings-panel-menus__menu-layers-settings',
		data () {
			return {
			}
		},
		computed: {

		},
		created(){
		},
		mounted(){
		},
		methods: {
			fluent(){
				FluentRevealEffect.applyEffect(".marking-settings-menu_item", {
					lightColor: "rgba(255,255,255,0.1)",
					gradientSize: 150
				});
				FluentRevealEffect.applyEffect(".marking-settings-menu_item", {
					clickEffect: true
				});
				FluentRevealEffect.applyEffect(".marking-settings-menu-types", {
					clickEffect: true,
					lightColor: "rgba(255,255,255,0.6)",
					gradientSize: 80,
					isContainer: true,
					children: {
						borderSelector: ".marking-settings-menu-types_wrapper",
						elementSelector: ".marking-settings-menu_item",
						lightColor: "rgba(255,255,255,0.3)",
						gradientSize: 150
					}
				});
			},
		},
		watch: {
		},
		components: {

		}
	}
</script>

<style lang='sass'>
</style>