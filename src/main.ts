import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import generatedRoutes from 'pages-generated'
import { setupLayouts } from 'layouts-generated'

// Tailwind css
import './assets/css/main.css'

// Vuex
import { store, key } from './store'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(store, key).mount('#app')
