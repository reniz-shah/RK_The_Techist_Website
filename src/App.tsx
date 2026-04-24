import Blobs from './components/Blobs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ServicesPage from './pages/ServicesPage.tsx';
import CaseStudiesPage from './pages/CaseStudiesPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import TermsPage from './pages/TermsPage.tsx';

const HomePage = () => (
  <>
    <Hero />
    <Impact />
    <Projects />
    <Services />
    {/* <BookaCall /> */}
    <Process />
    {/* <Specialization /> */}
    <Contact />
  </>
);

const SEO_BY_PATH: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'RK The Techist | International Software Development Agency',
    description:
      'International software development agency for web apps, SaaS engineering, backend APIs, and AI automation.',
  },
  '/services': {
    title: 'Services | RK The Techist',
    description:
      'Explore web application development, SaaS engineering, backend API development, and AI automation services.',
  },
  '/case-studies': {
    title: 'Case Studies | RK The Techist',
    description:
      'Review software case studies delivered for international clients across SaaS, healthtech, and eCommerce.',
  },
  '/about': {
    title: 'About | RK The Techist',
    description:
      'Learn about RK The Techist and our delivery approach for scalable, business-focused software engineering.',
  },
  '/contact': {
    title: 'Contact | RK The Techist',
    description:
      'Book a strategy call or contact RK The Techist to discuss your software development project.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | RK The Techist',
    description:
      'Read how RK The Techist collects, uses, and protects your information.',
  },
  '/terms': {
    title: 'Terms of Service | RK The Techist',
    description: 'Read the terms governing use of RK The Techist website and services.',
  },
};

const RouteSeo = () => {
  const location = useLocation();

  const fallback = SEO_BY_PATH['/'];
  const seo = SEO_BY_PATH[location.pathname] ?? fallback;

  useEffect(() => {
    document.title = seo.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', seo.description);
    }
  }, [seo.description, seo.title]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#030014] text-white selection:bg-purple-500/30 overflow-x-hidden min-h-screen relative font-sans">
        <RouteSeo />
        <Blobs />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
