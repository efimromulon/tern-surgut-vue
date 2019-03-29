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
			state.searchResultKNP = [];
			state.searchResultPNP = [];
			state.searchResultTNP = [];
			state.searchResultNNP = [];
			state.searchResultKAS = [];
		},
		SEARCH: (state, payload) => {
			console.log('SEARCH', typeof payload, payload);
			const 	stations 	= payload.stations;
			let 	query 		= payload.query;

			//let searchResult = stations.filter(x => {return x.stationName === query});
		 

			let searchFilterByCat = stations.map( x => {

				var currentCategory = x.category,
					currentResultItem = [];
				if ( x.stationName === query ) {
					currentResultItem.push(x);
					switch (true) {
						case currentCategory === 'Калининграднефтепродукт' : 
							state.searchResultKNP = currentResultItem;
							break;
						case currentCategory === 'Псковнефтепродукт' : 	
							state.searchResultPNP = currentResultItem;
							break;
						case currentCategory === 'Тверьнефтепродукт' : 	
							state.searchResultTNP = currentResultItem;
							break;
						case currentCategory === 'Новгороднефтепродукт' : 	
							state.searchResultNNP = currentResultItem;
							break;
						case currentCategory === 'Киришиавтосервис' : 	
							state.searchResultKAS = currentResultItem;
							break;
					};
				};
			
			});

					// if(item.label.toLowerCase().indexOf(keyword)!==-1){
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
		searchCollapsed(state){
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
			if(
				state.searchResultKNP.length > 0 ||
				state.searchResultPNP.length > 0 ||
				state.searchResultTNP.length > 0 ||
				state.searchResultNNP.length > 0 ||
				state.searchResultKAS.length > 0
			){
				return 0
			} else {
				return -1
			};
		},
	}
})