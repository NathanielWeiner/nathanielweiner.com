export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-zinc-900 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Nathaniel Weiner</h1>
        </header>

        <section className="space-y-5 text-lg leading-8 text-zinc-800">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Bio</h2>
          <p>I build healthcare software.</p>
          <p>
            At Vizient, I help lead R&amp;D, turning the company’s healthcare expertise and trusted
            relationships into new tools. I work with a small team to take ideas from early
            exploration to products healthcare organizations can use.
          </p>
          <p>
            Before that, I co-founded Avhana Health with my brother Noah. We built clinical
            decision support tools that plugged into EHRs and scaled to tens of millions of
            patients across 150+ medical groups.
          </p>
          <p>
            After Amalgam Rx acquired Avhana in 2021, I continued building healthcare software
            there, working with payers, providers, and life sciences companies.
          </p>
          <p>
            I also served as CTO at OneLine Health, building tools for clinical documentation and
            patient intake.
          </p>
          <p>
            Earlier: building hospitals at Johns Hopkins, building missile launchers at Lockheed
            Martin.
          </p>
          <p>
            On the side, I run Formstone Labs — a small studio where I build things I want to
            exist.
          </p>
          <p>Based just outside New York. From Baltimore.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <ul className="space-y-3 text-lg leading-8 text-zinc-800">
            <li>
              <strong>Formstone Labs</strong> — A small studio for AI and healthcare experiments. (
              <a
                className="underline underline-offset-4"
                href="https://formstonelabs.com"
                target="_blank"
                rel="noreferrer"
              >
                formstonelabs.com
              </a>
              )
            </li>
            <li>
              <strong>Indicator Health</strong> — Healthcare data platform. Radically cheaper than
              the alternatives.
            </li>
            <li>
              <strong>Lunchbox League</strong> — Food allergy management for parents.
            </li>
          </ul>
        </section>

        <section className="space-y-4 pb-8">
          <h2 className="text-xl font-semibold tracking-tight">Links</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg text-zinc-800">
            <a
              className="underline underline-offset-4"
              href="https://linkedin.com/in/nathanielweiner"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="underline underline-offset-4" href="https://x.com/nathanielweiner" target="_blank" rel="noreferrer">
              X
            </a>
            <a
              className="underline underline-offset-4"
              href="https://github.com/NathanielWeiner"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="underline underline-offset-4" href="mailto:nate@formstonelabs.com">
              Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
