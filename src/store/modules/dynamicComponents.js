export default ({

	state: {
        leftMenuComponent: '',
        centralComponent: ""
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
            state.commit('SET_COMPONENT', payload)
        }
	},

})