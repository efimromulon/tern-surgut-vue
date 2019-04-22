import link from '../../constants'
import axios from 'axios';

export default ({
	state: {
        heatmapData: [],
        dataType: '',
        chartData: {},
        highlightedAzs: '',
        highlightedAzsName: '', 
        weekNames: [],
        // activeWeek: '',
        weekHipe: 0,
        maxVal: null,
        averageVal: 5,
        weekIndex: '0',
        chartDataLoading: false
	},
	mutations: {
		SET_HEATMAP_DATA(state, array) {
            state.heatmapData = array
        },
        SET_WEEK_NAMES(state, array) {
            state.weekNames = array
        },
        SET_WEEK_INDEX(state, string) {
            state.weekIndex = string
        },
        SET_MAX_VALUE(state, number) {
            state.maxVal = number
        },
        SET_HIGHLIGHTED_AZS(state, object) {
            state.highlightedAzs = object.sStationId
            state.highlightedAzsName = object.sDisplayName
        }, 
        SET_CHART_DATA(state, array) {
            state.chartData = array
        },
        SET_CHARTDATA_LOADING(state, bool) {
            state.chartDataLoading = bool;
        },
        SET_AVERAGE_VAL(state, num) {
            state.averageVal = num
        },
        SET_WEEK_HIPE(state, num) {
            state.weekHipe = num
        },
        SET_DATA_TYPE(state, string) {
            state.dataType = string
        }
	},
	actions: {
		async getHeatmapData(state) {
             const tempArr = await axios.get(link.getHeatmapData).then(res => res.data)
             state.commit('SET_HEATMAP_DATA', tempArr)
             let weeksArr = [];
             let maxVal =  0;
             for (let i = 0; i < tempArr.length; i++) {
                 let item = tempArr[i];
                 
                 let itemData = item.aReboots
                 
                 if (itemData && itemData.length > 0) {
                     itemData.forEach(item => {
                         if (weeksArr.indexOf(item.name) === -1) {
                             weeksArr.push(item.name)
                         }
                         if(item.count && maxVal < Number(item.count) ) {
                             maxVal = Number(item.count)
                         }
                     })
                 }
             }

             weeksArr.sort()
    
             state.commit('SET_WEEK_INDEX', weeksArr.length - 1)
             state.commit('SET_WEEK_NAMES', weeksArr)
             state.commit('SET_MAX_VALUE', maxVal)
        },
        async highlightAzs(state, object) {

            if (!state.highlightedAzs || state.highlightedAzs  !== object.sStationId) {
              
                let weekNames = state.state.weekNames;
                let weekIndex = state.state.weekIndex;
                let weekName = weekNames[weekIndex]

                state.commit('SET_HIGHLIGHTED_AZS', object)
                state.commit('SET_CHARTDATA_LOADING', true)
                const options = {
                    sStationId: object.sStationId,
                    weekName: weekName,
                    type: "reboot"
                }
                const tempObj = await axios.get(link.getHeatmapChartData, { data: JSON.stringify(options)}).then(res => res.data)
                state.commit('SET_CHARTDATA_LOADING', false)
                state.commit('SET_CHART_DATA', tempObj)
            } else {
                state.commit('SET_HIGHLIGHTED_AZS', {
                    sStationId: '',
                    sDisplayName: ''
                })
                state.commit('SET_CHART_DATA', {})
            }
            
        },
        async updateChartData(state) {
            state.commit('SET_CHARTDATA_LOADING', true)
            let weekNames = state.state.weekNames;
            let weekIndex = state.state.weekIndex;
            let weekName = weekNames[weekIndex]
            let sStationId = state.state.highlightedAzs.sStationId

            const options = {
                sStationId,
                weekName,
                type: "reboot"
            }
            const tempObj = await axios.get(link.getHeatmapChartData, { data: JSON.stringify(options)}).then(res => res.data)
            state.commit('SET_CHARTDATA_LOADING', false)
            state.commit('SET_CHART_DATA', tempObj)
        },
        updateMaxVal(state, num) {
            state.commit('SET_MAX_VALUE', num)
        },
        updateAverageVal(state, num) {
            state.commit('SET_AVERAGE_VAL', num)
        },
        updateWeekHipe(state, num) {
            state.commit('SET_WEEK_HIPE', num)
        },
        updateWeekIndex(state, num) {
            state.commit('SET_WEEK_INDEX', num)
        },
        updateDataType(state, string) {
            state.commit('SET_DATA_TYPE', string)
        }
	},
	getters: {
       
    }
})
