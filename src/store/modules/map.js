export default ({
	state: {
		stations: [],
		stations_sorted: {
			stations_knp: {
				g: [],
				o: [],
				r: [],
				colorless: []
			},
			stations_kas: {
				g: [],
				o: [],
				r: [],
				colorless: []
			},
			stations_nnp: {
				g: [],
				o: [],
				r: [],
				colorless: []
			},
			stations_pnp: {
				g: [],
				o: [],
				r: [],
				colorless: []
			},
			stations_tnp: {
				g: [],
				o: [],
				r: [],
				colorless: []
			},			
		},
		stations_knp: [],
		stations_kas: [],
		stations_nnp: [],
		stations_pnp: [],
		stations_tnp: [],

		fuel_sell_data: [],
		fuel_sell_dates_compare: [],
		fuel_sell_dates_analysis: [],
		fuel_sell_filters: '',

		fuel_stock_data: [],
		fuel_stock_filters: '',

		acrticle_sell_data: [],
		acrticle_sell_dates_compare: [],
		acrticle_sell_dates_analysis: [],
		acrticle_sell_filters: '',
	},

	mutations: {
		SET_STATIONS: (state, jsonPayload) => {

			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData,
				f = state.fuel_sell_filter_current,
				res =[];

			d.forEach(item => {

				let a = item.sStationId,
					c = item.sStationCategory.replace(/\s+/g, ''),
					g = item.sCompanyName,//
					h = item.sStationAddress,
					k = item.sStationCity,
					l = item.sStationLabel,
					u = item.sStationName,
					p = item.sStationPhone,//
					latlng = [item.dStationLatitude, item.dStationLongitude],
					fuel = state.fuel_sell_data,
					value,
					color;

				fuel = fuel.find(i => {return i.sStationId === a;});
				///результаты, id которых есть в json

				if ( (fuel !== undefined) && (fuel.aFuelSell.find(i => {return Object.keys(i).includes(f)}) ) ) {

					value = fuel.aFuelSell.find(i => {return Object.keys(i).includes(f)})[f] ;
					switch (true) {
						case value >= state.range_current[1]:
							color = 'g';
							break;
						case ( ( value >= state.range_current[0] ) && ( value < state.range_current[1] ) ):
							color = 'o';
							break;
						case value < state.range_current[0]:
							color = 'r';
							break;
					};

					res.push({
						id: a, 
						latlng: latlng, 
						category: c, 
						color: color, 
						valueRange: fuel.aFuelSell.find(i => {return Object.keys(i).includes(f)})[f],
						companyName: g,
						stationAddress: h,
						stationCity: k,
						stationLabel: l,
						stationName: u,
						stationPhone: p
					});


				} else {

					///Результаты, id которых нет в json
					res.push({
						id: a, 
						latlng: latlng, 
						category: c, 
						color: 'colorless', 
						valueRange: null,
						companyName: g,
						stationAddress: h,
						stationCity: k,
						stationLabel: l,
						stationName: u,
						stationPhone: p
					});

				};

			});

			state.stations = res;

		},
		SET_FUEL_SELL: (state, jsonPayload) => {

			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData;

			state.fuel_sell_data 				= d.data;
			state.fuel_sell_dates_compare 		= d.dates_compare;
			state.fuel_sell_dates_analysis 		= d.dates_analysis;
			state.fuel_sell_filters 			= d.filters;

		},
		SET_FUEL_STOCK: (state, jsonPayload) => {

			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData;

			state.fuel_stock_data 				= d.data;
			state.fuel_stock_filters 			= d.filters;
			state.fuel_stock_filter_current 	= d.filters[0];

		},
		SET_ARTICLE_SELL: (state, jsonPayload) => {

			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData;

			state.acrticle_sell_data 			= d.data;
			state.acrticle_sell_dates_compare 	= d.dates_compare;
			state.acrticle_sell_dates_analysis 	= d.dates_analysis;
			state.acrticle_sell_filters 		= d.filters;

		},
		STATIONS_SORT_BY_SDO: (state) => {

			state.stations_knp = state.stations.filter(i => {
				return i.category === 'Калининграднефтепродукт'
			});
			state.stations_kas = state.stations.filter(i => {
				return i.category === 'Киришиавтосервис'
			});
			state.stations_nnp = state.stations.filter(i => {
				return i.category === 'Новгороднефтепродукт'
			});
			state.stations_pnp = state.stations.filter(i => {
				return i.category === 'Псковнефтепродукт'
			});
			state.stations_tnp = state.stations.filter(i => {
				return i.category === 'Тверьнефтепродукт'
			});	

		},
		STATIONS_SORT_BY_COLORS: (state) => {

			let g 	= 'g',
				o 	= 'o',
				r 	= 'r',
				c 	= 'colorless',
				sdo = ['stations_knp','stations_kas','stations_nnp','stations_pnp','stations_tnp'],
				colors = [g, o, r, c];

			for (var i = 0, j = 0; i < colors.length, j < sdo.length; i++) {

				var currentColor = colors[i],
					currentSdo = sdo[j];

				state.stations_sorted[currentSdo][currentColor] = state[currentSdo].filter(i => {return i.color === currentColor});

				if(i > 3){
					i = 0; 
					j++;
				};

			};

		},

	},
	actions: {

		testaction: (state, jsonPayload) => {
			return new Promise ((resolve, reject) => {
				state.commit('SET_FUEL_SELL', jsonPayload)
				resolve()
			})
		},
		stations_sort_by_sdo: (state) => {
			state.commit('STATIONS_SORT_BY_SDO')
		},
		stations_sort_by_colors: (state) => {
			state.commit('STATIONS_SORT_BY_COLORS')
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
		// stations_sorted
		// stations_knp
		// stations_kas
		// stations_nnp
		// stations_pnp
		// stations_tnp
		GET_stations_sorted: (state) => {
			return state.stations_sorted;
		},
		GET_stations_knp_g: (state) => {
			return state.stations_sorted.stations_knp.g;
		},
		GET_stations_knp_o: (state) => {
			return state.stations_sorted.stations_knp.o;
		},
		GET_stations_knp_r: (state) => {
			return state.stations_sorted.stations_knp.r;
		},
		GET_stations_knp_c: (state) => {
			return state.stations_sorted.stations_knp.colorless;
		},
		GET_stations_kas_g: (state) => {
			return state.stations_sorted.stations_kas.g;
		},
		GET_stations_kas_o: (state) => {
			return state.stations_sorted.stations_kas.o;
		},
		GET_stations_kas_r: (state) => {
			return state.stations_sorted.stations_kas.r;
		},
		GET_stations_kas_c: (state) => {
			return state.stations_sorted.stations_kas.colorless;
		},
		GET_stations_nnp_g: (state) => {
			return state.stations_sorted.stations_nnp.g;
		},
		GET_stations_nnp_o: (state) => {
			return state.stations_sorted.stations_nnp.o;
		},
		GET_stations_nnp_r: (state) => {
			return state.stations_sorted.stations_nnp.r;
		},
		GET_stations_nnp_c: (state) => {
			return state.stations_sorted.stations_nnp.colorless;
		},
		GET_stations_pnp_g: (state) => {
			return state.stations_sorted.stations_pnp.g;
		},
		GET_stations_pnp_o: (state) => {
			return state.stations_sorted.stations_pnp.o;
		},
		GET_stations_pnp_r: (state) => {
			return state.stations_sorted.stations_pnp.r;
		},
		GET_stations_pnp_c: (state) => {
			return state.stations_sorted.stations_pnp.colorless;
		},
		GET_stations_tnp_g: (state) => {
			return state.stations_sorted.stations_tnp.g;
		},
		GET_stations_tnp_o: (state) => {
			return state.stations_sorted.stations_tnp.o;
		},
		GET_stations_tnp_r: (state) => {
			return state.stations_sorted.stations_tnp.r;
		},
		GET_stations_tnp_c: (state) => {
			return state.stations_sorted.stations_tnp.colorless;
		},
		GET_fuel_sell_filters: (state) => {
			return state.fuel_sell_filters;
		},
		GET_fuel_stock_filters: (state) => {
			return state.fuel_stock_filters;
		},
		GET_acrticle_sell_filters: (state) => {
			return state.acrticle_sell_filters;
		},

	}
})