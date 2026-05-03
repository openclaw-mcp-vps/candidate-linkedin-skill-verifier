export default function Page() {
  const faqs = [
    {
      q: "How does skill verification work?",
      a: "We cross-reference the skills listed on a candidate's resume and LinkedIn profile against their actual GitHub repositories, commit history, and project descriptions using AI analysis."
    },
    {
      q: "What does the verification report include?",
      a: "Each report highlights confirmed skills with evidence, flagged mismatches where claims lack supporting activity, and experience gaps between stated years and actual project history."
    },
    {
      q: "Is my candidate data kept private?",
      a: "Yes. Candidate data is processed in-session and never stored or shared. Reports are generated on demand and only accessible to you."
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Technical Recruiters
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Verify Candidate Skills Against{" "}
          <span className="text-[#58a6ff]">LinkedIn Claims</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Cross-reference resumes with LinkedIn profiles and GitHub activity to instantly flag skill mismatches and experience gaps — before the interview.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $16/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            ["Resume + LinkedIn", "Side-by-side skill comparison"],
            ["GitHub Evidence", "Real project activity analysis"],
            ["AI Mismatch Report", "Instant verification summary"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left">
              <div className="text-[#58a6ff] font-semibold mb-1">{title}</div>
              <div className="text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center shadow-lg">
          <div className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited candidate verifications",
              "LinkedIn + GitHub cross-reference",
              "AI-generated mismatch reports",
              "Experience gap detection",
              "Exportable PDF reports",
              "Priority support"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Verifying Candidates
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} SkillVerify. All rights reserved.
      </footer>
    </main>
  )
}
