import link from '../../constants'
import axios from 'axios';

export default ({
	state: {
        mediaUrl: '',
        activeData: '',
        activePin: {},
        panoramaImageSrc: '',
        panoramaData: null
	},
	mutations: {
		SET_PANORAMA_DATA(state, object) {
            state.panoramaData = object
        },
        SET_PANORAMA_IMAGE_SRC(state, string) {
            state.panoramaImageSrc = string
        },
        SET_ACTIVE_PIN(state, object) {
            state.activePin = object
        },
        SET_ACTIVE_DATA(state, number) {
            state.activeData = number
        }
	},
	actions: {
		async getPanoramaData(state, id) {
            state.commit('SET_PANORAMA_DATA', null)
            const options = {
                sStationId: id,
            }
            const tempObj = await axios.get(link.getDepartmentScheme, { data: JSON.stringify(options)}).then(res => res.data)

            state.commit('SET_PANORAMA_DATA', tempObj)
            state.commit('SET_COMPONENT',{
                componentPosition: 'centralComponent',
                componentName: 'panorama-container'
            })
            state.commit('SET_COMPONENT',{
                componentPosition: 'leftMenuComponent',
                componentName: 'panorama-controls'
			})
        },
        updateActivePin(state, object) {
            state.commit('SET_ACTIVE_PIN', object)  
        },
        setActiveData(state, number) {
            state.commit('SET_ACTIVE_DATA', number)  
        }
	},
	getters: {
       
    }
})
