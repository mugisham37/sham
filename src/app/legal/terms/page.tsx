import LegalPage from '../../legal/LegalPage';
import { legalContent } from '../../../data/content';

export default function TermsPage() {
  return <LegalPage title={legalContent.terms.title} content={legalContent.terms.content} />;
}
