export default ({
	state: {
		searchQuery: '',
		searchLoading: false,
		searchResult: null,
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
		REFRESH_SEARCH: (state) => {
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

				var currentCategory = x.category;
				if ( x.stationName === query ) {
					switch (true) {
						case currentCategory === 'Калининграднефтепродукт' : 
							state.searchResultKNP.push(x);
							break;
						case currentCategory === 'Псковнефтепродукт' : 	
							state.searchResultPNP.push(x);
							break;
						case currentCategory === 'Тверьнефтепродукт' : 	
							state.searchResultTNP.push(x);
							break;
						case currentCategory === 'Новгороднефтепродукт' : 	
							state.searchResultNNP.push(x);
							break;
						case currentCategory === 'Киришиавтосервис' : 	
							state.searchResultKAS.push(x);
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
			commit('REFRESH_SEARCH');
			commit('SEARCH', payload);
		}
	},
	getters: {
		getModuleState(state, getters, rootState) {
			return rootState.stations;
		},
	}
})