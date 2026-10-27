export interface NewsletterFormState {
    status: 'idle' | 'error' | 'success';
    message: string;
    fieldErrors: {
        email?: string;
        consent?: string;
    };
    email: string;
    consentChecked: boolean;
    attempt: number;
}

export const initialNewsletterFormState: NewsletterFormState = {
    status: 'idle',
    message: '',
    fieldErrors: {},
    email: '',
    consentChecked: false,
    attempt: 0,
};
