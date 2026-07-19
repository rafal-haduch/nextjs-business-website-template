'use client';

import { getButtonClasses } from '@/src/lib/design-system/button';

import Modal from '@/src/components/ui/modal';

import { useCookies } from '@/src/features/cookie/model/use-cookies';

//TODO: improve save preferences options (with useCookieConsent())
export default function CookiePreferencesModal() {
    const { isPreferencesOpen, closePreferences, acceptAll, rejectAll, saveConsent } = useCookies();

    return (
        <Modal open={isPreferencesOpen} onClose={closePreferences}>
            <div>
                <h2>Cookie options</h2>
                <p>...</p>
                <div className="lex-row flex justify-between gap-6">
                    <button
                        onClick={() => {
                            acceptAll();
                            closePreferences();
                        }}
                        className={getButtonClasses({
                            variant: 'outline',
                            size: 'small',
                            className: 'mx-0 w-1/3',
                        })}
                    >
                        Accept all
                    </button>
                    <button
                        onClick={() => {
                            rejectAll();
                            closePreferences();
                        }}
                        className={getButtonClasses({
                            variant: 'outline',
                            size: 'small',
                            className: 'mx-0 w-1/3',
                        })}
                    >
                        Reject all
                    </button>
                    <button
                        onClick={() => {
                            saveConsent('customized');
                            closePreferences();
                        }}
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
