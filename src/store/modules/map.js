export default ({
	state: {
		popup_ref: null,
		stations: [],
		stations_sorted: {
			stations_knp: {
				g: [],
				o: [],
				r: [],
				c: []
			},
			stations_kas: {
				g: [],
				o: [],
				r: [],
				c: []
			},
			stations_nnp: {
				g: [],
				o: [],
				r: [],
				c: []
			},
			stations_pnp: {
				g: [],
				o: [],
				r: [],
				c: []
			},
			stations_tnp: {
				g: [],
				o: [],
				r: [],
				c: []
			},			
		},
		stations_knp: [],
		stations_kas: [],
		stations_nnp: [],
		stations_pnp: [],
		stations_tnp: [],

		filter_type_default: 					'FuelStock',

		fuel_sell_data: 	[],
		fuel_stock_data: 	[],
		article_sell_data: 	[],

		fuel_sell_filters: 						'',
		fuel_sell_filters_default: 				"А92",
		fuel_stock_filters: 					'',
		fuel_stock_filters_default: 			"ВСЕ",
		article_sell_filters: 					'',
		article_sell_filters_default: 			"Всего",

		fuel_sell_min_max: 						[],
		fuel_sell_min_max_default: 				[25,75],

		fuel_stock_min_max: 					[],
		fuel_stock_min_max_default: 			[3,11],

		article_sell_min_max: 					[],
		article_sell_min_max_default: 			[25,75],

		fuel_sell_dates_compare_default: 		[],
		fuel_sell_dates_compare: 				["2011-01-01", "2011-02-02"],
		fuel_sell_dates_compare_prev: 			[],

		fuel_sell_dates_analysis_default: 		[],
		fuel_sell_dates_analysis: 				["2011-03-03", "2011-04-04"],
		fuel_sell_dates_analysis_prev: 			[],

		article_sell_dates_compare_default: 	[],
		article_sell_dates_compare: 			["2010-01-01", "2010-02-02"],
		article_sell_dates_compare_prev: 		[],

		article_sell_dates_analysis_default: 	[],
		article_sell_dates_analysis: 			["2010-03-03", "2010-03-03"],
		article_sell_dates_analysis_prev: 		[],

		active_station: null
	},

	mutations: {
		SET_POPUP_REF: (state, ref) => {
			state.popup_ref = ref
		},
		SET_ACTIVE_STATION: (state, payload) => {
			state.active_station = payload
		},
		SET_STATIONS: (state, jsonPayload) => {

			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData,
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
					latlng = [item.dStationLatitude, item.dStationLongitude];
					
					res.push({
						id: a, 
						latlng: latlng, 
						category: c, 
						color: '', 
						valueRange: null,
						companyName: g,
						stationAddress: h,
						stationCity: k,
						stationLabel: l,
						stationName: u,
						stationPhone: p
					});


			});

			state.stations = res;

		},
		SET_FUEL_SELL: (state, jsonPayload) => {

			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData;

			state.fuel_sell_data 				= d.data;
			state.fuel_sell_filters 			= d.filters;
			//state.fuel_sell_dates_compare 		= state.fuel_sell_dates_compare.length 	=== 0 ? d.dates_compare 	: state.fuel_sell_dates_compare;
			//state.fuel_sell_dates_analysis 		= state.fuel_sell_dates_analysis.length === 0 ? d.dates_analysis 	: state.fuel_sell_dates_analysis;

			state.fuel_sell_dates_compare_prev 	= state.fuel_sell_dates_compare;
			state.fuel_sell_dates_compare 		= d.dates_compare;

			state.fuel_sell_dates_analysis_prev = state.fuel_sell_dates_analysis;
			state.fuel_sell_dates_analysis 		= d.dates_analysis;

		},
		SET_FUEL_STOCK: (state, jsonPayload) => {

			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData;

			state.fuel_stock_data 				= d.data;
			state.fuel_stock_filters 			= d.filters;

		},
		SET_ARTICLE_SELL: (state, jsonPayload) => {

			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData;

			state.article_sell_data 			= d.data;
			state.article_sell_filters 			= d.filters;
			//state.article_sell_dates_compare 	= state.article_sell_dates_compare.length 	=== 0 ? d.dates_compare 	: state.article_sell_dates_compare;
			//state.article_sell_dates_analysis 	= state.article_sell_dates_analysis.length 	=== 0 ? d.dates_analysis 	: state.article_sell_dates_analysis;

			state.article_sell_dates_compare_prev 	= state.article_sell_dates_compare;
			state.article_sell_dates_compare 		= d.dates_compare;

			state.article_sell_dates_analysis_prev 	= state.article_sell_dates_analysis;
			state.article_sell_dates_analysis 		= d.dates_analysis;
		},
		SET_SDO_STATIONS: (state, payload) => {
			let {sdoName, stations}  = payload;
			state[sdoName]  = stations
		},
		PAINT_MARKERS: (state, payload) => {
			let { filterType, filterName, minMax } = payload; // filterType -> FuelSell  filterName -> A95
			let sdoList = ['stations_knp','stations_kas','stations_nnp','stations_pnp','stations_tnp'];
			let storeFilterType = '';

			if (!filterType) {
				filterType = state.filter_type_default
			}

			switch (filterType) {
				case 'FuelSell':
				storeFilterType = 'fuel_sell'
					break;
				case 'FuelStock':
				storeFilterType = 'fuel_stock'
					break;
				case 'ArticleSell':
				storeFilterType = 'article_sell'
					break;
			}

			if (!minMax || minMax.length === 0) {
				minMax = state[storeFilterType+'_min_max_default']
			}

			if(!filterName) {
				filterName = state[storeFilterType+'_filters_default']
			}

			let targetData = state[storeFilterType+'_data'].slice(0);
			let targetDataKey = 'a'+filterType;

			function compareToMinMax(value) {				
					if (value > minMax[1]) {
						return 'g'
					} else if (value < minMax[0]) {
						return 'r'
					} else {
						return 'o'
					}
			}

			function setStationColor(station) {
				if (station) {

					let color = 'c';
					let indexToSplice = null;



					targetData.find((item, index) => {
						if (item && item[targetDataKey]) {
							if (item.sStationId === station.id) {
								let dataToSearch = item[targetDataKey];
								for (let i = 0; i < dataToSearch.length; i++) {
										let dataItem = dataToSearch[i];
										if(dataItem[filterName]) {
											color = compareToMinMax(dataItem[filterName])
											indexToSplice = index
										}	
									}		
							}
						}
					})



					if(indexToSplice) {
						targetData.splice(indexToSplice,1)
					}
						
					return color

				} else {
					return 
				}
			}

			sdoList.forEach(sdoName => {
				if (state[sdoName] && state[sdoName].length > 0) {
					for (let i = 0; i < state[sdoName].length; i++) {
						let station = state[sdoName][i];
						station.color = setStationColor(station)
					}
				}
			})

		},

		//next to remove
		STATIONS_SORT_BY_SDO: async (state) => {

			state.stations_knp = await state.stations.filter(i => {
				return i.category === 'Калининграднефтепродукт'
			});
			state.stations_kas = await state.stations.filter(i => {
				return i.category === 'Киришиавтосервис'
			});
			state.stations_nnp = await state.stations.filter(i => {
				return i.category === 'Новгороднефтепродукт'
			});
			state.stations_pnp = await state.stations.filter(i => {
				return i.category === 'Псковнефтепродукт'
			});
			state.stations_tnp = await state.stations.filter(i => {
				return i.category === 'Тверьнефтепродукт'
			});	

		},
		SET_STATIONS_COLORS: (state, payload) => {
		
			let filterArray 			= payload.dataArrayName,
				dataFilter 				= payload.dataFilter,
				sdo 					= ['stations_knp','stations_kas','stations_nnp','stations_pnp','stations_tnp'],
				result 					= [],
				currentValue,
				currentRangeMin 		= payload.dataRange[0],
				currentRangeMax 		= payload.dataRange[1],
				currentComingDataName 	= payload.dataComingName;


			for (var i = 0; i < sdo.length; i++) {
				// console.log(i, 'iteration')
				
				filter_and_set_color(sdo[i], state);
			}

			function filter_and_set_color(cursdo, state){
			
				state[cursdo].forEach( sdo_item => {
					
					let jsonDataItemExisting = state[payload.dataArrayName].find( dan_item => { return dan_item.sStationId === sdo_item.id});

					if(
						jsonDataItemExisting
					){
							
						let data = jsonDataItemExisting[currentComingDataName].find(i => {return Object.keys(i).includes(dataFilter)});
						if (data && data[dataFilter]) {
							currentValue = data[dataFilter]
						} else {
							sdo_item.color = 'c';
							return
						}
					
						if( currentValue >=  currentRangeMax ){
							sdo_item.color = 'g';
						} else 
						if ( (currentValue <  currentRangeMax) && (currentValue >=  currentRangeMin) ){
							sdo_item.color = 'o';
						} else 
						if ( currentValue <  currentRangeMin ){
							sdo_item.color = 'r';
						};
					} else {
						sdo_item.color = 'c';
					};

				});
			};

		},
		STATIONS_SORT_BY_COLORS: (state) => {

			let g 	= 'g',
				o 	= 'o',
				r 	= 'r',
				c 	= 'c',
				sdo = ['stations_knp','stations_kas','stations_nnp','stations_pnp','stations_tnp'],
				colors = [g, o, r, c];

			for (var i = 0, j = 0; i < colors.length, j < sdo.length - 1; i++) {

				var currentColor = colors[i],
					currentSdo = sdo[j];

				state.stations_sorted[currentSdo][currentColor] = state[currentSdo].filter(i => {return i.color === currentColor});

				if(i > 3){
					i = 0; 
					j++;
				};

			};

		},
		SET_FILTER_VALUES: (state, payload) => {
			console.log('SET_FILTER_VALUES', payload);
		},

	},
	actions: {
		set_popup_ref:(state,ref) => {
			state.commit('SET_POPUP_REF',ref)
		},
		set_active_station: (state, payload) => {
			state.commit("SET_ACTIVE_STATION", payload)
		},
		set_fuel_sell: (state, jsonPayload) => {
			return new Promise ((resolve, reject) => {
				state.commit('SET_FUEL_SELL', jsonPayload)
				resolve()
			})
		},
		stations_sort_by_sdo: async (context) => {
			
			let tempObj = {
				stations_knp: [],
				stations_kas: [],
				stations_nnp: [],
				stations_pnp: [],
				stations_tnp: []
			}
		
			let stations = context.state.stations;
			
			function mapName(name) {
				switch (name) {
					case 'Калининграднефтепродукт':
						return 'stations_knp'
						case 'Киришиавтосервис':
						return 'stations_kas'
						case 'Новгороднефтепродукт':
						return 'stations_nnp'
						case 'Псковнефтепродукт':
						return 'stations_pnp'
						case 'Тверьнефтепродукт':
						return 'stations_tnp'
				}
			}

			for (let i = 0; i < stations.length; i++) {
				let station = stations[i];
				if (station.category) {
					tempObj[mapName(station.category)].push(station)
				}
			}

			for (let item in tempObj) {
				if (tempObj[item] && tempObj[item].length > 0) {			
					await context.commit('SET_SDO_STATIONS', { sdoName: item, stations: tempObj[item] })
				}
			}

			await context.commit("PAINT_MARKERS", {})
			context.commit('STATIONS_SORT_BY_COLORS')

		},
		
		set_stations_colors({state, commit, rootState}, datafilter) {
			
			// let a = rootState.uiSettings[datafilter].find( btn => { return btn.buttonState === true }).buttonName,
			let a = datafilter === 'FuelStock' ? "ВСЕ" : "А95",
				b,
				c,
				d,
				g;
		
			switch (true) {
				case datafilter.search( /FuelSell/i ) 	 !== -1 : 
					b = 'fuel_sell_data';
					g = 'aFuelSell';
					c = rootState.uiSettings.range_Datafilter_fuelsell;
					d = c.length === 0 ? rootState.uiSettings.range_Datafilter_default : c;
					break;

				case datafilter.search( /FuelStock/i ) 	 !== -1 : 
					b = 'fuel_stock_data';
					g = 'aFuelStock';
					c = rootState.uiSettings.range_Datafilter_fuelstock;
					d = c.length === 0 ? rootState.uiSettings.range_Datafilter_default : c;
					break;

				case datafilter.search( /ArticleSell/i ) !== -1 :
					b = 'article_sell_data';
					g = 'aArticleSell';
					c = rootState.uiSettings.range_Datafilter_articlesell;
					d = c.length === 0 ? rootState.uiSettings.range_Datafilter_default : c;
					break;

			};
		

			// commit('PAINT_MARKERS', { filterType: datafilter});

		},
		stations_sort_by_colors({state, commit, rootState}) {

			commit('STATIONS_SORT_BY_COLORS')

		},
		set_stations({state, commit, rootState}, jsonPayload) {

			commit('SET_STATIONS', jsonPayload);

		},
		get_json_map({state, commit, rootState}, jsonPayload) {

			if (!jsonPayload) return;

			let n = jsonPayload.jsonName,
				d = jsonPayload.jsonData;
		
			switch (true) {
				case n === 'getFuelSell' : 
					commit('SET_FUEL_SELL'	, jsonPayload);
					break;
				case n === 'getFuelStock' : 
					commit('SET_FUEL_STOCK'	, jsonPayload);
					break;
				case n === 'getArticleSell' : 
					commit('SET_ARTICLE_SELL', jsonPayload);
					break;
			}
		},
		set_filter_values({state, commit, rootState}, payload){

			let payload_ui 		= {
					'sliderValue'	: payload.sliderValue, 
					'viewName'		: payload.viewName
				},
				payload_map 	= { 
					'viewNameForDP'	: payload.viewNameForDP, 
					'sliderValue'	: payload.sliderValue, 
					'analysisValue'	: payload.analysisValue, 
					'compareValue'	: payload.compareValue, 
				};

			commit(	'SET_UI_RANGE', 		payload_ui	);
			commit(	'SET_FILTER_VALUES', 	payload_map	);

		},
		async paintMarkers(context, payload) {
			await context.commit('PAINT_MARKERS', payload)
			context.commit('STATIONS_SORT_BY_COLORS')		
		}
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
			return state.stations_sorted.stations_knp.c;
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
			return state.stations_sorted.stations_kas.c;
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
			return state.stations_sorted.stations_nnp.c;
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
			return state.stations_sorted.stations_pnp.c;
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
			return state.stations_sorted.stations_tnp.c;
		},
		GET_fuel_sell_filters: (state) => {
			return state.fuel_sell_filters;
		},
		GET_fuel_stock_filters: (state) => {
			return state.fuel_stock_filters;
		},
		GET_article_sell_filters: (state) => {
			return state.article_sell_filters;
		},
		GET_dates_compare: (state) => {
			return x => state[x + '_dates_compare'];
		},
		GET_dates_analysis: (state) => {
			return x => state[x + '_dates_analysis'];
		},
		GET_dates_compare_default: (state) => {
			return x => state[x + '_dates_compare_default'];
		},
		GET_dates_analysis_default: (state) => {
			return x => state[x + '_dates_analysis_default'];
		},
		GET_stations_all: (state) => {
			return state.stations
		},
		GET_station_info_by_Id: (state) => x => {

			let result = null;

			function findStation(objStations, stationId){
				

				if( objStations instanceof Array){

					for(var i = 0; i < objStations.length; i++){
						result = findStation(objStations[i], stationId);
					};

				} else {

					for(var prop in objStations){

						if( prop === 'id'){
							if( objStations[prop] === stationId){ 

								
								console.log('RESULT meh', `${prop}`, objStations);
								result = objStations; 
								return result;

							};
						};

						if( objStations[prop] instanceof Object || objStations[prop] instanceof Array ){

							result = findStation(objStations[prop], stationId);

						};

					};

				};
				return result;

			};

			findStation(state.stations_sorted, x);
				
			if( result !== null ){ return result }

		},

	}
})
