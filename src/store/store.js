import Vue from 'vue'
import Vuex from 'vuex'
import map from './modules/map.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		map,
	},
	state: {

		//Preloader
			appLoading: true,
			appLoadingText: '',
			appLoadingTextArray: [

				{textActive: true, textItem: 'Загрузка STORE'},

			],
		//Preloader - END
		//Search
			appSearchButtonActive: false,
			clearSearch: false,
			searchResults: [],
		//Search - END
		//Markers_info_primary
			markers_info_primary: [
				{
					label: 'АЗК-3',
					category: 'Калининграднефтепродукт',
					coords: [ 60.056967, 30.384833 ],
					id: 1,
					color: 'green',
				},
				{
					label: 'АЗК-23',
					category: 'Киришиавтосервис',
					coords: [ 60.034479, 30.317845 ],
					id: 2,
					color: 'orange',
				},
				{
					label: 'АЗК-10',
					category: 'Киришиавтосервис',
					id: 3,
					coords: [ 60.026616, 30.431933 ],
					color: 'green',
				},
				{
					label: 'АЗК-15',
					category: 'Киришиавтосервис',
					id: 4,
					coords: [ 59.8695, 30.233333 ],
					color: 'green',
				},
				{
					label: 'АЗК-18',
					category: 'Киришиавтосервис',
					id: 5,
					coords: [ 59.899535, 30.288713 ],
					color: 'green',
				},
				{
					label: 'АЗС-21',
					category: 'Киришиавтосервис',
					id: 6,
					coords: [ 59.752829, 30.551291 ],
					color: 'green',
				},
				{
					label: 'АЗК-1',
					category: 'Киришиавтосервис',
					id: 7,
					coords: [ 59.940859, 30.503966 ],
					color: 'green',
				},
				{
					label: 'АЗК-24',
					category: 'Киришиавтосервис',
					id: 8,
					coords: [ 59.982428, 30.513021 ],
					color: 'red',
				},
				{
					label: 'АЗК-27',
					category: 'Киришиавтосервис',
					id: 9,
					coords: [ 59.988555, 30.469503 ],
					color: 'orange',
				},
				{
					label: 'АЗК-26',
					category: 'Киришиавтосервис',
					id: 10,
					coords: [ 59.980484, 30.459962 ],
					color: 'green',
				},
				{
					label: 'АЗК-28',
					category: 'Киришиавтосервис',
					id: 11,
					coords: [ 60.000906, 30.44415 ],
					color: 'red',
				},
				{
					label: 'АЗК-19',
					category: 'Киришиавтосервис',
					id: 12,
					coords: [ 59.861682, 30.233653 ],
					color: 'orange',
				},
				{
					label: 'АЗС-200',
					category: 'Киришиавтосервис',
					id: 13,
					coords: [ 59.734617, 30.098631 ],
					color: 'orange',
				},
				{
					label: 'АЗК-14',
					category: 'Киришиавтосервис',
					id: 14,
					coords: [ 60.033417, 29.982333 ],
					color: 'green',
				},
				{
					label: 'АЗК-25',
					category: 'Киришиавтосервис',
					id: 15,
					coords: [ 59.761572, 30.326684 ],
					color: 'red',
				},
				{
					label: 'АЗС-5',
					category: 'Киришиавтосервис',
					id: 16,
					coords: [ 59.889852, 30.475427 ],
					color: 'red',
				},
				{
					label: 'АЗК-7',
					category: 'Киришиавтосервис',
					id: 17,
					coords: [ 59.846989, 30.483982 ],
					color: 'green',
				},
				{
					label: 'АЗК-2',
					category: 'Киришиавтосервис',
					coords: [ 59.97045, 30.285633 ],
					id: 18,
					color: 'orange',
				},
				{
					label: 'АЗК-8',
					category: 'Киришиавтосервис',
					id: 19,
					coords: [ 59.991759, 30.25495 ],
					color: 'green',
				},
				{
					label: 'АЗСМ-12',
					category: 'Киришиавтосервис',
					id: 20,
					coords: [ 60.016432, 30.313272 ],
					color: 'green',
				},
				{
					label: 'АЗК-4',
					category: 'Киришиавтосервис',
					id: 21,
					coords: [ 59.811767, 30.382867 ],
					color: 'green',
				},
				{
					label: 'АЗК-17',
					category: 'Киришиавтосервис',
					id: 22,
					coords: [ 59.765891, 30.463874 ],
					color: 'green',
				},
				{
					label: 'АЗК-31',
					category: 'Киришиавтосервис',
					id: 23,
					coords: [ 59.79367, 30.39136 ],
					color: 'orange',
				},
				{
					label: 'АЗК-30',
					category: 'Киришиавтосервис',
					id: 24,
					coords: [ 59.753112, 30.320081 ],
					color: 'green',
				},
				{
					label: 'АЗК-11',
					category: 'Киришиавтосервис',
					id: 25,
					coords: [ 59.856581, 30.423961 ],
					color: 'orange',
				},
				{
					label: 'КАЗС-2',
					category: 'Киришиавтосервис',
					id: 26,
					coords: [ 59.492, 32.058567 ],
					color: 'orange',
				},
				{
					label: 'АЗС-217',
					category: 'Киришиавтосервис',
					id: 27,
					coords: [ 59.458096, 31.974633 ],
					color: 'green',
				},
				{
					label: 'АЗС-264',
					category: 'Киришиавтосервис',
					id: 28,
					coords: [ 59.475133, 32.044917 ],
					color: 'green',
				},
				{
					label: 'АЗС-265',
					category: 'Киришиавтосервис',
					id: 29,
					coords: [ 59.438491, 32.022216 ],
					color: 'red',
				},
				{
					label: 'АЗК-9',
					category: 'Киришиавтосервис',
					id: 30,
					coords: [ 60.17685, 30.150667 ],
					color: 'green',
				},
				{
					label: 'АЗС-229',
					category: 'Киришиавтосервис',
					id: 31,
					coords: [ 61.033026, 30.135055 ],
					color: 'green',
				},
				{
					label: 'АЗС-231',
					category: 'Киришиавтосервис',
					id: 32,
					coords: [ 61.019283, 30.134969 ],
					color: 'red',
				},
				{
					label: 'АЗС-230',
					category: 'Киришиавтосервис',
					id: 33,
					coords: [ 60.546158, 30.192476 ],
					color: 'orange',
				},
				{
					label: 'АЗК-13',
					category: 'Киришиавтосервис',
					id: 34,
					coords: [ 59.688767, 29.920267 ],
					color: 'green',
				},
				{
					label: 'АЗС-237',
					category: 'Киришиавтосервис',
					id: 35,
					coords: [ 59.638017, 33.517017 ],
					color: 'green',
				},
				{
					label: 'АЗС-238',
					category: 'Киришиавтосервис',
					id: 36,
					coords: [ 59.669967, 33.500967 ],
					color: 'orange',
				},
				{
					label: 'АЗС-235',
					category: 'Киришиавтосервис',
					id: 37,
					coords: [ 59.925878, 34.211225 ],
					color: 'green',
				},
				{
					label: 'АЗС-248',
					category: 'Киришиавтосервис',
					id: 38,
					coords: [ 59.695267, 33.0802 ],
					color: 'green',
				},
				{
					label: 'АЗС-239',
					category: 'Киришиавтосервис',
					id: 39,
					coords: [ 59.477845, 33.833811 ],
					color: 'orange',
				},
				{
					label: 'АЗК-33',
					category: 'Киришиавтосервис',
					id: 40,
					coords: [ 59.347479, 34.863643 ],
					color: 'green',
				},
				{
					label: 'АЗС-201',
					category: 'Киришиавтосервис',
					id: 41,
					coords: [ 59.927675, 32.290146 ],
					color: 'red',
				},
				{
					label: 'АЗС-247',
					category: 'Киришиавтосервис',
					id: 42,
					coords: [ 59.923582, 32.322396 ],
					color: 'green',
				},
				{
					label: 'АЗС-263',
					category: 'Киришиавтосервис',
					id: 43,
					coords: [ 60.067867, 32.320359 ],
					color: 'orange',
				},
				{
					label: 'АЗС-220',
					category: 'Киришиавтосервис',
					id: 44,
					coords: [ 60.904245, 34.150247 ],
					color: 'green',
				},
				{
					label: 'АЗС-243',
					category: 'Киришиавтосервис',
					id: 45,
					coords: [ 60.906251, 34.146127 ],
					color: 'green',
				},
				{
					label: 'АЗС-249',
					category: 'Киришиавтосервис',
					id: 46,
					coords: [ 60.992703, 35.462083 ],
					color: 'orange',
				},
				{
					label: 'АЗС-219',
					category: 'Киришиавтосервис',
					id: 47,
					coords: [ 60.725957, 33.585309 ],
					color: 'green',
				},
				{
					label: 'АЗС-222',
					category: 'Киришиавтосервис',
					id: 48,
					coords: [ 60.726839, 33.473472 ],
					color: 'green',
				},
				{
					label: 'АЗС-221',
					category: 'Киришиавтосервис',
					id: 49,
					coords: [ 60.426603, 33.860482 ],
					color: 'red',
				},
				{
					label: 'АЗС-245',
					category: 'Киришиавтосервис',
					id: 50,
					coords: [ 60.718467, 33.62675 ],
					color: 'green',
				},
				{
					label: 'АЗС-223',
					category: 'Киришиавтосервис',
					id: 51,
					coords: [ 58.741009, 29.828157 ],
					color: 'green',
				},
				{
					label: 'АЗС-224',
					category: 'Киришиавтосервис',
					id: 52,
					coords: [ 58.772604, 29.872456 ],
					color: 'orange',
				},
				{
					label: 'АЗС-225',
					category: 'Киришиавтосервис',
					id: 53,
					coords: [ 58.810617, 30.332067 ],
					color: 'green',
				},
				{
					label: 'АЗС-212',
					category: 'Киришиавтосервис',
					id: 54,
					coords: [ 59.3025, 29.944167 ],
					color: 'green',
				},
				{
					label: 'АЗС-227',
					category: 'Киришиавтосервис',
					id: 55,
					coords: [ 59.45514, 29.506174 ],
					color: 'red',
				},
				{
					label: 'АЗС-228',
					category: 'Киришиавтосервис',
					id: 56,
					coords: [ 59.585767, 29.341317 ],
					color: 'green',
				},
				{
					label: 'АЗС-213',
					category: 'Киришиавтосервис',
					id: 57,
					coords: [ 59.380402, 28.629671 ],
					color: 'orange',
				},
				{
					label: 'АЗС-214',
					category: 'Киришиавтосервис',
					id: 58,
					coords: [ 59.380911, 28.634112 ],
					color: 'green',
				},
				{
					label: 'АЗС-262',
					category: 'Киришиавтосервис',
					id: 59,
					coords: [ 59.77795, 28.4741 ],
					color: 'red',
				},
				{
					label: 'АЗС-232',
					category: 'Киришиавтосервис',
					id: 60,
					coords: [ 59.104033, 28.13125 ],
					color: 'green',
				},
				{
					label: 'АЗС-233',
					category: 'Киришиавтосервис',
					id: 61,
					coords: [ 59.1047, 28.108867 ],
					color: 'orange',
				},
				{
					label: 'АЗК-20',
					category: 'Киришиавтосервис',
					id: 62,
					coords: [ 59.897461, 30.687697 ],
					color: 'green',
				},
				{
					label: 'АЗК-22',
					category: 'Киришиавтосервис',
					id: 63,
					coords: [ 59.944262, 30.591116 ],
					color: 'orange',
				},
				{
					label: 'АЗК-29',
					category: 'Киришиавтосервис',
					id: 64,
					coords: [ 59.936369, 31.812944 ],
					color: 'green',
				},
				{
					label: 'АЗК-32',
					category: 'Киришиавтосервис',
					id: 65,
					coords: [ 59.935398, 31.736472 ],
					color: 'orange',
				},
				{
					label: 'АЗК-16',
					category: 'Киришиавтосервис',
					id: 66,
					coords: [ 58.826559, 31.479028 ],
					color: 'red',
				},
				{
					label: 'АЗК-6',
					category: 'Киришиавтосервис',
					id: 67,
					coords: [ 59.17533, 31.555286 ],
					color: 'green',
				}
			],
		//Markers_info_primary - END
		//InterfaceTop
			buttonInterfaceTopActive: [

				{buttonID: 0, buttonName: 'funnel', buttonState: false},
				{buttonID: 1, buttonName: 'layers', buttonState: false},

			],
			buttonColors: {
				button_Green: 	{buttonID: 0, buttonName: 'button_Green', 	buttonState: true},
				button_Orange: 	{buttonID: 1, buttonName: 'button_Orange', 	buttonState: true},
				button_Red: 	{buttonID: 2, buttonName: 'button_Red', 	buttonState: true},
				button_Grey: 	{buttonID: 3, buttonName: 'button_Grey', 	buttonState: true}
			},
			buttonFiltersMenu: [
				{
					buttonID: 0, 
					buttonName: 'Слои', 
					buttonFilterName: 'filter-layers-settings', 
					buttonState: true

				},
				{

					buttonID: 1, 
					buttonName: 'Настройки маркировки', 
					buttonFilterName: 'filter-marking-settings', 
					buttonState: false

				},
			],
		//InterfaceTop - END
		//FILTERS top
			filtersTop: {

				SDOavailable: {

					0: {id: 0, name: 'Киришиавтосервис', 		state: true},
					1: {id: 1, name: 'Калининграднефтепродукт', state: true},
					2: {id: 2, name: 'Тверьнефтепродукт', 		state: true},
					3: {id: 3, name: 'Новгороднефтепродукт', 	state: true},
					4: {id: 4, name: 'Псковнефтепродукт', 		state: true},

				},
				layersByColor: {

					0: {id: 0, name	: 'green'	, state: true},
					1: {id: 1, name	: 'orange'	, state: true},
					2: {id: 2, name	: 'red'		, state: true},
					3: {id: 3, name	: 'grey'	, state: true},

				},
				layersByType: {

					0: {id: 0, name: "Все АЗС", state: true},
					1: {id: 1, name: "СДО", 	state: false},
					2: {id: 2, name: "Регионы", state: false},

				},

			},
		//FILTERS top - END
		//USER

			currentUser: {},
		//USER - END
		//MAP DATA
			mapStationsLatLngKNP: [],
			mapStationsLatLngKAS: [],
			mapStationsLatLngNNP: [],
			mapStationsLatLngPNP: [],
			mapStationsLatLngTNP: [],

			mapStationsLatLngKNPgreen: [],
			mapStationsLatLngKNPorange: [],
			mapStationsLatLngKNPred: [],

			mapStationsLatLngKASgreen: [],
			mapStationsLatLngKASorange: [],
			mapStationsLatLngKASred: [],

			mapStationsLatLngNNPgreen: [],
			mapStationsLatLngNNPorange: [],
			mapStationsLatLngNNPred: [],

			mapStationsLatLngPNPgreen: [],
			mapStationsLatLngPNPorange: [],
			mapStationsLatLngPNPred: [],

			mapStationsLatLngTNPgreen: [],
			mapStationsLatLngTNPorange: [],
			mapStationsLatLngTNPred: [],

			mapStationsInfo: [],
			mapBoundsCurrent: {},
			mapLayersAvailible: {},
		//MAP DATA - END
		//AZS pop-up

			mapAZSpopupInfo: {},
		//AZS pop-up - END
		//Indicators
			indicators: {
				'getFuelStock': 	{

					'data': [],
					'indicator': {},
					'express': {},

				},
				'getArticleSell': 	{

					'data': [],
					'indicator': {},
					'express': {},

				},
				'getFuelSell': 		{

					'data': [],
					'indicator': {},
					'express': {},

				},
			},
			indicatorsButtonsExpress: [

			],
			indicatorsMainMenuButtons: [

			],
			indicatorsSubMenuButtonsgetFuelStock: [
				
			],
			indicatorsSubMenuButtonsgetFuelSell: [
				
			],
			indicatorsSubMenuButtonsgetArticleSell: [
				
			],
		//Indicators - END
		//marking-settings
			markingSettingsMenuTypes: [
				{
					typeId: 0, 
					typeName: 'Экспресс маркировка', 
					typeComponent: 'marking-settings-express-container', 
					typeState: true
				},
				{
					typeId: 1, 
					typeName: 'Расширенные настройки', 
					typeComponent: 'marking-settings-container',
					typeState: false
				},
			],
		//marking-settings - END
	},

	mutations: {
		//Preloader
			CHANGE_APPLOADING: (state, payload) => {
				state.appLoading = payload;
			},
			CHANGE_APPLOADINGTEXTARRAY: (state, payload) => {
				store.state.appLoadingTextArray = payload;
			},
			CHANGE_APPLOADINGTEXT: (state, payload) => {
				let nextText;
				if(payload === undefined) nextText = state.appLoadingTextArray[0].textItem;
				if(payload !== undefined) nextText = state.appLoadingTextArray[payload].textItem;
				state.appLoadingText = nextText;
			},
		//Preloader - END
		//Search
			CHANGE_SEARCHRESULTS: (state, payload) => {
				state.searchResults = [];
				for(var i=0;i<payload.length;i++){
					state.searchResults.push(payload[i]);
				};
			},
			TOGGLE_SEARCH_BUTTON: (state) => {
				state.appSearchButtonActive = !state.appSearchButtonActive
			},
			CLEAR_SEARCH_INPUT: (state) => {
				state.clearSearch = !state.clearSearch
			},
		//Search - END
		//InterfaceTop
			TOGGLE_INTERFACETOP_BUTTON: (state, payload) => {

				let buttonArray = payload.buttonArray,
					buttonId = payload.id;
				console.log('store buttonArray', buttonArray);
				console.log('store buttonId', buttonId);
				switch (true) {

					case buttonArray === 'buttonFiltersMenu' : 

						if(state[buttonArray].find(button => button.buttonID === buttonId).buttonState){
							return
						} else {
							state[buttonArray].find(button => button.buttonID === buttonId).buttonState = 
							!state[buttonArray].find(button => button.buttonID === buttonId).buttonState;
							for(var i = 0; i < state.buttonFiltersMenu.length - 1; i++){
								state[buttonArray].forEach(function(e) {
								if(e.buttonID !== buttonId){e.buttonState = false};
								});
							};
						};					
						break;

					case buttonArray === 'buttonColors' :

						state[buttonArray][buttonId].buttonState = 
						!state[buttonArray][buttonId].buttonState;
						break;

					case buttonArray !== 'buttonFiltersMenu' :

						state[buttonArray].find(button => button.buttonID === buttonId).buttonState = 
						!state[buttonArray].find(button => button.buttonID === buttonId).buttonState;
						break;

				};

			},
		//InterfaceTop - END
		//InterfaceLeft
			TOGGLE_FILTERS_TOP_BY_FILTER: (state, payload) => {

				let filterName 		= payload.filterName,
					filterItemId 	= payload.filterItemId;

				switch (filterName) {

					case 'SDOavailable' :
						toggle_filter_any_true(filterName, filterItemId, state);
						break;

					case 'layersByColor' :
						toggle_filter_any_true(filterName, filterItemId, state);
						break;

					case 'layersByType' :
						toggle_filter_one_true(filterName, filterItemId, state);
						break;

				};
				//toggle_filter_one_true
					function toggle_filter_one_true(filterName, filterItemId, state){

						if(state.filtersTop[filterName][filterItemId].state){ 

							return false;

						} else {

							Object.keys(state.filtersTop[filterName]).forEach(function (item) {

								if( item == filterItemId ){

									state.filtersTop[filterName][item].state = true;

								} else {

									state.filtersTop[filterName][item].state = false;

								};

							});

						};

					};
				//toggle_filter_one_true - END
				//toggle_filter_any_true
					function toggle_filter_any_true(filterName, filterItemId, state){

						let a = state.filtersTop[filterName][filterItemId].state;

							a = !a;
							state.filtersTop[filterName][filterItemId].state = a;

					};
				//toggle_filter_any_true - END
				
			},
		//InterfaceLeft - END
		//Get Json (User, AZS)
			GET_LOCAL_JSON: (state, jsonPayload) => {

				let a = jsonPayload.jsonName,
					b = jsonPayload.jsonData;

				let promiseForSortByColors = new Promise((resolve, reject) => {

					function sortStationsBySDO(b){

						let sdo1 = [], 
							sdo2 = [], 
							sdo3 = [], 
							sdo4 = [], 
							sdo5 = [],
							stationsInfo = [];

						for (var i = 0; i < b.length; i++) {

							b[i].sStationCategory = b[i].sStationCategory.replace(/\s+/g, '');

						};

						for (var i = 0; i < b.length; i++) {

							let currentDataItem = b[i];

							switch (true) {
								case currentDataItem.sStationCategory == 'Киришиавтосервис' : 
									sdo1.push(
										{
											
											lat: 				currentDataItem.dStationLatitude,
											lng: 				currentDataItem.dStationLongitude,
											id: 				currentDataItem.sStationId
										}
									);
									stationsInfo.push(
										{
											sCompanyName:		currentDataItem.sCompanyName,
											sDepartmentId:		currentDataItem.sDepartmentId,
											sSort:				currentDataItem.sSort,
											sStationAddress:	currentDataItem.sStationAddress,
											sStationCategory:	currentDataItem.sStationCategory,
											sStationCity:		currentDataItem.sStationCity,
											sStationId:			currentDataItem.sStationId,
											sStationImage:		currentDataItem.sStationImage,
											sStationLabel:		currentDataItem.sStationLabel,
											sStationName:		currentDataItem.sStationName,
											sStationPhone:		currentDataItem.sStationPhone,
											sStationPosta:		currentDataItem.sStationPostal
										}
									);
									break;
								case currentDataItem.sStationCategory == 'Новгороднефтепродукт' : 
									sdo2.push(
										{
											
											lat: 				currentDataItem.dStationLatitude,
											lng: 				currentDataItem.dStationLongitude,
											id: 				currentDataItem.sStationId
										}
									);
									stationsInfo.push(
										{
											sCompanyName:		currentDataItem.sCompanyName,
											sDepartmentId:		currentDataItem.sDepartmentId,
											sSort:				currentDataItem.sSort,
											sStationAddress:	currentDataItem.sStationAddress,
											sStationCategory:	currentDataItem.sStationCategory,
											sStationCity:		currentDataItem.sStationCity,
											sStationId:			currentDataItem.sStationId,
											sStationImage:		currentDataItem.sStationImage,
											sStationLabel:		currentDataItem.sStationLabel,
											sStationName:		currentDataItem.sStationName,
											sStationPhone:		currentDataItem.sStationPhone,
											sStationPosta:		currentDataItem.sStationPostal
										}
									);
									break;
								case currentDataItem.sStationCategory == 'Псковнефтепродукт' : 
									sdo3.push(
										{
											
											lat: 				currentDataItem.dStationLatitude,
											lng: 				currentDataItem.dStationLongitude,
											id: 				currentDataItem.sStationId
										}
									);
									stationsInfo.push(
										{
											sCompanyName:		currentDataItem.sCompanyName,
											sDepartmentId:		currentDataItem.sDepartmentId,
											sSort:				currentDataItem.sSort,
											sStationAddress:	currentDataItem.sStationAddress,
											sStationCategory:	currentDataItem.sStationCategory,
											sStationCity:		currentDataItem.sStationCity,
											sStationId:			currentDataItem.sStationId,
											sStationImage:		currentDataItem.sStationImage,
											sStationLabel:		currentDataItem.sStationLabel,
											sStationName:		currentDataItem.sStationName,
											sStationPhone:		currentDataItem.sStationPhone,
											sStationPosta:		currentDataItem.sStationPostal
										}
									);
									break;
								case currentDataItem.sStationCategory == 'Калининграднефтепродукт' : 
									sdo4.push(
										{
											
											lat: 				currentDataItem.dStationLatitude,
											lng: 				currentDataItem.dStationLongitude,
											id: 				currentDataItem.sStationId
										}
									);
									stationsInfo.push(
										{
											sCompanyName:		currentDataItem.sCompanyName,
											sDepartmentId:		currentDataItem.sDepartmentId,
											sSort:				currentDataItem.sSort,
											sStationAddress:	currentDataItem.sStationAddress,
											sStationCategory:	currentDataItem.sStationCategory,
											sStationCity:		currentDataItem.sStationCity,
											sStationId:			currentDataItem.sStationId,
											sStationImage:		currentDataItem.sStationImage,
											sStationLabel:		currentDataItem.sStationLabel,
											sStationName:		currentDataItem.sStationName,
											sStationPhone:		currentDataItem.sStationPhone,
											sStationPosta:		currentDataItem.sStationPostal
										}
									);
									break;
								case currentDataItem.sStationCategory == 'Тверьнефтепродукт' : 
									sdo5.push(
										{
											
											lat: 				currentDataItem.dStationLatitude,
											lng: 				currentDataItem.dStationLongitude,
											id: 				currentDataItem.sStationId
										}
									);
									stationsInfo.push(
										{
											sCompanyName:		currentDataItem.sCompanyName,
											sDepartmentId:		currentDataItem.sDepartmentId,
											sSort:				currentDataItem.sSort,
											sStationAddress:	currentDataItem.sStationAddress,
											sStationCategory:	currentDataItem.sStationCategory,
											sStationCity:		currentDataItem.sStationCity,
											sStationId:			currentDataItem.sStationId,
											sStationImage:		currentDataItem.sStationImage,
											sStationLabel:		currentDataItem.sStationLabel,
											sStationName:		currentDataItem.sStationName,
											sStationPhone:		currentDataItem.sStationPhone,
											sStationPosta:		currentDataItem.sStationPostal
										}
									);
									break;
							};
						};

						console.log('state.mapStationsLatLngKNP0',state.mapStationsLatLngKNP);
						state.mapStationsLatLngKNP = sdo1;
						console.log('state.mapStationsLatLngKNP1',state.mapStationsLatLngKNP);
						state.mapStationsLatLngKAS = sdo2;
						state.mapStationsLatLngNNP = sdo3;
						state.mapStationsLatLngPNP = sdo4;
						state.mapStationsLatLngTNP = sdo5;
						state.mapStationsInfo = stationsInfo;
					};

					resolve(sortStationsBySDO(b));

				});

				console.log(a);

				let knpR = [], knpO = [], knpG = [];
				let kasR = [], kasO = [], kasG = [];
				let nnpR = [], nnpO = [], nnpG = [];
				let pnpR = [], pnpO = [], pnpG = [];
				let tnpR = [], tnpO = [], tnpG = [];

				switch (true) {
					case a === 'getCurrentUser' : 
						state.currentUser = b;
						break;
					case a === 'getAzsInfo' : 
						state.mapAZSpopupInfo = b;
						break;
					case a === 'getDepartmentFull' : 
				promiseForSortByColors.then(
					result => {

						let currentMarkingType, //Экспресс маркировка OR Расширенные настройки
							currentIndicatorType, 
							currentRange, 
							currentData, 
							dataName, 
							currentDataIdsGreen = [], 
							currentDataIdsOrange = [], 
							currentDataIdsRed = [], 
							firstRangeName;//express or indicator

						Object.keys(state.markingSettingsMenuTypes).forEach(function (item) {

							if( state.markingSettingsMenuTypes[item].typeState == true ){

								currentMarkingType = state.markingSettingsMenuTypes[item].typeName;

							};

						});

						//console.log(currentMarkingType, 'currentMarkingType');

						switch(true) {
							case currentMarkingType == 'Экспресс маркировка':
									currentIndicatorType = state.indicatorsButtonsExpress.filter(item => item.active === true)[0].mainMenuButtonJson;//active express type
									currentRange = state.indicators[currentIndicatorType].express.indicator.range;
									currentData = state.indicators[currentIndicatorType].data;
									console.log('%c currentData!', 
										`font-weight: bold; 
										font-size: 50px;
										color: red; 
										text-shadow: 3px 3px 0 rgb(217,31,38), 
										6px 6px 0 rgb(226,91,14), 
										9px 9px 0 rgb(245,221,8), 
										12px 12px 0 rgb(5,148,68), 
										15px 15px 0 rgb(2,135,206), 
										18px 18px 0 rgb(4,77,145), 
										21px 21px 0 rgb(42,21,113)`, 
										currentMarkingType,
										currentIndicatorType,
										currentRange,
										currentData
									);
									break;
							case currentMarkingType == 'Расширенные настройки':
									currentIndicatorType = state.indicatorsMainMenuButtons.filter(item => item.active === true)[0].mainMenuButtonJson;//active indicator type
									currentRange = state.indicators[currentIndicatorType].indicator.range;
									currentData = state.indicators[currentIndicatorType].data;
									console.log('%c currentData!', 
										`font-weight: bold; 
										font-size: 50px;
										color: red; 
										text-shadow: 3px 3px 0 rgb(217,31,38), 
										6px 6px 0 rgb(226,91,14), 
										9px 9px 0 rgb(245,221,8), 
										12px 12px 0 rgb(5,148,68), 
										15px 15px 0 rgb(2,135,206), 
										18px 18px 0 rgb(4,77,145), 
										21px 21px 0 rgb(42,21,113)`, 
										currentMarkingType,
										currentIndicatorType,
										currentRange,
										currentData
									);
									break;
						};
						switch(true) {
							case currentIndicatorType == 'getFuelStock':
								dataName = 'aFuelStock';
								firstRangeName = 'ВСЕ';
								break;
							case currentIndicatorType == 'getFuelSell':
								dataName = 'aFuelSell';
								firstRangeName = 'А92';
								break;
							case currentIndicatorType == 'getArticleSell':
								dataName = 'aArticleSell';
								firstRangeName = 'ВСЕ';
								break;
						};

						//COLOR FILTERING
							for (var i = 0; i < currentData.length; i++) {
								let a = currentData[i][dataName].filter(item => item[firstRangeName])[0][firstRangeName];
								if(a <= currentRange[0]){
									currentDataIdsRed.push(currentData[i].sStationId);
								};
								if((a >= currentRange[0]) && (a <= currentRange[1])){
									currentDataIdsOrange.push(currentData[i].sStationId);
								};
								if(a >= currentRange[1]){
									currentDataIdsGreen.push(currentData[i].sStationId);
								};
							};
						//COLOR FILTERING - END

						let knpFromState = 'mapStationsLatLngKNP',
							kasFromState = 'mapStationsLatLngKAS',
							nnpFromState = 'mapStationsLatLngNNP',
							pnpFromState = 'mapStationsLatLngPNP',
							tnpFromState = 'mapStationsLatLngTNP';//variable for names of groups


						for (var i = 0; i < state[knpFromState].length; i++) {
							if(currentDataIdsRed.includes(state[knpFromState][i].id)) 		{ knpR.push(state[knpFromState][i]); };
							if(currentDataIdsOrange.includes(state[knpFromState][i].id)) 	{ knpO.push(state[knpFromState][i]); };
							if(currentDataIdsGreen.includes(state[knpFromState][i].id)) 	{ knpG.push(state[knpFromState][i]); };
						};
						console.log('currentDataIdsGreen',currentDataIdsGreen);
						console.log('currentDataIdsOrange',currentDataIdsOrange);
						console.log('currentDataIdsRed',currentDataIdsRed);
						for (var i = 0; i < state[kasFromState].length; i++) {
							console.log(
								`%c kas %c i = ${i} %c`,
								`background:#ededed ; 
								padding: 1px; 
								border-radius: 3px 0 0 3px;  
								color: #fff`,
								`background:#d7a3da ; 
								padding: 1px; 
								border-radius: 0 3px 3px 0;  
								color: #fff`,
								`background:transparent`,
								state[kasFromState][i].id
							);
							if(currentDataIdsRed.includes(state[kasFromState][i].id)) 		{ 
							console.log(
								`%c kas %c i = ${i} %c`,
								`background:#ededed ; 
								padding: 1px; 
								border-radius: 3px 0 0 3px;  
								color: #fff`,
								`background:#fd006f ; 
								padding: 1px; 
								border-radius: 0 3px 3px 0;  
								color: #fff`,
								`background:transparent`,
								state[kasFromState][i].id
							);
							kasR.push(state[kasFromState][i]); };
							if(currentDataIdsOrange.includes(state[kasFromState][i].id)) 	{ 
							console.log(
								`%c kas %c i = ${i} %c`,
								`background:#ededed ; 
								padding: 1px; 
								border-radius: 3px 0 0 3px;  
								color: #fff`,
								`background:#ff3 ; 
								padding: 1px; 
								border-radius: 0 3px 3px 0;  
								color: #fff`,
								`background:transparent`,
								state[kasFromState][i].id
							);
							kasO.push(state[kasFromState][i]); };
							if(currentDataIdsGreen.includes(state[kasFromState][i].id)) 	{ 
							console.log(
								`%c kas %c i = ${i} %c`,
								`background:#ededed ; 
								padding: 1px; 
								border-radius: 3px 0 0 3px;  
								color: #fff`,
								`background:#19bb5b ; 
								padding: 1px; 
								border-radius: 0 3px 3px 0;  
								color: #fff`,
								`background:transparent`,
								state[kasFromState][i].id
							);
							kasG.push(state[kasFromState][i]); };
						};
						console.log('kasR',kasR);
						console.log(kasO);
						console.log(kasG);
						for (var i = 0; i < state[nnpFromState].length; i++) {
							if(currentDataIdsRed.includes(state[nnpFromState][i].id)) 		{ nnpR.push(state[nnpFromState][i]); };
							if(currentDataIdsOrange.includes(state[nnpFromState][i].id)) 	{ nnpO.push(state[nnpFromState][i]); };
							if(currentDataIdsGreen.includes(state[nnpFromState][i].id)) 	{ nnpG.push(state[nnpFromState][i]); };
						};
						console.log('nnpR',nnpR);
						console.log(nnpO);
						console.log(nnpG);
						for (var i = 0; i < state[pnpFromState].length; i++) {
							if(currentDataIdsRed.includes(state[pnpFromState][i].id)) 		{ pnpR.push(state[pnpFromState][i]); };
							if(currentDataIdsOrange.includes(state[pnpFromState][i].id)) 	{ pnpO.push(state[pnpFromState][i]); };
							if(currentDataIdsGreen.includes(state[pnpFromState][i].id)) 	{ pnpG.push(state[pnpFromState][i]); };
						};
						console.log('pnp',pnpR);
						console.log(pnpO);
						console.log(pnpG);

						for (var i = 0; i < state[tnpFromState].length; i++) {
							if(currentDataIdsRed.includes(state[tnpFromState][i].id)) 		{ tnpR.push(state[tnpFromState][i]); };
							if(currentDataIdsOrange.includes(state[tnpFromState][i].id)) 	{ tnpO.push(state[tnpFromState][i]); };
							if(currentDataIdsGreen.includes(state[tnpFromState][i].id)) 	{ tnpG.push(state[tnpFromState][i]); };
						};
						console.log('tnpR',tnpR);
						console.log(tnpO);
						console.log(tnpG);



						console.log( currentDataIdsRed);
						console.log( currentDataIdsOrange);
						console.log( currentDataIdsGreen);
					},
					error => {
						console.log('erererererer')
					}
				).then(
					result => {
				state.mapStationsLatLngKNPgreen = knpG;
				state.mapStationsLatLngKNPorange = knpO;
				state.mapStationsLatLngKNPred = knpR;
				state.mapStationsLatLngKASgreen = kasG;
				state.mapStationsLatLngKASorange = kasO;
				state.mapStationsLatLngKASred = kasR;
				state.mapStationsLatLngNNPgreen = nnpG;
				state.mapStationsLatLngNNPorange = nnpO;
				state.mapStationsLatLngNNPred = nnpR;
				state.mapStationsLatLngPNPgreen = pnpG;
				state.mapStationsLatLngPNPorange = pnpO;
				state.mapStationsLatLngPNPred = pnpR;
				state.mapStationsLatLngTNPgreen = tnpG;
				state.mapStationsLatLngTNPorange = tnpO;
				state.mapStationsLatLngTNPred = tnpR;
						console.log(
							`%c kas %c full %c`,
							`background:#35495e ; 
							padding: 1px; 
							border-radius: 3px 0 0 3px;  
							color: #fff`,
							`background:#f62dfc ; 
							padding: 1px; 
							border-radius: 0 3px 3px 0;  
							color: #fff`,
							`background:transparent`,
							state.mapStationsLatLngKAS
						);
						console.log(
							`%c kas %c green %c`,
							`background:#35495e ; 
							padding: 1px; 
							border-radius: 3px 0 0 3px;  
							color: #fff`,
							`background:#41b883 ; 
							padding: 1px; 
							border-radius: 0 3px 3px 0;  
							color: #fff`,
							`background:transparent`,
							kasG
						);
						console.log(
							`%c kas %c orange %c`,
							`background:#35495e ; 
							padding: 1px; 
							border-radius: 3px 0 0 3px;  
							color: #fff`,
							`background:#febf47 ; 
							padding: 1px; 
							border-radius: 0 3px 3px 0;  
							color: #fff`,
							`background:transparent`,
							kasO
						);
						console.log(
							`%c kas %c red %c`,
							`background:#35495e ; 
							padding: 1px; 
							border-radius: 3px 0 0 3px;  
							color: #fff`,
							`background:#e43148 ; 
							padding: 1px; 
							border-radius: 0 3px 3px 0;  
							color: #fff`,
							`background:transparent`,
							kasR
						);

					},
					error => {

					}
				);
						break;
				};


							


			},
		//Get Json - END
		//MAP DATA
			UPDATE_MAP_BOUNDS: (state, payload) => {
				state.mapBoundsCurrent = payload;
			},
			UPDATE_MAP_MARKERS: (state, payload) => {

			},
			UPDATE_MAP_STATIONS_BY_COLORS: (state, payload) => {

			},
		//MAP DATA - END
		//Indicators JSON
			GET_INDICATOR_JSON: (state, payload) => {
				console.log('T', payload);
				let jName 		= payload.jsonName,
					jData 		= payload.jsonData,
					jIndicator 	= payload.jsonIndicator,
					jExpress 	= payload.jsonExpress;
				console.log('state.indicators[jName]', state.indicators);
				state.indicators[jName].data 		= jData;
				state.indicators[jName].indicator 	= jIndicator;
				state.indicators[jName].express 	= jExpress;

				///Создаю объекты с состояниями кнопок sub-menu, main-menu///

				let currentState, currentStateFor,
					justIdForMainMenuButtons, indicatorsButtonsExpressState;

				////Задаю начальный один активный вариант////

				jName == 'getFuelSell' ? currentState = true : currentState = false;
				switch(jName) {
					case 'getFuelStock':
						justIdForMainMenuButtons = 0;
						indicatorsButtonsExpressState = false;
						break;
					case 'getFuelSell':
						justIdForMainMenuButtons = 1;
						indicatorsButtonsExpressState = true;
						break;
					case 'getArticleSell':
						justIdForMainMenuButtons = 2;
						indicatorsButtonsExpressState = false;
						break;
				}

				//

				let ButtonsExpress = state.indicatorsButtonsExpress;

				state.indicatorsButtonsExpress.push({
					id: justIdForMainMenuButtons,
					mainMenuButtonName: jExpress.name,
					mainMenuButtonJson: jName,
					active: indicatorsButtonsExpressState,				
				});

				//кнопки главного меню mainmenu

				let MainMenuButtons = state.indicatorsMainMenuButtons;
			
				state.indicatorsMainMenuButtons.push({
					id: justIdForMainMenuButtons,
					mainMenuButtonName: jIndicator.name,
					mainMenuButtonJson: jName,
					active: currentState,
				});

				//кнопки sub menu

				/*let SubMenuButtonsMain = state.indicatorsSubMenuButtons;
	
				let promiseForSubMenuButtons = new Promise((resolve, reject) => {
					SubMenuButtonsMain.push({
						subTypeName: jName,
						indicatorSubFilters: []
					});
					resolve(SubMenuButtonsMain);
				
				});
				
				promiseForSubMenuButtons.then(
						result => {
							for (var i = 0; i < jIndicator.subFilters.length; i++) {
								let currentStateOfSubFilter;
								i == 0 ? currentStateOfSubFilter = true : currentStateOfSubFilter = false;
								state.indicatorsSubMenuButtons
									.find(item => item.subTypeName == jName).indicatorSubFilters[i] =
										{subFilterId: i,subFilterName: jIndicator.subFilters[i], active: currentStateOfSubFilter};

							};
						},
						error => {
							console.log('erererererer')
						}
				);*/
				////////////////////////////////////////////////////////////////////////////			
				let currentSubMenuArray = 'indicatorsSubMenuButtons' + jName;
				for (var i = 0; i < jIndicator.subFilters.length; i++) {

				let currentStateOfSubFilter;
				i == 0 ? currentStateOfSubFilter = true : currentStateOfSubFilter = false;

					state[currentSubMenuArray].push({
						subFilterId: i,
						subFilterName: jIndicator.subFilters[i], 
						active: currentStateOfSubFilter
					});

				};
			},
		//Indicators JSON - END
		//marking-settings
			TOGGLE_MARKING_SETTINGS_MENU_TYPES: (state, id) => {

				Object.keys(state.markingSettingsMenuTypes).forEach(function (item) {

					if( item == id ){

						state.markingSettingsMenuTypes[item].typeState = true;

					} else {

						state.markingSettingsMenuTypes[item].typeState = false;

					};

				});

			},
			TOGGLE_MARKING_SETTINGS_MAIN_MENU_ITEM: (state, id) => {

				for (var i = 0; i < state.indicatorsMainMenuButtons.length; i++) {

					if(state.indicatorsMainMenuButtons[i].id != id){

						state.indicatorsMainMenuButtons[i].active = false;

					} else {

						state.indicatorsMainMenuButtons[i].active = true;

					};
					
				}
	
			},
			TOGGLE_INDICATORS_BUTTONS_EXPRESS: (state, id) => {/////////////////////////////////
				for (var i = 0; i < state.indicatorsButtonsExpress.length; i++) {

					if(state.indicatorsButtonsExpress[i].id != id){

						state.indicatorsButtonsExpress[i].active = false;

					} else {

						state.indicatorsButtonsExpress[i].active = true;

					};
					
				}
	
			},
			TOGGLE_MARKING_SETTINGS_SUB_MENU_ITEM: (state, payload) => {

				//payload = {subFilterId: x.subFilterId, mainMenuButtonActive: this.mainMenuButtonActive};

				let clickedNameCurrent 	= payload.mainMenuButtonActive,
					clickedIdCurrent 	= payload.subFilterId;

				let currentSubMenuArray = 'indicatorsSubMenuButtons' + clickedNameCurrent;

				//for
					for (var i = 0; i < state[currentSubMenuArray].length; i++) {

					let	currentAct 	= state[currentSubMenuArray][i].active,
						currentId 	= state[currentSubMenuArray][i].subFilterId,
						currentName = state[currentSubMenuArray][i].subFilterName;




						if(i == clickedIdCurrent){

							Vue.set(
								state[currentSubMenuArray], 
								clickedIdCurrent, 
								{
									active: true, 
									subFilterId: clickedIdCurrent, 
									subFilterName: currentName
								}
							);

						} else {

							Vue.set(
								state[currentSubMenuArray], 
								i, 
								{
									active: false, 
									subFilterId: i, 
									subFilterName: currentName
								}
							);

						};
					};
				//for END	
			},
		//marking-settings - END
	},

	actions: {
		//Preloader
			change_apploading: (state, payload) => {
				state.commit('CHANGE_APPLOADING', payload);
			},
			change_apploadingtextarray: (state, payload) => {
				state.commit('CHANGE_APPLOADINGTEXTARRAY', payload);
			},
			change_apploadingtext: (state, payload) => {
				state.commit('CHANGE_APPLOADINGTEXT', payload);
			},
		//Preloader - END
		//Search
			change_searchResults: (state, payload) => {
				state.commit('CHANGE_SEARCHRESULTS', payload);
			},
			toggle_search_button: (state) => {
				state.commit('TOGGLE_SEARCH_BUTTON');
			},
			clear_search_input: (state) => {
				state.commit('CLEAR_SEARCH_INPUT');
			},
		//Search - END
		//InterfaceTopCenter
			toggle_interfacetop_button: (state, payload) => {

				let buttonArray 	= payload.buttonArray,
					buttonId 		= payload.id;
					
				buttonArray === 'buttonColors' ? case_buttonColor(buttonArray,buttonId) : false;

				function case_buttonColor(){
					var	filterName 	= 'layersByColor',
						filterItemId,
						payload_for_filter;

					filterItemId 		= state.getters.get_buttonColorsByColor(buttonId).buttonID;
					payload_for_filter 	= {filterName: filterName, filterItemId: filterItemId};

					state.commit('TOGGLE_FILTERS_TOP_BY_FILTER', payload_for_filter);
				};



				state.commit('TOGGLE_INTERFACETOP_BUTTON', payload);

			},
		//InterfaceTopCenter - END
		//Filters Top
			toggle_filters_top_by_filter: (state, payload) => {
				state.commit('TOGGLE_FILTERS_TOP_BY_FILTER', payload);
			},
		//Filters Top - END
		//local json
			get_local_json: (state, jsonPayload) => {
				let a = jsonPayload.jsonName;

				switch (true) {
					case a === 'getCurrentUser' : 
						state.commit('GET_LOCAL_JSON', jsonPayload);
						break;
					case a === 'getAzsInfo' : 
						state.commit('GET_LOCAL_JSON', jsonPayload);
						break;
					case a === 'getDepartmentFull' : 
						state.commit('GET_LOCAL_JSON', jsonPayload);
						break;
				};

			},
		//local json - END
		//MAP DATA
			update_map_bounds: (state, payload) => {
				state.commit('UPDATE_MAP_BOUNDS', payload);
			},
			update_map_markers: (state, payload) => {
				state.commit('UPDATE_MAP_MARKERS', payload);
			},
		//MAP DATA - END
		//Indicators JSON
			get_indicator_json: (state, payload) => {
				state.commit('GET_INDICATOR_JSON', payload);
			},
		//Indicators JSON - END
		//marking-settings
			toggle_marking_settings_menu_types: (state, id) => {
				state.commit('TOGGLE_MARKING_SETTINGS_MENU_TYPES', id);
			},
			toggle_marking_settings_main_menu_item: (state, objectName) => {
				state.commit('TOGGLE_MARKING_SETTINGS_MAIN_MENU_ITEM', objectName);
			},
			toggle_marking_settings_sub_menu_item: (state, payload) => {
				state.commit('TOGGLE_MARKING_SETTINGS_SUB_MENU_ITEM', payload);
			},
			toggle_indicators_buttons_express: (state, id) => {
				state.commit('TOGGLE_INDICATORS_BUTTONS_EXPRESS', id);
			},
	},

	getters: {
		//Preloader
			get_appLoading: (state) => {
				return state.appLoading
			},
			get_appLoadingTextArray: (state) => {
				return state.appLoadingTextArray
			},
			get_appLoadingTextArrayCount: (state) => {
				return state.appLoadingTextArray.length
			},
			get_appLoadingText: (state) => {
				return state.appLoadingText
			},
		//Preloader - END
		//Search
			get_searchResults: (state) => {
				return state.searchResults
			},
			get_appSearchButtonActive: (state) => {
				return state.appSearchButtonActive
			},
			get_clearSearch: (state) => {
				return state.clearSearch
			},
		//Search - END
		//Markers_info_primary
			get_markers_info_primary: (state) => {///для search
				return state.markers_info_primary;
			},
		//Markers_info_primary - END
		//InterfaceTop
			get_buttonInterfaceTopActiveById: (state) => (id) => {
				return state.buttonInterfaceTopActive.find(button => button.buttonID === id);
			},
			get_buttonColorsByColor: (state) => (buttonColor) => {
				return state.buttonColors[buttonColor];
			},
			get_buttonColorsAll: (state) => {
				return state.buttonColors;
			},
			get_buttonFiltersMenuById: (state) => (id) => {
				return state.buttonFiltersMenu.find(button => button.buttonID === id);
			},
			get_buttonFiltersMenuByActive: (state) => (isActive) => {
				return state.buttonFiltersMenu.find(button => button.buttonState === isActive);
			},
			get_buttonFiltersMenuCurrent: (state) => {
				return state.buttonFiltersMenu.find(button => button.buttonState === true).buttonFilterName;
			},
			get_buttonInterfaceTop: (state) => (buttonArrayName) => {
				let a = state[buttonArrayName];
				return a;
			},
			get_buttonFiltersMenuL: (state) => {
				return state.buttonFiltersMenu.length;
			},
			get_buttonColorsL: (state) => {
				var size = Object.keys(state.buttonColors).length;
				return size;
			},
		//InterfaceTop - END
		//AZS pop-up
			get_mapAZSpopupInfo: (state) => {
				return state.mapAZSpopupInfo;
			},
		//AZS pop-up - END
		//User
			get_currentUser: (state) => {
				return state.currentUser;
			},
		//User - END
		//Filters
			get_filterTopByKey: (state) => (filterKey) => {
				//If payload = 'filtersTop' -> get all object
				if(filterKey == 'filtersTop'){
					return state.filtersTop;
				} else {
					return state.filtersTop[filterKey];
				};
			},
		//Filters - END
		//Map
			get_mapStationsKNP: (state) => {
				let result = [];
				for (var i = 0; i < state.mapStationsLatLngKNP.length; i++) {
					result.push({
						lat: state.mapStationsLatLngKNP[i].lat,
						lng: state.mapStationsLatLngKNP[i].lng,
						id: state.mapStationsLatLngKNP[i].id
					});
				}
				return result;
			},
			get_mapStationsKAS: (state) => {
				let result = [];
				for (var i = 0; i < state.mapStationsLatLngKAS.length; i++) {
					result.push({
						lat: state.mapStationsLatLngKAS[i].lat,
						lng: state.mapStationsLatLngKAS[i].lng,
						id: state.mapStationsLatLngKAS[i].id
					});
				}
				return result;
			},
			get_mapStationsNNP: (state) => {
				let result = [];
				for (var i = 0; i < state.mapStationsLatLngNNP.length; i++) {
					result.push({
						lat: state.mapStationsLatLngNNP[i].lat,
						lng: state.mapStationsLatLngNNP[i].lng,
						id: state.mapStationsLatLngNNP[i].id
					});
				}
				return result;
			},
			get_mapStationsPNP: (state) => {
				let result = [];
				for (var i = 0; i < state.mapStationsLatLngPNP.length; i++) {
					result.push({
						lat: state.mapStationsLatLngPNP[i].lat,
						lng: state.mapStationsLatLngPNP[i].lng,
						id: state.mapStationsLatLngPNP[i].id
					});
				}
				return result;
			},
			get_mapStationsTNP: (state) => {
				let result = [];
				for (var i = 0; i < state.mapStationsLatLngTNP.length; i++) {
					result.push({
						lat: state.mapStationsLatLngTNP[i].lat,
						lng: state.mapStationsLatLngTNP[i].lng,
						id: state.mapStationsLatLngTNP[i].id
					});
				}
				return result;
			},
			get_mapStationsKNPgreen: (state) => {
				return state.mapStationsLatLngKNPgreen;
			},
			get_mapStationsKNPorange: (state) => {
				return state.mapStationsLatLngKNPorange;
			},
			get_mapStationsKNPred: (state) => {
				return state.mapStationsLatLngKNPred;
			},
			get_mapStationsKASgreen: (state) => {
				return state.mapStationsLatLngKASgreen;
			},
			get_mapStationsKASorange: (state) => {
				return state.mapStationsLatLngKASorange;
			},
			get_mapStationsKASred: (state) => {
				return state.mapStationsLatLngKASred;
			},
			get_mapStationsNNPgreen: (state) => {
				return state.mapStationsLatLngNNPgreen;
			},
			get_mapStationsNNPorange: (state) => {
				return state.mapStationsLatLngNNPorange;
			},
			get_mapStationsNNPred: (state) => {
				return state.mapStationsLatLngNNPred;
			},
			get_mapStationsPNPgreen: (state) => {
				return state.mapStationsLatLngPNPgreen;
			},
			get_mapStationsPNPorange: (state) => {
				return state.mapStationsLatLngPNPorange;
			},
			get_mapStationsPNPred: (state) => {
				return state.mapStationsLatLngPNPred;
			},///
			get_mapStationsTNPgreen: (state) => {
				return state.mapStationsLatLngTNPgreen;
			},
			get_mapStationsTNPorange: (state) => {
				return state.mapStationsLatLngTNPorange;
			},
			get_mapStationsTNPred: (state) => {
				return state.mapStationsLatLngTNPred;
			},
			get_mapStationsInfo: (state) => (sStationId) => {
				return state.mapStationsInfo.find(station => {return station.sStationId == sStationId});
			},
		//Map - END
		//marking-settings
			get_markingSettingsMenuTypesAll: (state) => {
				return state.markingSettingsMenuTypes;
			},
			get_markingSettingsMenuTypesActive: (state) => {
				let result;
				Object.keys(state.markingSettingsMenuTypes).forEach(function (item) {

					if( state.markingSettingsMenuTypes[item].typeState == true ){

						result = {typeId: state.markingSettingsMenuTypes[item].typeId, typeName: state.markingSettingsMenuTypes[item].typeName};

					};

				});
				return result;
			},
			get_markingSettingsMenuTypesComponentActive: (state) => {
				let result;
				Object.keys(state.markingSettingsMenuTypes).forEach(function (item) {

					if( state.markingSettingsMenuTypes[item].typeState == true ){

						result = {typeName: state.markingSettingsMenuTypes[item].typeComponent};

					};

				});
				return result;
			},
			get_markingSettingsMenuTypesL: (state) => {
				var size = Object.keys(state.markingSettingsMenuTypes).length;
				return size;
			},
		//marking-settings - END
		//indicators

			get_indicatorsMenuButtons: (state) => (indicatorsMenuButtons) => {//not in use

				let t, g = {}, m;

				switch(indicatorsMenuButtons.a) {
					case 'main':
						t = 'indicatorsMainMenuButtons';
						break;
					case 'sub':
						t = 'indicatorsSubMenuButtons';
						break;
				};

				m = indicatorsMenuButtons.b;

				Object.keys(state[t]).forEach(function(item){

					g[item] = state[t][item][m];

				});

				return g;

			},
			get_indicatorsButtonsExpress: (state) => {
				return state.indicatorsButtonsExpress;
			},
			get_indicatorsMainMenuButtons: (state) => {
				return state.indicatorsMainMenuButtons;
			},
			get_indicatorsMainMenuButtonActive: (state) => {
				return state.indicatorsMainMenuButtons.filter(item => item.active === true);
			},
			get_indicatorsSubMenuButtons: (state) => (name) => {
				let currentSubMenuArray = 'indicatorsSubMenuButtons' + name;
				return state[currentSubMenuArray];
			},
			//.filter(item => item.subTypeName == activeMainMenuButton)[0].indicatorSubFilters
		//indicators - END

	}
})
