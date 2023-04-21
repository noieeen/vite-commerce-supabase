import { useModalStore } from '@/store/modalStore';
import { useSettingStore } from '@/store/settingStore';
import { storeToRefs } from 'pinia';

export default function useValidationModal() {
  const store = useModalStore();
  const closeValidationModal = (callback: Function) => {
    callback();
    return store.CLOSE_VALIDATION_MODAL();
  };
  return {
    closeValidationModal,
  };
}
