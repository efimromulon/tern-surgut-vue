export default ({
	state: {
		stations: [],
		stations_info: [],

		range_current: [],
		subFilter_current: '',

		data_fuel_sell: [],
		data_fuel_stock: [],
		data_article_sell: [],
	},
// knp
// kas
// nnp
// pnp
// tnp
// for (var i = 0; i < b.length; i++) {
// 	b[i].sStationCategory = b[i].sStationCategory.replace(/\s+/g, '');
// };
	mutations: {
		SET_STATIONS: (state, jsonPayload) => {

			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData,
				f = state.subFilter_current,
				res =[];
				console.log('f', f);

			d.forEach(item => {

				let a = item.sStationId,
					c = item.sStationCategory,
					latlng = [item.dStationLatitude, item.dStationLongitude],
					fuel = state.data_fuel_sell.data,
					value,
					color;

				fuel = fuel.find(i => {return i.sStationId === a;});
				///результаты, id которых есть в json
				if ( (fuel !== undefined) && (fuel.aFuelSell.find(i => {return Object.keys(i).includes(f)}) ) ) {

					value = fuel.aFuelSell.find(i => {return Object.keys(i).includes(f)})[f] ;
					console.log(value);
					console.log(( (state.range_current[1] * 2) / 3));
					switch (true) {
						case value > ( (state.range_current[1] * 2) / 3):
							color = 'g';
							break;
						case ((value < ( (state.range_current[1] * 2) / 3))&&(value > ( (state.range_current[1] * 1) / 3))):
							color = 'o';
							break;
						case value < ( (state.range_current[1] * 1) / 3):
							color = 'r';
							break;
					};
					res.push({id: a, latlng: latlng, category: c, color: color, valueRange: fuel.aFuelSell.find(i => {return Object.keys(i).includes(f)})[f]});

				} else {
				///Результаты, id которых нет в json
					res.push({id: a, latlng: latlng, category: c, color: null, valueRange: null});
				};

			});
			state.stations = res;
			console.log(res);
		},

		SET_FUEL_SELL: (state, jsonPayload) => {
			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData;			
			state.range_current = d.express.indicator.range;
			state.subFilter_current = d.express.indicator.subFilters;
			state.data_fuel_sell = d;
		},
		SET_FUEL_STOCK: (state, jsonPayload) => {
			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData;
			state.data_fuel_stock = d;
		},
		SET_ARTICLE_SELL: (state, jsonPayload) => {
			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData;
			state.data_article_sell = d;			
		},
	},
	actions: {

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
	getters: {
		GET_stations: (state) => {
			return state.stations;
		},
	}
})