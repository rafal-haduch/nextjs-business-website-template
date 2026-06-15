import { SEO } from '@/src/config/seo';

import PrivacyPolicySection from '@/src/app/polityka-prywatnosci/_components/privacy-policy-section';

export const metadata = SEO.PRIVACY_POLICY;

export default function PrivacyPolicyPage() {
    return <PrivacyPolicySection />;
}
