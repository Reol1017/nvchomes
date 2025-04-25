<!-- views/ServicesPage.vue -->
<template>
  <div class="services-page">
    <!-- 4x2 Table Layout -->
    <div class="services-table">
      <!-- Row 1 -->
      <div class="table-row">
        <!-- Cell 1-1: Our Services Title -->
        <div class="table-cell service-title-cell">
          <div class="service-title">Our<br />Services</div>
        </div>

        <!-- Cell 1-2: Custom Architectural Design -->
        <div class="table-cell service-content-cell">
          <div class="content-container">
            <h3 class="content-title">Custom Architectural Design</h3>
            <p class="content-text">
              At Northern Virginia Craftsman Homes, a exceptional architectural design service by
              our architects team always come into the first place. Our team of architects will work
              with you to ensure that every detail of your dream home is brought to the plan.
              Whether you're looking for a modern, open-concept design or a more traditional style,
              we have the expertise to make your vision a reality.
            </p>
          </div>
        </div>

        <!-- Cell 1-3: Custom Structural Design -->
        <div class="table-cell service-content-cell">
          <div class="content-container">
            <h3 class="content-title">Custom Structural Design</h3>
            <p class="content-text">
              If you love the architectural design, our engineering team will be there for you at
              this step to make architect idea into practical design. Our group value the cost
              effective structural design and promote a value engineering method to ensure the
              structural quality of your home.
            </p>
          </div>
        </div>

        <!-- Cell 1-4: Image 1 -->
        <div class="table-cell service-image-cell">
          <img
            src="@/assets/services/pic1.avif"
            alt="Construction Services"
            class="service-image"
          />
        </div>
      </div>

      <!-- Row 2 -->
      <div class="table-row">
        <!-- Cell 2-1: Image 2 -->
        <div class="table-cell service-image-cell">
          <img src="@/assets/services/pic2.avif" alt="Design Services" class="service-image" />
        </div>

        <!-- Cell 2-2: New Residential Construction -->
        <div class="table-cell service-content-cell">
          <div class="content-container">
            <h3 class="content-title">New Residential Construction</h3>
            <p class="content-text">
              With the permitting team and construction team effort in this process, we have been
              endeavoring to build your dream home with well construction scheduling, enhanced QC/QA
              audit, prudently foreseeing risks, quickly turnaround communication with all
              stakeholders during the whole process of the construction.
            </p>
          </div>
        </div>

        <!-- Cell 2-3: Post Construction Service -->
        <div class="table-cell service-content-cell">
          <div class="content-container">
            <h3 class="content-title">Post Construction Service</h3>
            <p class="content-text">
              The enjoyment of new home shall be lasting forever, this is where our customer service
              team to help to ensure the life of Riley goes as you expected. A matured system with
              our team effort makes the maintenance work smooth and fast.
            </p>
          </div>
        </div>

        <!-- Cell 2-4: Construction Management Service -->
        <div class="table-cell service-content-cell">
          <div class="content-container">
            <h3 class="content-title">Construction Management Service</h3>
            <p class="content-text">
              Already has contract with other builder but looking for a professional team to manage
              the work? No problem. Our 10 years plus team is always there for you to consult in the
              aspect of construction scheduling, estimating, redline/as-built verification, quality
              control and progressive payment recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  mounted() {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped>
.services-page {
  padding-top: 130px; /* Header height padding */
  padding-left: 80px;
  padding-right: 80px;
  background-color: rgb(38, 38, 38);
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

.services-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* Ensure equal width distribution */
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

.table-row {
  display: table-row;
  height: 700px; /* Set the row height */
}

.table-cell {
  display: table-cell;
  width: 25%; /* 4 cells per row = 25% each */
  height: 700px; /* Fixed height of 700px */
  max-height: 700px; /* Maximum height of 700px */
  border: 1px solid rgb(154, 138, 120); /* Brown border */
  vertical-align: top;
  position: relative;
  overflow: hidden; /* Prevent content from overflowing */
}

/* Remove the min-height pseudo element */
.table-cell::after {
  display: none;
}

/* Title Cell - Our Services */
.service-title-cell {
  background-color: rgb(154, 138, 120); /* Brown background */
  position: relative;
}

.service-title {
  color: white;
  font-size: 40px;
  font-weight: 600;
  position: absolute;
  width: 250px; /* Same fixed width as content */
  left: 50%;
  transform: translateX(-50%); /* Center the title */
  top: 130px;
  line-height: 1.2;
  text-align: left;
  font-family: 'Raleway', sans-serif;
}

/* Content Cells */
.service-content-cell {
  position: relative;
  padding: 0;
  box-sizing: border-box;
}

.content-container {
  width: 250px; /* Fixed width of 250px */
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /* Center the container */
  top: 0;
  bottom: 0;
  overflow: auto;
}

.content-title {
  color: rgb(154, 138, 120); /* Brown color */
  font-size: 30px;
  font-weight: 600;
  margin-top: 100px; /* Exactly 100px from top */
  margin-bottom: 30px;
  text-align: left;
  font-family: 'Raleway', sans-serif;
}

.content-text {
  color: white;
  font-size: 16px;
  line-height: 1.5; /* 设置为1.5倍行距 */
  text-align: left;
  font-family: 'Raleway', sans-serif;
}

.content-text {
  color: white;
  font-size: 16px;
  line-height: 1.6;
}

/* Image Cells */
.service-image-cell {
  padding: 0;
  overflow: hidden;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  max-height: 700px; /* Limit image height */
}

/* Responsive Adjustments */
@media (max-width: 1200px) {
  .services-page {
    padding-left: 40px;
    padding-right: 40px;
  }

  .content-title {
    font-size: 24px;
  }
}

@media (max-width: 992px) {
  .services-table,
  .table-row,
  .table-cell {
    display: block;
    width: 100%;
  }

  .table-row {
    height: auto;
  }

  .table-cell {
    height: auto;
    max-height: none;
    padding-bottom: 40px;
  }

  .content-container,
  .service-title {
    position: relative;
    width: 250px; /* Keep same width on mobile */
    left: 50%;
    transform: translateX(-50%);
  }

  .service-title {
    top: 0;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .service-image-cell {
    height: 400px;
    position: relative;
  }

  .content-title {
    margin-top: 40px;
  }
}

@media (max-width: 576px) {
  .services-page {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
