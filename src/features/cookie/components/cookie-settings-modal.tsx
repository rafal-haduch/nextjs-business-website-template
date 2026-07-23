'use client';

import { useState } from 'react';

import { getButtonClasses } from '@/src/lib/design-system/button';

import Modal from '@/src/components/ui/modal';

import { useCookies } from '@/src/features/cookie/model/use-cookies';
import { CookieConsent } from '@/src/features/cookie/model/cookie-types';
import { NECESSARY_COOKIE_CONSENT } from '@/src/features/cookie/model/cookie-consent-presets';

export default function CookieSettingsModal() {
    const {
        isCookieSettingsOpen,
        closeCookieSettings,
        consent,
        saveConsent,
        acceptAll,
        rejectOptional,
    } = useCookies();

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
        closeCookieSettings();
    };

    const handleRejectOptional = () => {
        setChanges({});
        rejectOptional();
        closeCookieSettings();
    };

    const handleSave = () => {
        if (!draftConsent) return;

        saveConsent(draftConsent);
        setChanges({});
        closeCookieSettings();
    };

    return (
        <Modal
            open={isCookieSettingsOpen}
            onClose={() => {
                setChanges({});
                closeCookieSettings();
            }}
            showCloseButton
        >
            <div className="flex flex-col gap-8">
                {/*---  Modal header ---*/}
                <div className="flex flex-col gap-2">
                    <h2 className="text-center">Cookie settings</h2>
                    <p>Cookies help us provide and improve our website.</p>
                </div>
                {/*---  Cookie categories ---*/}
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
                {/*---  Modal actions  ---*/}
                {/*TODO:  Improve style checkbox into toggle.*/}
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-6">
                    <button
                        onClick={handleAcceptAll}
                        className={getButtonClasses({
                            variant: 'outline',
                            size: 'small',
                            className: 'mx-0 w-full sm:w-1/3',
                        })}
                    >
                        Accept all
                    </button>
                    <button
                        onClick={handleRejectOptional}
                        className={getButtonClasses({
                            variant: 'outline',
                            size: 'small',
                            className: 'mx-0 w-full sm:w-1/3',
                        })}
                    >
                        Reject optional
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!draftConsent}
                        className={getButtonClasses({
                            size: 'small',
                            className: 'mx-0 w-full sm:w-1/3',
                        })}
                    >
                        Save & Exit
                    </button>
                </div>
            </div>
        </Modal>
    );
}
