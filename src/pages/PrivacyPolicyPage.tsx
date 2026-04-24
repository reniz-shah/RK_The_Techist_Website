const PrivacyPolicyPage = () => {
  return (
    <main className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <p className="text-xs tracking-[0.16em] text-slate-400 uppercase mb-4">Legal</p>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-slate-300 leading-relaxed">
        <p>
          RK The Techist respects your privacy. This page explains what information we collect, how we use it, and how we protect it when you use our website or contact forms.
        </p>
        <section>
          <h2 className="text-white text-xl font-medium mb-2">Information we collect</h2>
          <p>Name, email address, and project details submitted through our contact form or booking flow.</p>
        </section>
        <section>
          <h2 className="text-white text-xl font-medium mb-2">How we use information</h2>
          <p>We use submitted information to respond to inquiries, prepare project proposals, and provide requested services.</p>
        </section>
        <section>
          <h2 className="text-white text-xl font-medium mb-2">Data protection</h2>
          <p>We use reasonable technical and operational safeguards to protect data and do not sell personal information to third parties.</p>
        </section>
        <section>
          <h2 className="text-white text-xl font-medium mb-2">Contact</h2>
          <p>For privacy-related requests, contact: rkthetechist@gmail.com</p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
