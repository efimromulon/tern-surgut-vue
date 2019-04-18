import link from '../../constants'
import axios from 'axios';

export default ({
	state: {
        availableReports: [],
        favoriteReports: [],
        reportsHistory: [],
        currentReport: null
	},
	mutations: {
		SET_AVAILABLE_REPORTS(state, array) {
            state.availableReports = array;
        },
        SET_FAVORITE_REPORTS(state, array) {
            state.favoriteReports = array
        },
        ADD_TO_HISTORY(state, object) {
            let tempArr = state.reportsHistory.slice(0)

            let isUniqueIndex = null;
            
            tempArr.forEach( (report, index) => { 
                if (report.cuid === object.cuid) { isUniqueIndex = index } 
            })

            if (!!isUniqueIndex) {
                tempArr.splice(isUniqueIndex,1)
            }

            tempArr.unshift(object)
            state.reportsHistory = tempArr
        },
        CHANGE_CURRENT_REPORT(state, object) {
            state.currentReport = object
        },
        REMOVE_FROM_FAVORITE(state, payload) {
            let { object, index} = payload;
          
            let tempArr = state.favoriteReports.splice(0)
            tempArr.splice(index,1) 

            let tempObj = {
                action: 'delete',
                report: JSON.stringify(object)
            }

          //  axios.post(link.setFavReports, { tempObj })
            state.favoriteReports = tempArr
        },
        ADD_TO_FAVORITE(state, object) {
            let tempArr = state.favoriteReports.splice(0)

            let tempObj = {
                action: 'add',
                report: JSON.stringify(object)
            }

            tempArr.unshift(object)
          //  axios.post(link.setFavReports, { tempObj })
            
            state.favoriteReports = tempArr

        }
	},
	actions: {
		async prepareAvailableReports(state) {
            //fetch reports

            const responseArr = []

            state.commit('SET_AVAILABLE_REPORTS', responseArr)
        },
       async  prepareFavoriteReports(state) {
            //fetch reports
            const responseArr = []

            state.commit('SET_FAVORITE_REPORTS', responseArr)
        },
        setFavoriteReports(state,array) {
            state.commit('SET_FAVORITE_REPORTS', array)
        },
        addToHistory(state,object) {
            state.commit('ADD_TO_HISTORY', object)
        },
        changeCurrentReport(state, object) {
            if (!state.currentReport || state.currentReport.cuid !== object.cuid) {
                state.commit('CHANGE_CURRENT_REPORT', object)
                state.commit('ADD_TO_HISTORY', object)
            }
        },
        updateFavorite(state, object) {
            let favoriteReports = state.state.favoriteReports
            let isFav = null

            if (favoriteReports.length > 0) {
                for (let i = 0; i < favoriteReports.length; i++) {
                    if (favoriteReports[i].cuid === object.cuid) {
                        isFav = i
                    }
                }
            }
            
            if (isFav === 0 || isFav) {
                state.commit('REMOVE_FROM_FAVORITE', { object: object, index: isFav })     
            } else {
                state.commit('ADD_TO_FAVORITE', object)
                        
            }


           
        }
        
	},
	getters: {
        getFavorite(state) {
            let object = state.currentReport;

            if (!object) {
                return false
            }
            let id = object.cuid
            let favoriteReports = state.favoriteReports

            if (favoriteReports.length === 0) {
                return false
            } else {
                
                for (let i = 0; i < favoriteReports.length; i++) {
                    if (favoriteReports[i].cuid === id) {
                        return true
                    }
                }

                return false
            }

        }
    }
})
