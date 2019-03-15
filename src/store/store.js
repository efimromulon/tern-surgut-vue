import Vue from 'vue'
import Vuex from 'vuex'
import map from './modules/map.js'
import search from './modules/search.js'
import uiSettings from './modules/uiSettings.js'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		map,
		search,
		uiSettings,
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
			// TOGGLE_INTERFACETOP_BUTTON: (state, payload) => {

			// 	let buttonArray = payload.buttonArray,
			// 		buttonId = payload.id;
			// 	console.log('store buttonArray', buttonArray);
			// 	console.log('store buttonId', buttonId);
			// 	switch (true) {

			// 		case buttonArray === 'buttonFiltersMenu' : 

			// 			if(state[buttonArray].find(button => button.buttonID === buttonId).buttonState){
			// 				return
			// 			} else {
			// 				state[buttonArray].find(button => button.buttonID === buttonId).buttonState = 
			// 				!state[buttonArray].find(button => button.buttonID === buttonId).buttonState;
			// 				for(var i = 0; i < state.buttonFiltersMenu.length - 1; i++){
			// 					state[buttonArray].forEach(function(e) {
			// 					if(e.buttonID !== buttonId){e.buttonState = false};
			// 					});
			// 				};
			// 			};					
			// 			break;

			// 		case buttonArray === 'buttonColors' :

			// 			state[buttonArray][buttonId].buttonState = 
			// 			!state[buttonArray][buttonId].buttonState;
			// 			break;

			// 		case buttonArray !== 'buttonFiltersMenu' :

			// 			state[buttonArray].find(button => button.buttonID === buttonId).buttonState = 
			// 			!state[buttonArray].find(button => button.buttonID === buttonId).buttonState;
			// 			break;

			// 	};

			// },
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

		//MAP DATA

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
			// toggle_interfacetop_button: (state, payload) => {

			// 	let buttonArray 	= payload.buttonArray,
			// 		buttonId 		= payload.id;
					
			// 	buttonArray === 'buttonColors' ? case_buttonColor(buttonArray,buttonId) : false;

			// 	function case_buttonColor(){
			// 		var	filterName 	= 'layersByColor',
			// 			filterItemId,
			// 			payload_for_filter;

			// 		filterItemId 		= state.getters.get_buttonColorsByColor(buttonId).buttonID;
			// 		payload_for_filter 	= {filterName: filterName, filterItemId: filterItemId};

			// 		state.commit('TOGGLE_FILTERS_TOP_BY_FILTER', payload_for_filter);
			// 	};



			// 	state.commit('TOGGLE_INTERFACETOP_BUTTON', payload);

			// },
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
