export default ({
	state: {
		uiButtonSquare: [
			{buttonID: 0, buttonName: 'funnel', buttonState: false},
		],
		colorSwitchButtons: [
			{buttonID: 0, buttonName: 'button_Green', 	buttonState: true},
			{buttonID: 1, buttonName: 'button_Orange', 	buttonState: true},
			{buttonID: 2, buttonName: 'button_Red', 	buttonState: true},
			{buttonID: 3, buttonName: 'button_Grey', 	buttonState: true}
		],
	},
	mutations: {

	},
	actions: {
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
	},
	getters: {
		getButtonSquareById: (state) => (id) => {
			return state.uiButtonSquare.find(button => button.buttonID === id).buttonState;
		},
	}
})