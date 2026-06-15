import { COMPANY_NAME, SITE_NAME } from '@/src/data/site-and-company';

export type PrivacyPolicySubsectionItem = {
    id: number;
    title: string;
    paragraphs?: string[];
    intro?: string;
    items?: string[];
    outro?: string;
};

export const PRIVACY_SECTIONS: PrivacyPolicySubsectionItem[] = [
    {
        id: 1,
        title: 'Informacje ogólne',
        paragraphs: [
            `Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych użytkowników korzystających ze strony internetowej ${SITE_NAME}  (dalej: „Strona").`,
            `Administratorem danych osobowych jest właściciel ${COMPANY_NAME} (dalej: „Administrator").`,
        ],
    },
    {
        id: 2,
        title: 'Zakres zbieranych danych',
        intro: 'Strona zbiera wyłącznie dane podane dobrowolnie przez użytkownika w formularzu kontaktowym, tj.:',
        items: ['imię i nazwisko,', 'adres e-mail.'],
        outro: 'Podanie danych jest dobrowolne, ale niezbędne do kontaktu.',
    },
    {
        id: 3,
        title: 'Cel przetwarzania danych',
        intro: 'Dane osobowe są przetwarzane w celu:',
        items: [
            'udzielenia odpowiedzi na zapytanie przesłane przez formularz kontaktowy,',
            'prowadzenia korespondencji z użytkownikiem.',
        ],
        outro: 'Dane nie są wykorzystywane do profilowania ani podejmowania zautomatyzowanych decyzji.',
    },
    {
        id: 4,
        title: 'Podstawa prawna przetwarzania',
        intro: 'Dane przetwarzane są na podstawie:',
        items: [
            'art. 6 ust. 1 lit. a RODO \u2013 zgoda użytkownika,',
            'art. 6 ust. 1 lit. f RODO \u2013 uzasadniony interes Administratora (kontakt z użytkownikiem).',
        ],
    },
    {
        id: 5,
        title: 'Przechowywanie danych',
        paragraphs: [
            'Dane przechowywane są przez czas niezbędny do obsługi zapytania, a następnie mogą być usunięte, chyba że dalsze przechowywanie wynika z obowiązków prawnych.',
        ],
    },
    {
        id: 6,
        title: 'Odbiorcy danych',
        intro: 'Dane mogą być przekazywane podmiotom wspierającym działanie Strony, takim jak:',
        items: ['dostawcy hostingu,', 'dostawcy usług poczty elektronicznej.'],
        outro: 'Dane nie są sprzedawane ani udostępniane podmiotom trzecim w celach marketingowych.',
    },
    {
        id: 7,
        title: 'Pliki cookies i technologie śledzące',
        intro: 'Strona może korzystać z plików cookies w celu:',
        items: [
            'zapewnienia prawidłowego działania Strony,',
            'tworzenia anonimowych statystyk odwiedzin.',
        ],
        outro: 'Użytkownik może zarządzać plikami cookies w ustawieniach swojej przeglądarki.',
    },
    {
        id: 8,
        title: 'Narzędzia analityczne',
        paragraphs: [
            'Strona może korzystać z narzędzi analitycznych dostarczanych przez zewnętrzne podmioty, które zbierają anonimowe informacje o ruchu na stronie (np. liczba odwiedzin, czas spędzony na stronie).',
            'Dane te nie pozwalają na identyfikację użytkownika.',
        ],
    },
    {
        id: 9,
        title: 'Prawa użytkownika',
        intro: 'Użytkownik ma prawo do:',
        items: [
            'dostępu do swoich danych,',
            'sprostowania danych,',
            'usunięcia danych,',
            'ograniczenia przetwarzania,',
            'wniesienia sprzeciwu,',
            'przenoszenia danych,',
            'wniesienia skargi do organu nadzorczego.',
        ],
    },
    {
        id: 10,
        title: 'Zabezpieczenia danych',
        paragraphs: [
            'Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu ochrony danych przed nieuprawnionym dostępem, utratą lub zniszczeniem.',
        ],
    },
    {
        id: 11,
        title: 'Zmiany polityki prywatności',
        paragraphs: [
            'Administrator zastrzega sobie prawo do wprowadzania zmian w polityce prywatności. Aktualna wersja będzie publikowana na Stronie.',
        ],
    },
    {
        id: 12,
        title: 'Kontakt',
        paragraphs: [
            'W sprawach związanych z przetwarzaniem danych osobowych można skontaktować się z Administratorem za pośrednictwem adresu e-mail podanego na Stronie.',
        ],
    },
];
