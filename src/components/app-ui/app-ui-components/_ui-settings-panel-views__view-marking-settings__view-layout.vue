<template>
	<div class="marking-settings__view-layout">
		<div class="view-layout-header">
			<div class="view-layout-header__menu">
				<menu-datafilter/>
			</div>
			<div class="view-layout-header__snippet" v-if="vueSlider">
				<div class="view-layout-header__snippet-title">
					Диапазон прироста
				</div>
				<div class="view-layout-header__snippet-slider">
					<vue-slider 
						v-model="sliderValue"
						:min="min"
						:max="max"
						:min-range="1"
						:enable-cross="false"
						:process="process"
					></vue-slider>
				</div>
			</div>
		</div>
		<div class="view-layout-body">
			<div class="view-layout-body__snippet" v-if="datePicker">
				<div class="view-layout-body__snippet-title">
					Диапазон дат
				</div>
				<div class="view-layout-body__snippet-datepickers">
					<div class="date-picker">
						<div class="date-picker-title">
							анализ
						</div>
						<date-picker 
						v-model="analysisValue" 
						range 
						:shortcuts="shortcuts1" 
						:lang="lang" 
						confirm
						:first-day-of-week="1"
						format="YYYY-MM-DD"
						type="date"
						></date-picker>
					</div>
					<div class="date-picker">
						<div class="date-picker-title">
							сравнение
						</div>
						<date-picker 
						v-model="compareValue" 
						range 
						:shortcuts="shortcuts2" 
						:lang="lang" 
						confirm
						:first-day-of-week="1"
						format="YYYY-MM-DD"
						type="date"
						></date-picker>
					</div>
				</div>
			</div>
		</div>
		<div class="view-layout-footer">
			<buttonRectangle
					:btnClassName="btnClassName"
					:btnType="btnRectResetName"
					:btnText="btnRectResetText"
					:btnDisable="false"
			></buttonRectangle>
			<buttonRectangle
					:btnClassName="btnClassName"
					:btnType="btnRectAcceptName"
					:btnText="btnRectAcceptText"
					:btnDisable="false"
					:btnClick="SEND_NEW_REQUEST"
			></buttonRectangle>
		</div>
	</div>
</template>

<script>

	import {mapGetters, mapState} from 'vuex'
	import DatePicker from 'vue2-datepicker'
	import uiSettingsPanelViewsViewMarkingSettingsMenuDatafilter from './_ui-settings-panel-views__view-marking-settings__menu-datafilter.vue'
	export default {

		name: 'ui-settings-panel-views__view-marking-settings__view-layout',
		components: { 
			DatePicker,
			'menu-datafilter'	: uiSettingsPanelViewsViewMarkingSettingsMenuDatafilter,
		},

		props: {
			viewName: {
				type: String,
				required: true,
			},
			vueSlider: {
				type: Boolean,
				required: true,
			},
			datePicker: {
				type: Boolean,
				required: false,
			},
			min: {
				type: Number,
				required: false,
			},
			max: {
				type: Number,
				required: false,
			}
		},
		data () {
			return {
				viewNameForDP: '',
				sliderValue: [],
				process: dotsPos => [
					[0, dotsPos[0], { backgroundColor: 'red' }],
					[dotsPos[0], dotsPos[1], { backgroundColor: 'orange' }],
					[dotsPos[1], 100, { backgroundColor: 'green' }]
				],
				btnClassName: 'view-layout-btn',
				btnRectAcceptName: 'btn-accept',
				btnRectResetName: 'btn-reset',
				btnRectResetText: 'Сбросить',
				btnRectAcceptText: 'Применить',
				analysisValue: '',
				compareValue: '',
				lang: {
					days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
					months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
					pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
					placeholder: {
						date: 'Выберите Дату',
						dateRange: 'Выберите Диапазон Дат'
					}
				},
				shortcuts1: [
					{
						text: 'Сегодня',
						onClick: () => {
							this.analysisValue = [ new Date(), new Date() ]
						}
					}
				],
				shortcuts2: [
					{
						text: 'Сегодня',
						onClick: () => {
							this.compareValue = [ new Date(), new Date() ]
						}
					}
				],

			}
		},
		computed: {
			...mapGetters([
				'get_range_Datafilter_default',
				'get_range_Datafilter_By_Name',
				'GET_dates_compare',
				'GET_dates_analysis',
				'GET_dates_compare_default',
				'GET_dates_analysis_default'
			]),
			range_Datafilter_default(){
				return this.get_range_Datafilter_default
			},
			current_range_Datafilter(){
				return this.get_range_Datafilter_By_Name(this.viewName)
			},
			dates_compare(){
				return this.GET_dates_compare(this.viewNameForDP)
			},
			dates_analysis(){
				return this.GET_dates_analysis(this.viewNameForDP)
			},
			dates_compare_default(){
				return this.GET_dates_compare_default(this.viewNameForDP)
			},
			dates_analysis_default(){
				return this.GET_dates_analysis_default(this.viewNameForDP)
			}
		},
		watch: {
			range_Datafilter_default(newCount, oldCount){
			},
			current_range_Datafilter(newCount, oldCount){
				this.SET_DEFAULT_SLIDER_VALUE();
			},
			dates_compare(newCount, oldCount){
				this.SET_DEFAULT_DATEPICKERS_VALUE();
			},
			dates_analysis(newCount, oldCount){
				this.SET_DEFAULT_DATEPICKERS_VALUE();
			},
			dates_compare_default(newCount, oldCount){
				this.SET_DEFAULT_DATEPICKERS_VALUE();
			},
			dates_analysis_default(newCount, oldCount){
				this.SET_DEFAULT_DATEPICKERS_VALUE();
			}
		},
		mounted(){
			this.SET_PAYLOAD_FOR_DP(this.viewName);
			this.SET_DEFAULT_SLIDER_VALUE();
			this.SET_DEFAULT_DATEPICKERS_VALUE();
		},
		methods: {
			SET_PAYLOAD_FOR_DP(viewName){
				switch (true) {
					case viewName === 'fuelsell' : 
						this.viewNameForDP = 'fuel_sell';
						break;
					case viewName === 'fuelstock' : 
						this.viewNameForDP = 'fuel_stock';
						break;
					case viewName === 'articlesell' : 
						this.viewNameForDP = 'article_sell';
						break;
				};
			},
			SET_DEFAULT_SLIDER_VALUE(){

				let newRangeValue;

				newRangeValue = this.current_range_Datafilter.length === 0 ? this.range_Datafilter_default : this.current_range_Datafilter;
				this.sliderValue = this.sliderValue.length === 0 ? newRangeValue : this.sliderValue;

			},
			SET_DEFAULT_DATEPICKERS_VALUE(){

				let newDPValue_compare,
					newDPValue_analysis;

				newDPValue_compare = this.dates_compare.length === 0 ? this.dates_compare_default : this.dates_compare;
				newDPValue_analysis = this.dates_analysis.length === 0 ? this.dates_analysis_default : this.dates_analysis;

				this.compareValue 	= this.compareValue.length 	=== 0 	? newDPValue_compare : this.compareValue;
				this.analysisValue 	= this.analysisValue.length === 0 	? newDPValue_analysis : this.analysisValue;

			},
			SEND_NEW_REQUEST(){
				
			},
		},
	}
</script>

<style lang="sass">

	.marking-settings__view-layout
		position: relative

	.view-layout-header
		box-sizing: border-box
		width: 100%
		padding: 1rem
		padding-bottom: 0
	.view-layout-header__menu
		padding-bottom: 0
		position: relative
		&:after
			content: ''
			width: 100%
			height: 1px
			position: absolute
			bottom: 0
			left: 0
			right: 0
			border-top: 1px solid $srgt-light-blue
			opacity: .3
			z-index: 1
	.view-layout-header__snippet
		margin-top: 2rem
		width: 100%
		display: flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		justify-content: start
	.view-layout-header__snippet-title
		font-size: .8rem
		width: 30%
	.view-layout-header__snippet-slider
		width: 70%

	.view-layout-header__snippet-title, .view-layout-body__snippet-title, .date-picker-title
		font-size: .8rem
	.date-picker-title
		text-transform: uppercase

	.view-layout-body
		padding: 0 1rem
		margin-top: 2rem
	.view-layout-body__snippet
		width: 100%
		display: flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		justify-content: start
	.view-layout-body__snippet-title
		width: 30%
		padding-top: 1.85rem
	.view-layout-body__snippet-datepickers
		width: 70%
		display: flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		justify-content: start
	.date-picker
		width: 50%
		&:first-child
			margin-right: .5rem
		&:last-child
			margin-left: .5rem
		.mx-datepicker-range
			width: 100%
		.date-picker-title
			margin-bottom: .5rem

	.view-layout-footer
		padding: 1rem
		margin-top: 1rem
		//padding: 0 1rem 1rem
		text-align: right
		background-color: #F4F4F4


</style>