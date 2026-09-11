'use server';

import { Resend } from 'resend';
import { schoolConfig } from '@/config/school-config';

interface EnquiryInput {
  fullName: string;
  email: string;
  phone: string;
  campus: string;
  subject: string;
  message: string;
}

export type EnquiryResult = { success: true } | { success: false; error: string };

const enquiryRecipient = process.env.RESEND_TO_EMAIL || schoolConfig.contact.email;

export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  const values = Object.fromEntries(
    Object.entries(input).map(([key, value]) => [key, value.trim()])
  ) as EnquiryInput;

  if (!values.fullName || !values.email || !values.phone || !values.campus || !values.subject || !values.message) {
    return { success: false, error: 'Please complete all fields before sending your enquiry.' };
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    console.error('[submitEnquiry] RESEND_API_KEY or RESEND_FROM_EMAIL is missing.');
    return { success: false, error: 'Enquiries are temporarily unavailable. Please email the school directly.' };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: enquiryRecipient,
      replyTo: values.email,
      subject: `[Website Enquiry] ${values.subject}`,
      text: [
        `Name: ${values.fullName}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        `Section: ${values.campus}`,
        '',
        values.message,
      ].join('\n'),
    });

    if (error) {
      console.error('[submitEnquiry] email provider rejected message:', error);
      const providerError = error as { name?: string; statusCode?: number };
      if (providerError.statusCode === 401 || providerError.name === 'application_error') {
        return { success: false, error: 'The enquiry email service is not configured correctly. Please try again later.' };
      }
      if (providerError.statusCode === 403) {
        return {
          success: false,
          error: 'The school email domain must be verified in Resend before enquiries can be delivered.',
        };
      }
      return { success: false, error: 'We could not send your enquiry. Please try again shortly.' };
    }
    return { success: true };
  } catch (error) {
    console.error('[submitEnquiry] email delivery failed:', error);
    return { success: false, error: 'We could not send your enquiry. Please try again shortly.' };
  }
}