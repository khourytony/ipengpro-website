import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseClient: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = supabaseClient;
export const isSupabaseConfigured = Boolean(supabaseClient);

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactSubmission) => {
  if (!supabase || !supabaseUrl || !supabaseAnonKey) {
    throw new Error('Contact form is temporarily unavailable.');
  }

  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select();

  if (error) throw error;

  try {
    const apiUrl = `${supabaseUrl}/functions/v1/send-contact-email`;
    await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (emailError) {
    console.error('Failed to send email notification:', emailError);
  }

  return result;
};
