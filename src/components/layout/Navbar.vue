<template>
  <nav class="navbar">
    <div class="container">
      <div class="brand">Julian Wicke</div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/experience" class="nav-link">Expérience</router-link>
        <router-link to="/education" class="nav-link">Formation</router-link>
        <router-link to="/projects" class="nav-link">Projets</router-link>
        <a href="/assets/pdf/cv.pdf" download class="download-btn">Télécharger CV</a>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: #1a202c;
  color: white;
  padding: 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-size: 1.25rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
}

.nav-link:hover {
  color: #cbd5e0;
}

.download-btn {
  background-color: #3182ce;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.download-btn:hover {
  background-color: #2b6cb0;
}
</style>