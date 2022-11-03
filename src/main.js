import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import BarraApp from './components/UI/BarraApp.vue'
import NuevoPaciente from './components/NuevoPaciente.vue';
import PacientesRegistrados from './components/PacientesRegistrados.vue';


Vue.config.productionTip = false
Vue.component('barra-app',BarraApp);
Vue.component('nuevo-paciente',NuevoPaciente);
Vue.component('pacientes-registrados',PacientesRegistrados);


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
