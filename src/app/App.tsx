import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import LegalPage from './pages/LegalPage';

const termsContent = `These Terms and Conditions govern your use of the Sham Studio website and services.

By accessing this website, you agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our website.

Intellectual Property: All content, designs, and materials on this website are the intellectual property of Sham Studio. You may not reproduce, distribute, or create derivative works without explicit written permission.

Services: Our creative services are provided on a subscription basis. Specific terms of service delivery, revisions, and timelines will be outlined in individual service agreements.

Limitation of Liability: Sham Studio shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.

Changes to Terms: We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of modified terms.`;

const privacyContent = `This Privacy Policy describes how Sham Studio collects, uses, and protects your personal information.

Information We Collect: We may collect personal information such as your name, email address, and project details when you fill out our contact form or subscribe to our newsletter.

How We Use Your Information: Your information is used to respond to inquiries, provide services, send newsletters, and improve our website experience.

Data Protection: We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.

Third-Party Services: We do not sell or share your personal information with third parties except as necessary to provide our services.

Contact: For questions about this privacy policy, please contact us at hello@gmail.com.`;

const refundContent = `This Refund Policy outlines the terms for refunds on Sham Studio services.

Subscription Services: Monthly subscription fees are non-refundable once the billing cycle has begun. You may cancel your subscription at any time to prevent future charges.

Project-Based Work: For project-based engagements, refund terms will be outlined in the individual service agreement.

Satisfaction Guarantee: We are committed to delivering high-quality work. If you are not satisfied with a deliverable, we will work with you to make revisions until you are happy with the result.

How to Request a Refund: To request a refund, please contact us at hello@gmail.com with your order details and reason for the request.`;

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToHash />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/hero-2" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-conditions" element={<LegalPage title="Terms & Conditions" content={termsContent} />} />
          <Route path="/privacy-policy" element={<LegalPage title="Privacy Policy" content={privacyContent} />} />
          <Route path="/refund-policy" element={<LegalPage title="Refund Policy" content={refundContent} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
