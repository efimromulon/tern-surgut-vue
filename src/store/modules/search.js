export default ({
	state: {
		searchQuery: '',
		searchLoading: false,
		searchResult: null,
		buttonInterfaceaTopActive: [
			{buttonID: 'a', buttonName: 'funnel', buttonState: false},
			{buttonID: 1, buttonName: 'layers', buttonState: false}
		]
	},
	mutations: {
		SET_SEARCH_QUERY: (state, searchQuery) => {
			state.searchQuery = searchQuery
		},
		SET_SEARCH_LOADING: (state, searchLoading) => {
			state.searchLoading = searchLoading
		},

		SEARCH: (state, payload) => {
			console.log('search', typeof payload);
			console.log('search1', state.buttonInterfaceaTopActive.filter(x => {return x.buttonName === payload}));
			state.searchResult = state.buttonInterfaceaTopActive.filter(x => {return x.buttonName === payload});
			console.log('searchend', state.searchResult);
		},
		RESET_SEARCH_RESULT: (state, searchResult) => {
			state.searchLoading = null
		},
	},
	actions: {
		setSearchQuery: (state,  searchQuery) => {
			state.commit('SET_SEARCH_QUERY', searchQuery);
		},
		search: (state,  payload) => {
			state.commit('SEARCH', payload);
		},
	},
	getters: {
	}
})