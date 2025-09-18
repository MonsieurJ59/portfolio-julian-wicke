<script>
import profileFallback from '@/assets/images/profile.jpeg'; // ton image actuelle

export default {
  name: 'HomeView',
  data() {
    return {
      // HERO
      hero: {
        name: 'Julian Wicke',
        title: 'Développeur Web Full Stack',
        pitch:
          "Développeur Full Stack, je conçois et fais évoluer des applications web modernes (Symfony, Docker, CI/CD). J’aime transformer des besoins métiers en solutions fiables, performantes et utiles au quotidien.",
        buttons: [
          { label: 'Contactez-moi', variant: 'btn-primary', action: 'openContact' },
          { label: 'Télécharger mon CV', href: '/CV-Julian-Wicke-Web.pdf', variant: 'btn-outline-primary', download: true }
        ]
      },
      social: [
        { label: 'GitHub',   href: 'https://github.com/MonsieurJ59', icon: 'fab fa-github' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/julian-wicke-8b6ba11b8/', icon: 'fab fa-linkedin-in' },
        { label: 'Email',    href: 'mailto:julian.wicke@orange.fr', icon: 'fas fa-envelope' }
      ],
      profileImg: profileFallback, // si tu changes l’URL, on garde ce fallback
      showContactModal: false,
      contacts: {
        location: 'Autour de Lille, Valenciennes, Douai et Belgique',
        phone: '+33 6 64 48 58 53',
        phoneHref: 'tel:+33664485853',
        email: 'julian.wicke@orange.fr',
        emailHref: 'mailto:julian.wicke@orange.fr',
        availability: 'Disponible pour de nouvelles opportunités'
      },

      // ABOUT
      about: {
        intro1:
          "Je suis un développeur web passionné avec une solide expérience dans la création d'applications web modernes et réactives. Ma passion pour le code et mon esprit créatif me permettent de transformer des idées en solutions numériques innovantes.",
        intro2:
          "Avec une expertise en développement front-end et back-end, je m'efforce de créer des expériences utilisateur fluides et des interfaces intuitives.",
        features: [
          { icon: 'fas fa-check-circle', title: 'Développement Web', subtitle: 'Applications modernes' },
          { icon: 'fas fa-check-circle', title: 'Gestion de projet',  subtitle: 'Projets digitals' }
        ]
      },

      // SKILLS (4 catégories)
      skillGroups: [
        {
          title: 'Langages',
          icon: 'fas fa-code',
          items: [
            { name: 'HTML', percentage: 95 },
            { name: 'CSS', percentage: 85 },
            { name: 'PHP', percentage: 80 },
            { name: 'SQL', percentage: 80 },
            { name: 'JavaScript', percentage: 60 },
            { name: 'Python', percentage: 50 },
            { name: 'TypeScript', percentage: 40 },
            { name: 'C & C++ & C#', percentage: 40 },
            { name: 'Java', percentage: 10 },
          ]
        },
        {
          title: 'Frameworks',
          icon: 'fas fa-layer-group',
          items: [
            { name: 'Symfony', percentage: 90 },
            { name: 'Vue.js', percentage: 60 },
            { name: 'AngularJS', percentage: 40 },
            { name: 'React', percentage: 30 },
            { name: 'Flutter', percentage: 20 },
          ]
        },
        {
          title: 'Outils / Technologies',
          icon: 'fas fa-tools',
          items: [
            { name: 'Git', percentage: 95 },
            { name: 'Bases de données', percentage: 80 },
            { name: 'Docker', percentage: 75 },
            { name: 'Node.js', percentage: 50 },
            { name: 'Unity', percentage: 20 },
          ]
        },
        {
          title: 'Management',
          icon: 'fas fa-users-cog',
          items: [
            { name: 'Travail d’équipe', percentage: 95 },
            { name: 'Communication', percentage: 90 },
            { name: 'Rédaction technique', percentage: 90 },
            { name: 'Analyse demande client', percentage: 80 },
            { name: 'Gestion de projet', percentage: 75 },
          ]
        }
      ]
    };
  },
  methods: {
    onProfileError(e) {
      // Sécurise un fallback si un jour tu remplaces par une URL distante
      if (e.target.src !== this.profileImg) {
        e.target.src = this.profileImg;
      }
    }
  }
};
</script>

<template>
  <div class="home">
    <section class="hero d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 order-lg-2 mb-5 mb-lg-0">
            <div class="text-center">
              <img
                :src="profileImg"
                alt="Julian Wicke"
                class="profile-img img-fluid"
                @error="onProfileError"
              >
            </div>
          </div>

          <div class="col-lg-6 order-lg-1">
            <h1 class="display-4 fw-bold mb-3">{{ hero.name }}</h1>
            <h2 class="h3 text-primary mb-4">{{ hero.title }}</h2>
            <p class="lead mb-4">{{ hero.pitch }}</p>

            <div class="d-flex flex-wrap gap-3">
              <template v-for="(btn, i) in hero.buttons" :key="`cta-${i}`">
                <button v-if="btn.action === 'openContact'"
                        type="button"
                        :class="['btn','btn-lg', btn.variant]"
                        @click="showContactModal = true">
                  {{ btn.label }}
                </button>
                <a v-else
                   :href="btn.href"
                   :download="btn.download || null"
                   :class="['btn','btn-lg', btn.variant]"
                   :target="btn.target || null"
                   rel="noopener">
                  {{ btn.label }}
                </a>
              </template>
            </div>

            <div class="social-links mt-4">
              <a v-for="(s, i) in social"
                 :key="`soc-${i}`"
                 :href="s.href"
                 :title="s.label"
                 target="_blank"
                 rel="noopener"
                 class="me-3">
                <i :class="s.icon"></i>
              </a>
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
            <p class="mb-4">{{ about.intro1 }}</p>
            <p class="mb-4">{{ about.intro2 }}</p>

            <div class="row g-4">
              <div class="col-6" v-for="(f, i) in about.features" :key="`feat-${i}`">
                <div class="d-flex align-items-center">
                  <div class="me-3 text-primary">
                    <i :class="`${f.icon} fa-2x`"></i>
                  </div>
                  <div>
                    <h4 class="h6 mb-0">{{ f.title }}</h4>
                    <small class="text-muted">{{ f.subtitle }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compétences -->
    <section id="skills" class="py-5">
      <div class="container">
        <h2 class="section-title mb-5">Mes compétences techniques</h2>

        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-3" v-for="(group, gi) in skillGroups" :key="`sg-${gi}`">
            <div class="skill-card p-4 rounded h-100">
              <h4 class="h5 mb-3">
                <i :class="`${group.icon} me-2 text-primary`"></i> {{ group.title }}
              </h4>

              <ul class="list-unstyled">
                <li class="mb-2" v-for="(s, si) in group.items" :key="`sk-${gi}-${si}`">
                  <div class="d-flex justify-content-between">
                    <span>{{ s.name }}</span>
                    <span class="text-muted">{{ s.percentage }}%</span>
                  </div>
                  <div class="progress" style="height: 6px;">
                    <div class="progress-bar bg-primary" :style="{ width: s.percentage + '%' }"></div>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modale Contact -->
    <div v-if="showContactModal" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle" @click="showContactModal = false">
      <div class="modal-card" @click.stop>
        <div class="modal-header">
          <h3 id="contactModalTitle" class="modal-title">Me contacter</h3>
          <button class="btn-close" type="button" aria-label="Fermer" @click="showContactModal = false">×</button>
        </div>
        <div class="modal-body">
          <ul class="contact-list mb-3">
            <li class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ contacts.location }}</span>
            </li>
            <li class="contact-item">
              <i class="fas fa-phone"></i>
              <a :href="contacts.phoneHref">{{ contacts.phone }}</a>
            </li>
            <li class="contact-item">
              <i class="fas fa-envelope"></i>
              <a :href="contacts.emailHref">{{ contacts.email }}</a>
            </li>
          </ul>
          <div class="mb-3">
            <span class="availability-badge">
              <i class="fas fa-circle text-success me-1"></i> {{ contacts.availability }}
            </span>
          </div>
          <hr>
          <p class="mb-2">Réseaux</p>
          <ul class="contact-list">
            <li class="contact-item" v-for="(s, i) in social" :key="`contact-${i}`">
              <i :class="s.icon"></i>
              <a :href="s.href" target="_blank" rel="noopener">{{ s.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* (styles inchangés) */
.hero {
  min-height: 100vh; padding: 120px 0; position: relative; overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}
.hero::before {
  content: ''; position: absolute; width: 800px; height: 800px; border-radius: 50%;
  background: linear-gradient(45deg, rgba(52,152,219,.1), rgba(155,89,182,.1));
  top: -400px; right: -200px; z-index: 0;
}
.hero .container { position: relative; z-index: 1; }
.profile-img {
  width: 500px; height: 400px; border-radius: 50%; object-fit: cover;
  border: 10px solid rgba(255,255,255,.2); box-shadow: 0 10px 30px rgba(0,0,0,.1);
  transition: all .3s ease;
}
.profile-img:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,.15); }

.section-title {
  position: relative; display: inline-block; margin-bottom: 50px; font-weight: 700; color: var(--primary-color);
}
.section-title::after {
  content: ''; position: absolute; width: 90%; height: 3px; background-color: var(--secondary-color);
  bottom: -10px; left: 0;
}

.social-links a {
  display: inline-flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; background-color: #fff; border-radius: 50%;
  color: var(--primary-color); font-size: 18px; margin-right: 10px;
  transition: all .3s ease; box-shadow: 0 5px 15px rgba(0,0,0,.1);
}
.social-links a:hover { background-color: var(--secondary-color); color: #fff; transform: translateY(-3px); }

.skill-card {
  background-color: #fff; box-shadow: 0 5px 15px rgba(0,0,0,.05);
  transition: all .3s ease; height: 100%;
}
.skill-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,.1); }

.progress { background-color: #e9ecef; border-radius: 4px; height: 6px !important; }
.progress-bar { background-color: var(--secondary-color); border-radius: 4px; transition: width 1s ease-in-out; }

@media (max-width: 991.98px) {
  .hero { padding: 100px 0 60px; text-align: center; }
  .hero::before { width: 500px; height: 500px; top: -250px; right: -150px; }
  .profile-img { width: 220px; height: 220px; margin: 0 auto 30px; }
  .section-title::after { left: 50%; transform: translateX(-50%); }
  .social-links { justify-content: center; }
}

/* Modal de contact */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}
.modal-card {
  background: #fff;
  width: min(560px, 92vw);
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,.2);
  overflow: hidden;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #eee;
}
.modal-title {
  margin: 0;
  font-size: 1.25rem;
  color: var(--primary-color);
}
.btn-close {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1;
}
.modal-body { padding: 1.25rem; }
.contact-list { list-style: none; padding: 0; margin: 0; }
.contact-item { display: flex; align-items: center; gap: .75rem; padding: .5rem 0; }
.contact-item i { color: var(--secondary-color); font-size: 1.1rem; width: 22px; text-align: center; }
.contact-item a { color: var(--primary-color); text-decoration: none; }
.contact-item a:hover { text-decoration: underline; }

.availability-badge {
  display: inline-block;
  background-color: #f8f9fa;
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
}
</style>
