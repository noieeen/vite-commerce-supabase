<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <!-- left -->
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id
          nisi.
        </p>
      </div>
      <!-- card -->
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <SignUp v-if="isSignUp" :loading="loading" @sing-up="handleSignUp" /><SignIn v-else :loading="loading" @sing-in="handleSignUp" />
          <div class="small text-center">
            <div v-if="isSignUp">if you have account <span class="underline cursor-pointer" @click="panelSwitch">Sign In</span></div>
            <div v-else>if you don't have account <span class="underline cursor-pointer" @click="panelSwitch">Sign Up</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';
import useSupabase from '@/libs/supabase';
import router from '@/router';

const isSignUp = ref<boolean>(false);
// const loading = ref<boolean>(false);

const { loading, signInWithOtp } = useSupabase();

async function handleSignIn(email: string) {
  await signInWithOtp(email);
  // if (loading) {
  //   goHome();
  // }
}

async function handleSignUp(email: string) {
  await signInWithOtp(email);

  // goHome();
}

function panelSwitch() {
  isSignUp.value = !isSignUp.value;
}

function goHome() {
  router.push('/');
}

// defineEmits(['on-sign-in', 'on-sign-up']);
</script>

<style scoped></style>
