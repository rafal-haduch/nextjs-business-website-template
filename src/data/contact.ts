export const PHONE = {
    number: '123 123 123',
    numberPL: '+48 123 123 123',
} as const;

export const EMAIL = 'EMAIL@DOMENA.PL' as const;

export const CONTACT_LINKS = {
    CALL: `tel:${PHONE.number.replaceAll(/\s/g, '')}`,
    MAIL: `mailto:${EMAIL}`,
} as const;

export const ADDRESS = {
    street: 'ul. STREET_NAME',
    town: 'TOWN',
    postalCode: '12-345',
} as const;

export const OPENING_HOURS = [
    { day: 'poniedziałek', hours: '00:00-00:00' },
    { day: 'wtorek', hours: '00:00-00:00' },
    { day: 'środa', hours: '00:00-00:00' },
    { day: 'czwartek', hours: '00:00-00:00' }, 
    { day: 'piątek', hours: '00:00-00:00' },
    { day: 'sobota', hours: '00:00-00:00' },
] as const;

export const OPENING_HOURS_SHORT = [
    { day: 'pn.', hours: '00:00-00:00' },
    { day: 'wt.', hours: '00:00-00:00' },
    { day: 'śr.', hours: '00:00-00:00' },
    { day: 'czw.', hours: '00:00-00:00' },
    { day: 'pt.', hours: '00:00-00:00' },
    { day: 'sb.', hours: '00:00-00:00' },
] as const;
