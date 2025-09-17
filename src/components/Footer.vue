<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h5 class="mb-3">Julian Wicke</h5>
          <p>Développeur passionné par la création d'expériences web modernes et intuitives.</p>
          <div class="social-links mt-3">
            <a href="#" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="#" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="mailto:votre.email@example.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
        
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h5 class="mb-3">Liens rapides</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><router-link to="/">Accueil</router-link></li>
            <li class="mb-2"><router-link to="/experiences">Expériences</router-link></li>
            <li class="mb-2"><router-link to="/formations">Formations</router-link></li>
            <li class="mb-2"><router-link to="/projets">Projets</router-link></li>
          </ul>
        </div>
        
        <div class="col-lg-4">
          <h5 class="mb-3">Contact</h5>
          <p>
            <i class="fas fa-map-marker-alt me-2"></i> Ville, Pays<br>
            <i class="fas fa-phone me-2 mt-2 d-inline-block"></i> +33 6 12 34 56 78<br>
            <i class="fas fa-envelope me-2 mt-2 d-inline-block"></i> votre.email@example.com
          </p>
          <div class="mt-3">
            <span class="badge bg-light text-dark p-2">
              <i class="fas fa-circle text-success me-1"></i> Disponible pour de nouvelles opportunités
            </span>
          </div>
        </div>
      </div>
      
      <hr class="mt-4 mb-4" style="border-color: rgba(255,255,255,0.1);">
      
      <div class="text-center">
        <p class="mb-0">&copy; {{ new Date().getFullYear() }} Julian Wicke. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: var(--primary-color);
  color: white;
  padding: 60px 0 20px;
}

.footer h5 {
  color: white;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.footer h5:after {
  content: '';
  position: absolute;
  width: 40px;
  height: 2px;
  background-color: var(--secondary-color);
  bottom: -8px;
  left: 0;
}

.footer p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
}

.footer a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}

.footer a:hover {
  color: var(--secondary-color);
  transform: translateX(5px);
}

.footer .social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin-right: 10px;
  color: white;
  transition: all 0.3s;
  font-size: 14px;
  text-decoration: none;
}

.footer .social-links a:hover {
  background-color: var(--secondary-color);
  transform: translateY(-3px);
  color: white;
}

.footer .list-unstyled {
  padding-left: 0;
  list-style: none;
}

.footer .list-unstyled li {
  margin-bottom: 8px;
}

.footer .badge {
  font-weight: 400;
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 20px;
}

.footer .fa-circle {
  font-size: 0.6rem;
  vertical-align: middle;
}

@media (max-width: 991.98px) {
  .footer {
    text-align: center;
  }
  
  .footer h5:after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer .social-links {
    justify-content: center;
  }
  
  .footer .text-start {
    text-align: center !important;
  }
}
</style>
