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

const sendViaFormSubmit = async (data: ContactSubmission) => {
  const response = await fetch('https://formsubmit.co/ajax/info@ipengpro.com', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      _replyto: data.email,
      _subject: `New Contact Form Submission from ${data.name}`,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Fallback submission failed: ${errorText}`);
  }
};

export const submitContactForm = async (data: ContactSubmission) => {
  let emailDelivered = false;

  if (supabase && supabaseUrl && supabaseAnonKey) {
    try {
      const { error } = await supabase.from('contact_submissions').insert([data]);

      if (error) {
        throw error;
      }

      const apiUrl = `${supabaseUrl}/functions/v1/send-contact-email`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const payload = await response.json().catch(() => null);
      emailDelivered = response.ok && payload?.success !== false;

      if (!emailDelivered) {
        console.error('Supabase email delivery failed:', payload);
      }
    } catch (error) {
      console.error('Supabase submission failed, falling back to direct email:', error);
    }
  }

  if (!emailDelivered) {
    await sendViaFormSubmit(data);
  }
};
