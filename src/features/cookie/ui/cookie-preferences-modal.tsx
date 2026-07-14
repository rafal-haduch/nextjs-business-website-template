'use client';

import { getButtonClasses } from '@/src/lib/design-system/button';

import { useCookies } from '@/src/features/cookie/model/use-cookies';

import Modal from '@/src/components/modal';

export default function CookiePreferencesModal() {
    const {
        isPreferencesOpen: isOptionsOpen,
        closePreferences: closeOptions,
        acceptAll,
        rejectAll,
        saveConsent,
    } = useCookies();

    return (
        <Modal open={isOptionsOpen} onClose={closeOptions}>
            <div>
                <h2>Cookie options</h2>
                <p>...</p>
                <div className="lex-row flex justify-between gap-6">
                    <button
                        onClick={() => {
                            acceptAll();
                            closeOptions();
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
                            closeOptions();
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
                            closeOptions();
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
