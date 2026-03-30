import LegalPage from '../page';
import { legalContent } from '../../../data/content';

export default function PrivacyPage() {
  return <LegalPage title={legalContent.privacy.title} content={legalContent.privacy.content} />;
}
