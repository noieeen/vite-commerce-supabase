<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="artboard phone-3">
      <div class="text-3xl text-center">Profile</div>
      <form class="form-control" @submit.prevent="updateProfile">
        <div class="m-3">
          <Avatar v-model:path="avatar_url" @upload="updateProfile" :size="10" />
        </div>
        <div class="mt-2">
          <label for="email">Email</label>
          <input id="email" type="text" :value="email" disabled class="input input-bordered bg-white w-full" />
        </div>
        <div class="mt-2">
          <label for="username">Name</label>
          <input id="username" type="text" v-model="username" class="input input-bordered bg-white w-full" />
        </div>
        <div class="mt-2">
          <label for="website">Website</label>
          <input id="website" type="url" v-model="website" class="input input-bordered bg-white w-full" />
        </div>

        <div class="mt-8">
          <input type="submit" class="btn btn-primary w-full" :value="loading ? 'Loading ...' : 'Update'" :disabled="loading" />
        </div>

        <div class="mt-3">
          <button class="btn btn-error btn-outline w-full" @click="onClickSignOut" :disabled="loading">Sign Out</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, toRefs, onBeforeMount } from 'vue';
import useSupabase from '@/libs/supabase';
import Avatar from '../../components/avatar/Avatar.vue';
import { useAuthStore } from '@/store/authStore';
import router from '@/router';

const store = useAuthStore();
const session = ref<any>();
const { client } = useSupabase();

const email = ref<string>('');
const loading = ref<boolean>(false);
const username = ref<string>('');
const website = ref<string>('');
const avatar_url = ref<string>('');

async function getProfile() {
  try {
    loading.value = true;
    const { user } = session.value;

    let { data, error, status } = await client.from('profiles').select(`username, website, avatar_url`).eq('id', user.id).single();

    if (error && status !== 406) throw error;

    if (data) {
      email.value = user.email;
      username.value = data.username;
      website.value = data.website;
      avatar_url.value = data.avatar_url;
    }
  } catch (error) {
    console.error(error);
    error;
  } finally {
    loading.value = false;
  }
}

async function updateProfile() {
  try {
    loading.value = true;
    const { user } = session.value;

    const updates = {
      id: user.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    };

    let { error } = await client.from('profiles').upsert(updates);

    if (error) throw error;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

async function onClickSignOut() {
  await store.SIGN_OUT();
}

onBeforeMount(() => {});

onMounted(async () => {
  if (!store.user) router.push('/');
  session.value = store.user;

  await getProfile();
});
</script>
