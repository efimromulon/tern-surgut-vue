export default ({
	state: {
		uiButtonSquare: [
			{buttonID: 0, buttonName: 'funnel', 		buttonState: false},
		],
		colorSwitchButtons: [
			{buttonID: 0, buttonName: 'button_Green', 	buttonState: true},
			{buttonID: 1, buttonName: 'button_Orange', 	buttonState: true},
			{buttonID: 2, buttonName: 'button_Red', 	buttonState: true},
			{buttonID: 3, buttonName: 'button_Grey', 	buttonState: true}
		],
	},
	mutations: {
		TOGGLE_UI_SETTINGS_BUTTON: (state, payload) => {

			let buttonArray = payload.buttonArray,
				buttonId = payload.id,
				a;

			a = state[buttonArray].find(button => button.buttonID === buttonId).buttonState;

			switch (true) {
				case buttonArray === 'uiButtonSquare' : 
					state[buttonArray].find(button => button.buttonID === buttonId).buttonState = !a;
					break;
				case buttonArray === 'colorSwitchButtons' : 
					state[buttonArray].find(button => button.buttonID === buttonId).buttonState = !a;
					break;
			};

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
		get_colorSwitchButtonsById: (state) => {
			return x => state.colorSwitchButtons.find( btn => { return btn.buttonID === x }).buttonState
		},
		get_colorSwitchButtons: (state) => {
			return state.colorSwitchButtons
		},
	}
})