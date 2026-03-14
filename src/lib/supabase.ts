import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactSubmission) => {
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
