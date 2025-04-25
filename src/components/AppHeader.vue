<!-- components/AppHeader.vue -->
<template>
  <header class="site-header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          Northern Virginia<br />
          Craftsman Homes
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services">SERVICES</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">PROJECTS</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link contact-button" to="/contact">CONTACT US</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
/* Navigation */
.site-header {
  position: relative; /* 使用相对定位，会随页面滚动 */
  width: 100%;
  z-index: 1000;
  height: 130px;
  display: flex;
  align-items: center;
  margin-bottom: -130px; /* 使用负边距使header不占用空间 */
}

.navbar {
  background-color: transparent !important;
  height: 100%;
  padding: 0;
  width: 100%;
  position: relative !important;
}

.navbar-brand {
  font-weight: 500;
  font-size: 18px;
  padding-left: 40px;
  margin-right: 0;
  white-space: normal;
  line-height: 1.2;
  text-align: left;
}

.navbar-nav {
  padding-right: 40px;
}

.nav-link {
  font-weight: 500;
  font-size: 14px;
  padding: 0.5rem 1rem !important;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.contact-button {
  border: 2px solid white !important;
  border-radius: 6px !important;
  padding: 10px 30px !important;
  margin-left: 15px;
  background-color: transparent !important;
  transition: all 0.3s ease;
  display: inline-block !important;
  color: white !important;
  text-decoration: none !important;
  outline: none !important;
}

.contact-button:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
}

@media (max-width: 992px) {
  .navbar-brand {
    font-size: 16px;
    padding-left: 20px;
  }

  .navbar-nav {
    padding-right: 0;
    padding-top: 1rem;
    background-color: rgba(33, 37, 41, 0.9);
    padding: 1rem;
    border-radius: 5px;
    margin-right: 20px;
  }

  .nav-link {
    padding: 0.75rem 0 !important;
  }

  .contact-button {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>
