<template>
  <div class="formations-page">
    <section class="py-5">
      <div class="container">
        <h1 class="section-title mb-5">Formation & Diplômes</h1>
        
        <div class="row">
          <!-- Formation 1 -->
          <div class="col-lg-6 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <span class="badge bg-primary">2020 - 2022</span>
                  <span class="text-muted">Paris, France</span>
                </div>
                <h3 class="h4">Master en Développement Web Avancé</h3>
                <h4 class="h5 text-muted mb-3">Université de Paris</h4>
                <p class="card-text">
                  Spécialisation en architectures web évolutives et expériences utilisateur avancées.
                  Mémoire de recherche sur l'optimisation des performances des applications web modernes.
                </p>
                <div class="mt-3">
                  <span class="badge bg-light text-dark me-2 mb-2">Architecture logicielle</span>
                  <span class="badge bg-light text-dark me-2 mb-2">Performance web</span>
                  <span class="badge bg-light text-dark me-2 mb-2">UX avancé</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Formation 2 -->
          <div class="col-lg-6 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <span class="badge bg-primary">2017 - 2020</span>
                  <span class="text-muted">Lyon, France</span>
                </div>
                <h3 class="h4">Licence en Informatique</h3>
                <h4 class="h5 text-muted mb-3">Université Claude Bernard Lyon 1</h4>
                <p class="card-text">
                  Formation complète en informatique avec spécialisation en développement web.
                  Projets pratiques incluant le développement d'applications complètes.
                </p>
                <div class="mt-3">
                  <span class="badge bg-light text-dark me-2 mb-2">Algorithmique</span>
                  <span class="badge bg-light text-dark me-2 mb-2">Bases de données</span>
                  <span class="badge bg-light text-dark me-2 mb-2">Développement web</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Formation 3 -->
          <div class="col-lg-6 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <span class="badge bg-primary">2015 - 2017</span>
                  <span class="text-muted">Toulouse, France</span>
                </div>
                <h3 class="h4">BTS Services Informatiques aux Organisations</h3>
                <h4 class="h5 text-muted mb-3">Lycée des Métiers du Numérique</h4>
                <p class="card-text">
                  Option SLAM (Solutions Logicielles et Applications Métiers).
                  Formation axée sur le développement d'applications et la gestion de projets.
                </p>
                <div class="mt-3">
                  <span class="badge bg-light text-dark me-2 mb-2">Développement</span>
                  <span class="badge bg-light text-dark me-2 mb-2">Gestion de projet</span>
                  <span class="badge bg-light text-dark me-2 mb-2">Réseaux</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Formation 4 -->
          <div class="col-lg-6 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <span class="badge bg-primary">2021</span>
                  <span class="text-muted">En ligne</span>
                </div>
                <h3 class="h4">Certification AWS Certified Developer</h3>
                <h4 class="h5 text-muted mb-3">Amazon Web Services</h4>
                <p class="card-text">
                  Validation des compétences en développement et déploiement d'applications sur AWS.
                  Maîtrise des services cloud essentiels et des bonnes pratiques de développement.
                </p>
                <div class="mt-3">
                  <span class="badge bg-light text-dark me-2 mb-2">AWS</span>
                  <span class="badge bg-light text-dark me-2 mb-2">Cloud Computing</span>
                  <span class="badge bg-light text-dark me-2 mb-2">DevOps</span>
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
  name: 'FormationsView',
  metaInfo: {
    title: 'Formation & Diplômes | Julian Wicke'
  }
}
</script>

<style scoped>
.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 2rem;
}

.badge {
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
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
  left: 0;
}

.text-muted {
  color: #6c757d !important;
}

h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

h4 {
  color: #6c757d;
  margin-bottom: 1rem;
  font-weight: 400;
}

p {
  color: #555;
  line-height: 1.7;
}

@media (max-width: 991.98px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .card {
    margin-bottom: 30px;
  }
}
</style>
