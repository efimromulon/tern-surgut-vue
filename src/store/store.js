import Vue from 'vue'
import Vuex from 'vuex'
import map from './modules/map.js'
import search from './modules/search.js'
import uiSettings from './modules/uiSettings.js'
import dynamicComponents from './modules/dynamicComponents.js'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		map,
		search,
		uiSettings,
		dynamicComponents
	},
	state: {
		//Preloader
			appLoading: true,
			appLoadingText: '',
			appLoadingTextArray: [

				{textActive: true, textItem: 'Загрузка STORE'},

			],
		//Preloader - END
	},
	mutations: {
		//Preloader
			CHANGE_APPLOADING: (state, payload) => {
				state.appLoading = payload;
			},
			CHANGE_APPLOADINGTEXTARRAY: (state, payload) => {
				store.state.appLoadingTextArray = payload;
			},
			CHANGE_APPLOADINGTEXT: (state, payload) => {
				let nextText;
				if(payload === undefined) nextText = state.appLoadingTextArray[0].textItem;
				if(payload !== undefined) nextText = state.appLoadingTextArray[payload].textItem;
				state.appLoadingText = nextText;
			},
		//Preloader - END
	},

	actions: {
		//Preloader
			change_apploading: (state, payload) => {
				state.commit('CHANGE_APPLOADING', payload);
			},
			change_apploadingtextarray: (state, payload) => {
				state.commit('CHANGE_APPLOADINGTEXTARRAY', payload);
			},
			change_apploadingtext: (state, payload) => {
				state.commit('CHANGE_APPLOADINGTEXT', payload);
			},
		//Preloader - END
	},

	getters: {
		//Preloader
			get_appLoading: (state) => {
				return state.appLoading
			},
			get_appLoadingTextArray: (state) => {
				return state.appLoadingTextArray
			},
			get_appLoadingTextArrayCount: (state) => {
				return state.appLoadingTextArray.length
			},
			get_appLoadingText: (state) => {
				return state.appLoadingText
			},
		//Preloader - END

	}
})
