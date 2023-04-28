import { acceptHMRUpdate, defineStore } from 'pinia';

export const useToastStore = defineStore('toast', {
  state: () => ({ toasts: <Toast.ToastState[]>[], toastRunning: 0 }),
  getters: {
    isValidationToastOpen: (state) => {
      if (state.toasts.length) {
        state.toasts[state.toastRunning].validationToast.isOpen;
      }
    },
    validationToastConfig: (state) => {
      if (state.toasts.length) {
        state.toasts[state.toastRunning].validationToast;
      }
    },
  },
  actions: {
    CLOSE_VALIDATION_TOAST(id: string) {
      const index = this.toasts.findIndex((toast) => toast.id === id);
      this.toasts.splice(index, 1); // remove toast from array
    },

    OPEN_VALIDATION_TOAST(value: Toast.PayloadValue) {
      const payload = value;
      // id = success1
      const id: string = payload.type + this.toastRunning;
      let toast: Toast.ToastState = {
        id: id,
        validationToast: {
          isOpen: true,
          title: payload.title,
          description: payload.description,
          confirmLabel: payload.confirmLabel,
          type: payload.type,
          confirmBtnDisabled: payload.confirmBtnDisabled,
          cancelBtnDisabled: payload.cancelBtnDisabled,
          onConfirm: () => {},
          onClose: () => {},
          onCancel: () => {},
        },
        toast: { isOpen: true },
      };

      // onConfirm
      if (payload.onConfirm) {
        toast.validationToast.isOpen = false;
        toast.validationToast.onConfirm = () =>
          setTimeout(() => {
            payload.onConfirm();
          }, 200);
      } else {
        toast.validationToast.isOpen = false;
      }

      // onCancel
      if (payload.onCancel) {
        toast.validationToast.onCancel = () => payload.onCancel();
        toast.validationToast.isOpen = false;
      } else {
        toast.validationToast.isOpen = false;
      }

      // onCancel
      if (payload.onClose) {
        toast.validationToast.onClose = () =>
          setTimeout(() => {
            payload.onClose();
          }, 200);
        toast.validationToast.isOpen = false;
      } else {
        toast.validationToast.isOpen = false;
      }

      // autoClose
      if (payload.autoClose == true) {
        setTimeout(
          () => {
            this.CLOSE_VALIDATION_TOAST(id);
          },
          payload.duration ? payload.duration : 5000,
        );
      }

      this.toasts.push(toast);
      // running id
      this.toastRunning++;
    },
  },
});

if (import.meta.webpackHot) import.meta.webpackHot.accept(acceptHMRUpdate(useToastStore, import.meta.webpackHot));
