import { useModalStore } from '@/store/modalStore';
import { useSettingStore } from '@/store/settingStore';
import { storeToRefs } from 'pinia';

export default function useValidationModal() {
  const store = useModalStore();
  // close action
  const closeValidationModal = (callback: Function) => {
    callback();
    return store.CLOSE_VALIDATION_MODAL();
  };
  //  warning
  const openWarningModal = (
    title = '',
    description = '',
    confirmLabel = '',
    confirmBtnDisabled = false,
    cancelBtnDisabled = false,
    onConfirm = () => {},
    onCancel = () => {},
    onClose = () => {},
  ) => {
    const payload: BaseModal.PayloadValue = {
      title,
      description,
      confirmLabel,
      type: 'warning',
      confirmBtnDisabled,
      cancelBtnDisabled,
      onConfirm,
      onCancel,
      onClose,
    };
    store.OPEN_VALIDATION_MODAL(payload);
  };

  const openSuccessModal = (
    title = '',
    description = '',
    confirmLabel = '',
    confirmBtnDisabled = false,
    cancelBtnDisabled = false,
    onConfirm = () => {},
    onClose = () => {},
    autoClose = false,
  ) => {
    const payload: BaseModal.PayloadValue = {
      title,
      description,
      confirmLabel,
      type: 'success',
      confirmBtnDisabled,
      cancelBtnDisabled,
      onConfirm,
      onCancel: () => {},
      onClose,
    };
    console.log('open success');

    store.OPEN_VALIDATION_MODAL(payload);

    if (autoClose) {
      setTimeout(() => {
        store.CLOSE_VALIDATION_MODAL();
      }, 2000);
    }
  };

  const openErrorModal = (title = '', description = '', confirmLabel = '', onConfirm = () => {}, onClose = () => {}) => {
    const payload: BaseModal.PayloadValue = {
      title,
      description,
      confirmLabel,
      type: 'error',
      confirmBtnDisabled: false,
      cancelBtnDisabled: false,
      onConfirm,
      onCancel: () => {},
      onClose,
    };
    store.OPEN_VALIDATION_MODAL(payload);
  };

  const openDefaultModal = (
    title = '',
    description = '',
    confirmLabel = '',
    confirmBtnDisabled = false,
    cancelBtnDisabled = false,
    onConfirm = () => {},
    onClose = () => {},
    autoClose = false,
  ) => {
    const payload: BaseModal.PayloadValue = {
      title,
      description,
      confirmLabel,
      type: 'default',
      confirmBtnDisabled,
      cancelBtnDisabled,
      onConfirm,
      onCancel: () => {},
      onClose,
    };
    console.log('open success');

    store.OPEN_VALIDATION_MODAL(payload);

    if (autoClose) {
      setTimeout(() => {
        store.CLOSE_VALIDATION_MODAL();
      }, 2000);
    }
  };

  return {
    openSuccessModal,
    openWarningModal,
    openErrorModal,
    openDefaultModal,
    closeValidationModal,
  };
}
