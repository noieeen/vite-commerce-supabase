<template>
  <div>
    <TopMenu>
      <router-view />
    </TopMenu>
    <validate-modal />
    <toast />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/authStore';
import router from './router';
import TopMenu from './layout/TopMenu.vue';

import { onMounted, ref, toRefs } from 'vue';

import useSupabase from '@/libs/supabase';

// components
import ValidateModal from '@/components/modal/ValidateModal.vue';
import Toast from '@/components/toast/Toast.vue';

const store = useAuthStore();
const session = ref<any>();
const { client } = useSupabase();

onMounted(async () => {
  await client.auth.getSession().then(({ data }) => {
    store.STORE_USER(data.session);
    if (data.session) store.auth = true;
  });

  await client.auth.onAuthStateChange((_, _session) => {
    store.STORE_USER(_session);
    if (_session) store.auth = true;
  });
});
</script>

<style scoped lang="scss"></style>
