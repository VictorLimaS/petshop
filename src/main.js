import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FirebaseVue from './firebase/firebase';



Vue.use(FirebaseVue)
createApp(App).mount('#app')
