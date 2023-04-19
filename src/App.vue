<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import router from "./router";
import TopMenu from "./layout/TopMenu.vue";
</script>

<template>
  <div>
    <TopMenu>
      <router-view />
    </TopMenu>
  </div>
</template>

<style scoped lang="scss"></style>
