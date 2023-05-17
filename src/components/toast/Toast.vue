<template >
  <TransitionRoot as="div" :show="toasts.length > 0" appear
    ><div class="z-[1001] toast toast-top toast-end z-10" v-if="toasts.length">
      <TransitionChild
        v-for="toast in toasts"
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <div class="alert bg-white shadow-lg" @click="closeValidationToast(toast.validationToast.onClose, toast.id)">
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
      </TransitionChild>
    </div>
  </TransitionRoot>
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
