import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Brain,
  Clock,
  MessageCircle,
  Mic,
  Send,
  ShieldCheck,
  Sparkles,
  Zap
} from 'lucide-react';

const conversation = [
  {
    role: 'user' as const,
    content: 'What is happening with the NovaBuild IPO GMP and is it worth applying today?',
    timestamp: '2 min ago'
  },
  {
    role: 'ai' as const,
    content:
      'NovaBuild GMP is trending around ₹85 (≈18% over the upper band). QIB subscription is 6.3x on Day 2, so the book looks strong. Consider at least one lot if you are comfortable blocking ₹15.4L for 4 days.',
    timestamp: 'Just now'
  },
  {
    role: 'user' as const,
    content: 'Can you compare it with the last infra IPO that listed this quarter?',
    timestamp: 'Just now'
  },
  {
    role: 'ai' as const,
    content:
      'Sure. Apex Infra listed in September at a 12% premium with 4x retail demand. NovaBuild shows higher institutional traction (6.3x vs 3.8x) and better margin profile (13.4% vs 9.1%). The biggest watch-out is promoter pledge of 8%.',
    timestamp: 'Processing'
  }
];

const quickPrompts = [
  'Explain today’s GMP moves',
  'Summarise DRHP in 5 bullets',
  'List IPOs closing this week',
  'What should I ask registrar?'
];

const guardrails = [
  'Data refreshed hourly from mocked feeds.',
  'AI cannot execute trades or file applications.',
  'Treat GMP chatter as sentiment, not advice.'
];

export const AskAIChat: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      <button
        type="button"
        onClick={handleBackClick}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
      </button>

      <header className="rounded-3xl bg-slate-900 px-6 py-6 text-white shadow-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">Ask Listing Lens AI</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Chat with a finance co-pilot</h1>
            <p className="mt-3 text-sm text-slate-200">
              Mocked experience to visualise how IPO intelligence could feel with an in-house assistant.
            </p>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-blue-100">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Real-time context stitching
            </span>
          </div>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.7fr,1fr]">
        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-4 rounded-2xl border border-dashed border-blue-300 bg-blue-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            Prototype view
          </div>

          <div className="space-y-4">
            {conversation.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse text-right' : ''}`}
              >
                <div
                  className={`h-10 w-10 rounded-2xl flex items-center justify-center shadow-sm ${
                    message.role === 'user'
                      ? 'bg-slate-900 text-white shadow-slate-300/40'
                      : 'bg-blue-50 text-blue-600 shadow-blue-100'
                  }`}
                >
                  {message.role === 'user' ? <MessageCircle className="w-5 h-5" /> : <Brain className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <div
                    className={`rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      message.role === 'user'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-50 text-slate-700'
                    }`}
                  >
                    {message.content}
                  </div>
                  <p className={`mt-1 text-xs text-slate-400 ${message.role === 'user' ? '' : 'text-left'}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-slate-100 bg-slate-50">
            <textarea
              rows={3}
              placeholder="Ask about GMP, listing gains, registrar timelines, or anything IPO."
              className="w-full rounded-3xl bg-transparent px-5 py-4 text-sm text-slate-700 outline-none"
            />
            <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <button type="button" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Mic className="h-4 w-4" /> Voice draft
                </button>
                <button type="button" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Zap className="h-4 w-4 text-amber-500" /> Insert filing
                </button>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-500/30 transition hover:bg-[#1d4ed8]"
              >
                Send to AI
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Suggested prompts</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  className="rounded-2xl border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Session context</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-500" /> Last refresh · 3 mins ago
              </li>
              <li className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-blue-500" /> Drafting with mocked financial intelligence
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-500" /> Anchoring on grey market sentiment + filings
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-amber-600">
              <ShieldCheck className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">Guardrails</p>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-amber-900">
              {guardrails.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
};
