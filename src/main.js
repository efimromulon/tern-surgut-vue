import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

import VueSlider from 'vue-slider-component'

import 'leaflet/dist/leaflet.css'
import 'vue-slider-component/theme/material.css'

import uiSettingsPanelViewsViewMarkingSettingsViewLayout from '@/components/app-ui/app-ui-components/_ui-settings-panel-views__view-marking-settings__view-layout.vue'

import buttonRectangle from '@/components/app-common/buttons/button-rectangle.vue'
import buttonRectangleText from '@/components/app-common/buttons/button-rectangle-text.vue'
import buttonSquare from '@/components/app-common/buttons/button-square.vue'
import buttonCross from '@/components/app-common/buttons/button-cross.vue'
import buttonCollapse from '@/components/app-common/buttons/button-collapse.vue'

import svgIconErase from '@/components/app-common/svg/svg-icon-erase.vue'
import svgIconFunnel from '@/components/app-common/svg/svg-icon-funnel.vue'
import svgIconLayers from '@/components/app-common/svg/svg-icon-layers.vue'
import svgIconSearch from '@/components/app-common/svg/svg-icon-search.vue'

import { TimelineMax } from 'gsap'

Vue.config.productionTip = false;

Vue.component('VueSlider', VueSlider);

Vue.component('ViewLayout', uiSettingsPanelViewsViewMarkingSettingsViewLayout);

Vue.component('buttonRectangle', buttonRectangle);
Vue.component('buttonRectangleText', buttonRectangleText);
Vue.component('buttonSquare', buttonSquare);
Vue.component('buttonCross', buttonCross);
Vue.component('buttonCollapse', buttonCollapse);

Vue.component('iconErase', svgIconErase);
Vue.component('iconFunnel', svgIconFunnel);
Vue.component('iconLayers', svgIconLayers);
Vue.component('iconSearch', svgIconSearch);

// eslint-disable-next-line  
delete L.Icon.Default.prototype._getIconUrl  
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({  
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
	iconUrl: require('leaflet/dist/images/marker-icon.png'),  
	shadowUrl: require('leaflet/dist/images/marker-shadow.png')  
})

new Vue({
	store,
	render: h => h(App)
}).$mount('#app')
