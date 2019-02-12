export default ({
	state: {
		stations_latlng: [],
		stations_info: [],

		range_current: [],
	},
// getStationsLatLng
// getStationsInfo
// getFuelSell
// getFuelStock
// getArticleSell
// {jsonName: 'getStationsLatLng', jsonData: jsongetStationsLatLng};
	mutations: {
		SET_STATIONS: (state, jsonPayload) => {

			let a = jsonPayload.jsonName,
				b = jsonPayload.jsonData;
			console.log('department', jsonPayload);

		},

		SET_FUEL_SELL: (state, jsonPayload) => {
			console.log('fuel', jsonPayload);

		},
		SET_FUEL_STOCK: (state, jsonPayload) => {},
		SET_ARTICLE_SELL: (state, jsonPayload) => {},
	},
	actions: {

 //  actionA ({ commit }) {
	// return new Promise((resolve, reject) => {
	//   setTimeout(() => {
	// 	commit('someMutation')
	// 	resolve()
	//   }, 1000)
	// })
	// }
		testaction: (state, jsonPayload) => {
			return new Promise ((resolve, reject) => {
				state.commit('SET_FUEL_SELL', jsonPayload)
				resolve()
			})
		},
		get_json_map: (state, jsonPayload) => {

			if (!jsonPayload) return;

			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData;

			switch (true) {
				case n === 'getDepartmentFull' : 
					state.commit('SET_STATIONS'		, jsonPayload);
					break;
				case n === 'getFuelSell' : 
					state.commit('SET_FUEL_SELL'	, jsonPayload);
					break;
				case n === 'getFuelStock' : 
					state.commit('SET_FUEL_STOCK'	, jsonPayload);
					break;
				case n === 'getArticleSell' : 
					state.commit('SET_ARTICLE_SELL'	, jsonPayload);
					break;
			}
		},
	},
	getters: {}
})