<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <!-- Bootstrap 导航栏 -->
    <!-- Header -->
    <nav
      class="navbar navbar-expand-lg navbar-dark px-5 fade-in"
      style="height: 111px; background-color: #262626"
    >
      <!-- 两行品牌文字 -->
      <a
        class="navbar-brand d-flex flex-column justify-content-center"
        href="#"
        style="font-size: 18px; line-height: 1.2"
      >
        <span>Northern Virginia</span>
        <span>Craftsman Homes</span>
      </a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="container text-center py-5 text-white" style="background-color: #262626">
      <h1 class="display-4 fw-bold">Welcome to NVCHomes</h1>
      <p class="lead">Your trusted partner in real estate investment</p>
      <button class="btn btn-outline-light mt-3">Explore Listings</button>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4 mt-auto">
      <p>&copy; 2025 NVCHomes LLC. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
