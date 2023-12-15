import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import KeyCloakService from "./security/keycloakService.js";

const renderApp = () => {
    createApp(App).mount('#app')
};

KeyCloakService.CallLogin(renderApp);