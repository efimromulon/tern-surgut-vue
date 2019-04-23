import link from '../../constants'
import axios from 'axios';

export default ({
	state: {
        mediaUrl: '',
        activeData: '',
        activePin: '',
        panoramaImageSrc: '',
        panoramaData: {}
	},
	mutations: {
		SET_PANORAMA_DATA(state, object) {
            state.panoramaData = object
        }
	},
	actions: {
		async getPanoramaData(state, id) {
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
        }
	},
	getters: {
       
    }
})
