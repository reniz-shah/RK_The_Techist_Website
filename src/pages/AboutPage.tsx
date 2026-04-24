import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="max-w-3xl mb-14">
        <p className="text-xs tracking-[0.16em] text-slate-400 uppercase mb-4">About RK The Techist</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          An international engineering partner for product-focused teams.
        </h1>
        <p className="text-slate-300 leading-relaxed">
          RK The Techist helps startups and growing businesses turn product ideas into stable, scalable software with a practical business-first delivery approach.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h2 className="text-2xl text-white font-medium mb-4">What we value</h2>
          <ul className="space-y-2 text-slate-300">
            <li>- Clear communication over vague technical complexity</li>
            <li>- Delivery discipline over endless planning</li>
            <li>- Long-term maintainability over short-term shortcuts</li>
            <li>- Business outcomes over vanity engineering metrics</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h2 className="text-2xl text-white font-medium mb-4">How we work</h2>
          <ul className="space-y-2 text-slate-300">
            <li>- Discovery to align goals, scope, and timeline</li>
            <li>- Weekly sprints with milestone-based progress</li>
            <li>- QA, security checks, and CI/CD as baseline standards</li>
            <li>- Collaboration across IST, EST, and GMT windows</li>
          </ul>
        </article>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <h2 className="text-2xl font-medium text-white mb-3">Looking for a reliable product engineering partner?</h2>
        <p className="text-slate-300 mb-4">We can support new builds, platform upgrades, and performance-focused scaling initiatives.</p>
        <Link to="/contact" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold">
          Contact our team
        </Link>
      </section>
    </main>
  );
};

export default AboutPage;
