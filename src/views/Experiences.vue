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
          description: "<p>Notre mission, mon équipe et moi, est de développer et d'ajouter de nouvelles fonctionnalités, en fonction des besoins, à une application web en interne qui permet aux techniciens et aux managers de faciliter leur travail. Cette application propose une gestion efficace de leurs tâches de travail et un affichage des différentes données importantes, ce qui permet un meilleur pilotage du côté des managers. <br> <br> Notre équipe recueille les directives de nos managers ainsi que les suggestions et les retours des utilisateurs. Notre tuteur répartit les tâches à réaliser entre nous, les alternants, en se basant sur nos disponibilités et nos compétences. Après vérification des travaux effectués, nous faisons une présentation des nouvelles fonctionnalités à nos managers et aux différents utilisateurs concernés. <br> <br> L'application est développée avec Symfony et maintenue à l'aide de Docker. Nous utilisons Redis pour la mise en cache des données. Dans le cadre du projet, nous sommes amenés à développer plusieurs fonctionnalités telles que l'affichage de données, l'organisation des équipes, ou encore la recherche du technicien le plus compétent selon un produit ou une mission spécifique. Nous créons également des fixtures ainsi que des tests automatisés pour garantir la qualité de l'application. Lorsque les demandes des clients se font plus rares, nous en profitons pour mettre l'application à niveau, notamment en mettant à jour les versions de Symfony et de PHP, ou en ajoutant de nouvelles fonctionnalités, comme l'intégration de composants Symfony. <br> <br>  Enfin, nous participons aussi à des présentations et à des rencontres avec les techniciens ( les utilisateurs finaux de l'application ) afin de mieux comprendre et recueillir leurs besoins.</p>",
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
          description: "<p>Projet de fin d'études - MyDigitalSchool <br> <br> En collaboration avec Gores Pneus Cars dans le cadre de mon projet de fin de Master en Développement Full Stack à MyDigitalSchool, je suis chargé de concevoir et de développer un site mettant en valeur ce garage et ses prestations. <br> Ce projet me permet d'appliquer et d'enrichit mon expérience en gestion de projet web et en développement de solutions digitales personnalisées pour répondre à des besoins réels, tout en validant mon diplôme. <br> <br> J’ai ainsi eu l’opportunité de collaborer avec Gores Pneus Cars, un garage souhaitant développer un site internet pour promouvoir ses services et renforcer sa présence en ligne. <br> <br> L'application web a été développé avec le framework Symfony, déployé dans un environnement Docker. Cette application permet à Gores Pneus Cars de présenter l’ensemble des informations liées à son garage : tarifs, domaines d’activité, historique de l’entreprise, services proposés, redirection vers sa localisation, ainsi qu’un formulaire de contact. <br> <br> Toutes ces informations sont modifiables dynamiquement grâce à une interface d’administration sécurisée, accessible via un système d’authentification. Actuellement, une première version de l’application est déployée sur Hostinger en HTTPS en 3 noms de domaine, avec un système de pipeline CI/CD automatisé. <br> <br>L’objectif final est de la publier en ligne sous son propre nom de domaine, afin qu’elle soit accessible au grand public.</p>",
          bullets: [
            "Développement front-end et back-end du site.",
            "Création d'un backoffice personnalisé pour la gestion du contenu par le client.",
            "Site responsive et mobile first.",
            "Mise en place d'une charte graphique conforme aux exigences du client pour renforcer son identité visuelle.",
            "Mise en place d'hébergement pour un accès tout public (Nom de domaine, HTTPS)",
            "Mise en place d'un pipeline CI/CD automatisé pour la mise en production.",
            "Point récurrents avec le client pour assurer la satisfaction de ses besoins."
          ],
          tags: ["Symfony","Docker","CI/CD","PHP","HTML","CSS","Gestion VPS","HTTPS"],
          image: './src/assets/images/experiences/gores.png'  
        },
        {
          date: "nov. 2020 - mars 2024 · 3 ans 5 mois",
          title: "Coursier (Auto-entrepreneur)",
          subtitle: "Micro-entreprise",
          bullets: [
            "Création et gestion d'une micro-entreprise de coursier indépendant, assurant la livraison de commandes, l’optimisation des trajets, la relation client et la gestion administrative.",
            "Client principal: Pizzeria Pizza Per Tutti."
          ],
          tags: ["Logistique","Relation client"],
          image: './src/assets/images/experiences/coursier.png'
        },
        {
          date: "sept. 2022 - sept. 2023 · 1 an 1 mois",
          title: "Développeur Full Stack - Alternance",
          subtitle: "Infotel · Lezennes, Hauts-de-France, France",
          description: "<p>Concevoir et assurer la maintenance de l'application interne de l'entreprise, dédiée à la gestion des demandes de congés, ainsi qu'à l'organisation des équipes et des projets par les managers. <br> <br>Au sein d'une équipe d'une petite dizaine d'alternants répartis à travers la France, nous collaborons à distance sur le projet en développant différentes fonctionnalités. Nous travaillons selon la méthodologie Kanban, en utilisant Jira pour la gestion des tickets et le suivi des tâches.<br> <br>Des points quotidiens (daily meetings) ainsi que des réunions hebdomadaires sont organisés afin de faire le point sur l’avancement du projet, coordonner les efforts de chacun et garantir une bonne communication au sein de l’équipe.</p>",
          bullets: [
            "Maintenance et évolution d'une application interne (congés, organisation d'équipes et de projets).", 
            "Travail en équipe (alternants) à distance, Kanban, Jira, daily meetings et points hebdomadaires."
          ],
          tags: ["AngularJS","Node.js","HTML","CSS","Javascript","Kanban","Jira","Git","Travail d'équipe"],
          image: './src/assets/images/experiences/infotel.png'
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
            "En étant Coursier Indépendant (auto-entrepreneur), je livrais en fin de journée pour la pizzeria.",
          ],
          tags: ["Encaissement des commandes","Prise de commande","Livraison"],
          image: './src/assets/images/experiences/pizza.png'
        },
        {
          date: "mai 2021 - juin 2021 · 2 mois",
          title: "Opérateur Polyvalent - Stage/CDD",
          subtitle: "Deprecq · Raismes, Hauts-de-France, France",
          bullets: [
            "1 mois de stage pour ensuite 1 mois de CDD",
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
      ,
      isModalOpen: false,
      selectedExperience: null
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
    },
    openModal(exp) {
      console.log('[ExperiencesView] openModal', exp && exp.title);
      this.selectedExperience = exp;
      this.isModalOpen = true;
      try { document.body.classList.add('modal-open'); } catch (e) {}
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedExperience = null;
      try { document.body.classList.remove('modal-open'); } catch (e) {}
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

              <div class="actions">
                <button v-if="exp.description" class="see-more" @click="openModal(exp)">Voir plus</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Modal détaillée -->
    <teleport to="body">
      <div
        v-if="isModalOpen"
        class="modal-overlay"
        @click.self="closeModal"
        @keydown.esc.window="closeModal"
        :style="{
          position: 'fixed',
          inset: '0',
          zIndex: 2147483647,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: 'rgba(0,0,0,0.45)'
        }"
      >
        <div class="xp-modal" role="dialog" aria-modal="true" :aria-label="selectedExperience ? selectedExperience.title : 'Détails de l\'expérience'">
          <div class="modal-header">
            <h3 class="modal-title">{{ selectedExperience && selectedExperience.title }}</h3>
            <button class="close-btn" @click="closeModal" aria-label="Fermer">×</button>
          </div>
          <div class="modal-subtitle">{{ selectedExperience && selectedExperience.subtitle }}</div>
          <div class="modal-date">{{ selectedExperience && selectedExperience.date }}</div>

          <div class="modal-body">
            <div v-if="selectedExperience && selectedExperience.description" class="modal-description" v-html="selectedExperience.description"></div>
          </div>

          <div class="modal-footer">
            <button class="close-secondary" @click="closeModal">Fermer</button>
          </div>
        </div>
      </div>
    </teleport>
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

  .actions {
    margin-top: 16px;
  }
  .see-more {
    background: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 8px 14px;
    cursor: pointer;
    font-weight: 600;
  }
  .see-more:hover {
    background: #2d86c1;
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
    .timeline-thumb {
      left: 40px;
      width: 64px;
      height: 64px;
      top: -40px;
    }
    .timeline-content h3 { font-size: 1.2rem; }
    .timeline-content h4 { font-size: 1rem; }
  }

  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 9999;
  }
  .xp-modal {
    width: 100%;
    max-width: 720px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    overflow: hidden;
    animation: pop 0.15s ease-out;
  }
  @keyframes pop {
    from { transform: translateY(8px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid #eee;
  }
  .modal-title {
    margin: 0;
    font-size: 1.25rem;
    color: #2c3e50;
  }
  .close-btn {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    color: #7a7a7a;
  }
  .modal-subtitle { padding: 10px 20px 0; color: #3498db; font-weight: 500; }
  .modal-date { padding: 0 20px 10px; color: #6c757d; font-size: 0.9rem; }
  .modal-body { padding: 10px 20px 20px; }
  .modal-description { margin-bottom: 14px; color: #444; line-height: 1.6; }
  .modal-thumb { width: 100px; height: 100px; border-radius: 10px; overflow: hidden; margin-bottom: 12px; background: #f5f7fa; }
  .modal-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .modal-list { padding-left: 20px; margin: 10px 0 14px; }
  .modal-footer { padding: 12px 20px 20px; }
  .close-secondary { background: #e9ecef; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 600; }
  .close-secondary:hover { background: #dfe3e7; }
</style>

<!-- Global styles to ensure teleported modal visibility -->
<style>
  .modal-overlay {
    position: fixed !important;
    inset: 0 !important;
    z-index: 2147483647 !important; /* max int for safety */
  }
  body.modal-open {
    overflow: hidden;
    padding-right: 0; /* avoid layout shift if no scrollbar calc */
  }
</style>
