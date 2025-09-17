import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importation de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// CSS webfonts Font Awesome (pour les balises <i class="fab ...">)
import '@fortawesome/fontawesome-free/css/all.min.css'

// Importation de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faGithub, 
  faLinkedinIn, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons'
import { 
  faEnvelope, 
  faCheckCircle,
  faLaptopCode,
  faServer,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'

// Ajout des icônes à la bibliothèque
library.add(
  faGithub, 
  faLinkedinIn, 
  faTwitter, 
  faEnvelope,
  faCheckCircle,
  faLaptopCode,
  faServer,
  faExternalLinkAlt
)

// Importation des styles globaux
import './styles/main.css'

const app = createApp(App)

// Configuration globale
app.use(router)

// Composant global
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
