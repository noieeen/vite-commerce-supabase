<template>
  <div class="container">
    <div class="text-5xl mb-5">Playground</div>
    <div class="mb-2">
      <div class="mb-3">Open Modal</div>
      <div><button class="btn btn-success" @click="openValidateModal(1)">Success</button></div>
      <div><button class="btn btn-warning" @click="openValidateModal(2)">Warning</button></div>
      <div><button class="btn btn-error" @click="openValidateModal(3)">Error</button></div>
      <div><button class="btn btn-primary" @click="openValidateModal(4)">Defalut</button></div>
    </div>
    <div class="mb-2">
      <div class="mb-3">Toast</div>
      <div><button class="btn btn-success" @click="openToast(1)">Success</button></div>
      <div><button class="btn btn-warning" @click="openToast(2)">Warning</button></div>
      <div><button class="btn btn-error" @click="openToast(3)">Error</button></div>
      <div><button class="btn btn-primary" @click="openToast(4)">Default</button></div>
    </div>
    <Disclosure as="div" :default-open="false">
      <DisclosureButton>Is team pricing available?</DisclosureButton>

      <!-- Use the built-in `transition` component to add transitions. -->
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <DisclosurePanel> Yes! You can purchase a license that you can share with your entire team. </DisclosurePanel>
      </transition>
    </Disclosure>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

import useValidationModal from '@/components/modal/useValidateModal';
import useValidationToast from '@/components/toast/useValidateToast';
const { openSuccessModal, openWarningModal, openErrorModal, openDefaultModal } = useValidationModal();
const { openSuccessToast, openWarningToast, openErrorToast, openDefaultToast } = useValidationToast();

function openValidateModal(type: number) {
  switch (type) {
    case 1:
      return openSuccessModal('success', 'success desc');
    case 2:
      return openWarningModal('warning', 'warning desc');
    case 3:
      return openErrorModal('error', 'error desc');
    case 4:
      return openDefaultModal('default', 'default desc');
  }
}

function openToast(type: number) {
  switch (type) {
    case 1:
      return openSuccessToast(
        'success',
        'success desc',
        'ok',
        false,
        false,
        () => openSuccessModal('success', 'success desc'),
        () => {},
        true,
        5000,
      );
    case 2:
      return openWarningToast('warning', 'warning desc');
    case 3:
      return openErrorToast('error', 'error desc');
    case 4:
      return openDefaultToast('default', 'default desc');
  }
}
</script>

<style scoped></style>
