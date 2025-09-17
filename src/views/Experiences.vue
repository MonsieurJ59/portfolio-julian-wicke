<template>
  <div class="experiences-page">
    <section class="py-5">
      <div class="container">
        <h1 class="section-title mb-5">Expériences Professionnelles</h1>
        
        <div class="timeline">
          <!-- Expérience 1 -->
          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-date">2022 - Présent</div>
              <h3>Développeur Full Stack Senior</h3>
              <h4>Tech Solutions Inc., Paris</h4>
              <ul>
                <li>Conception et développement d'applications web avec Vue.js et Node.js</li>
                <li>Optimisation des performances et de l'expérience utilisateur</li>
                <li>Encadrement d'une équipe de 3 développeurs juniors</li>
                <li>Mise en place de bonnes pratiques de développement (CI/CD, tests unitaires)</li>
              </ul>
              <div class="tags">
                <span class="badge bg-primary">Vue.js</span>
                <span class="badge bg-primary">Node.js</span>
                <span class="badge bg-primary">MongoDB</span>
                <span class="badge bg-primary">AWS</span>
              </div>
            </div>
          </div>

          <!-- Expérience 2 -->
          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-date">2019 - 2022</div>
              <h3>Développeur Front-end</h3>
              <h4>WebAgency, Lyon</h4>
              <ul>
                <li>Développement d'interfaces utilisateur réactives avec React</li>
                <li>Intégration de maquettes PSD en HTML/CSS responsive</li>
                <li>Collaboration avec les designers pour améliorer l'UX/UI</li>
                <li>Optimisation des performances de chargement</li>
              </ul>
              <div class="tags">
                <span class="badge bg-primary">React</span>
                <span class="badge bg-primary">Redux</span>
                <span class="badge bg-primary">Sass</span>
                <span class="badge bg-primary">Webpack</span>
              </div>
            </div>
          </div>

          <!-- Expérience 3 -->
          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-date">2017 - 2019</div>
              <h3>Développeur Web Junior</h3>
              <h4>StartUp Innovante, Toulouse</h4>
              <ul>
                <li>Développement de fonctionnalités front-end et back-end</li>
                <li>Maintenance et évolution du site web</li>
                <li>Résolution de bugs et amélioration des performances</li>
                <li>Rédaction de documentation technique</li>
              </ul>
              <div class="tags">
                <span class="badge bg-primary">JavaScript</span>
                <span class="badge bg-primary">PHP</span>
                <span class="badge bg-primary">MySQL</span>
                <span class="badge bg-primary">jQuery</span>
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
  name: 'ExperiencesView',
  metaInfo: {
    title: 'Expériences Professionnelles | Julian Wicke'
  }
}
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 2px;
  background-color: #e9ecef;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  margin-bottom: 30px;
}

.timeline-item:nth-child(odd) {
  left: 0;
}

.timeline-item:nth-child(even) {
  left: 50%;
}

.timeline-content {
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-content {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.timeline-date {
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 10px;
  font-weight: 500;
}

.timeline-content h3 {
  font-size: 1.4rem;
  margin-bottom: 5px;
  color: #2c3e50;
}

.timeline-content h4 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: #3498db;
  font-weight: 500;
}

.timeline-content ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

.timeline-content li {
  margin-bottom: 8px;
  line-height: 1.5;
  color: #555;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
}

.badge {
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  background-color: #f0f4f8;
  color: #4a6fa5;
}

/* Points sur la timeline */
.timeline-item::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border: 4px solid #3498db;
  border-radius: 50%;
  top: 30px;
  right: -10px;
  z-index: 1;
}

.timeline-item:nth-child(even)::after {
  left: -10px;
}

/* Responsive */
@media (max-width: 767.98px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 0;
  }

  .timeline-item:nth-child(even) {
    left: 0;
  }

  .timeline-item::after {
    left: 10px;
    right: auto;
  }

  .timeline-item:nth-child(even)::after {
    left: 10px;
  }
}
</style>
