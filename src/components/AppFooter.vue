<!-- components/AppFooter.vue -->
<template>
  <footer class="site-footer">
    <div class="container-fluid">
      <div class="row footer-content">
        <!-- Contact Info Column -->
        <div class="col-lg-4 footer-contact">
          <h3 class="footer-title">Contact Us</h3>
          <div class="footer-contact-item">
            <i class="bi bi-house-fill"></i>
            <div class="contact-text">NVC Homes, Fairfax, VA 22030</div>
          </div>
          <div class="footer-contact-item">
            <i class="bi bi-envelope-fill"></i>
            <div class="contact-text">nvchomesllc@gmail.com</div>
          </div>
          <div class="footer-contact-item">
            <i class="bi bi-telephone-fill"></i>
            <div class="contact-text">(571) NVC-HOME</div>
          </div>
          <p class="footer-copyright">
            © {{ currentYear }} by Northern Virginia Craftsman Homes. All rights reserved.
          </p>
        </div>

        <!-- Contact Form Column -->
        <div class="col-lg-4 footer-form">
          <form @submit.prevent="submitFooterForm" class="form-container">
            <div class="row form-row">
              <div class="col">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" />
              </div>
              <div class="col">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" />
              </div>
            </div>
            <div class="form-row">
              <label for="email">Email *</label>
              <input
                type="email"
                class="form-control"
                id="email"
                required
                v-model="footerEmail"
                :class="{ 'error-input': emailError }"
              />
            </div>
            <div class="row form-row">
              <div class="col">
                <label for="phone">Phone</label>
                <input type="tel" class="form-control" id="phone" />
              </div>
              <div class="col">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" />
              </div>
            </div>
            <div class="submit-container">
              <button type="submit" class="footer-submit-btn">SEND MESSAGE</button>
            </div>
          </form>
        </div>

        <!-- Navigation Column -->
        <div class="col-lg-4 footer-nav">
          <div class="nav-container">
            <ul class="footer-menu">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/projects">Projects</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      footerEmail: '',
      emailError: false,
    }
  },
  methods: {
    submitFooterForm() {
      // Check if email is empty
      if (!this.footerEmail.trim()) {
        this.emailError = true
        return
      } else {
        this.emailError = false
      }

      // Form submission logic would go here
      console.log('Footer form submitted')
      // Reset form or show success message
      this.footerEmail = ''
    },
  },
}
</script>

<style scoped>
/* Footer */
.site-footer {
  background-color: rgb(38, 38, 38);
  width: 100%;
  height: 600px;
  color: rgb(154, 138, 120);
  display: flex;
  align-items: center;
}

.footer-content {
  width: 100%;
  padding: 0 40px;
}

.footer-title {
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: 500;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
}

.footer-contact-item i {
  font-size: 40px;
  margin-right: 15px;
  flex-shrink: 0;
}

.contact-text {
  width: 250px;
  line-height: 1.4;
}

.footer-copyright {
  margin-top: 40px;
  font-size: 14px;
}

.footer-form {
  display: flex;
  justify-content: center;
}

.form-container {
  width: 380px;
}

.form-row {
  margin-bottom: 20px;
}

.form-row .col:first-child {
  padding-right: 10px;
}

.form-row .col:last-child {
  padding-left: 10px;
}

.footer-form .form-control {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgb(154, 138, 120);
  border-radius: 0;
  color: rgb(154, 138, 120);
  padding: 10px 0;
  width: 100%;
}

.footer-form .form-control:focus {
  box-shadow: none;
  border-color: rgb(154, 138, 120);
  background-color: transparent;
  outline: none;
  color: rgb(154, 138, 120);
}

.footer-form .form-control::placeholder {
  color: rgb(154, 138, 120);
  opacity: 0;
  position: absolute;
  pointer-events: none;
}

.footer-form input:-webkit-autofill,
.footer-form input:-webkit-autofill:hover,
.footer-form input:-webkit-autofill:focus {
  -webkit-text-fill-color: rgb(154, 138, 120);
  -webkit-box-shadow: 0 0 0px 1000px rgb(38, 38, 38) inset;
  transition: background-color 5000s ease-in-out 0s;
}

.footer-form label {
  color: rgb(154, 138, 120);
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
}

.error-input {
  border-bottom: 1px solid #dc3545 !important;
}

.submit-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.footer-submit-btn {
  background-color: transparent;
  border: 2px solid rgb(154, 138, 120);
  color: rgb(154, 138, 120);
  padding: 0;
  font-size: 14px;
  transition: all 0.3s ease;
  width: 380px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-submit-btn:hover {
  background-color: rgb(154, 138, 120);
  color: rgb(38, 38, 38);
}

.footer-nav {
  position: relative;
}

.nav-container {
  position: absolute;
  right: 100px;
  top: 0;
}

.footer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu li {
  margin-bottom: 20px;
}

.footer-menu a {
  color: rgb(154, 138, 120);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-menu a:hover {
  color: white;
  text-decoration: none;
}

@media (max-width: 992px) {
  .site-footer {
    height: auto;
    padding: 60px 0;
  }

  .footer-content {
    padding: 0 20px;
  }

  .footer-contact,
  .footer-form,
  .footer-nav {
    margin-bottom: 40px;
  }

  .footer-nav {
    justify-content: flex-start;
    padding-right: 0;
  }

  .nav-container {
    position: static;
    right: 0;
  }

  .form-container {
    width: 100%;
    max-width: 380px;
  }

  .footer-submit-btn {
    width: 100%;
    max-width: 380px;
  }
}
</style>
