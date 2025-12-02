import React from 'react';
import { ArrowLeft, CalendarClock, Info, Sparkles } from 'lucide-react';

const timeline = [
  {
    title: 'Prep & homework',
    detail: 'Shortlist the IPO, skim the DRHP summary, note the price band/lot size.',
    day: 'Day 0 (10 min)',
  },
  {
    title: 'Place the application',
    detail: 'Submit the bid through your broker or net-banking window before 5 PM on the closing day.',
    day: 'Day 0-3',
  },
  {
    title: 'UPI mandate approval',
    detail: 'Authorise the mandate in your UPI app; the amount just gets blocked, not debited.',
    day: 'Within 12 hrs',
  },
  {
    title: 'Allotment & listing',
    detail: 'Registrar publishes results, shares hit your Demat, funds unblock if you didn’t get any.',
    day: 'Day 6-8',
  },
];

const prepChecklist = [
  'Active Demat + trading account (same PAN).',
  'UPI ID linked to the same bank account you plan to block funds from.',
  'PAN number handy; some portals still ask for it separately.',
  'Decide how much capital you actually want to park for 7-10 days.',
];

const biddingReminders = [
  'Cut-off bid works best for most retail investors—one less thing to overthink.',
  'Lot size matters: 1 lot could be ₹15K today and ₹40K next week, so keep cash flexibility.',
  'If you are applying from multiple accounts in the same household, keep PANs unique—duplicate PANs get rejected.',
  'Grey-market buzz is fun gossip, not gospel; lean on financials instead.',
];

export const HowToApplyIPO: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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

        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <header className="flex flex-col gap-4 border-b border-slate-100 pb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              <Sparkles className="h-4 w-4" />
              Real-world IPO playbook
            </span>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">How to Apply for an IPO (Without the Guesswork)</h1>
              <p className="mt-3 text-base text-slate-600">
                Notes from the Listings Lens team after dozens of applications—what actually matters, what can wait,
                and where people usually get stuck.
              </p>
            </div>
          </header>

          <section className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Before you even open the app</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {prepChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-900/90 p-5 text-white">
              <h2 className="text-lg font-semibold">15-minute checklist</h2>
              <p className="mt-2 text-sm text-slate-200">
                Finish these in one sitting so the IPO window doesn’t close on you mid-way.
              </p>
              <ol className="mt-4 space-y-3 text-sm">
                <li>Login → IPO section → Pick the company.</li>
                <li>Confirm investor type (Retail/HNI) and number of lots.</li>
                <li>Use cut-off price unless you truly track the book-build.</li>
                <li>Submit, then hop to your UPI app and authorise the mandate.</li>
              </ol>
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-blue-50 p-6">
            <div className="flex items-center gap-3">
              <CalendarClock className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-slate-900">Timeline at a glance</h3>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {timeline.map((step) => (
                <div key={step.title} className="rounded-2xl bg-white/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">{step.day}</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{step.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Step-by-step with context</h2>
              <p className="mt-2 text-slate-600">
                Every platform words things a little differently, but the flow below rarely changes. Keep an eye on
                little details such as mandatory lots and bank account names—they are usually what cause rejections.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">1. Launch the IPO window</h3>
              <p className="mt-2 text-sm text-slate-600">
                Zerodha, Groww, Angel One, your bank—take your pick. The key thing is to use the same PAN that your
                Demat account is mapped to. Bids with mismatched PAN get quietly rejected.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">2. Enter bid details with intention</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><strong>Investor type:</strong> Retail (≤ ₹2L), S-HNI (₹2L-₹10L), B-HNI (> ₹10L). Pick the right bucket.</li>
                <li><strong>Lots:</strong> Start with one lot. Add more only if you are comfortable with the amount being blocked.</li>
                <li><strong>Price:</strong> Select cut-off so your application stays valid even if the final price shifts.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">3. Approve the UPI mandate</h3>
              <p className="mt-2 text-sm text-slate-600">
                Expect the request on BHIM/Google Pay/PhonePe within a few minutes. If it does not arrive, cancel the
                bid and reapply—letting the timer expire is the fastest way to miss the window.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">4. Track allotment calmly</h3>
              <p className="mt-2 text-sm text-slate-600">
                Registrar websites usually update late evening on T+3. Keep the application number handy. If you are not
                allotted anything, the mandate automatically releases—no calls to the broker needed.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-emerald-50 p-6 border border-emerald-100">
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-slate-900">Bidding reminders we keep on a Post-it</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {biddingReminders.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <div className="rounded-2xl bg-slate-900 p-6 text-white">
              <h3 className="text-lg font-semibold">Troubleshooting: what usually trips people up</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <strong>Mandate expired:</strong> Delete the old application and submit again. Partial approvals rarely work.
                </li>
                <li>
                  <strong>Wrong bank account:</strong> Funds have to be blocked from the same account linked to the Demat. Switch UPI ID if needed.
                </li>
                <li>
                  <strong>Multiple bids:</strong> Multiple family members can apply, but each must use their own PAN/UPI combo.
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-300">
                Still stuck? Drop the IPO name, application number, and bank in a support ticket with your broker—those three
                details help them escalate to the registrar quickly.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};
