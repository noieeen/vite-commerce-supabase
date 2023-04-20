<template>
  <div class="form-control">
    <h1 class="text-2xl font-bold">Sign Up</h1>
    <div class="mt-2">
      <p class="description">Sign up via magic link with your email below</p>
    </div>

    <div class="mt-5">
      <input class="input bg-white w-full" required type="email" placeholder="Your email" v-model="email" />
    </div>
    <div class="mt-3 text-center">
      <button class="btn btn-primary" :disabled="loading" @click="onClickSignUp">
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

function onClickSignUp() {
  if (email.value) {
    vm?.$emit('sing-up', email.value);
  }
}

defineEmits(['sing-up']);
</script>

<style scoped></style>
