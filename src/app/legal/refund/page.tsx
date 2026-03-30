import LegalPage from '../page';
import { legalContent } from '../../../data/content';

export default function RefundPage() {
  return <LegalPage title={legalContent.refund.title} content={legalContent.refund.content} />;
}
