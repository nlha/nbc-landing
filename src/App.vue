<template>
  <Navbar />
  <Welcome />
  <Services />
  <Expertise />
  <Products />
  <Showcase />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Welcome from './components/Welcome.vue'
import Services from './components/Services.vue'
import Expertise from './components/Expertise.vue'
import Products from './components/Products.vue'
import Showcase from './components/Showcase.vue'

export default {
  name: 'App',
  components: { Navbar, Footer, Welcome, Services, Expertise, Products, Showcase }
}
</script>

