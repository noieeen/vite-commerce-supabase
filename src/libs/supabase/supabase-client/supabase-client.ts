import { createClient } from '@supabase/supabase-js';
import { ref } from 'vue';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
import useValidationToast from '@/components/toast/useValidateToast';
import useValidationModal from '@/components/modal/useValidateModal';

export default function () {
  // const { openSuccessToast, openWarningToast, openErrorToast, openDefaultToast } = useValidationToast();

  const client = createClient(supabaseUrl, supabaseAnonKey);

  const loading = ref<boolean>(false);
  // const { openSuccessModal } = useValidationModal();
  async function signOut() {
    try {
      loading.value = true;
      let { error } = await client.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error);
    } finally {
      loading.value = false;
    }
  }

  async function signInWithOtp(email: string): Promise<boolean> {
    let success = false;
    try {
      loading.value = true;
      const { error } = await client.auth.signInWithOtp({
        email: email,
      });
      if (error) throw error;
      success = true;
      // openSuccessToast('Success', 'Check your email for the login link!');
    } catch (error) {
      if (error instanceof Error) {
        success = false; //alert(error.message);
      }
    } finally {
      loading.value = false;
    }
    return success;
  }

  return { client, signOut, signInWithOtp, loading };
}
