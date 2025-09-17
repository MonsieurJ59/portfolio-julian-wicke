<template>
  <div class="projects-page">
    <section class="py-5">
      <div class="container">
        <h1 class="section-title mb-5">Mes Projets</h1>
        
        <div class="text-center mb-5">
          <div class="btn-group" role="group">
            <button 
              v-for="(filter, index) in filters" 
              :key="index"
              @click="activeFilter = filter"
              :class="['btn', activeFilter === filter ? 'btn-primary' : 'btn-outline-primary']"
            >
              {{ filter }}
            </button>
          </div>
        </div>

        <div class="row">
          <!-- Projet 1 -->
          <div class="col-lg-4 col-md-6 mb-4" v-for="(project, index) in filteredProjects" :key="index">
            <div class="card h-100 project-card">
              <div class="project-image-container">
                <img :src="project.image" class="card-img-top" :alt="project.title">
                <div class="project-links">
                  <a :href="project.demo" target="_blank" class="btn btn-primary me-2" v-if="project.demo">
                    <i class="fas fa-external-link-alt me-1"></i> Voir le projet
                  </a>
                  <a :href="project.github" target="_blank" class="btn btn-outline-light">
                    <i class="fab fa-github me-1"></i> Code source
                  </a>
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h3 class="h5 mb-0">{{ project.title }}</h3>
                  <span class="badge bg-primary">{{ project.date }}</span>
                </div>
                <p class="card-text text-muted">{{ project.description }}</p>
                <div class="project-tags">
                  <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="badge bg-light text-dark me-1 mb-1">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProjetsView',
  data() {
    return {
      activeFilter: 'Tous',
      filters: ['Tous', 'Web', 'Mobile', 'Design', 'Full Stack'],
      projects: [
        {
          title: 'Plateforme E-commerce',
          description: 'Une plateforme e-commerce complète avec système de paiement en ligne et tableau de bord administrateur.',
          image: 'https://via.placeholder.com/400x250?text=E-commerce+Platform',
          tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
          date: '2023',
          github: '#',
          demo: '#',
          category: 'Web'
        },
        {
          title: 'Application de Gestion de Projets',
          description: 'Outil de gestion de projets collaboratif avec suivi des tâches et gestion des équipes.',
          image: 'https://via.placeholder.com/400x250?text=Project+Management',
          tags: ['React', 'Redux', 'Firebase', 'Material-UI'],
          date: '2023',
          github: '#',
          demo: '#',
          category: 'Web'
        },
        {
          title: 'Application Météo Mobile',
          description: 'Application mobile de prévisions météorologiques en temps réel avec géolocalisation.',
          image: 'https://via.placeholder.com/400x250?text=Weather+App',
          tags: ['React Native', 'Expo', 'OpenWeather API'],
          date: '2022',
          github: '#',
          demo: '#',
          category: 'Mobile'
        },
        {
          title: 'Portfolio Artistique',
          description: 'Site vitrine pour un artiste avec galerie interactive et boutique en ligne.',
          image: 'https://via.placeholder.com/400x250?text=Artist+Portfolio',
          tags: ['Gatsby', 'GraphQL', 'Contentful', 'Tailwind CSS'],
          date: '2022',
          github: '#',
          demo: '#',
          category: 'Web'
        },
        {
          title: 'Système de Réservation en Ligne',
          description: 'Système de réservation de rendez-vous avec calendrier interactif et notifications.',
          image: 'https://via.placeholder.com/400x250?text=Booking+System',
          tags: ['Laravel', 'Vue.js', 'MySQL', 'WebSockets'],
          date: '2021',
          github: '#',
          demo: '#',
          category: 'Full Stack'
        },
        {
          title: 'Application de Recettes de Cuisine',
          description: 'Application mobile pour découvrir et partager des recettes de cuisine.',
          image: 'https://via.placeholder.com/400x250?text=Recipe+App',
          tags: ['Flutter', 'Firebase', 'Bloc Pattern'],
          date: '2021',
          github: '#',
          demo: '#',
          category: 'Mobile'
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'Tous') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.activeFilter)
    }
  },
  metaInfo: {
    title: 'Projets | Julian Wicke'
  }
}
</script>

<style scoped>
.project-card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-image-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.project-image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image-container img {
  transform: scale(1.05);
}

.project-links {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-links {
  opacity: 1;
}

.project-links .btn {
  padding: 8px 15px;
  font-size: 0.9rem;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.project-links .btn i {
  margin-right: 5px;
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #6c757d;
  flex-grow: 1;
  margin-bottom: 1rem;
}

.project-tags {
  margin-top: auto;
}

.badge {
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 5px;
  margin-bottom: 5px;
  display: inline-block;
}

.bg-primary {
  background-color: var(--secondary-color) !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.section-title {
  position: relative;
  display: inline-block;
  margin-bottom: 50px;
  font-weight: 700;
  color: var(--primary-color);
}

.section-title::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 3px;
  background-color: var(--secondary-color);
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.btn-group {
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  border-radius: 0;
  padding: 8px 20px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn:first-child {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

.btn:last-child {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

.btn-outline-primary {
  color: var(--secondary-color);
  border-color: var(--secondary-color);
}

.btn-outline-primary:hover, 
.btn-outline-primary.active {
  background-color: var(--secondary-color);
  color: white;
  border-color: var(--secondary-color);
}

@media (max-width: 767.98px) {
  .btn-group {
    flex-direction: column;
    border-radius: 10px;
    width: 100%;
    max-width: 300px;
  }
  
  .btn {
    border-radius: 0 !important;
    width: 100%;
  }
  
  .btn:first-child {
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
    border-bottom-left-radius: 0 !important;
  }
  
  .btn:last-child {
    border-bottom-left-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
    border-top-right-radius: 0 !important;
  }
}
</style>
