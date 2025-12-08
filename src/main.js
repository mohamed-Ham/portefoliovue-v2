// Importe les styles CSS globaux
import './assets/css/style.css'

// Importe les fonctions Vue nécessaires
import { createApp } from 'vue'

// Importe le composant App principal
import App from './App.vue'

// Crée l'application Vue
// - createApp(App) : initialise l'app avec le composant App comme racine
// - .mount('#app') : attache l'app au DOM, à l'élément avec l'id "app" (dans index.html)
createApp(App).mount('#app')
