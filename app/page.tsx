export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-zinc-900 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Nathaniel Weiner</h1>
        </header>

        <section className="space-y-5 text-lg leading-8 text-zinc-800">
          <p>I build healthcare software.</p>
          <p>
            I&apos;m CTO at OneLine Health, where we&apos;re building an AI copilot for physicians
            — ambient listening, clinical documentation, the work that eats half their day.
          </p>
          <p>
            Before that, I co-founded Avhana Health with my brother Noah. We built clinical
            decision support tools that integrated with EHRs and grew to over 150 medical
            groups. Avhana was acquired by Amalgam Rx in 2021.
          </p>
          <p>Earlier: Johns Hopkins Hospital, Lockheed Martin, Dreamit Health Baltimore.</p>
          <p>
            On the side, I run Formstone Labs — a small studio where I build things I want to
            exist.
          </p>
          <p>Based in New York. From Baltimore.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <ul className="space-y-3 text-lg leading-8 text-zinc-800">
            <li>
              <strong>OneLine Health</strong> — A small healthcare startup helping doctors.
              I&apos;m the CTO.
            </li>
            <li>
              <strong>Indicator Health</strong> — Healthcare data platform. Radically cheaper
              than the alternatives.
            </li>
            <li>
              <strong>Lunchbox League</strong> — Food allergy management for parents.
            </li>
            <li>
              <strong>Formstone Labs</strong> — A small studio for AI and healthcare
              experiments.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Beliefs</h2>
          <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-zinc-800">
            <li>
              Healthcare software should disappear into the workflow, not create a new one.
            </li>
            <li>Most healthcare data should cost a lot less than it does.</li>
            <li>Build it profitably or don&apos;t build it.</li>
            <li>The best way to learn AI is to ship things with it.</li>
            <li>Small teams, real problems.</li>
          </ul>
        </section>

        <section className="space-y-4 pb-8">
          <h2 className="text-xl font-semibold tracking-tight">Links</h2>
          <ul className="space-y-2 text-lg leading-8 text-zinc-800">
            <li>
              X / Twitter: <a className="underline underline-offset-4" href="https://twitter.com/nathanielweiner">twitter.com/nathanielweiner</a>
            </li>
            <li>
              LinkedIn: <a className="underline underline-offset-4" href="https://linkedin.com/in/nathanielweiner">linkedin.com/in/nathanielweiner</a>
            </li>
            <li>
              GitHub: <a className="underline underline-offset-4" href="https://github.com/NathanielWeiner">github.com/NathanielWeiner</a>
            </li>
            <li>
              Email: <a className="underline underline-offset-4" href="mailto:nate@formstonelabs.com">nate@formstonelabs.com</a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
