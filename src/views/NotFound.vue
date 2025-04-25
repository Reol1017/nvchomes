<!-- views/NotFound.vue -->
<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found-content">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Page Not Found</h2>
        <p class="error-message">The page you are looking for doesn't exist or has been moved.</p>
        <router-link to="/" class="btn btn-primary"> Back to Home </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 20px;
  color: #ffffff;
}

.not-found-content {
  max-width: 500px;
}

.error-code {
  font-size: 120px;
  font-weight: 700;
  color: #0d6efd;
  margin: 0;
  line-height: 1;
}

.error-title {
  font-size: 32px;
  margin-bottom: 20px;
}

.error-message {
  font-size: 18px;
  color: #adb5bd;
  margin-bottom: 30px;
}

.btn-primary {
  padding: 10px 25px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
