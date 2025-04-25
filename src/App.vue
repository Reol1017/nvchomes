<!-- App.vue -->
<template>
  <div id="app" class="dark-bg">
    <!-- Header Component -->
    <AppHeader />

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer Component -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style>
/* Global styles */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css');

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: 'Raleway', sans-serif !important;
  color: #ffffff;
  background-color: rgb(38, 38, 38);
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
div,
span {
  font-family: 'Raleway', sans-serif !important;
}

.dark-bg {
  background-color: rgb(38, 38, 38);
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Main content spacing */
main {
  flex: 1;
  width: 100%;
  overflow-x: hidden; /* 防止水平滚动 */
}

/* 为首页添加特殊样式 */
.homepage-active .site-footer {
  /* 当首页激活时，footer不需要额外的margin-top */
  margin-top: 0;
}

/* Responsive container */
.container-fluid {
  max-width: 100%;
  margin: 0 auto;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
}

@media (min-width: 2000px) {
  .container-fluid {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>
