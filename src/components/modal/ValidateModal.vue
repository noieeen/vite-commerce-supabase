<template>
  <TransitionRoot as="template" :show="validationModalConfig.isOpen">
    <Dialog as="div" class="relative z-[1001]" @close="closeValidationModal(validationModalConfig.onClose)">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <!-- success -->
              <div v-if="validationModalConfig.type == 'success'">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">{{ validationModalConfig.title }}</DialogTitle>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          {{ validationModalConfig.confirmLabel || 'Confirm' }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    v-if="!validationModalConfig.confirmBtnDisabled"
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-success px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 sm:ml-3 sm:w-auto"
                    @click="validationModalConfig.onConfirm"
                  >
                    {{ validationModalConfig.confirmLabel || 'Confirm' }}
                  </button>
                  <button
                    v-if="!validationModalConfig.cancelBtnDisabled"
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    @click="validationModalConfig.onCancel"
                    ref="cancelButtonRef"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <!-- warning -->
              <div v-if="validationModalConfig.type == 'warning'">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon class="h-6 w-6 text-yellow-600" aria-hidden="true" />
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">{{ validationModalConfig.title }}</DialogTitle>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          {{ validationModalConfig.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    v-if="!validationModalConfig.confirmBtnDisabled"
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-warning px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto"
                    @click="validationModalConfig.onConfirm"
                  >
                    {{ validationModalConfig.confirmLabel || 'Confirm' }}
                  </button>
                  <button
                    v-if="!validationModalConfig.cancelBtnDisabled"
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    @click="validationModalConfig.onCancel"
                    ref="cancelButtonRef"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <!-- error -->
              <div v-if="validationModalConfig.type == 'error'">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <XMarkIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">{{ validationModalConfig.title }}</DialogTitle>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          {{ validationModalConfig.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    v-if="!validationModalConfig.confirmBtnDisabled"
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-error px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    @click="validationModalConfig.onConfirm"
                  >
                    {{ validationModalConfig.confirmLabel || 'Confirm' }}
                  </button>
                  <button
                    v-if="!validationModalConfig.cancelBtnDisabled"
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    @click="validationModalConfig.onCancel"
                    ref="cancelButtonRef"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <!-- default -->
              <div v-if="validationModalConfig.type == 'default'">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-violet-100 sm:mx-0 sm:h-10 sm:w-10">
                      <SparklesIcon class="h-6 w-6 text-violet-600" aria-hidden="true" />
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">{{ validationModalConfig.title }}</DialogTitle>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          {{ validationModalConfig.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    v-if="!validationModalConfig.confirmBtnDisabled"
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 sm:ml-3 sm:w-auto"
                    @click="validationModalConfig.onConfirm"
                  >
                    {{ validationModalConfig.confirmLabel || 'Confirm' }}
                  </button>
                  <button
                    v-if="!validationModalConfig.cancelBtnDisabled"
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    @click="validationModalConfig.onCancel"
                    ref="cancelButtonRef"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ExclamationTriangleIcon, CheckIcon, XMarkIcon, SparklesIcon } from '@heroicons/vue/24/outline';

import { useModalStore } from '@/store/modalStore';

import { storeToRefs } from 'pinia';
import useValidationModal from './useValidateModal';

const { openSuccessModal, openWarningModal, openErrorModal, closeValidationModal } = useValidationModal();
const modalStore = useModalStore();
let { validationModalConfig } = storeToRefs(modalStore);
const open = ref(true);
</script>
