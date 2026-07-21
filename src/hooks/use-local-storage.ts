'use client';

import { useCallback, useState, useSyncExternalStore } from 'react';

//REVIEW: Shoud i remove this file?

//TODO: write JSDOC
function subscribe(key: string, callback: () => void) {
    const handler = (event: StorageEvent) => {
        if (event.key === key) callback();
    };

    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
}

//TODO: write JSDOC
export function useLocalStorage<T>(key: string, initialValue: T) {
    const [isReady, setIsReady] = useState(false);

    const getSnapshot = useCallback(() => {
        const value = window.localStorage.getItem(key);

        setTimeout(() => setIsReady(true), 0);

        return value;
    }, [key]);

    const getServerSnapshot = () => null;

    const subscribeToKey = useCallback((callback: () => void) => subscribe(key, callback), [key]);

    const rawValue = useSyncExternalStore(subscribeToKey, getSnapshot, getServerSnapshot);

    const value = rawValue !== null ? (JSON.parse(rawValue) as T) : initialValue;

    const setValue = (newValue: T) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(newValue));
            window.dispatchEvent(new StorageEvent('storage', { key }));
        } catch {}
    };

    const removeValue = () => {
        try {
            window.localStorage.removeItem(key);
            window.dispatchEvent(new StorageEvent('storage', { key }));
        } catch {}
    };

    return [isReady, value, setValue, removeValue] as const;
}
