<template>
  <div class="form-control">
    <h1 class="text-2xl font-bold">Sign In</h1>
    <div class="mt-2">
      <p class="description">Sign in via magic link with your email below</p>
    </div>

    <div class="mt-5">
      <input class="input bg-white w-full" required type="email" placeholder="Your email" v-model="email" />
    </div>
    <div class="mt-3 text-center">
      <button class="btn btn-primary" :disabled="loading" @click="onClickSignIn">
        {{ loading ? 'Loading' : 'Send magic link' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';

const vm = getCurrentInstance()?.proxy;
const email = ref<string>('');

interface Props {
  loading: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
});

function onClickSignIn() {
  if (email.value) {
    vm?.$emit('sing-in', email.value);
  }
}

defineEmits(['sing-in']);
</script>

<style scoped></style>
