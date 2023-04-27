declare namespace Toast {
  interface ToastState {
    id: string;
    validationToast: {
      isOpen: boolean;
      title: string;
      description: string;
      confirmLabel: string;
      onConfirm: VoidFunction;
      onCancel: VoidFunction;
      onClose: VoidFunction;
      type: string;
      confirmBtnDisabled: boolean;
      cancelBtnDisabled: boolean;
    };
    toast: {
      isOpen: boolean;
    };
  }

  interface PayloadValue {
    title: string;
    description: string;
    confirmLabel: string;
    type: string;
    confirmBtnDisabled: boolean;
    cancelBtnDisabled: boolean;
    onConfirm: Function;
    onCancel: Function;
    onClose: Function;
    autoClose?: boolean;
    duration?: number;
  }

  interface ToastType {
    success: 'success';
    warning: 'warning';
    error: 'error';
    default: 'default';
  }
}
