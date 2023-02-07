import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss';
import router from './router';
import 'swiper/css/bundle';
import './assets/css/fontAwesome5Pro.css';
import 'bootstrap';
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import './assets/scss/main.scss';
import store from './store';
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

let app = createApp(App);
app.use(store)
app.use(router)
app.use(BootstrapVue3);

export default {
    components: { VueCal },
  }

app.mount('#app');


