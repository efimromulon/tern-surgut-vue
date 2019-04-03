export default ({
	state: {
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

		fuel_sell_data: 	[],
		fuel_stock_data: 	[],
		article_sell_data: 	[],

		fuel_sell_filters: 		'',
		fuel_stock_filters: 	'',
		article_sell_filters: 	'',

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
	},

	mutations: {
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
		SET_STATIONS_COLORS: (state, payload) => {
			// console.log(payload);//{dataArrayName: "fuel_stock_data", dataFilter: "ВСЕ", dataRange: Array(2)}
			// console.log(state[payload.dataArrayName][0].aFuelStock[0]['А92']);
			// console.log(state[payload.dataArrayName][0].sStationId);
			// console.log(state.stations_knp[0].valueRange);
			// console.log(state.stations_knp[0].id);
			// console.log(state.stations_kas);
			// console.log(state.stations_nnp);
			// console.log(state.stations_pnp);
			// console.log(state.stations_tnp);
			// console.log(state.stations_sorted);

			let filterArray 			= payload.dataArrayName,
				dataFilter 				= payload.dataFilter,
				sdo 					= ['stations_knp','stations_kas','stations_nnp','stations_pnp','stations_tnp'],
				result 					= [],
				currentValue,
				currentRangeMin 		= payload.dataRange[0],
				currentRangeMax 		= payload.dataRange[1],
				currentComingDataName 	= payload.dataComingName;


			for (var i = 0; i <= sdo.length - 1; i++) {
				console.log(i, 'iteration')
				filter_and_set_color(sdo[i], state);
			}

			function filter_and_set_color(cursdo, state){
				//console.log(cursdo, state);
				state[cursdo].forEach( sdo_item => {

					let jsonDataItemExisting = state[payload.dataArrayName].find( dan_item => { return dan_item.sStationId === sdo_item.id});

					if(
						jsonDataItemExisting
					){
						currentValue = jsonDataItemExisting[currentComingDataName].find(i => {return Object.keys(i).includes(dataFilter)})[dataFilter];
						//console.log('match by ID', jsonDataItemExisting);
						//console.log('currentValue', currentValue);
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
		set_fuel_sell: (state, jsonPayload) => {
			return new Promise ((resolve, reject) => {
				state.commit('SET_FUEL_SELL', jsonPayload)
				resolve()
			})
		},
		stations_sort_by_sdo: (state) => {

			state.commit('STATIONS_SORT_BY_SDO')

		},
		set_stations_colors({state, commit, rootState}, datafilter) {

			let a = rootState.uiSettings[datafilter].find( btn => { return btn.buttonState === true }).buttonName,
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

			commit('SET_STATIONS_COLORS', {dataArrayName: b, dataFilter: a, dataRange: d, dataComingName: g});

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
