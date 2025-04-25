<!-- views/HomePage.vue -->
<template>
  <div class="homepage">
    <div class="homepage-image-container">
      <img src="@/assets/homepage/homepage.avif" class="homepage-image" alt="NVC Homes Hero" />
      <div class="image-overlay">
        <div class="overlay-content">
          <h1 class="main-title">Northern Virginia Craftsman<br />Homes</h1>
          <p class="subtitle">The Homes Where Dreams Begin</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped>
.homepage {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 0; /* 重置为零，让内容自然流动 */
}

.homepage-image-container {
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: rgb(38, 38, 38);
  padding-top: 0;
  z-index: 1;
}

.homepage-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(38, 38, 38, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.overlay-content {
  text-align: center;
  color: white;
  max-width: min(1000px, 90%); /* 增加容器最大宽度从800px到1000px */
  padding: 2rem;
}

.main-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: clamp(0.5rem, 3vh, 1.5rem);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2; /* 改善多行标题的行间距 */
}

.subtitle {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: clamp(1rem, 4vh, 2rem);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
  padding: 12px 30px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .main-title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }
}
</style>
