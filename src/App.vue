<template>
  <div>
    <TopMenu>
      <router-view />
    </TopMenu>
  </div>
</template>

<script setup lang="ts">
import router from './router';
import TopMenu from './layout/TopMenu.vue';
// import supabase from '@/libs/supabase';
import { onMounted, ref, toRefs } from 'vue';

import useSupabase from '@/libs/supabase';

const session = ref();
// const { client } = useSupabase();

// onMounted(() => {
//   client.auth.getSession().then(({ data }) => {
//     session.value = data.session;
//   });

//   client.auth.onAuthStateChange((_, _session) => {
//     session.value = _session;
//   });
// });
</script>

<style scoped lang="scss"></style>
