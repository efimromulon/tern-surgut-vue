import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import 'leaflet/dist/leaflet.css'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/material.css'
import uiSettingsPanelViewsViewMarkingSettingsViewLayout from '@/components/app-ui/app-ui-components/_ui-settings-panel-views__view-marking-settings__view-layout.vue'
import buttonRectangle from '@/components/app-common/buttons/button-rectangle.vue'
import buttonRectangleText from '@/components/app-common/buttons/button-rectangle-text.vue'
import indicatorFluid from '@/components/app-common/indications/indicator-fluid.vue'

Vue.config.productionTip = false;
Vue.component('VueSlider', VueSlider);
Vue.component('ViewLayout', uiSettingsPanelViewsViewMarkingSettingsViewLayout);
Vue.component('buttonRectangle', buttonRectangle);
Vue.component('buttonRectangleText', buttonRectangleText);
Vue.component('indicatorFluid', indicatorFluid);

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
