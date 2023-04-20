import useClient from './supabase-client/supabase-client';

export default function useSupabase() {
  const { client, loading, signOut, signInWithOtp } = useClient();

  return { client, loading, signOut, signInWithOtp };
}
