<template>
	<div class="menu-datafilter">
		<menu-datafilter-button
			:buttonData = "uiMarkingMenuDatafilter[key]"
			 v-for = "(item, key) in uiMarkingMenuDatafilter"
			 :key = "key"
		></menu-datafilter-button>
	</div>
</template>

<script>

	import {mapGetters} from 'vuex'
	import uiSettingsPanelViewsViewMarkingSettingsMenuDatafilterButton from './_ui-settings-panel-views__view-marking-settings__menu-datafilter-button.vue'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings__menu-datafilter',
		components: {
			'menu-datafilter-button': uiSettingsPanelViewsViewMarkingSettingsMenuDatafilterButton,
		},
		data () {
			return {

			}
		},
		computed: {
			...mapGetters([
				'get_uiMarkingMenuDatafilter',
			]),
			uiMarkingMenuDatafilter(){
				return this.get_uiMarkingMenuDatafilter
			},
		},

		watch: {
			uiMarkingMenuDatafilter(newCount, oldCount){
			},
		},
	}
</script>

<style lang="sass">

	.menu-datafilter
		width: 100%
		display: flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		justify-content: start

</style>