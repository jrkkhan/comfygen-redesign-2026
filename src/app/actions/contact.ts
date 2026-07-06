'use server'

import { headers } from 'next/headers';

export async function getClientCountry() {
  try {
    const headersList = await headers();
    const forwardedFor = headersList.get('x-forwarded-for') || headersList.get('x-real-ip');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '';

    // If running locally, IP might be ::1 which ipinfo doesn't resolve well.
    const url = ip ? `https://ipinfo.io/${ip}/json?token=55503f8d72626d` : `https://ipinfo.io/json?token=55503f8d72626d`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return data?.country || null;
  } catch (error) {
    console.error('Failed to get client country from server:', error);
    return null;
  }
}

export async function submitContactForm(payload: any) {
  try {
    // Add basic honeypot or rate limiting logic here if needed
    
    const response = await fetch('https://www.comfygen.com/api/v1/createContactUs1111', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    const data = await response.json();

    if (!response.ok || data.error) {
      return { success: false, message: data.message || 'Failed to submit the form.' };
    }

    return { success: true, message: 'Message sent successfully.' };
  } catch (error: any) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Something went wrong. Please try again later.' };
  }
}
