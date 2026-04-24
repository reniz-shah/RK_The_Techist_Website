import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Application Development',
    summary:
      'Build high-performance websites and web apps using React, Next.js, and TypeScript with UX focused on conversion and retention.',
    outcomes: [
      'Fast, SEO-friendly frontend architecture',
      'Clear UX flows for demo requests and lead capture',
      'Maintainable codebase for long-term product growth',
    ],
  },
  {
    title: 'SaaS Product Engineering',
    summary:
      'Launch or scale SaaS platforms with robust architecture, secure authentication, and strong release processes for global users.',
    outcomes: [
      'Rapid MVP to production delivery',
      'Scalable feature modules for future expansion',
      'Stable release cycles with lower production risk',
    ],
  },
  {
    title: 'Backend and API Development',
    summary:
      'Develop secure backend systems in Node.js and Python with reliable APIs, data processing, and cloud deployment readiness.',
    outcomes: [
      'Reliable API performance under load',
      'Queue-based workflows for heavy processing',
      'Strong observability and easier incident response',
    ],
  },
  {
    title: 'AI Automation Integration',
    summary:
      'Integrate practical AI workflows to automate repetitive tasks across support, operations, and internal product workflows.',
    outcomes: [
      'Lower manual workload for your team',
      'Faster turnaround on repetitive operations',
      'Business-focused AI implementation without hype',
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="max-w-3xl mb-14">
        <p className="text-xs tracking-[0.16em] text-slate-400 uppercase mb-4">Services</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Software development services for international growth.
        </h1>
        <p className="text-slate-300 leading-relaxed">
          We partner with startups and growth-stage teams to design, build, and scale digital products with clear communication, predictable delivery, and production-ready engineering.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <h2 className="text-2xl text-white font-medium mb-4">{service.title}</h2>
            <p className="text-slate-300 leading-relaxed mb-5">{service.summary}</p>
            <ul className="space-y-2 text-sm text-slate-400">
              {service.outcomes.map((outcome) => (
                <li key={outcome}>- {outcome}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <h2 className="text-2xl font-medium text-white mb-3">Engagement models</h2>
        <p className="text-slate-300 mb-4">Project-based delivery, monthly retainers, and fractional technical leadership based on your current growth stage.</p>
        <Link to="/contact" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold">
          Discuss your project
        </Link>
      </section>
    </main>
  );
};

export default ServicesPage;
