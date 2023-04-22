declare namespace BaseModal {
  interface ModalState {
    validationModal: {
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
    baseModal: {
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
  }

  interface ModalType {
    success: 'success';
    warning: 'warning';
    error: 'error';
    default: 'default';
  }

  interface SaveSegmentModal {
    viewData: number;
    segmentName: string;
    folderSelect: {
      folderId: number;
      label: string;
    };
    segmentSelect: {
      segmentId: number;
      label: string;
    };
  }
}
