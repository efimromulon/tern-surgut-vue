export default ({

	state: {

		uiButtonSquare: [
			{buttonID: 0, buttonName: 'funnel', 		buttonState: false},
		],
		uiColorSwitchButtons: [
			{buttonID: 0, buttonName: 'button_Green', 	buttonState: true},
			{buttonID: 1, buttonName: 'button_Orange', 	buttonState: true},
			{buttonID: 2, buttonName: 'button_Red', 	buttonState: true},
			{buttonID: 3, buttonName: 'button_Grey', 	buttonState: true}
		],
		uiCoreMenuButtons: [
			{buttonID: 0, buttonName: 'Слои', 					buttonFilterName: 'ui-settings-panel-menus-menu-layers-settings', 	buttonState: true},
			{buttonID: 1, buttonName: 'Настройки маркировки', 	buttonFilterName: 'ui-settings-panel-menus-menu-marking-settings', 	buttonState: false},
		],
		uiMarkingMenuButtons: [
			{buttonID: 0, buttonName: 'Экспресс маркировка', 	buttonFilterName: 'ui-settings-panel-views-view-marking-express', 	buttonState: true},
			{buttonID: 1, buttonName: 'Расширенные настройки', 	buttonFilterName: 'ui-settings-panel-views-view-marking-settings', 	buttonState: false},
		],

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
				case buttonArray === 'uiCoreMenuButtons' || buttonArray === 'uiMarkingMenuButtons': 
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

	},

	actions: {

		toggle_ui_settings_button: (state, payload) => {
				
			state.commit('TOGGLE_UI_SETTINGS_BUTTON', payload);

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


	}
})