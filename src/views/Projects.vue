<script>
export default {
  name: 'ProjetsView',
  data() {
    return {
      activeFilter: 'Tous',
      orderedCategories: ['Tous', 'Web', 'Mobile', 'Design', 'Jeux', 'Autres'],
      projects: [
        {
          title: 'Belote Royale',
          description:
            'Application web pour organiser des tournois de belote (gestion de tournoi, équipes, rencontres). Monté sous Docker avec front et back séparés.',
          image: 'https://via.placeholder.com/400x250?text=Belote+Royale',
          tags: ['Docker', 'React', 'TypeScript', 'Node.js', 'Express', 'CSS', 'HTML'],
          date: 'août 2025 - ... en cours',
          github: 'https://github.com/MonsieurJ59/BeloteRoyale',
          demo: '#',
          category: 'Web'
        },
        {
          title: 'Mémoire professionnel',
          description:
            'Étude sur la veille technologique et l’accompagnement des alternants en développement web, avec recommandations concrètes et enquêtes terrain.',
          image: 'https://via.placeholder.com/400x250?text=Memoire+pro',
          tags: ['Recherche', 'Veille', 'Alternance'],
          date: 'janv. 2025 – juin 2025',
          github: '#',
          demo: '#',
          category: 'Autres'
        },
        {
          title: "Ch'te Rhabille",
          description:
            'Plateforme web écoresponsable pour valoriser les invendus textiles via une expérience innovante (box mystères). Projet étudiant type start-up.',
          image: 'https://via.placeholder.com/400x250?text=Ch%27te+Rhabille',
          tags: ['Web', 'UX', 'Projet'],
          date: 'déc. 2023 – avr. 2025',
          github: '#',
          demo: '#',
          category: 'Web'
        },
        {
          title: 'Maze of Malice',
          description:
            'Jeu vidéo 2D rogue-like réalisé sous Unity. Donjon généré aléatoirement, malédictions, objectifs et contrôles clavier.',
          image: 'https://via.placeholder.com/400x250?text=Maze+of+Malice',
          tags: ['Unity', 'Game'],
          date: 'janv. 2025 – févr. 2025',
          github: '#',
          demo: '#',
          category: 'Jeux'
        },
        {
          title: 'Mon forum anonyme',
          description:
            'Projet Dockerisé avec API, DB, services Thread et Sender. CI/CD GitHub, registry, networks et volumes pour persistance et sécurité.',
          image: 'https://via.placeholder.com/400x250?text=Forum+Anonyme',
          tags: ['Docker', 'CI/CD', 'API', 'HTML', 'CSS', 'PHP', 'Javascript'],
          date: 'janv. 2024 – mars 2024',
          github: 'https://github.com/MonsieurJ59/MonForumAnonyme',
          demo: '#',
          category: 'Web'
        },
        {
          title: 'API Sans Framework',
          description: 'Ce projet vise à fournir une interface Web simple pour gérer les classes et les étudiants. Il utilise une API REST pour communiquer avec le serveur.',
          image: 'https://via.placeholder.com/400x250?text=Robot+Sumo',
          tags: ['HTML', 'PHP', 'API', 'Javascript'],
          date: 'nov. 2023 – dec. 2023',
          github: 'https://github.com/MonsieurJ59/WICKE_Julian_API_sans_framework',
          demo: '#',
          category: 'Web'
        },
        {
          title: 'Robot de combat sumo',
          description: 'Robot sumo conçu avec Fusion360 (design 3D).',
          image: 'https://via.placeholder.com/400x250?text=Robot+Sumo',
          tags: ['Fusion360', '3D'],
          date: 'janv. 2023 – mai 2023',
          github: 'https://github.com/MonsieurJ59/Robot_Serflex',
          demo: '#',
          category: 'Autre'
        },
        {
          title: "Escape Game Assassin's Creed Odyssey",
          description:
            "Escape Game avec énigmes, carte bois découpée laser, emblème plexiglass (Illustrator).",
          image: 'https://via.placeholder.com/400x250?text=Escape+Game+AC',
          tags: ['Design', 'Fabrication'],
          date: 'sept. 2021 – déc. 2021',
          github: '#',
          demo: '#',
          category: 'Design'
        },
        {
          title: 'Jeu de Cartes - AC Odyssey',
          description: 'Jeu de cartes Escape Game (design sous Illustrator).',
          image: 'https://via.placeholder.com/400x250?text=Jeu+de+Cartes',
          tags: ['Design', 'Illustrator'],
          date: 'janv. 2021 – avr. 2021',
          github: '#',
          demo: '#',
          category: 'Design'
        },
        {
          title: 'Olympiades entre amis',
          description:
            'Organisation d’un événement ludique (12 participants, défis, quiz interactif, règles, scoring) en présentiel.',
          image: 'https://via.placeholder.com/400x250?text=Olympiades',
          tags: ['Organisation', 'Animation', 'Jeux', 'Quiz'],
          date: 'sept. 2020 – oct. 2020',
          github: '#',
          demo: '#',
          category: 'Jeux'
        },
        {
          title: "Quiz sur le thème de l'espace",
          description:
            'Premier projet web (HTML, CSS, JS) – Quiz 20 questions avec score et réponses finales.',
          image: './public/projects/lostInGameSpace.png',
          tags: ['HTML', 'CSS', 'JS'],
          date: 'janv. 2020 – mai 2020',
          github: 'https://github.com/MonsieurJ59/Lost-in-Game-Space',
          demo: '#',
          category: 'Web'
        },
        {
          title: "Jeu de cartes Marvel",
          description:
            'À l\'âge de 12 ans, j\'ai créer mon propre jeu de cartes sur les personnages de l\'univers Marvel avec un système de points de vies et de dégâts en fonction des personnages, ainsi que des cartes spéciales "objets". Une règle propre à ce jeu avait été inventée.',
          image: './public/projects/jeuCarteMarvel.png',
          tags: ['Cartes', 'Règle de jeu'],
          date: 'juil. 2014',
          github: '#',
          demo: '#',
          category: 'Web'
        }
      ]
    };
  },
  computed: {
    // Catégories uniques à partir des projets
    categories() {
      return [...new Set(this.projects.map(p => p.category))];
    },
    // Filtres automatiques (Tous + catégories)
    filters() {
      return this.orderedCategories;
    },
    // Filtrage
    filteredProjects() {
      if (this.activeFilter === 'Tous') return this.projects;
      return this.projects.filter(p => p.category === this.activeFilter);
    }
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter;
    },
    slug(text) {
      return String(text)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }
  },
  metaInfo: {
    title: 'Projets | Julian Wicke'
  }
};
</script>

<template>
  <div class="projects-page">
    <section class="py-5">
      <div class="container">
        <h1 class="section-title mb-5">Mes Projets</h1>

        <!-- Filtres auto -->
        <div class="text-center mb-5">
          <div class="btn-group" role="group">
            <button
              v-for="filter in filters"
              :key="filter"
              @click="setFilter(filter)"
              :class="['btn', activeFilter === filter ? 'btn-primary' : 'btn-outline-primary']"
            >
              {{ filter }}
            </button>
          </div>
        </div>

        <!-- Grille projets -->
        <div class="row">
          <div
            class="col-lg-4 col-md-6 mb-4"
            v-for="(project, i) in filteredProjects"
            :key="`project-${slug(project.title)}-${i}`"
          >
            <div class="card h-100 project-card">
              <div class="project-image-container">
                <img :src="project.image" class="card-img-top" :alt="project.title" />
                <div class="project-links">
                  <!-- <a
                    v-if="project.demo"
                    :href="project.demo"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-primary me-2"
                  >
                    <i class="fas fa-external-link-alt me-1"></i> Voir le projet
                  </a> -->
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-outline-light"
                  >
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

                <div class="project-tags" v-if="project.tags?.length">
                  <span
                    v-for="(tag, ti) in project.tags"
                    :key="`tag-${slug(project.title)}-${ti}`"
                    class="badge bg-light text-dark me-1 mb-1"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- État vide -->
          <div v-if="!filteredProjects.length" class="col-12 text-center text-muted py-5">
            Aucun projet pour « {{ activeFilter }} ».
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* --- styles identiques à ta version --- */
.project-card {
  border: none; border-radius: 10px; overflow: hidden; transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); height: 100%; display: flex; flex-direction: column;
}
.project-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }

.project-image-container { position: relative; overflow: hidden; padding-top: 56.25%; }
.project-image-container img { position: absolute; top:0; left:0; width:100%; height:100%; object-fit: cover; transition: transform .5s ease; }
.project-card:hover .project-image-container img { transform: scale(1.05); }

.project-links {
  position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,.7);
  display:flex; justify-content:center; align-items:center; opacity:0; transition: opacity .3s ease;
}
.project-card:hover .project-links { opacity:1; }

.project-links .btn { padding: 8px 15px; font-size: .9rem; border-radius: 30px; transition: all .3s ease; }
.project-links .btn i { margin-right: 5px; }

.card-body { padding: 1.5rem; display:flex; flex-direction:column; flex-grow:1; }
.card-text { color:#6c757d; flex-grow:1; margin-bottom:1rem; }
.project-tags { margin-top:auto; }

.badge { font-weight:500; padding:5px 12px; border-radius:20px; font-size:.8rem; margin-right:5px; margin-bottom:5px; display:inline-block; }
.bg-primary { background-color: var(--secondary-color) !important; }
.bg-light { background-color: #f8f9fa !important; }

.section-title {
  position: relative; display:inline-block; margin-bottom:50px; font-weight:700; color: var(--primary-color);
}
.section-title::after {
  content:''; position:absolute; width:200px; height:3px; background-color: var(--secondary-color);
  bottom:-10px; left:50%; transform: translateX(-50%);
}

.btn-group { border-radius:50px; overflow:hidden; box-shadow: 0 3px 10px rgba(0,0,0,.1); display:inline-flex; flex-wrap:wrap; justify-content:center; }
.btn { border-radius:0; padding:8px 20px; font-weight:500; transition: all .3s ease; }
.btn:first-child { border-top-left-radius:50px; border-bottom-left-radius:50px; }
.btn:last-child { border-top-right-radius:50px; border-bottom-right-radius:50px; }
.btn-outline-primary { color: var(--secondary-color); border-color: var(--secondary-color); }
.btn-outline-primary:hover, .btn-outline-primary.active { background-color: var(--secondary-color); color:#fff; border-color: var(--secondary-color); }

@media (max-width: 767.98px) {
  .btn-group { flex-direction: column; border-radius:10px; width:100%; max-width:300px; }
  .btn { border-radius:0 !important; width:100%; }
  .btn:first-child { border-top-left-radius:10px !important; border-top-right-radius:10px !important; border-bottom-left-radius:0 !important; }
  .btn:last-child { border-bottom-left-radius:10px !important; border-bottom-right-radius:10px !important; border-top-right-radius:0 !important; }
}
</style>
