<template>
  <div class="form-control">
    <h1 class="text-2xl font-bold">Sign In</h1>

    <div>
      <h3>Using</h3>
      <div class="flex justify-start">
        <button v-if="panel != signInPanel.SOCIAL" class="btn btn-ghost" @click="panelSwitcher(signInPanel.SOCIAL)">Social</button
        ><button v-if="panel != signInPanel.EMAIL_PASS" class="btn btn-ghost" @click="panelSwitcher(signInPanel.EMAIL_PASS)">Email Password</button
        ><button v-if="panel != signInPanel.OTP" class="btn btn-ghost" @click="panelSwitcher(signInPanel.OTP)">OTP</button>
      </div>
    </div>

    <div v-if="panel == signInPanel.OTP">
      <div class="mt-2">
        <p class="description">Sign in via magic link with your email below</p>
      </div>

      <div class="mt-5">
        <input class="input input-bordered w-full max-w-xs" required type="email" placeholder="Your email" v-model="email" />
      </div>
      <div class="mt-3 text-center">
        <button class="btn btn-primary" :disabled="loading" @click="onClickSignIn">
          {{ loading ? 'Loading' : 'Send magic link' }}
        </button>
      </div>
    </div>

    <div v-else-if="panel == signInPanel.EMAIL_PASS">
      <div class="mt-2">
        <p class="description">Sign in via magic link with your email below</p>
      </div>

      <div class="mt-5">
        <input class="input input-bordered w-full max-w-xs" required type="email" placeholder="Your email" v-model="email" />
      </div>
      <div class="mt-2">
        <input class="input input-bordered w-full max-w-xs" required type="password" placeholder="Your password" v-model="password" />
      </div>
      <div class="mt-3 text-center">
        <button class="btn btn-primary" :disabled="loading" @click="onClickSignIn">
          {{ loading ? 'Loading' : 'Sign In' }}
        </button>
      </div>
    </div>

    <div v-else-if="panel == signInPanel.SOCIAL">
      <div class="mt-2">
        <p class="description">Sign in via your social</p>
      </div>

      <div class="mt-5 grid">
        <button class="btn btn-ghost bg-[#3b5998]">Facebook</button><button class="btn btn-ghost bg-[#00acee]">Twitter</button
        ><button class="btn btn-ghost bg-[#00b900]">Line</button><button class="btn btn-ghost bg-[#0F9D58]">Google</button>
      </div>
      <div class="mt-2">
        <input class="input input-bordered w-full max-w-xs" required type="password" placeholder="Your password" v-model="password" />
      </div>
      <div class="mt-3 text-center">
        <button class="btn btn-primary" :disabled="loading" @click="onClickSignIn">
          {{ loading ? 'Loading' : 'Send magic link' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';

interface SignInPanel {
  OTP: string;
  EMAIL_PASS: string;
  SOCIAL: string;
}

const signInPanel: SignInPanel = { OTP: 'otp', EMAIL_PASS: 'email_pass', SOCIAL: 'social' };

const vm = getCurrentInstance()?.proxy;
const email = ref<string>('');
const password = ref<string>('');

const panel = ref<string>(signInPanel.OTP);
const socialType = ref<string>('');

interface Props {
  loading: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
});

function onClickSignIn() {
  if (panel.value == signInPanel.OTP) {
    if (email.value) {
      vm?.$emit('sing-in', email.value);
    }
  } else if (panel.value == signInPanel.EMAIL_PASS) {
    if (email.value && password.value) {
      vm?.$emit('sing-in-w-pass', email.value, password.value);
    }
  } else if (panel.value == signInPanel.SOCIAL) {
    if (socialType.value.length) vm?.$emit('sing-in-w-social', socialType.value);
  }
}

function panelSwitcher(mode: string) {
  panel.value = mode;
}

defineEmits(['sing-in', 'sing-in-w-pass', 'sing-in-w-social']);
</script>

<style scoped></style>
