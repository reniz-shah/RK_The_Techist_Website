import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'Real-Time Health Monitoring Platform',
    challenge:
      'The client needed continuous sensor ingestion and reliable reporting without overwhelming backend performance.',
    solution:
      'Implemented FastAPI ingestion services, queue-based processing, and a React dashboard for real-time and historical insights.',
    result:
      'Improved data visibility for decision-making and created a stable foundation for scaling connected device traffic.',
  },
  {
    title: 'SaaS Onboarding Workflow System',
    challenge:
      'HR teams lacked a unified process to track onboarding tasks across distributed stakeholders.',
    solution:
      'Built role-based dashboards and real-time task status updates across frontend and backend systems.',
    result:
      'Increased process accountability and reduced onboarding delays caused by manual status tracking.',
  },
  {
    title: 'eCommerce Warranty Integration',
    challenge:
      'The existing checkout journey made warranty upsell flows hard to manage and error-prone.',
    solution:
      'Developed dynamic add-on selection and fixed critical cart logic issues affecting purchase flows.',
    result:
      'Created a cleaner purchase experience and enabled higher-value order opportunities.',
  },
];

const CaseStudiesPage = () => {
  return (
    <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="max-w-3xl mb-14">
        <p className="text-xs tracking-[0.16em] text-slate-400 uppercase mb-4">Case Studies</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Selected software projects for global clients.
        </h1>
        <p className="text-slate-300 leading-relaxed">
          Examples of how we solve complex product and engineering challenges across SaaS, healthtech, eCommerce, and operations platforms.
        </p>
      </header>

      <section className="space-y-6">
        {caseStudies.map((study) => (
          <article key={study.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <h2 className="text-2xl text-white font-medium mb-6">{study.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
              <div>
                <h3 className="text-slate-200 font-semibold mb-2">Challenge</h3>
                <p className="text-slate-400 leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold mb-2">Solution</h3>
                <p className="text-slate-400 leading-relaxed">{study.solution}</p>
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold mb-2">Result</h3>
                <p className="text-slate-400 leading-relaxed">{study.result}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <h2 className="text-2xl font-medium text-white mb-3">Want similar outcomes?</h2>
        <p className="text-slate-300 mb-4">Share your product goals and constraints, and we will propose a practical delivery plan.</p>
        <Link to="/contact" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold">
          Start a conversation
        </Link>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
