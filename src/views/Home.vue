<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 order-lg-2 mb-5 mb-lg-0">
            <div class="text-center">
              <img src="@/assets/images/profile.jpeg" alt="Julian Wicke" class="profile-img img-fluid">
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <h1 class="display-4 fw-bold mb-3">Julian Wicke</h1>
            <h2 class="h3 text-primary mb-4">Développeur Web Full Stack</h2>
            <p class="lead mb-4">
              Développeur Full Stack, je conçois et fais évoluer des applications web modernes (Symfony, Docker, CI/CD).
              J’aime transformer des besoins métiers en solutions fiables, performantes et utiles au quotidien.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <a href="#contact" class="btn btn-primary btn-lg">Contactez-moi</a>
              <a href="/CV-Julian-Wicke-Web.pdf" download class="btn btn-outline-primary btn-lg">Télécharger mon CV</a>
            </div>
            <div class="social-links mt-4">
              <a href="https://github.com/MonsieurJ59" target="_blank" class="me-3"><i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/julian-wicke-8b6ba11b8/" target="_blank" class="me-3"><i class="fab fa-linkedin-in"></i></a>
              <a href="mailto:julian.wicke@orange.fr"><i class="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- À propos -->
    <section id="about" class="py-5">
      <div class="container">
        <h2 class="section-title mb-5">À propos de moi</h2>
        <div class="row">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h3 class="h4 mb-4">Qui suis-je ?</h3>
            <p class="mb-4">
              Je suis un développeur web passionné avec une solide expérience dans la création d'applications web modernes et réactives. 
              Ma passion pour le code et mon esprit créatif me permettent de transformer des idées en solutions numériques innovantes.
            </p>
            <p class="mb-4">
              Avec une expertise en développement front-end et back-end, je m'efforce de créer des expériences utilisateur fluides et des interfaces intuitives.
            </p>
            <div class="row g-4">
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <div class="me-3 text-primary">
                    <i class="fas fa-check-circle fa-2x"></i>
                  </div>
                  <div>
                    <h4 class="h6 mb-0">Développement Web</h4>
                    <small class="text-muted">Applications modernes</small>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <div class="me-3 text-primary">
                    <i class="fas fa-check-circle fa-2x"></i>
                  </div>
                  <div>
                    <h4 class="h6 mb-0">Gestion de projet</h4>
                    <small class="text-muted">Projets digitals</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="h4 mb-4">Mes compétences techniques</h3>
            <div class="row g-4">
              <div class="col-md-6">
                <div class="skill-card p-4 rounded h-100">
                  <h4 class="h5 mb-3"><i class="fas fa-laptop-code me-2 text-primary"></i> Front-end</h4>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <div class="d-flex justify-content-between">
                        <span>HTML5 & CSS3</span>
                        <span class="text-muted">95%</span>
                      </div>
                      <div class="progress" style="height: 6px;">
                        <div class="progress-bar bg-primary" style="width: 95%"></div>
                      </div>
                    </li>
                    <li class="mb-2">
                      <div class="d-flex justify-content-between">
                        <span>JavaScript (ES6+)</span>
                        <span class="text-muted">90%</span>
                      </div>
                      <div class="progress" style="height: 6px;">
                        <div class="progress-bar bg-primary" style="width: 90%"></div>
                      </div>
                    </li>
                    <li class="mb-2">
                      <div class="d-flex justify-content-between">
                        <span>Vue.js / React</span>
                        <span class="text-muted">85%</span>
                      </div>
                      <div class="progress" style="height: 6px;">
                        <div class="progress-bar bg-primary" style="width: 85%"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="skill-card p-4 rounded h-100">
                  <h4 class="h5 mb-3"><i class="fas fa-server me-2 text-primary"></i> Back-end & Outils</h4>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <div class="d-flex justify-content-between">
                        <span>Node.js</span>
                        <span class="text-muted">80%</span>
                      </div>
                      <div class="progress" style="height: 6px;">
                        <div class="progress-bar bg-primary" style="width: 80%"></div>
                      </div>
                    </li>
                    <li class="mb-2">
                      <div class="d-flex justify-content-between">
                        <span>Bases de données</span>
                        <span class="text-muted">75%</span>
                      </div>
                      <div class="progress" style="height: 6px;">
                        <div class="progress-bar bg-primary" style="width: 75%"></div>
                      </div>
                    </li>
                    <li class="mb-2">
                      <div class="d-flex justify-content-between">
                        <span>Outils & DevOps</span>
                        <span class="text-muted">70%</span>
                      </div>
                      <div class="progress" style="height: 6px;">
                        <div class="progress-bar bg-primary" style="width: 70%"></div>
                      </div>
                    </li>
                  </ul>
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
  name: 'HomeView',
  data() {
    return {
      skills: [
        { name: 'HTML5 & CSS3', percentage: 95 },
        { name: 'JavaScript (ES6+)', percentage: 90 },
        { name: 'Vue.js / React', percentage: 85 },
        { name: 'Node.js', percentage: 80 },
        { name: 'Bases de données', percentage: 75 },
        { name: 'Outils & DevOps', percentage: 70 },
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.hero::before {
  content: '';
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(52, 152, 219, 0.1), rgba(155, 89, 182, 0.1));
  top: -400px;
  right: -200px;
  z-index: 0;
}

.hero .container {
  position: relative;
  z-index: 1;
}

.profile-img {
  width: 500px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 10px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.profile-img:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
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

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  color: var(--primary-color);
  font-size: 18px;
  margin-right: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.social-links a:hover {
  background-color: var(--secondary-color);
  color: white;
  transform: translateY(-3px);
}

.skill-card {
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.progress {
  background-color: #e9ecef;
  border-radius: 4px;
  height: 6px !important;
}

.progress-bar {
  background-color: var(--secondary-color);
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

@media (max-width: 991.98px) {
  .hero {
    padding: 100px 0 60px;
    text-align: center;
  }
  
  .hero::before {
    width: 500px;
    height: 500px;
    top: -250px;
    right: -150px;
  }
  
  .profile-img {
    width: 220px;
    height: 220px;
    margin: 0 auto 30px;
  }
  
  .section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>