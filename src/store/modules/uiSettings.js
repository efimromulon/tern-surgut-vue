export default ({

	state: {

		uiButtonSquare: [
			{
				buttonID: 0, 
				buttonName: 'funnel', 
				buttonState: false
			},
		],
		uiColorSwitchButtons: [
			{
				buttonID: 0, 
				buttonName: 'button_Green',
				buttonState: true
			},
			{
				buttonID: 1, 
				buttonName: 'button_Orange', 
				buttonState: true
			},
			{
				buttonID: 2, 
				buttonName: 'button_Red', 
				buttonState: true
			},
			{
				buttonID: 3, 
				buttonName: 'button_Grey', 
				buttonState: true
			}
		],
		uiCoreMenuButtons: [
			{
				buttonID: 0, 
				buttonName: 'Слои', 
				buttonFilterName: 'ui-settings-panel-menus-menu-layers-settings', 
				buttonState: true
			},
			{
				buttonID: 1, 
				buttonName: 'Настройки маркировки', 
				buttonFilterName: 'ui-settings-panel-menus-menu-marking-settings', 
				buttonState: false
			},
		],
		uiMarkingMenuButtons: [
			{
				buttonID: 0, 
				buttonName: 'Экспресс маркировка', 
				buttonFilterName: 'ui-settings-panel-views-view-marking-express', 
				buttonState: true
			},
			{
				buttonID: 1, 
				buttonName: 'Расширенные настройки', 
				buttonFilterName: 'ui-settings-panel-views-view-marking-settings', 
				buttonState: false
			},
		],
		uiMarkingExpressButtons: [
			{
				buttonID: 0, 
				buttonName: 'Минимальный срок до исчерпания резервуара по всем видам топлива',
				buttonState: true
			},
			{
				buttonID: 1, 
				buttonName: 'Динамика реализации топлива по сравнению с прошлой неделей',
				buttonState: false
			},
			{
				buttonID: 2, 
				buttonName: 'Динамика реализации сопутствующих товаров по сравнению с прошлой неделей',
				buttonState: false
			},
		],
		uiMarkingMenuDatatypeButtons: [
			{
				buttonID: 0, 
				buttonName: 'Дней до исчерпания резервуара',
				buttonState: true
			},
			{
				buttonID: 1, 
				buttonName: 'Динамика реализации топлива',
				buttonState: false
			},
			{
				buttonID: 2, 
				buttonName: 'Динамика реализации сопутствующих товаров',
				buttonState: false
			},
		],
		uiMarkingMenuDatafilterFuelStockButtons: [],
		uiMarkingMenuDatafilterFuelSellButtons: [],
		uiMarkingMenuDatafilterArticleSellButtons: [],

	},

	mutations: {

		TOGGLE_UI_SETTINGS_BUTTON: (state, payload) => {

			let buttonArray = payload.buttonArray,
				buttonId = payload.id,
				buttonPressedState,
				buttonPressType;

			buttonPressedState = state[buttonArray].find(button => button.buttonID === buttonId).buttonState;
			switch (true) {
				case buttonArray === 'uiButtonSquare' || buttonArray === 'uiColorSwitchButtons': 
					buttonPressType = 0; //allButtonsCanBePressed
					toggleUiButton(buttonPressType, buttonArray, buttonPressedState);
					break;
				case buttonArray === 'uiCoreMenuButtons' 				|| 
					buttonArray === 'uiMarkingMenuButtons' 				|| 
					buttonArray === 'uiMarkingExpressButtons'			||
					buttonArray === 'uiMarkingMenuDatatypeButtons' 		|| 
					buttonArray === 'uiMarkingMenuDatafilterFuelStockButtons' 	||
					buttonArray === 'uiMarkingMenuDatafilterFuelSellButtons' 		||
					buttonArray === 'uiMarkingMenuDatafilterArticleSellButtons' 	: 
					buttonPressType = 1; //onlyOneButtonCanBePressed
					toggleUiButton(buttonPressType, buttonArray, buttonPressedState);
					break;
			};

			///
			function toggleUiButton (a, b, c){

				a === 0 ? state[b].find(button => button.buttonID === buttonId).buttonState = !c : false;

				if ( a === 1 ) {
					for(var i = 0; i < state[b].length - 1; i++){
						state[b].forEach(function(button) {

							// if ( button.buttonID === buttonId ) {
							// 	button.buttonState = !c
							// } else {
							// 	button.buttonState = c
							// };

							switch (true) {
								case ( ( button.buttonID === buttonId ) && ( button.buttonState !== true ) ):
									button.buttonState = !c;
									break;
								case ( ( button.buttonID === buttonId ) && ( button.buttonState === true ) ):
									break;
								case ( ( button.buttonID !== buttonId ) && ( button.buttonState !== true ) ):
									break;									break;
								case ( ( button.buttonID !== buttonId ) && ( button.buttonState === true ) ):
									button.buttonState = false;
									break;
							};

						});
					};
				};

			};
			///

		},
		SET_UI_MARKING_MENU_GAS_BUTTONS: (state, payload) => {
			
			let fstock = payload.fstock,
				fsell = payload.fsell,
				asell = payload.asell,
				target = [
					'uiMarkingMenuDatafilterFuelStockButtons',
					'uiMarkingMenuDatafilterFuelSellButtons',
					'uiMarkingMenuDatafilterArticleSellButtons'
				];

			function setButtons(d, r){

				console.log('setButtons', d, r);
				
				var currentState,
					result = [];

				for (var i = 0; i <= Object.keys(r).length - 1; i++) {

					i === 0 ? currentState = true : currentState = false;
					result.push({
						buttonID: i, 
						buttonName: r[i],
						buttonState: currentState
					});
				};

				state[d] = result;

			};

			for (var i = 0; i <= Object.keys(payload).length - 1; i++) {



				setButtons(target[i], payload[Object.keys(payload)[i]]);

			};

		},

	},

	actions: {

		toggle_ui_settings_button: (state, payload) => {
				
			state.commit('TOGGLE_UI_SETTINGS_BUTTON', payload);

		},
		set_ui_marking_menu_gas_buttons({state, commit, rootState}, query) {
			console.log('uuuuuuuuuuuuuuu')
			let fstock = rootState.map.fuel_stock_filters,
				fsell = rootState.map.fuel_sell_filters,
				asell = rootState.map.acrticle_sell_filters,
				payload = {'fstock': fstock, 'fsell': fsell, 'asell': asell};

			

				commit('SET_UI_MARKING_MENU_GAS_BUTTONS', payload);

		},




	},

	getters: {

		getButtonSquareById: (state) => {
			return x => state.uiButtonSquare.find( btn => { return btn.buttonID === x }).buttonState
		},
		get_uiColorSwitchButtonsById: (state) => {
			return x => state.uiColorSwitchButtons.find( btn => { return btn.buttonID === x }).buttonState
		},
		get_uiColorSwitchButtons: (state) => {
			return state.uiColorSwitchButtons
		},
		get_uiCoreMenuButtonsById: (state) => {
			return x => state.uiCoreMenuButtons.find( btn => { return btn.buttonID === x }).buttonState
		},
		get_uiCoreMenuButtons: (state) => {
			return state.uiCoreMenuButtons
		},
		get_uiCoreMenuButton_active_componentName: (state) => {
			return state.uiCoreMenuButtons.find(button => button.buttonState === true).buttonFilterName
		},
		get_uiMarkingMenuButtonsById: (state) => {
			return x => state.uiMarkingMenuButtons.find( btn => { return btn.buttonID === x }).buttonState
		},
		get_uiMarkingMenuButtons: (state) => {
			return state.uiMarkingMenuButtons
		},
		get_uiMarkingMenuButtons_active_componentName: (state) => {
			return state.uiMarkingMenuButtons.find(button => button.buttonState === true).buttonFilterName
		},
		get_uiMarkingExpressButtonsById: (state) => {
			return x => state.uiMarkingExpressButtons.find( btn => { return btn.buttonID === x }).buttonState
		},
		get_uiMarkingExpressButtons: (state) => {
			return state.uiMarkingExpressButtons
		},
		get_uiMarkingMenuDatatypeButtonsById: (state) => {
			return x => state.uiMarkingMenuDatatypeButtons.find( btn => { return btn.buttonID === x }).buttonState
		},
		get_uiMarkingMenuDatatypeButtons: (state) => {
			return state.uiMarkingMenuDatatypeButtons
		},
		get_uiMarkingMenuDatafilterById: (state) => {
			return (x, y) => state[y].find( btn => { return btn.buttonID === x }).buttonState
		},
		get_uiMarkingMenuDatafilter: (state) => {
			return y => state[y]
		},

	}
})