import { createClient } from '@supabase/supabase-js';
import { ref } from 'vue';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function () {
  const client = createClient(supabaseUrl, supabaseAnonKey);

  const loading = ref<boolean>(false);

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

  const signInWithOtp = async (email: string) => {
    try {
      loading.value = true;
      const { error } = await client.auth.signInWithOtp({
        email: email,
      });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading.value = false;
    }
  };

  return { client, signOut, signInWithOtp, loading };
}
