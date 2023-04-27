<template>
  <div class="toast toast-top toast-end z-10" v-if="toasts.length">
    <!-- <TransitionRoot as="template" :show="toasts.length > 0"> -->
    <!-- <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leave-from="opacity-100 translate-y-0 sm:scale-100"
        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      > -->
    <div class="alert bg-white shadow-lg" v-for="toast in toasts" @click="closeValidationToast(toast.validationToast.onClose, toast.id)">
      <div>
        <div>
          <h3 class="font-semi-bold">{{ toast.validationToast.title }}</h3>
          <div class="text-xs">{{ toast.validationToast.description }}</div>
        </div>
      </div>
      <div class="flex-none">
        <button class="btn btn-sm btn-ghost" @click="toast.validationToast.onCancel">Deny</button>
        <button
          class="btn btn-sm"
          :class="[
            toast.validationToast.type == 'success'
              ? 'btn-success'
              : toast.validationToast.type == 'warning'
              ? 'btn-warning'
              : toast.validationToast.type == 'error'
              ? 'btn-error'
              : 'btn-primary',
          ]"
          @click="toast.validationToast.onConfirm"
        >
          {{ toast.validationToast.confirmLabel || 'Accept' }}
        </button>
      </div>
    </div>
    <!-- </TransitionChild> -->
    <!-- </TransitionRoot> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ExclamationTriangleIcon, CheckIcon, XMarkIcon, SparklesIcon } from '@heroicons/vue/24/outline';

import { useToastStore } from '@/store/toastStore';

import { storeToRefs } from 'pinia';
// import { useValidationToast } from './useValidateToast';
import useValidationToast from './useValidateToast';

const { closeValidationToast } = useValidationToast();
const toastStore = useToastStore();
let { validationToastConfig, toasts } = storeToRefs(toastStore);
const open = ref(true);
</script>

<style scoped></style>
