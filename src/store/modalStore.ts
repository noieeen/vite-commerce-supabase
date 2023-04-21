import { acceptHMRUpdate, defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () =>
    <BaseModal.ModalState>{
      validationModal: {
        isOpen: false,
        title: '',
        description: '',
        confirmLabel: '',
        onConfirm: () => {},
        onCancel: () => {},
        onClose: () => {},
        type: '',
        confirmBtn_Disabled: false,
        cancelBtn_Disabled: false,
      },
    },
  getters: {
    isValidationModalOpen: (state) => state.validationModal.isOpen,
    validationModalConfig: (state) => state.validationModal,
  },
  actions: {
    OPEN_VALIDATION_MODAL(value: BaseModal.PayloadValue) {
      const payload = value;

      this.validationModal.isOpen = true;
      this.validationModal.title = payload.title || '';
      this.validationModal.description = payload.description || '';
      this.validationModal.confirmLabel = payload.confirmLabel || '';
      this.validationModal.type = payload.type;
      this.validationModal.confirmBtn_Disabled = payload.confirmBtn_Disabled || false;
      this.validationModal.cancelBtn_Disabled = payload.cancelBtn_Disabled || false;

      this.validationModal.onConfirm = payload.onConfirm
        ? () => {
            this.validationModal.isOpen = false;

            setTimeout(() => {
              payload.onConfirm();
            }, 200);
          }
        : () => {
            this.validationModal.isOpen = false;
          };

      this.validationModal.onCancel = this.validationModal.onCancel = payload.onCancel
        ? () => {
            payload.onCancel();

            this.validationModal.isOpen = false;
          }
        : () => {
            this.validationModal.isOpen = false;
          };

      this.validationModal.onClose = payload.onClose
        ? () => {
            this.validationModal.isOpen = false;

            setTimeout(() => {
              payload.onClose();
            }, 200);
          }
        : () => {
            this.validationModal.isOpen = false;
          };
    },
    CLOSE_VALIDATION_MODAL() {
      this.validationModal.isOpen = false;
      this.validationModal.title = '';
      this.validationModal.description = '';
      this.validationModal.confirmLabel = '';
      this.validationModal.type = '';
      this.validationModal.onConfirm = () => {};
      this.validationModal.onCancel = () => {};
      this.validationModal.confirmBtn_Disabled = false;
      this.validationModal.cancelBtn_Disabled = false;
    },
  },
});

if (import.meta.webpackHot) import.meta.webpackHot.accept(acceptHMRUpdate(useModalStore, import.meta.webpackHot));
