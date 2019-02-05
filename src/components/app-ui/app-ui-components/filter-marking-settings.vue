<template>
	<div class="filterMarkingSettings">
		<marking-settings-menu-types></marking-settings-menu-types>
		<component :is='currentMarkingSettingComponent'></component>
	</div>
</template>

<script>
	import markingSettingsMenuTypes from './filter-marking-settings/marking-settings-menu-types.vue'
	import markingSettingsContainer from './filter-marking-settings/marking-settings-container.vue'
	import markingSettingsExpressContainer from './filter-marking-settings/marking-settings-express-container.vue'
	export default {
		name: 'filter-marking-settings',
		data () {
			return {
				name: 'filter-marking-settings', 
			}
		},
		computed: {
			currentMarkingSettingComponent(){
				return this.$store.getters.get_markingSettingsMenuTypesComponentActive.typeName;
			},
		},
		created(){

		},
		mounted(){
		},
		methods: {
			//marking-settings-express-container
		},
		watch: {

		},
		components: {
			markingSettingsMenuTypes,
			markingSettingsContainer,
			markingSettingsExpressContainer
		}
	}
</script>

<style lang='sass'>
	.filterMarkingSettings
		width: 100%
</style>