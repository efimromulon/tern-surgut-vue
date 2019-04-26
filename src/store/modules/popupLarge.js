export default ({
	state: {
		azsExtendedInfo: {
			oReservoir: {
				data: [
					{
						id: 0,
						fuelType: "АИ98",
						fuelTankNumber: 1,                
						maxCapacity: 198.4,
						nonRemovableResidue: 1.24,
						currentResidue: 40.12,
						daysUntilExhaustion: 5
					},
					{
						id: 1,
						fuelType: "АИ98",
						fuelTankNumber: 2,                
						maxCapacity: 158.4,
						nonRemovableResidue: 3.54,
						currentResidue: 150.1,
						daysUntilExhaustion: 15
					},
					{   
						id: 2,
						fuelType: "АИ95",
						fuelTankNumber: 1,                
						maxCapacity: 140,
						nonRemovableResidue: 6,
						currentResidue: 80,
						daysUntilExhaustion: 4
					},
					{   
						id: 3,
						fuelType: "АИ92",
						fuelTankNumber: 1,                
						maxCapacity: 200,
						nonRemovableResidue: 2.89,
						currentResidue: 5.65,
						daysUntilExhaustion: 1
					},
					{   
						id: 4,
						fuelType: "ДТМ",
						fuelTankNumber: 1,                
						maxCapacity: 150,
						nonRemovableResidue: 5.49,
						currentResidue: 7.65,
						daysUntilExhaustion: 1
					},
					{   
						id: 5,
						fuelType: "ДТМ",
						fuelTankNumber: 2,                
						maxCapacity: 187,
						nonRemovableResidue: 4.49,
						currentResidue: 142.01,
						daysUntilExhaustion: 6
					}  
				],
				summary: 
					{ 
						totalFuelTanks: 6,
					timeToExhaustion: 6
					}
				
			},
			oFuelSell: {
				data: [
					{
						id: 0,
						fuelType: "АИ98",
						encashedLiters: 122,                
						encashedRub: 121412,
						dynamicsPercent: -0.1
					},
					{   
						id: 1,
						fuelType: "АИ95",
						encashedLiters: 23,                
						encashedRub: 4565,
						dynamicsPercent: 2.7
					},
					{   
						id: 2,
						fuelType: "АИ92",
						encashedLiters: 122,                
						encashedRub: 13506,
						dynamicsPercent: 4.1
					},
					{   
						id: 3,
						fuelType: "ДТМ",
						encashedLiters: 65,                
						encashedRub: 24058,
						dynamicsPercent: -2.5
					}  
				],
				summary: {                
					encashedRub: 163541,
					dynamicsPercent: 0   
				},
				prices: [
					{
						id: 0,
						name: "АИ98",
						value: 48.1
					},
					{
						id: 1,
						name: "АИ92",
						value: 42.1
					},
					{
						id: 2,
						name: "АИ95",
						value: 45.1
					},
					{
						id: 3,
						name: "ДТМ",
						value: 44.1
					}
								
				]
			},
			oConcomitantSells: {
				summary: {
					encashedRub: 24567,
					dynamicsPercent: 2.3
				},
				features: {
					water: true,      
					coffee: true,
					shop: true,
					terminal: true,
					toilet: true,
					is24hshop: true,
					charge: true
				}
			},
			oServices: {
				summary: {
					encashedRub: 12567,
					dynamicsPercent: -7.5
				},
				features: {
					air: true,
					carwash: true,
					service: true,
					tire: true,
					parking: true
				}
			}
		},
		dataItemActive: null,
	},
	mutations: {
		UPDATE_FUELSTOCK_ACTIVE: (state, id) => {
			state.dataItemActive = id === state.dataItemActive ? null : id
		},
	},
	actions: {
		update_fuelstock_active: (state, id) => {
			state.commit('UPDATE_FUELSTOCK_ACTIVE', id)
		}
	},
	getters: {
		GET_station_extended_info_by_Id_and_datatype: (state) => x => {
			let r = state[x.datatype].find(station => station.sStationId === x.id);
			for(var prop in r){
				if(r[prop] instanceof Array){
					return r[prop]
				}
			}
		},
		T_GET_azsExtendedInfo: (state) => x => {
			return state.azsExtendedInfo[x.datatype]
		},
		GET_dataItemActive: (state) => {
			return state.dataItemActive
		}
	}
})