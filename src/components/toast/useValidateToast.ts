import { useToastStore } from '@/store/toastStore';
import { useSettingStore } from '@/store/settingStore';
import { storeToRefs } from 'pinia';

export default function useValidationToast() {
  const store = useToastStore();
  // close action
  const closeValidationToast = (callback: Function, toastId: string) => {
    callback();
    return store.CLOSE_VALIDATION_TOAST(toastId);
  };
  //  warning
  const openWarningToast = (
    title = '',
    description = '',
    confirmLabel = '',
    confirmBtnDisabled = false,
    cancelBtnDisabled = false,
    onConfirm = () => {},
    onCancel = () => {},
    onClose = () => {},
  ) => {
    const payload: Toast.PayloadValue = {
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
    store.OPEN_VALIDATION_TOAST(payload);
  };

  const openSuccessToast = (
    title = '',
    description = '',
    confirmLabel = '',
    confirmBtnDisabled = false,
    cancelBtnDisabled = false,
    onConfirm = () => {},
    onClose = () => {},
    autoClose = false,
    duration = 0,
  ) => {
    const payload: Toast.PayloadValue = {
      title,
      description,
      confirmLabel,
      type: 'success',
      confirmBtnDisabled,
      cancelBtnDisabled,
      onConfirm,
      onCancel: () => {},
      onClose,
      autoClose,
      duration,
    };

    store.OPEN_VALIDATION_TOAST(payload);
  };

  const openErrorToast = (title = '', description = '', confirmLabel = '', onConfirm = () => {}, onClose = () => {}) => {
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
    store.OPEN_VALIDATION_TOAST(payload);
  };

  const openDefaultToast = (
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

    store.OPEN_VALIDATION_TOAST(payload);
  };

  return {
    openSuccessToast,
    openWarningToast,
    openErrorToast,
    openDefaultToast,
    closeValidationToast,
  };
}
