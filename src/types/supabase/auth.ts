declare namespace Supabase.Auth {
  interface Identities {
    id: string;
    user_id: string;
    identity_data: {
      email: string;
      sub: string;
    };
    provider: string;
    last_sign_in_at: string;
    created_at: string;
    updated_at: string;
  }

  interface Auth {
    provider_token: null;
    provider_refresh_token: null;
    access_token: string;
    expires_in: 3600;
    expires_at: 1682017609;
    refresh_token: string;
    token_type: string;
    user: {
      id: string;
      aud: string;
      role: string;
      email: string;
      email_confirmed_at: string;
      phone: string;
      confirmation_sent_at: string;
      confirmed_at: string;
      recovery_sent_at: string;
      last_sign_in_at: string;
      app_metadata: {
        provider: string;
        providers: string[];
      };
      user_metadata: {};
      identities: Identities[];
      created_at: string;
      updated_at: string;
    };
  }
}
