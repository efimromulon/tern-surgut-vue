export default ({

	state: {
        leftMenuComponent: '',
        centralComponent: "",
	},

	mutations: {
        SET_COMPONENT(state, payload) {
            let componentPosition = payload.componentPosition
            let componentName = payload.componentName

            state[componentPosition] = componentName
        }
	},

	actions: {
        setComponent(state,payload) {
            if (state.rootState.uiSettings.uiButtonSquare[1].buttonState && payload.componentName === 'search') {
                state.commit('TOGGLE_UI_SETTINGS_BUTTON',{ buttonArray: 'uiButtonSquare', id: 1 }, { root: true }); 
            } else if (!state.rootState.uiSettings.uiButtonSquare[1].buttonState) {
                state.commit('TOGGLE_UI_SETTINGS_BUTTON',{ buttonArray: 'uiButtonSquare', id: 1 }, { root: true }); 
            }
            state.commit('SET_COMPONENT', payload)
        },
        resetComponents(state){
            if (!state.rootState.uiSettings.uiButtonSquare[1].buttonState) {
                state.commit('TOGGLE_UI_SETTINGS_BUTTON',{ buttonArray: 'uiButtonSquare', id: 1 }, { root: true }); 
            }

            state.commit('SET_COMPONENT', {
                componentPosition: 'leftMenuComponent',
                componentName: ''
            })
            state.commit('SET_COMPONENT', {
                componentPosition: 'centralComponent',
                componentName: ''
            })
            
        }
	},

})