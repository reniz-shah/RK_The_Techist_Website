const TermsPage = () => {
  return (
    <main className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <p className="text-xs tracking-[0.16em] text-slate-400 uppercase mb-4">Legal</p>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Terms of Service</h1>
      <div className="space-y-6 text-slate-300 leading-relaxed">
        <p>
          These terms govern the use of RK The Techist website and services. By using the website or submitting an inquiry, you agree to these terms.
        </p>
        <section>
          <h2 className="text-white text-xl font-medium mb-2">Service scope</h2>
          <p>Project scope, timelines, and deliverables are finalized in written proposals or signed agreements before work begins.</p>
        </section>
        <section>
          <h2 className="text-white text-xl font-medium mb-2">Intellectual property</h2>
          <p>Ownership and usage rights for deliverables are defined in each client agreement.</p>
        </section>
        <section>
          <h2 className="text-white text-xl font-medium mb-2">Liability</h2>
          <p>RK The Techist is not liable for indirect or consequential damages arising from website use or service delivery beyond agreed contract terms.</p>
        </section>
        <section>
          <h2 className="text-white text-xl font-medium mb-2">Contact</h2>
          <p>For contract and terms inquiries, contact: rkthetechist@gmail.com</p>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;
