<template>
  <div>
    <div class="navbar bg-white">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" @click="onClickRoute('/')">daisyUI</a>
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input type="text" placeholder="Search" class="input input-bordered" />
        </div>
        <div class="dropdown dropdown-end">
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
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
function onClickRoute(name: string) {
  router.push(name);
}
</script>

<style scoped></style>
