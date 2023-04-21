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
      confirmBtn_Disabled: boolean;
      cancelBtn_Disabled: boolean;
    };
    baseModal: {
      isOpen: boolean;
    };
  }

  interface PayloadValue {
    title: string;
    description: string;
    confirmLabel: string;
    onConfirm: Function;
    onCancel: Function;
    onClose: Function;
    type: string;
    confirmBtn_Disabled: boolean;
    cancelBtn_Disabled: boolean;
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
