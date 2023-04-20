<template>
  <div>
    <div class="min-h-screen">
      <Navbar :session="session" />

      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '../components/footer/Footer.vue';
import Navbar from '../components/navbar/Navbar.vue';

interface Props {
  session: any;
}

defineProps<Props>();
</script>

<style scoped></style>
