'use client';

import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

//TODO: write JSDOC
export function useIsClient() {
    return useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );
}
