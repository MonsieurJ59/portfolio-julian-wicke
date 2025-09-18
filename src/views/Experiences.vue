<script>
// Map des images pour résolution en production
const IMAGES = import.meta.glob('@/assets/images/**/*', { eager: true, import: 'default' });
import profileFallback from '@/assets/images/profile.jpeg';

export default {
  name: 'ExperiencesView',
  metaInfo: {
    title: 'Expériences Professionnelles | Julian Wicke'
  },
  data() {
    return {
      defaultExperienceImage: profileFallback,
      experiences: [
        {
          date: "sept. 2023 - août 2025 · 2 ans",
          title: "Développeur Full Stack - Alternance",
          subtitle: "Orange · Villeneuve-d'Ascq, Hauts-de-France, France",
          bullets: [
            "Développement de nouvelles fonctionnalités sur une application web interne pour techniciens et managers (pilotage, gestion des tâches, visualisation de données).",
            "Technologies: Symfony, Docker, Redis (cache), tests automatisés, fixtures.",
            "Organisation: recueil des besoins, répartition des tâches, vérification et démos régulières aux managers et utilisateurs.",
            "Maintenance: montées de version (Symfony, PHP), intégration de nouveaux composants."
          ],
          tags: [
            "Symfony","Docker","Redis","PHP","HTML","CSS",
            "Javascript","SQL","SharePoint","Travail d'équipe"
          ],
          image: './src/assets/images/experiences/orange.png'
        },
        {
          date: "janv. 2025 - juil. 2025 · 7 mois",
          title: "Développeur Full Stack - Projet de fin d'études",
          subtitle: "Gores Pneus Cars · Quiévrain, Belgique (Projet de fin d'études - MyDigitalSchool)",
          bullets: [
            "Conception et réalisation d'un site vitrine avec backoffice sécurisé pour la gestion de contenu.",
            "Déploiement Docker, hébergement (HTTPS) sur Hostinger, pipeline CI/CD automatisé.",
            "Fonctionnalités: tarifs, domaines d’activité, historique, services, localisation, formulaire de contact.",
            "Responsabilités: front/back, charte graphique, responsive, échanges réguliers avec le client."
          ],
          tags: ["Symfony","Docker","CI/CD","PHP","HTML","CSS","Gestion VPS","HTTPS"],
          image: './src/assets/images/experiences/gores.png'  
        },
        {
          date: "sept. 2022 - sept. 2023 · 1 an 1 mois",
          title: "Développeur Full Stack - Alternance",
          subtitle: "Infotel · Lezennes, Hauts-de-France, France",
          bullets: [
            "Maintenance et évolution d'une application interne (congés, organisation d'équipes et de projets).",
            "Travail en équipe (alternants) à distance, Kanban, Jira, daily meetings et points hebdomadaires."
          ],
          tags: ["AngularJS","Node.js","HTML","CSS","Javascript","Kanban","Jira","Git","Travail d'équipe"],
          image: './src/assets/images/experiences/infotel.png'
        },
        {
          date: "nov. 2020 - mars 2024 · 3 ans 5 mois",
          title: "Coursier (Auto-entrepreneur)",
          subtitle: "Micro-entreprise",
          bullets: [
            "Gestion d'une activité de livraison: optimisation des trajets, relation client, gestion administrative.",
            "Client principal: Pizzeria Pizza Per Tutti."
          ],
          tags: ["Logistique","Relation client"],
          image: './src/assets/images/experiences/coursier.png'
        },
        {
          date: "mai 2022 - juil. 2022 · 3 mois",
          title: "Employé Service Restauration - CDD",
          subtitle: "flunch · Petite-Forêt, Hauts-de-France, France",
          bullets: [],
          tags: [],
          image: './src/assets/images/experiences/flunch.png'
        },
        {
          date: "mai 2022 · 1 mois",
          title: "Développeur Web - Stage",
          subtitle: "HIOLLE INDUSTRIES · Prouvy, Hauts-de-France, France",
          bullets: [
            "Développement d'un site Symfony agrégant plusieurs bases de données.",
            "Fonctionnalités: auth, CRUD, tri, recherche par catégorie, formulaire d'onboarding (imprimable)."
          ],
          tags: ["Symfony","MySQL"],
          image: './src/assets/images/experiences/hiolle.png'
        },
        {
          date: "nov. 2020 - juil. 2021 · 9 mois",
          title: "Livreur - Indépendant",
          subtitle: "Pizza Per Tutti · Thun-Saint-Amand, Hauts-de-France, France",
          bullets: [
            "En étant Coursier Indépendant (auto-entrepreneur), je livrais en fin de journée pour la pizzeria."
          ],
          tags: ["Encaissement des commandes","Prise de commande","Livraison"],
          image: './src/assets/images/experiences/pizza.png'
        },
        {
          date: "mai 2021 - juin 2021 · 2 mois",
          title: "Opérateur Polyvalent - Stage/CDD",
          subtitle: "Deprecq · Raismes, Hauts-de-France, France",
          bullets: [
            "Gestion des stokes",
            "Installation de structures dans l'entreprise",
            "Dégrafage de pièces métaliques après la sortie aux découpages lasers"
          ],
          tags: ["Soudure","Gestion des stocks"],
          image: './src/assets/images/experiences/deprecq.png'
        },
        {
          date: "juin 2018 · 2 semaines",
          title: "Découverte en Entreprise - Stage",
          subtitle: "Agrati Group · Vieux-Condé, Hauts-de-France, France",
          bullets: [
            "Dans le cadre d'un stage de Seconde au lycée, j'ai pu découvrir le monde de l'industrie."
          ],
          tags: [],
          image: './src/assets/images/experiences/agrati.png'
        },
        {
          date: "janv. 2017 · 1 semaine",
          title: "Découverte en Entreprise - Stage",
          subtitle: "Alstom · Petite-Forêt, Hauts-de-France, France",
          bullets: [
            "Dans le cadre d'un stage de 3ème au collège, j'ai pu découvrir le monde de l'industrie."
          ],
          tags: [],
          image: './src/assets/images/experiences/alstom.png'
        }
      ]
    };
  },
  methods: {
    resolveImage(p) {
      if (!p) return this.defaultExperienceImage;
      if (/^(https?:)?\//.test(p)) return p;
      const clean = p.replace(/^\.?\/?src\/assets\/images\//, '');
      for (const [k, v] of Object.entries(IMAGES)) {
        if (k.endsWith('/' + clean)) return v;
      }
      return this.defaultExperienceImage;
    }
  }
};
</script>

<template>
  <div class="experiences-page">
    <section class="py-5">
      <div class="container">
        <h1 class="section-title mb-5">Expériences Professionnelles</h1>

        <div class="timeline">
          <div
            v-for="(exp, i) in experiences"
            :key="`exp-${i}`"
            class="timeline-item"
          >
            <div class="timeline-content">
              <div class="timeline-thumb" aria-hidden="true">
                <img :src="resolveImage(exp.image)" :alt="exp.title" />
              </div>
              <div class="timeline-date">{{ exp.date }}</div>
              <h3>{{ exp.title }}</h3>
              <h4>{{ exp.subtitle }}</h4>

              <ul v-if="exp.bullets?.length">
                <li v-for="(b, bi) in exp.bullets" :key="`b-${i}-${bi}`">{{ b }}</li>
              </ul>

              <div class="tags" v-if="exp.tags?.length">
                <span
                  v-for="(tag, ti) in exp.tags"
                  :key="`tag-${i}-${ti}`"
                  class="badge"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

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
    top: 0; bottom: 0;
    left: 50%; margin-left: -1px;
  }
  .timeline-item {
    padding: 10px 40px;
    position: relative;
    width: 50%;
    box-sizing: border-box;
    margin-bottom: 30px;
  }
  .timeline-item:nth-child(odd) { left: 0; }
  .timeline-item:nth-child(even) { left: 50%; }

  .timeline-content {
    padding: 30px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
    position: relative;
    transition: all 0.3s ease;
  }
  .timeline-thumb {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #fff;
    box-shadow: 0 4px 14px rgba(0,0,0,.08);
    position: absolute;
    top: -70px;
    left: 20px;
    background: #f8f9fa;
  }
  .timeline-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .timeline-item:hover .timeline-content {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  .timeline-date {
    color: #6c757d; font-size: 0.9rem; margin-bottom: 10px; font-weight: 500;
  }
  .timeline-content h3 {
    font-size: 1.4rem; margin-bottom: 5px; color: #2c3e50;
  }
  .timeline-content h4 {
    font-size: 1.1rem; margin-bottom: 15px; color: #3498db; font-weight: 500;
  }
  .timeline-content ul { padding-left: 20px; margin-bottom: 20px; }
  .timeline-content li { margin-bottom: 8px; line-height: 1.5; color: #555; }

  .tags {
    display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px;
  }
  .badge {
    font-weight: 500; padding: 5px 12px; border-radius: 20px;
    font-size: 0.8rem; background-color: #f0f4f8; color: #4a6fa5;
  }

  /* Points sur la timeline */
  .timeline-item::after {
    content: '';
    position: absolute;
    width: 20px; height: 20px; background-color: white;
    border: 4px solid #3498db; border-radius: 50%;
    top: 30px; right: -10px; z-index: 1;
  }
  .timeline-item:nth-child(even)::after { left: -10px; }

  /* Responsive */
  @media (max-width: 767.98px) {
    .timeline::before { left: 20px; }
    .timeline-item { width: 100%; padding-left: 70px; padding-right: 0; }
    .timeline-item:nth-child(even) { left: 0; }
    .timeline-item::after { left: 10px; right: auto; }
    .timeline-item:nth-child(even)::after { left: 10px; }
    .timeline-thumb { left: 40px; }
  }
</style>
