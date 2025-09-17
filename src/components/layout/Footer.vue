<template>
  <footer class="bg-gray-800 text-white p-6 mt-10">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-4 md:mb-0">
          <h3 class="text-xl font-bold mb-2">Contact</h3>
          <p>Email: julian.wicke@orange.fr</p>
          <p>Téléphone: +33 6 XX XX XX XX</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">Disponibilité</h3>
          <p>Actuellement disponible pour des opportunités</p>
        </div>
      </div>
      <div class="mt-6 text-center">
        <p>© {{ new Date().getFullYear() }} Julian Wicke. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>