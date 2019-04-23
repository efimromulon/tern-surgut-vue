import link from '../../constants'
import axios from 'axios';
import {cloneDeep} from 'lodash'

function recursivePush(path, scheme, object) {
    let tempObj = cloneDeep(scheme)
    let targetArr;

    for (let i = 0; i < path.length; i++) {
        let childName = path[i]
        let targetChild = tempObj.children.find(child => child.name === childName)
        if (!targetChild) {
            return tempObj
        }
        targetArr = targetChild
    }
    targetArr.push(object)
    return tempObj
}

function recursiveSetIndex(path, scheme, index) {
    let tempObj = cloneDeep(scheme)


    for (let i = 0; i < path.length; i++) {
        let childName = path[i]
        let targetChild = tempObj.children.find(child => child.name === childName)
        if (i === path.length - 1) {
            targetChild.activeChild = index
        }
        if (!targetChild) {
            return tempObj
        }
        
    }

    return tempObj
}

export default ({
	state: {
        settingsActive: false,
        searchActive: false,
        activeUiSettingsSchemeIndex: 0,
        uiSettingsSchemes: [
            {
                name: "Настройки маркировки",
                activeChild: 0,
                componentName: 'tier1-button',
                children: [
                    {
                        name: "Минимальный срок до исчерпания резервуара по всем видам топлива",
                        activeChild: 0,
                        componentName: 'express-marking-button',
                        children: [],
                        actionType: 'update' 
                    },
                    {
                        name: "Динамика реализации топлива",
                        activeChild: 0,
                        componentName: 'express-marking-button',
                        children: []
                    },
                    {
                        name: "Динамика реализации сопутствующих товаров",
                        activeChild: 0,
                        componentName: 'express-marking-button',
                        children: []
                    },
                ]
            },
            {
                name: 'Графика',
                action: 'showHeatmap',
                activeChild: null,
                children: []
            }
        ],
        uiColorsButtons: [
            {
                name: 'green',
                componentName: 'color-button'
            },
            {
                name: 'yellow',
                componentName: 'color-button'
            },
            {
                name: 'red',
                componentName: 'color-button'
            },
            {
                name: 'grey',
                componentName: 'color-button'
            }
        ],
        activeComponents: {
            middle: '',
            left: '',
            center: ''
        }
    },
    mutations: {
        ADD_CHILD(state, payload) {
           let { path, object } = payload;
           let schemes = state.uiSettingsSchemes;

           let tempObj = recursivePush(path, schemes, object)
           state.uiSettingsSchemes = tempObj
        },
        SET_ACTIVE_CHILD_ITEM(state, payload) {
            let { path, index } = payload;
            let schemes = state.uiSettingsSchemes;
            let tempObj = recursiveSetIndex(path, schemes, index);
            state.uiSettingsSchemes = tempObj
        }
    },
	actions: {
        addChild(state, payload) {
            state.commit('ADD_CHILD', payload)
        },
        setActiveChildItem(state, payload) {
            state.commit('SET_ACTIVE_CHILD_ITEM', payload)
        }
        
	},
	getters: {
        getActiveUiSchemeChild(state, path) {
            let schemes = state.uiSettingsSchemes;


            for (let i = 0; i < path.length; i++) {
                let childName = path[i]
                let targetChild = tempObj.children.find(child => child.name === childName)
                if (i === path.length - 1) {
                    return targetChild.children[targetChild.activeChild]
                }
                if (!targetChild) {
                    return null
                }
                
            }

        }
    }
})
