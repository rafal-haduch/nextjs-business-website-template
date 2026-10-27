'use server';

import type { NewsletterFormState } from '@/src/features/newsletter/model/newsletter-form-state';

export async function subscribeToNewsletter(
    previousState: NewsletterFormState,
    formData: FormData
): Promise<NewsletterFormState> {
    const rawEmail = formData.get('email');
    const email = typeof rawEmail === 'string' ? rawEmail.trim() : '';
    const consentChecked = formData.get('newsletter-consent') === 'on';
    const fieldErrors: NewsletterFormState['fieldErrors'] = {};

    if (!email) {
        fieldErrors.email = 'Enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        fieldErrors.email = 'Enter a valid email address.';
    }

    if (!consentChecked) {
        fieldErrors.consent = 'Please confirm that you want to receive the newsletter.';
    }

    if (Object.keys(fieldErrors).length > 0) {
        return {
            status: 'error',
            message: 'Please correct the highlighted fields.',
            fieldErrors,
            email,
            consentChecked,
            attempt: previousState.attempt + 1,
        };
    }

    // Template example: replace this with your mailing-list provider or database.
    console.log('Newsletter signup:', email);

    return {
        status: 'success',
        message: 'Thanks for signing up. Your email has been added to the newsletter list.',
        fieldErrors: {},
        email: '',
        consentChecked: false,
        attempt: previousState.attempt + 1,
    };
}
