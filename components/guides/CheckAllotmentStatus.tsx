import React from 'react';
import { AlertCircle, ArrowLeft, CalendarDays, ExternalLink, Info } from 'lucide-react';

const registrars = [
  {
    name: 'Link Intime India',
    url: 'https://linkintime.co.in/ipo',
    note: 'Handles a majority of large main-board IPOs',
  },
  {
    name: 'KFin Technologies (KFintech)',
    url: 'https://kosmic.kfintech.com/ipostatus',
    note: 'Formerly Karvy; popular with tech listings',
  },
  {
    name: 'Bigshare Services',
    url: 'https://ipo.bigshare.co.in',
    note: 'Common for SME issues and a few main-board ones',
  },
  {
    name: 'Cameo Corporate Services',
    url: 'https://www.cameoindia.com',
    note: 'Look for “IPO Status” inside the investor section',
  },
];

const readyChecklist = [
  'Application number (ASBA/UPI) or PAN number.',
  'The exact IPO name as it appears in the form.',
  'Your Demat/beneficiary ID if you plan to cross-check later.',
  'A few minutes of patience—registrar sites get hammered on result night.',
];

const timeline = [
  { label: 'T day', detail: 'IPO closes at 5 PM. Nothing to see yet.' },
  { label: 'T+1 to T+2', detail: 'Bank mandates get reconciled. Funds may get released for invalid bids.' },
  { label: 'T+3 evening', detail: 'Registrar usually publishes allotment. Broker apps update a little later.' },
  { label: 'T+4', detail: 'Shares land in Demat. Non-allottees see funds unblocked.' },
  { label: 'T+6', detail: 'Listing day. Exchanges publish opening price pre-market.' },
];

export const CheckAllotmentStatus: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-4xl">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>

        <div className="mb-6 rounded-2xl border border-dashed border-amber-300 bg-amber-50 p-4 text-center text-xs font-semibold tracking-[0.3em] text-amber-700">
          THIS IS A DUMMY PAGE, TO REDESIGN LATER
        </div>

        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <header className="border-b border-slate-100 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Post-IPO rituals</p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">How We Actually Check IPO Allotment Status</h1>
            <p className="mt-3 text-slate-600">
              A practical playbook for the inevitable “Did I get it yet?” moment. These steps are what the team follows
              on allotment night, distilled from frantic refresh sessions.
            </p>
          </header>

          <section className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Keep these handy</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {readyChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <h2 className="text-lg font-semibold">Reality check</h2>
              <p className="mt-2 text-sm text-slate-200">
                Registrars release data only once they finish reconciling payment files with banks. If you are checking
                before 7 PM on T+3, chances are the result simply is not live yet.
              </p>
              <p className="mt-3 text-xs text-slate-400">Refreshing every 30 seconds doesn’t make it arrive faster (we’ve tried).</p>
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-indigo-50 p-6">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-indigo-500" />
              <h3 className="text-lg font-semibold text-slate-900">Typical timeline</h3>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {timeline.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">{item.label}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Method 1 · Registrar website (always the source of truth)</h2>
              <p className="mt-2 text-slate-600">
                Each IPO has exactly one registrar. If you don’t know which one, check the IPO page inside Listings Lens
                or the DRHP cover page.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {registrars.map((reg) => (
                <div key={reg.name} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-slate-900">
                    <p className="font-semibold">{reg.name}</p>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{reg.url}</p>
                  <p className="mt-2 text-xs text-slate-500">{reg.note}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-800">Steps we follow:</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
                <li>Open the registrar link and pick the IPO name from the dropdown.</li>
                <li>Choose one identifier—Application No, PAN, or DP/Client ID. Enter it carefully.</li>
                <li>Complete the CAPTCHA (yes, even if it looks unreadable—refresh once).</li>
                <li>Hit submit. If you get a blank page, refresh once; if still blank, the data is not live.</li>
              </ol>
            </div>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Method 2 · Broker apps</h2>
              <p className="mt-2 text-sm text-slate-600">
                Works well if you applied through Zerodha, Angel One, or Groww. They mirror registrar data once it is
                public, usually 30-60 minutes later.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>Head to IPO/Orders history inside the app.</li>
                <li>Tap the IPO name → “Application details”.</li>
                <li>Status will flip to <span className="font-semibold text-emerald-600">Allotted</span> or <span className="font-semibold text-rose-600">Not allotted</span>.</li>
                <li>Some brokers also show the exact number of shares credited.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Method 3 · Exchange portals</h2>
              <p className="mt-2 text-sm text-slate-600">
                BSE and NSE have verification tools. They are slower but handy if registrar sites are overloaded.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li><strong>BSE:</strong> Investors → IPO → Equity → Allotment Status Inquiry.</li>
                <li><strong>NSE:</strong> Corporates → Active IPO → “Click here to know allotment”.</li>
                <li>Enter PAN + application number, submit the CAPTCHA, done.</li>
              </ul>
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-emerald-50 p-6 border border-emerald-100">
            <h3 className="text-lg font-semibold text-slate-900">After you know the result</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• <strong>Allotted:</strong> Shares land in your Demat by T+4 morning. Funds leave your bank account the same day.</li>
              <li>• <strong>Not allotted:</strong> The blocked amount auto-releases; some banks take until T+4 evening.</li>
              <li>• <strong>Partial allotment:</strong> Only the used portion stays blocked—rest comes back. Expect two SMS alerts.</li>
              <li>• <strong>Planning to sell on listing:</strong> Place a limit order during the pre-open session (9:45–9:50 AM) on T+6.</li>
            </ul>
          </section>

          <section className="mt-10 rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <div className="flex items-center gap-3 text-rose-700">
              <AlertCircle className="h-5 w-5" />
              <h3 className="text-lg font-semibold">If the site still shows “No records found”</h3>
            </div>
            <p className="mt-3 text-sm text-rose-900">
              That message is infamous. Nine times out of ten it means the registrar has not uploaded the CSV yet. Give it
              15 more minutes, clear browser cache, or try switching identifiers (PAN vs DP ID). When data genuinely isn’t
              there, even broker apps will stay blank—wait for their push notification instead of retrying endlessly.
            </p>
            <p className="mt-3 text-xs text-rose-700">Still anxious? Call your broker with the application number—they can confirm once the backend feed updates.</p>
          </section>

          <footer className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-indigo-300" />
              <p className="text-sm text-slate-100">
                We keep screenshots of every application, including time stamps and UPI reference numbers. Sounds nerdy,
                but it has rescued us twice when banks misplaced mandates. Feel free to steal the habit.
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};
