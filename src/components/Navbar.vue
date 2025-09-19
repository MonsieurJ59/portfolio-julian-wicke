<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">Julian Wicke</router-link>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click="closeMobileMenu">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/experiences" @click="closeMobileMenu">Expériences</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/educations" @click="closeMobileMenu">Formations</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects" @click="closeMobileMenu">Projets</router-link>
          </li>
          <li class="nav-item ms-lg-3">
            <a class="btn btn-primary" href="/cv.pdf" download @click="closeMobileMenu">
              Télécharger mon CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    // Ajouter la classe 'scrolled' à la navbar lors du défilement
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Nettoyer l'écouteur d'événement
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    },
    closeMobileMenu() {
      const collapseEl = document.getElementById('navbarNav');
      const toggler = this.$el.querySelector('.navbar-toggler');
      // Si le menu est ouvert (classe Bootstrap 'show'), on le replie
      if (collapseEl && collapseEl.classList.contains('show')) {
        collapseEl.classList.remove('show');
        if (toggler) {
          toggler.classList.add('collapsed');
          toggler.setAttribute('aria-expanded', 'false');
        }
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  transition: all 0.3s;
  padding: 15px 0;
}

.navbar.scrolled {
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.95) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(45deg, #2c3e50, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-link {
  position: relative;
  padding: 8px 0;
  margin: 0 15px;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--secondary-color);
  transition: width 0.3s;
}

.nav-link:hover::after,
.router-link-active::after {
  width: 100%;
}

.router-link-active {
  font-weight: 600;
  color: var(--secondary-color) !important;
}

.btn-primary {
  margin-top: -5px;
  padding: 8px 20px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .nav-item {
    margin: 5px 0;
  }
  
  .btn-primary {
    margin-top: 10px;
  }
}
</style>
