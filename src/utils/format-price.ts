export function formatPrice(price: number | null): string {
    if (price === null) return '-';
    if (price === 0) return 'Bezpłatnie';
    return `${price.toFixed(2)} zł`;
}
