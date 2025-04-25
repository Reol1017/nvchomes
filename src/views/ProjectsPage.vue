<!-- views/ProjectsPage.vue -->
<template>
  <div class="projects-page">
    <!-- 顶部导航部分 -->
    <div class="projects-table">
      <div class="table-row">
        <!-- 第一个单元格：Our Projects 标题 -->
        <div class="table-cell project-title-cell" ref="titleCell">
          <div class="project-title">Our<br />Projects</div>
        </div>

        <!-- 第二个单元格：The Craftsman's Dream Home -->
        <div class="table-cell project-nav-cell">
          <div class="content-container" @click="scrollToSection('project1')">
            <h3 class="content-title">The Craftsman's Dream Home</h3>
          </div>
        </div>

        <!-- 第三个单元格：The Modern Farmhouse -->
        <div class="table-cell project-nav-cell">
          <div class="content-container" @click="scrollToSection('project2')">
            <h3 class="content-title">The Modern Farmhouse</h3>
          </div>
        </div>

        <!-- 第四个单元格：The Rustic Oasis -->
        <div class="table-cell project-nav-cell">
          <div class="content-container" @click="scrollToSection('project3')">
            <h3 class="content-title">The Rustic Oasis</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- 项目部分 -->
    <div class="project-sections">
      <!-- 项目1 -->
      <section class="project-section" id="project1" ref="project1">
        <h2 class="project-section-title">The Craftsman's Modern Dream Home Feature</h2>
        <p class="project-section-text">
          Welcome to our Craftsman's Dream Home, where functionality meets beauty. Our team of
          expert craftsmen worked tirelessly to bring this stunning project to life, combining
          timeless design with modern amenities. Click the button below to learn more about this
          project and how we can make your dream home a reality.
        </p>

        <el-carousel height="800px" type="card" indicator-position="outside">
          <el-carousel-item v-for="(image, index) in project1Images" :key="index">
            <div class="carousel-card">
              <img
                :src="getImagePath(1, index + 1)"
                class="carousel-image"
                :alt="`Project 1 Image ${index + 1}`"
              />
            </div>
          </el-carousel-item>
        </el-carousel>
      </section>

      <!-- 分隔线 -->
      <div class="section-divider"></div>

      <!-- 项目2 -->
      <section class="project-section" id="project2" ref="project2">
        <h2 class="project-section-title">The Craftsman's Classic Dream Home Exterior Feature</h2>
        <p class="project-section-text">
          Introducing our Modern Farmhouse, a perfect blend of sleek design and cozy charm. Our team
          of skilled builders and designers created a space that seamlessly blends indoor and
          outdoor living. Click the button below to see how we can bring this modern farmhouse
          aesthetic to your own home.
        </p>

        <el-carousel height="800px" type="card" indicator-position="outside">
          <el-carousel-item v-for="(image, index) in project2Images" :key="index">
            <div class="carousel-card">
              <img
                :src="getImagePath(2, index + 1)"
                class="carousel-image"
                :alt="`Project 2 Image ${index + 1}`"
              />
            </div>
          </el-carousel-item>
        </el-carousel>
      </section>

      <!-- 分隔线 -->
      <div class="section-divider"></div>

      <!-- 项目3 -->
      <section class="project-section" id="project3" ref="project3">
        <h2 class="project-section-title">Featured Bathroom Finishing</h2>
        <p class="project-section-text">
          Escape to the peaceful retreat tucked away in the picturesque Northern Virginia
          countryside. Our team of artisans and builders created a space that seamlessly blends into
          its natural surroundings, while still offering all the modern amenities. Click the button
          below to learn more about this project and how we can create your own rustic oasis.
        </p>

        <el-carousel height="800px" type="card" indicator-position="outside">
          <el-carousel-item v-for="(image, index) in project3Images" :key="index">
            <div class="carousel-card">
              <img
                :src="getImagePath(3, index + 1)"
                class="carousel-image"
                :alt="`Project 3 Image ${index + 1}`"
              />
            </div>
          </el-carousel-item>
        </el-carousel>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      project1Images: Array.from({ length: 20 }, (_, i) => `image${i + 1}`),
      project2Images: Array.from({ length: 5 }, (_, i) => `image${i + 1}`),
      project3Images: Array.from({ length: 9 }, (_, i) => `image${i + 1}`),
    }
  },
  methods: {
    scrollToSection(sectionId) {
      this.$nextTick(() => {
        const element = this.$refs[sectionId]
        if (element && element.$el) {
          element.$el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (element instanceof HTMLElement) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    },
    getImagePath(projectNum, imageNum) {
      return `/src/assets/project/project${projectNum}/image${imageNum}.jpg`
    },
  },
}
</script>

<style scoped>
.projects-page {
  padding-top: 130px; /* 顶部预留Header的位置 */
  padding-left: 80px;
  padding-right: 80px;
  background-color: rgb(38, 38, 38);
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

/* 顶部导航表格 */
.projects-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

.table-row {
  display: table-row;
  height: 440px; /* 高度设置为440px */
}

.table-cell {
  display: table-cell;
  width: 25%;
  height: 440px;
  border: 1px solid rgb(154, 138, 120); /* 棕色边框 */
  vertical-align: top;
  position: relative;
  overflow: hidden;
}

/* Our Projects 标题单元格 */
.project-title-cell {
  background-color: rgb(154, 138, 120); /* 棕色背景 */
  position: relative;
}

.project-title {
  color: white;
  font-size: 40px;
  font-weight: 600;
  position: absolute;
  width: 250px;
  left: 50%;
  transform: translateX(-50%);
  top: 130px;
  line-height: 1.2;
  text-align: left;
  font-family: 'Raleway', sans-serif;
}

/* 项目导航单元格 */
.project-nav-cell {
  position: relative;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.project-nav-cell:hover {
  background-color: rgba(154, 138, 120, 0.1);
}

/* 内容容器 */
.content-container {
  width: 40%;
  position: absolute;
  left: 30%;
  right: 30%;
  top: 0;
  bottom: 0;
  overflow: auto;
}

.content-title {
  color: rgb(154, 138, 120); /* 棕色字体 */
  font-size: 30px;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 30px;
  text-align: left;
  font-family: 'Raleway', sans-serif;
}

/* 项目部分 */
.project-sections {
  padding: 60px 0;
  font-family: 'Raleway', sans-serif;
}

.project-section {
  margin-bottom: 40px;
  padding: 0;
}

.project-section-title {
  color: rgb(154, 138, 120);
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
  font-family: 'Raleway', sans-serif;
  max-width: 550px;
  margin-left: 0;
  margin-right: auto;
}

.project-section-text {
  color: white;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 30px;
  font-family: 'Raleway', sans-serif;
  max-width: 620px;
  margin-left: 0;
  margin-right: auto;
}

/* 分隔线 */
.section-divider {
  height: 1px;
  background-color: rgb(154, 138, 120);
  margin: 60px 0;
}

/* 图片展示 */
.project-gallery {
  margin: 40px 0;
  width: 100%;
}

.carousel-card {
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

.carousel-image {
  height: 100%;
  width: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  background-color: transparent;
}

.gallery-image {
  height: 800px;
  width: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.gallery-image-container {
  border: 1px solid rgb(154, 138, 120);
  width: 100%;
}

.gallery-image {
  height: 800px;
  width: 100%;
  object-fit: cover;
  display: block;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .projects-page {
    padding-left: 40px;
    padding-right: 40px;
  }

  .project-section {
    padding: 0;
  }

  .section-divider {
    margin: 60px 0;
  }
}

@media (max-width: 992px) {
  .projects-table,
  .table-row,
  .table-cell {
    display: block;
    width: 100%;
  }

  .table-row {
    height: auto;
  }

  .table-cell {
    height: 200px;
  }

  .content-container {
    width: 70%;
    left: 15%;
    right: 15%;
  }

  .project-title {
    position: relative;
    width: 80%;
    left: 10%;
    transform: none;
    top: 30px;
    padding-bottom: 30px;
  }

  .content-title {
    margin-top: 40px;
  }

  .project-section {
    padding: 0;
  }

  .section-divider {
    margin: 40px 0;
  }

  .gallery-image {
    height: 600px; /* 中等屏幕上降低图片高度 */
  }
}

@media (max-width: 576px) {
  .projects-page {
    padding-left: 20px;
    padding-right: 20px;
  }

  .project-section {
    padding: 0;
  }

  .section-divider {
    margin: 40px 0;
  }

  .gallery-image {
    height: 400px; /* 在小屏幕上减小图片高度 */
  }
}
</style>
