<template>
  <div>
    <TopMenu :session="session">
      <router-view />
    </TopMenu>
    <validate-modal />
    <toast />
  </div>
</template>

<script setup lang="ts">
import router from './router';
import TopMenu from './layout/TopMenu.vue';

import { onMounted, ref, toRefs } from 'vue';

import useSupabase from '@/libs/supabase';

// components
import ValidateModal from './components/modal/ValidateModal.vue';
import Toast from './components/toast/Toast.vue';

const session = ref<any>();
const { client } = useSupabase();

onMounted(() => {
  client.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  client.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});
</script>

<style scoped lang="scss"></style>
