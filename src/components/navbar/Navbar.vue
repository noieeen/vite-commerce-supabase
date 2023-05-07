<template>
  <nav>
    <div class="navbar bg-white shadow-lg">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" @click="onClickRoute('/')">ViteCommerce</a>
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input type="text" placeholder="Search" class="input input-bordered" />
        </div>
        <!-- notification icon -->
        <button v-if="user" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <!-- cart dropdown -->
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm badge-success indicator-item">8</span>
            </div>
          </label>
          <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block" @click="onClickRoute('/cart')">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <!-- profile dropdown -->
        <div v-if="user" class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="@/assets/images/sample.webp" />
            </div>
          </label>
          <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between" @click="onClickRoute('/profile')">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a @click="onClickSignOut()">Logout</a></li>
          </ul>
        </div>
        <div v-if="!user" class="flex-1">
          <a class="btn btn-ghost normal-case text-xl" @click="onClickRoute('/auth')">Login</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import router from '@/router';
import useSupabase from '@/libs/supabase';
import { ref, watch } from 'vue';
import useValidationToast from '../toast/useValidateToast';

import { useAuthStore } from '@/store/authStore';
const store = useAuthStore();
const { openSuccessToast } = useValidationToast();
const user = ref();

function onClickRoute(name: string) {
  router.push(name);
}

async function onClickSignOut() {
  await store.SIGN_OUT();

  location.reload();
  openSuccessToast('Success', 'Sign Out Success');
}

watch(
  () => store.isAuth,
  () => {
    user.value = store.auth;
  },
  { immediate: true },
);
</script>

<style scoped></style>
