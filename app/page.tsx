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
            I&apos;m CTO at OneLine Health, where we&apos;re replacing the paperwork layer of medicine
            — patient intake, ambient listening, clinical documentation, EHR busywork. The stuff
            that eats half a doctor&apos;s day before they treat a single patient.
          </p>
          <p>
            Before that, I co-founded Avhana Health with my brother Noah. We built clinical
            decision support tools that plugged into EHRs and scaled to tens of millions of
            patients across 150+ medical groups. Avhana was acquired by Amalgam Rx in 2021.
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
          <h2 className="text-xl font-semibold tracking-tight">Beliefs</h2>
          <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-zinc-800">
            <li>
              Healthcare software should disappear into the workflow, not create a new one.
            </li>
            <li>The best way to learn AI is to ship things with it.</li>
            <li>Small teams, real problems.</li>
            <li>The boring problems are the important ones.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
