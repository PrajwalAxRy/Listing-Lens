import React from 'react';
import { ArrowLeft, CheckCircle2, Compass, PhoneCall, Shield } from 'lucide-react';

const brokerTypes = [
  {
    title: 'Discount-first (do-it-yourself)',
    description: 'Low brokerage, mobile-first platforms with clean IPO flows.',
    picks: ['Zerodha', 'Groww', 'Upstox', 'Angel One', 'Dhan'],
    bestFor: 'People who just want to place trades, apply for IPOs, and move on.',
  },
  {
    title: 'Full-service (hand-holding)',
    description: 'Deeper research, RM support, branches you can walk into.',
    picks: ['ICICI Direct', 'HDFC Securities', 'Kotak', 'Motilal Oswal', 'Axis Direct'],
    bestFor: 'Families who prefer a dedicated point of contact and bundled products.',
  },
];

const documents = [
  { label: 'PAN card', note: 'Name should match exactly with your bank + Aadhaar.' },
  { label: 'Aadhaar', note: 'Required for OTP + eSign. Make sure the linked mobile works.' },
  { label: 'Bank proof', note: 'Cancelled cheque/statement not older than 3 months.' },
  { label: 'Signature on white paper', note: 'Sign with a dark pen, scan or snap in daylight.' },
  { label: 'Selfie/photo', note: 'Most brokers let you capture it live; keep a backup ready.' },
  { label: 'Income proof (optional)', note: 'Salary slip/ITR if you want F&O or commodity access.' },
];

const timeline = [
  { title: 'Prep documents', detail: '10 minutes of scanning/renaming saves hours later.' },
  { title: 'Fill the form', detail: 'Mobile + email OTP, personal + bank details.' },
  { title: 'eKYC', detail: 'Video call or Aadhaar OTP. Hardly 5-7 minutes if signal is good.' },
  { title: 'eSign & wait', detail: 'Sign via Aadhaar, then give the ops team up to 24 hours.' },
];

const reminders = [
  'You can own multiple Demat accounts across brokers. Keep track of client IDs though.',
  'AMC (annual maintenance) is usually ₹200-₹600. Budget for it just like a Netflix subscription.',
  'Nominee is not optional anymore—SEBI has deadlines. Add it during onboarding itself.',
  'Enable app lock + 2FA the day you get credentials. Someone guessing your MPIN is messier than it sounds.',
];

export const OpenDematAccount: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Start line</p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">Opening a Demat Account (The Way We’d Explain to a Friend)</h1>
            <p className="mt-3 text-slate-600">
              We have opened accounts with almost every major broker while testing Listing Lens. Here is how to get your
              own account live without rage-quitting mid-way.
            </p>
          </header>

          <section className="mt-8 grid gap-6 md:grid-cols-2">
            {brokerTypes.map((type) => (
              <div key={type.title} className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-amber-500" />
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Pick your style</p>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-slate-900">{type.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{type.description}</p>
                <p className="mt-3 text-xs font-semibold text-slate-500">Our go-to list</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {type.picks.map((pick) => (
                    <li key={pick}>{pick}</li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-slate-500">{type.bestFor}</p>
              </div>
            ))}
          </section>

          <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
            <h2 className="text-lg font-semibold">Mini timeline</h2>
            <p className="mt-2 text-sm text-slate-200">Most brokers now wrap the entire flow in under 30 minutes.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {timeline.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-100">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">Document prep (do this once)</h2>
            <p className="mt-2 text-slate-600">
              Create a folder on your desktop/Drive, save everything as <em>firstname-documentname</em>. Uploaders choke on
              huge PDFs, so keep them under 2 MB.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {documents.map((doc) => (
                <div key={doc.label} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
                  <div>
                    <p className="font-semibold text-slate-900">{doc.label}</p>
                    <p className="text-sm text-slate-600">{doc.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 space-y-6">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">1. Fill the form</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
                <li>Start on web/app → “Open Demat/Trading account”.</li>
                <li>Punch in mobile + email, confirm via OTPs.</li>
                <li>Add PAN, DOB, mother’s name (yes, they still ask) and address.</li>
                <li>Select market segments: Equity is default, tick F&O only if you actually need it.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">2. eKYC options</h3>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-amber-100 bg-amber-50/80 p-4">
                  <p className="text-sm font-semibold text-amber-700">Video call (fast + friendly)</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-700">
                    <li>Agent joins in-browser, verify face vs PAN.</li>
                    <li>Have original PAN + blank paper ready.</li>
                    <li>Needs a stable connection; 5 minutes tops.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-900">Aadhaar OTP flow</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-700">
                    <li>Enter Aadhaar → receive OTP on linked mobile.</li>
                    <li>Details auto-fill; double-check spelling.</li>
                    <li>Great fallback if you are camera shy.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">3. Upload + eSign</h3>
              <p className="mt-2 text-sm text-slate-600">
                Upload PAN, bank proof, signature, and selfie. Crop away noisy backgrounds. The final eSign uses
                Aadhaar OTP again—if the UIDAI site is slow, give it a breather and retry instead of spamming.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">4. Activation + first login</h3>
              <p className="mt-2 text-sm text-slate-600">
                Brokers send a “Welcome” email with your client ID + temporary password. Change it immediately, add a
                nominee, set up UPI autopay (some call it e-mandate) so IPO applications later feel seamless.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-emerald-50 p-6 border border-emerald-100">
            <h3 className="text-lg font-semibold text-slate-900">Stuff we wish someone told us earlier</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {reminders.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-2xl border border-slate-200 p-6">
            <div className="flex items-start gap-3">
              <PhoneCall className="mt-1 h-5 w-5 text-indigo-500" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Need human help mid-way?</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Most brokers have a priority onboarding desk. Screenshot the error, note the reference number shown at the
                  bottom of the form, and call their helpline. Having those two details handy fast-tracks escalations.
                </p>
              </div>
            </div>
          </section>

          <footer className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
            <div className="flex gap-3">
              <Shield className="h-5 w-5 text-emerald-300" />
              <p className="text-sm text-slate-100">
                Final reminder: treat the login the way you treat your bank. Most breaches we hear about begin with someone
                sharing an OTP on a random phone call. Brokers will never ask for it.
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};
