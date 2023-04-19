<template>
  <div>
    <Navbar />
    <div class="min-h-screen">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/footer/Footer.vue";
import Navbar from "../components/navbar/Navbar.vue";
</script>

<style scoped></style>
