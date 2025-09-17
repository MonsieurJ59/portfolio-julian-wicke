<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Projets</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Projet 1 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative pb-[56.25%] overflow-hidden">
          <!-- Carousel d'images -->
          <img src="../assets/images/project1.jpg" alt="Projet 1" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2">Application de Gestion de Tâches</h2>
          <div class="text-gray-500 mb-4">
            <p>Janvier 2022 - Mars 2022</p>
          </div>
          <p class="mb-4">
            Une application web permettant aux utilisateurs de gérer leurs tâches quotidiennes, avec des fonctionnalités de catégorisation, de rappels et de statistiques.
          </p>
          <div class="mb-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vue.js</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>
          </div>
          <div class="flex space-x-4">
            <a href="https://github.com/username/project1" target="_blank" class="text-blue-500 hover:text-blue-700">Code source</a>
            <a href="https://project1-demo.com" target="_blank" class="text-blue-500 hover:text-blue-700">Démo en ligne</a>
          </div>
        </div>
      </div>
      
      <!-- Projet 2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative pb-[56.25%] overflow-hidden">
          <!-- Carousel d'images -->
          <img src="../assets/images/project2.jpg" alt="Projet 2" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2">E-commerce de Produits Artisanaux</h2>
          <div class="text-gray-500 mb-4">
            <p>Juin 2021 - Septembre 2021</p>
          </div>
          <p class="mb-4">
            Une plateforme e-commerce pour des artisans locaux, permettant la vente de produits artisanaux avec système de paiement intégré et gestion des commandes.
          </p>
          <div class="mb-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.js</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Stripe</span>
          </div>
          <div class="flex space-x-4">
            <a href="https://github.com/username/project2" target="_blank" class="text-blue-500 hover:text-blue-700">Code source</a>
            <a href="https://project2-demo.com" target="_blank" class="text-blue-500 hover:text-blue-700">Démo en ligne</a>
          </div>
        </div>
      </div>
      
      <!-- Ajoutez d'autres projets selon votre portfolio -->
    </div>
  </div>
</template>