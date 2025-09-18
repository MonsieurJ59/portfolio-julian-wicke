<script>
import profileFallback from '@/assets/images/profile.jpeg';

export default {
  name: 'FormationsView',
  metaInfo: {
    title: 'Formation & Diplômes | Julian Wicke'
  },
  data() {
    return {
      defaultEducationImage: profileFallback,
      educations: [
        {
          years: '2023 - 2025',
          location: 'Lille, France',
          title: 'MBA Manager de projet web digital - Développement Full Stack',
          school: 'MyDigitalSchool',
          bullets: [
            'Titre RNCP34394',
            'Formation axée sur la stratégie web-digital, la conduite de projets, le développement web/mobile et la conception d\'expériences utilisateur.'
          ],
          tags: [
            'Stratégie digitale',
            'Gestion de projet',
            'Développement Full Stack',
            'Jeux vidéo',
            'Sécurité de l\'IT',
            'Relation client'
          ],
          image: './src/assets/images/educations/mds.png'
        },
        {
          years: '2020 - 2023',
          location: 'Lille, France',
          title: 'Licence Science du numérique',
          school: 'Université catholique de Lille',
          bullets: [
            'Responsable événement FGES Esport (2021-2022)',
            'Résultat: 180/180 ECTS'
          ],
          tags: [
            'Programmation',
            'Sécurité',
            'Jeux vidéo',
            'Analyse de données',
            'Développement web'
          ],
          image: './src/assets/images/educations/fges.png'
        },
        {
          years: '2017 - 2020',
          location: 'Saint-Amand-les-Eaux, France',
          title: 'Baccalauréat scientifique - Sciences de l\'ingénieur',
          school: 'Lycée Polyvalent Ernest Couteaux',
          bullets: [
            'Spécialité Informatique & Sciences du Numérique',
            'Option Informatique',
            'Mention Bien'
          ],
          tags: ['HTML', 'CSS', 'Javascript'],
          image: './src/assets/images/educations/lycee.png'
        },
        {
          years: '2013 - 2017',
          location: 'Mortagne-du-Nord, France',
          title: 'Diplôme national du brevet des collèges',
          school: 'Collège Fernig',
          bullets: ['Mention Très Bien'],
          tags: [],
          image: './src/assets/images/educations/fernig.png'
        }
      ],
      certifications: [
        { date: 'janv. 2024', title: 'SecNum Académie', issuer: 'ANSSI' },
        { date: 'juin 2020', title: 'Permis de conduire', issuer: "Ministère de l'Intérieur" },
        {
          date: 'févr. 2019',
          title: 'Journée Défense et Citoyenneté',
          issuer: 'Ministère des Armées',
          extra: 'ID 2259013437'
        }
      ]
    };
  }
};
</script>

<template>
  <div class="educations-page">
    <section class="py-5">
      <div class="container">
        <h1 class="section-title mb-5">Formation & Diplômes</h1>

        <div class="row">
          <!-- ÉDUCATIONS -->
          <div
            v-for="(e, i) in educations"
            :key="`edu-${i}`"
            class="col-lg-6 mb-4"
          >
            <div class="card h-100">
              <div class="card-body">
                <div class="edu-thumb mb-2" aria-hidden="true">
                  <img :src="e.image || defaultEducationImage" :alt="e.school" />
                </div>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <span class="badge bg-primary">{{ e.years }}</span>
                  <span class="text-muted">{{ e.location }}</span>
                </div>

                <h3 class="h4">{{ e.title }}</h3>
                <h4 class="h5 text-muted mb-3">{{ e.school }}</h4>

                <p class="card-text" v-if="e.bullets?.length">
                  <ul>
                    <li v-for="(b, bi) in e.bullets" :key="`b-${i}-${bi}`">
                      {{ b }}
                    </li>
                  </ul>
                </p>

                <div class="mt-3" v-if="e.tags?.length">
                  <span
                    v-for="(tag, ti) in e.tags"
                    :key="`tag-${i}-${ti}`"
                    class="badge bg-light text-dark me-2 mb-2"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="h4 mt-4 mb-3">Licences & Certifications</h2>
        <div class="row">
          <!-- CERTIFICATIONS -->
          <div
            v-for="(c, i) in certifications"
            :key="`cert-${i}`"
            class="col-lg-4 mb-3"
          >
            <div class="card h-100">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="badge bg-primary">{{ c.date }}</span>
                </div>
                <h3 class="h5 mb-1">{{ c.title }}</h3>
                <h4 class="h6 text-muted" v-if="c.issuer">
                  {{ c.issuer }}
                  <template v-if="c.extra"> · {{ c.extra }}</template>
                </h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

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

.edu-thumb {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fff;
  box-shadow: 0 4px 14px rgba(0,0,0,.08);
  background: #f8f9fa;
}
.edu-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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
  width: 450px;
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
