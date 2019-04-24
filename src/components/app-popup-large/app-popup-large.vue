<template>
	<div class="app-popup-large">
		<div class="popup-large-snippet">
			<div class="popup-large-snippet__header">
				<div class="popup-large-snippet__header-left">
					<div class="popup-large-snippet__name">{{stationInfo.companyName}}</div>
				</div>
				<div class="popup-large-snippet__header-right">
					<div class="popup-large-snippet__category"><span>{{stationInfo.category}}</span></div>
					<div class="popup-large-snippet__address"><span>{{stationInfo.stationAddress}}</span></div>
					<button-cross
						:btnClassName = "`popup-large-snippet`"
						:btnType = "`popup-large`"
						:btnClick = "CLOSE_POPUP"
					>
					</button-cross>
				</div>
			</div>
			<div class="popup-large-snippet__wrapper">
				<div class="popup-large-snippet__sidebar">
					<menu-vertical/>
				</div>
				<div class="popup-large-snippet__body">
					<div class="popup-large-snippet__body-top">
						<span class="body-top__view-name">{{currentView.buttonName}}</span>
						
						<div class="body-top__controls-right">
							<div class="body-top__control">
								<span>{{currentDate}}</span>
							</div>
							<div class="body-top__control">
								<v-select :options="shiftSelectOptions"></v-select>
							</div>
						</div>
					</div>
					<div class="popup-large-snippet__body-wrapper">
						<component :is="currentView.view" :stationId="stationId"></component>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
			
	import { mapGetters } 	from 'vuex'

	import header 			from './popup-large-components/_header.vue'
	import sidebar 			from './popup-large-components/_sidebar.vue'
	import body 			from './popup-large-components/_body.vue'
	import menuVertical 	from './popup-large-components/_menu-vertical.vue'

	import viewServices 	from './popup-large-components/view-services.vue'
	import viewFuelstock 	from './popup-large-components/view-fuelstock.vue'
	import viewFuelsell 	from './popup-large-components/view-fuelsell.vue'
	import viewArticlesell 	from './popup-large-components/view-articlesell.vue'

	export default {

		name: 'app-popup-large',

		components: {
			'app-popup-header': 	header,
			'app-popup-sidebar': 	sidebar,
			'app-popup-body': 		body,
			'menu-vertical': 		menuVertical,
			'view-services': viewServices,
			'view-fuelstock': viewFuelstock,
			'view-fuelsell': viewFuelsell,
			'view-articlesell': viewArticlesell,
		},

		data () {
			return {
				stationId: 'nnp-m1_117',
				shiftSelectOptions: ['последняя смена','предыдущая смена']
			}
		},

		computed: {

			...mapGetters([
				'GET_station_info_by_Id',
				'get_uiPopupLargeMenuVerticalButtonsActive',
			]),
			stationInfo(){
				return this.GET_station_info_by_Id(this.stationId);
			},
			currentView(){
				return this.get_uiPopupLargeMenuVerticalButtonsActive;
			},
			currentDate(){
				var options = {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					},
					curDate = new Date();

				return curDate.toLocaleString("ru", options);
			}

		},

		watch: {

			stationInfo(newCount, oldCount){
			},
			currentView(newCount, oldCount){
			},

		},

		methods: {
			CLOSE_POPUP(){

			},
		}


	}

</script>

<style lang="sass">
	.app-popup-large
		position: absolute
		top: 50%
		left: 50%
		z-index: 3
		width: 65vw
		height: 65vh
		transform: translate(-50%,-50%)
	.popup-large-snippet
		@include border(2)
		@include shadow(2)
		background-color: white
		width: 100%
		height: 100%
		border-radius: 10px
	.popup-large-snippet__header
		width: 100%
		height: 100px
		position: relative
		display: flex
		user-select: none
		white-space: nowrap
		flex-direction: row
		border-bottom: 1px solid rgba(0, 0, 0, .1)
	.popup-large-snippet__header-left
		width: 17.5%
		border-right: 1px solid rgba(0, 0, 0, .1)
		font-family: 'segoe ui'
	.popup-large-snippet__name
		padding: 30px 30px 30px 50px
		text-align: center
		font-size: 2rem 
	.popup-large-snippet__header-right
		width: 82.5%
	.popup-large-snippet__close
		right: 36px
		position: absolute
		top: 50%
		right: calc((100px - 48px) / 2)
		transform: translateY(-50%)
		z-index: 999999999
		width: 48px !important
		height: 48px !important
		margin: 0 !important
		svg
			width: 48px
			height: 48px
	.popup-large-snippet__category
		height: 50%
		padding-left: calc((100px - 48px) / 2)
		white-space: pre-wrap
		display: flex
		margin: auto
		line-height: 50%
		text-align: center
		span
			display: inline-block
			margin-top: auto
			vertical-align: bottom
			line-height: normal
			font-size: 1.2rem 

	.popup-large-snippet__address
		height: 50%
		padding-left: calc((100px - 48px) / 2)
		white-space: pre-wrap
		display: flex
		margin: auto
		line-height: 50%
		text-align: center
		span
			display: inline-block
			margin-bottom: auto
			vertical-align: top
			line-height: normal
			font-size: 0.85rem 


	.popup-large-snippet__wrapper
		width: 100%
		height: calc(100% - 100px)
		position: relative
		display: flex
		user-select: none
		white-space: nowrap
		flex-direction: row
	.popup-large-snippet__sidebar
		display: flex
		user-select: none
		white-space: nowrap
		flex-direction: column
		width: 17.5%
		border-right: 1px solid rgba(0, 0, 0, .1)
	.popup-large-snippet__body
		width: 82.5%
		background-color: #FAFAF9
	.popup-large-snippet__body-top
		width: 100%
		height: 45px
		border-bottom: 1px solid rgba(0, 0, 0, .1)
		display: flex
		white-space: nowrap
		flex-direction: row
		.body-top__view-name
			padding-left: calc((100px - 48px) / 2)
			line-height: 45px
			font-weight: 600
	.body-top__controls-right
		position: absolute
		right: calc((100px - 48px) / 2)
		top: 0
	.body-top__control
		display: inline-block
		margin-right: 15px
		line-height: 45px
		&:first-child
			line-height: 45px
		&:last-child
			margin-right: 0
		select
			border-radius: 5px
			border-color: #686868
			box-sizing: border-box
			align-items: center
			white-space: pre
			color: white
			background-color: #686868
			cursor: default
			border-width: 1px
			border-style: solid
			border-color: initial
			border-image: initial
		.v-select
			width: 250px
			input
				outline-offset: none !important
</style>