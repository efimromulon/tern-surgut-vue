export default ({
	state: {
		searchQuery: '',
		searchLoading: false,
		searchResult: null,
		buttonInterfaceaTopActive: [
			{buttonID: 'a', buttonName: 'funnel', buttonState: false},
			{buttonID: 1, buttonName: 'layers', buttonState: false}
		],
		searchStations: null,
	},
	mutations: {
		SET_SEARCH_QUERY: (state, searchQuery) => {
			state.searchQuery = searchQuery
		},
		SET_SEARCH_LOADING: (state, searchLoading) => {
			state.searchLoading = searchLoading
		},

		SEARCH: (state, payload) => {
			console.log('SEARCH', typeof payload, payload);
			const stations = payload.stations;
			let query = payload.query;

			state.searchResult = state.buttonInterfaceaTopActive.filter(x => {return x.buttonName === payload});

				// let newarr = state.sta.map(item=>{
				// 	var new_item = {category: item.category, label: item.label};
				// 	return new_item;
				// });


					// if(item.label.toLowerCase().indexOf(keyword)!==-1){
					// 	var ty = item.label;
					// 	return ty;
					// } else {return false};
		},
		RESET_SEARCH_RESULT: (state, searchResult) => {
			state.searchLoading = null
		}
	},
	actions: {
		setSearchQuery: (state,  searchQuery) => {
			state.commit('SET_SEARCH_QUERY', searchQuery);
		},
		// search: (state, payload) => {
		// 	console.log('search actions');
		// 	state.commit('SEARCH', payload);
		// },
		search({state, commit, rootState}, query) {
			let stations = rootState.map.stations,
				payload = {stations, query}
			commit('SEARCH', payload);
		}
	},
	getters: {
		getModuleState(state, getters, rootState) {
			return rootState.stations;
		},
	}
})