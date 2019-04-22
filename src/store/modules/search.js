export default ({
	state: {
		searchQuery: '',
		searchLoading: false,
		searchResult: null,
		searchResultTabClosed: true,
		searchCollapsed: true,
		searchResultKAS: [],
		searchResultKNP: [],
		searchResultPNP: [],
		searchResultTNP: [],
		searchResultNNP: [],
		searchStations: null,
	},
	mutations: {
		SET_SEARCH_QUERY: (state, searchQuery) => {
			state.searchQuery = searchQuery
		},
		SET_SEARCH_LOADING: (state, searchLoading) => {
			state.searchLoading = searchLoading
		},
		RESET_SEARCH: (state) => {
			state.searchQuery = ''
			state.searchResultKNP = [];
			state.searchResultPNP = [];
			state.searchResultTNP = [];
			state.searchResultNNP = [];
			state.searchResultKAS = [];
		},
		SEARCH: (state, payload) => {
			// console.log('SEARCH', typeof payload, payload);
			const 	stations 	= payload.stations;
			let 	query 		= payload.query;
			state.searchQuery = query
			//let searchResult = stations.filter(x => {return x.stationName === query});
			
			if (!query) {
				state.searchResultKNP = [];
				state.searchResultPNP = [];
				state.searchResultTNP = [];
				state.searchResultNNP = [];
				state.searchResultKAS = [];

				return false
			}

			stations.forEach( x => {	
				if ( x.stationName && x.stationName.toLowerCase().indexOf(query.toLowerCase()) !== -1  ) {
					let currentCategory = x.category;	
					switch (currentCategory) {
						case 'Калининграднефтепродукт' : 
							state.searchResultKNP.push(x);
							break;
						case 'Псковнефтепродукт' : 	
							state.searchResultPNP.push(x);
							break;
						case 'Тверьнефтепродукт' : 	
							state.searchResultTNP.push(x);
							break;
						case 'Новгороднефтепродукт' : 	
							state.searchResultNNP.push(x);
							break;
						case 'Киришиавтосервис' : 	
							state.searchResultKAS.push(x);
							break;
					};
				};
			
			});

			

					// if(item.label.indexOf(keyword)!==-1){
					// 	var ty = item.label;
					// 	return ty;
					// } else {return false};
		},
		RESET_SEARCH_RESULT: (state, searchResult) => {
			state.searchLoading = null
		},
		COLLAPSE_SEARCH: (state) => {
			state.searchCollapsed = !state.searchCollapsed;
		},
		OPEN_SEARCH: (state) => {
			state.searchCollapsed = false
		},
		CLOSE_SEARCH: (state) => {
			state.searchCollapsed = true;
		},
		CLOSE_SEARCH_RESULT_TAB: (state) => {
			state.searchResultTabClosed = true;
		},
		OPEN_SEARCH_RESULT_TAB: (state) => {
			state.searchResultTabClosed = false;
		},
	},
	actions: {
		setSearchQuery: (state,  searchQuery) => {
			state.commit('SET_SEARCH_QUERY', searchQuery);
		},
		collapse_search: (state) => {
			state.commit('COLLAPSE_SEARCH');
		},
		reset_search: (state) => {
			state.commit('RESET_SEARCH');
		},
		close_search: (state) => {
			state.commit('CLOSE_SEARCH');
			state.commit('toggle_ui_settings_button',{buttonArray: 'uiButtonSquare', id: 1});
		},
		close_search_result_tab: (state) => {
			state.commit('SET_SEARCH_QUERY', '');
			state.commit('CLOSE_SEARCH_RESULT_TAB');
		},
		// search: (state, payload) => {
		// 	console.log('search actions');
		// 	state.commit('SEARCH', payload);
		// },
		search({state, commit, rootState}, query) {
			let stations = rootState.map.stations,
				payload = {stations, query};
			


			let promiseSearchLoading = new Promise((resolve, reject) => {
				function search(){
					commit('RESET_SEARCH');
					commit('OPEN_SEARCH_RESULT_TAB');
					commit('OPEN_SEARCH');
					commit('SEARCH', payload);
					commit('SET_SEARCH_LOADING', true);
				};
				resolve(search());
			});
			promiseSearchLoading.then(
				result => {
					commit('SET_SEARCH_LOADING', false);
				},
				error => {
					console.log('error in module_search of store')
				}
			);
		}
	},
	getters: {
		getModuleState(state, getters, rootState) {
			return rootState.stations;
		},
		getSearchLoading(state){
			return state.searchLoading;
		},
		searchResultTabClosed(state){
			return state.searchResultTabClosed;
		},
		getSearchCollapsed(state){
			return state.searchCollapsed;
		},
		getSearchResultKNP(state){
			return state.searchResultKNP;
		},
		getSearchResultPNP(state){
			return state.searchResultPNP;
		},
		getSearchResultTNP(state){
			return state.searchResultTNP;
		},
		getSearchResultNNP(state){
			return state.searchResultNNP;
		},
		getSearchResultKAS(state){
			return state.searchResultKAS;
		},
		getNumberOfSearchResults(state){
			return state.searchResultKNP.length + state.searchResultPNP.length + state.searchResultTNP.length + state.searchResultNNP.length + state.searchResultKAS.length 
		},
	}
})