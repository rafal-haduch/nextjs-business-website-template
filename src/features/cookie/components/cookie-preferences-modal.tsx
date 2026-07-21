'use client';

import { getButtonClasses } from '@/src/lib/design-system/button';

import Modal from '@/src/components/ui/modal';

import { useCookies } from '@/src/features/cookie/model/use-cookies';
import { useState } from 'react';
import { CookieConsent } from '@/src/features/cookie/model/cookie-types';
import { NECESSARY_COOKIE_CONSENT } from '@/src/features/cookie/model/cookie-consent-presets';

export default function CookiePreferencesModal() {
    const { isPreferencesOpen, closePreferences, consent, saveConsent, acceptAll, rejectOptional } =
        useCookies();

    // Stores temporary changes made in the preferences modal.
    // Changes are applied only after clicking "Save & Exit".
    const [changes, setChanges] = useState<Partial<CookieConsent['optional']>>({});

    const currentConsent = consent ?? NECESSARY_COOKIE_CONSENT;

    // Represents the current modal state:
    // saved consent values merged with unsaved checkbox changes.
    const draftConsent: CookieConsent = {
        necessary: true,
        optional: {
            ...currentConsent.optional,
            ...changes,
        },
    };

    // Toggles a cookie category value in temporary modal state.
    const toggleOption = (key: keyof CookieConsent['optional']) => {
        setChanges((prev) => ({
            ...prev,
            [key]: !draftConsent.optional[key],
        }));
    };

    const handleAcceptAll = () => {
        acceptAll();
        setChanges({});
        closePreferences();
    };

    const handleRejectOptional = () => {
        setChanges({});
        rejectOptional();
        closePreferences();
    };

    const handleSave = () => {
        if (!draftConsent) return;

        saveConsent(draftConsent);
        setChanges({});
        closePreferences();
    };

    return (
        <Modal
            open={isPreferencesOpen}
            onClose={() => {
                setChanges({});
                closePreferences();
            }}
            showCloseButton
        >
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className="text-center">Cookie settings</h2>
                    <p>Cookies help us provide and improve our website.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" checked disabled />
                        Necessary cookies (Always active)
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={draftConsent?.optional.analytics ?? false}
                            onChange={() => toggleOption('analytics')}
                        />
                        Analytics
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={draftConsent?.optional.marketing ?? false}
                            onChange={() => toggleOption('marketing')}
                        />
                        Marketing
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={draftConsent?.optional.preferences ?? false}
                            onChange={() => toggleOption('preferences')}
                        />
                        Preferences
                    </label>
                </div>

                <div className="fex-row flex justify-between gap-6">
                    <button
                        onClick={handleAcceptAll}
                        className={getButtonClasses({
                            variant: 'outline',
                            size: 'small',
                            className: 'mx-0 w-1/3',
                        })}
                    >
                        Accept all
                    </button>
                    <button
                        onClick={handleRejectOptional}
                        className={getButtonClasses({
                            variant: 'outline',
                            size: 'small',
                            className: 'mx-0 w-1/3',
                        })}
                    >
                        Reject optional
                    </button>

                    <button
                        onClick={handleSave}
                        disabled={!draftConsent}
                        className={getButtonClasses({
                            size: 'small',
                            className: 'mx-0 w-1/3',
                        })}
                    >
                        Save & Exit
                    </button>
                </div>
            </div>
        </Modal>
    );
}
