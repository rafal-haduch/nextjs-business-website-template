'use client';

import Link from 'next/link';
import { useActionState } from 'react';

import { ROUTES } from '@/src/config/routes';
import { cn } from '@/src/utils/cn';
import InputWithLabel from '@/src/components/ui/input-with-label';
import { buttonStyles } from '@/src/design-system/button-styles';
import { linkStyles } from '@/src/design-system/link-styles';
import { subscribeToNewsletter } from '@/src/features/newsletter/actions/subscribe-to-newsletter';
import { initialNewsletterFormState } from '@/src/features/newsletter/model/newsletter-form-state';

export default function NewsletterForm() {
    const [state, formAction, pending] = useActionState(
        subscribeToNewsletter,
        initialNewsletterFormState
    );

    return (
        <form
            key={state.attempt}
            action={formAction}
            className="mx-auto flex max-w-lg flex-col gap-5"
            noValidate
        >
            <InputWithLabel
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                label="E-mail"
                labelPlacement="above"
                variant="soft"
                color="secondary"
                size="medium"
                roundedCorners="medium"
                description="Provide the address to which we should send messages."
                defaultValue={state.email}
                error={state.fieldErrors.email}
                aria-invalid={Boolean(state.fieldErrors.email)}
                required
            />

            <div className="flex items-start gap-2">
                <input
                    id="newsletter-consent"
                    name="newsletter-consent"
                    type="checkbox"
                    value="on"
                    defaultChecked={state.consentChecked}
                    required
                    aria-invalid={Boolean(state.fieldErrors.consent)}
                    aria-describedby={
                        state.fieldErrors.consent ? 'newsletter-consent-error' : undefined
                    }
                    className="accent-brand-primary mt-1 size-4"
                />
                <div>
                    <label htmlFor="newsletter-consent" className="text-sm">
                        I agree to receive the newsletter by email and have read the{' '}
                        <Link
                            href={ROUTES.PRIVACY_POLICY.path}
                            className={cn(
                                linkStyles({ color: 'secondary', hoverColor: 'primary' })
                            )}
                        >
                            {ROUTES.PRIVACY_POLICY.label}
                        </Link>
                        .
                    </label>
                    {state.fieldErrors.consent && (
                        <p id="newsletter-consent-error" className="text-state-error mt-1 text-sm">
                            {state.fieldErrors.consent}
                        </p>
                    )}
                </div>
            </div>

            {state.message && (
                <p
                    role={state.status === 'error' ? 'alert' : 'status'}
                    aria-live={state.status === 'error' ? 'assertive' : 'polite'}
                    className={
                        state.status === 'error'
                            ? 'text-state-error text-sm'
                            : 'text-state-success text-sm'
                    }
                >
                    {state.message}
                </p>
            )}

            <button
                type="submit"
                disabled={pending}
                className={cn(
                    buttonStyles({ variant: 'solid', color: 'gradient', size: 'base' }),
                    pending && 'cursor-wait opacity-70'
                )}
            >
                {pending ? 'Sending…' : 'Zapisz się'}
            </button>
        </form>
    );
}
