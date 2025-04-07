
import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock Supabase client if URL or key is missing
const createMockClient = () => {
  console.warn('Supabase credentials missing. Using mock client.');
  return {
    from: () => ({
      insert: async () => ({ error: null }),
      select: async () => ({ data: [], error: null }),
    }),
    auth: {
      signIn: async () => ({ user: null, error: null }),
      signOut: async () => ({ error: null }),
    },
  };
};

// Create a single supabase client for interacting with your database
export const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : createMockClient() as any;
