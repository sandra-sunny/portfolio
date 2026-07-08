import { siteContent as c } from "@/lib/content";
import { Link, GitBranch, Mail, Sparkles } from "lucide-react";
import { XPBar } from "@/components/XPBar";
import { StoryPath } from "@/components/StoryPath";
import { AchievementsGrid } from "@/components/AchievementsGrid";
import { StatSheet } from "@/components/StatSheet";
import { QuestLog } from "@/components/QuestLog";

const { name, title, location, linkedin, github, email, headline, subheadline, credentials, degrees, wins, skills, projects, closing, game } = c;

export default function Home() {
  return (
    <div className="min-h-screen">
      <XPBar />

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50" style={{ background: "rgba(91,44,111,0.95)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-white tracking-wide text-sm">{name}</span>
          <div className="hidden md:flex gap-8">
            {game.chapters.map((ch) => (
              <a key={ch.id} href={`#${ch.id}`} className="nav-link">{ch.title}</a>
            ))}
          </div>
          <a href={linkedin} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-1.5 rounded-full text-white border border-white/30 hover:bg-white/10 transition-colors">
            LinkedIn ↗
          </a>
        </div>
      </nav>

      {/* TITLE SCREEN */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-14"
        style={{ background: "#2A0E38" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs mb-8 fade-up mono uppercase tracking-widest" style={{color:"var(--gold)"}}>
              <Sparkles size={14} />
              <span>{location} · Open to PM roles</span>
            </div>
            <h1 className="text-6xl md:text-8xl text-white mb-6 fade-up delay-1 uppercase" style={{lineHeight: 0.95}}>
              Sandra<br />Sunny
            </h1>
            <p className="text-lg mb-8 fade-up delay-2 tracking-wide mono uppercase" style={{color:"var(--teal-light)"}}>
              {title}
            </p>
            <p className="text-2xl md:text-3xl text-white/90 mb-4 fade-up delay-3 leading-snug font-semibold">
              &ldquo;{headline}&rdquo;
            </p>
            <p className="text-white/60 text-base max-w-xl leading-relaxed fade-up delay-4">
              {subheadline}
            </p>
            <div className="cred-strip fade-up delay-4">
              {credentials.map((cr) => (
                <div key={cr.label} className="cred-block">
                  <span className="cred-stat">{cr.stat}</span>
                  <span className="cred-label">{cr.label}</span>
                  {cr.sub && <span className="cred-sub">{cr.sub}</span>}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-6 fade-up delay-4">
              {degrees.map((d, i) => (
                <span key={d} className={`sticker ${i === 0 ? "sticker-gold" : "sticker-teal"}`}>{d}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-3 fade-up delay-5">
              <span className="sticker sticker-white">ML Research @ Bloomberg</span>
              <span className="sticker sticker-teal">Outstanding Student Service Award &apos;25</span>
            </div>
            <div className="mt-12 fade-up delay-5">
              <a href="#origin" className="btn-game">
                {game.startLabel}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs mono uppercase">
          <span>scroll to play</span>
          <div className="w-px h-8 bg-white/20" />
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-inner">
          {[0, 1].map((dup) => (
            <span key={dup}>
              {game.ticker.map((t) => (
                <span key={t}>&nbsp;&nbsp;★&nbsp;&nbsp;{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* CHAPTER I — ORIGIN STORY */}
      <section id="origin" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="chapter-label"><span className="chapter-number">{game.chapters[0].number}</span>{game.chapters[0].title}</span>
          <h2 className="text-4xl mb-10 serif" style={{color:"var(--berry)"}}>My Through-Line</h2>
          <StoryPath stops={game.journey} />
        </div>
      </section>

      {/* CHAPTER II — ACHIEVEMENTS UNLOCKED */}
      <section id="achievements" className="py-24" style={{background:"var(--charcoal)"}}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="chapter-label" style={{color:"#14B8A6"}}><span className="chapter-number">{game.chapters[1].number}</span>{game.chapters[1].title}</span>
          <h2 className="text-4xl text-white mb-16 serif">Key Wins</h2>
          <AchievementsGrid wins={wins} />
        </div>
      </section>

      {/* CHAPTER III — CHARACTER STATS */}
      <section id="stats" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="chapter-label"><span className="chapter-number">{game.chapters[2].number}</span>{game.chapters[2].title}</span>
          <h2 className="text-4xl mb-16 serif" style={{color:"var(--berry)"}}>Skill Build</h2>
          <StatSheet skills={skills} />
        </div>
      </section>

      {/* CHAPTER IV — QUEST LOG */}
      <section id="quests" className="py-24" style={{background:"var(--offwhite)"}}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="chapter-label"><span className="chapter-number">{game.chapters[3].number}</span>{game.chapters[3].title}</span>
          <h2 className="text-4xl mb-16 serif" style={{color:"var(--berry)"}}>Completed Quests</h2>
          <QuestLog projects={projects} />
        </div>
      </section>

      {/* CHAPTER V — CHOOSE YOUR PATH */}
      <section id="path" className="py-24 relative overflow-hidden"
        style={{background:"#2A0E38"}}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="chapter-label" style={{color:"#14B8A6"}}><span className="chapter-number">{game.chapters[4].number}</span>{game.chapters[4].title}</span>
          <h2 className="text-5xl text-white mb-12 serif">{closing.headline}</h2>
          <div className="max-w-2xl space-y-4 mb-16">
            {closing.points.map((pt, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1.5 w-1 h-6 rounded flex-shrink-0" style={{background:"var(--teal)"}} />
                <p className="text-base leading-relaxed" style={{color:"rgba(233,213,255,0.9)"}}>{pt}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-12 max-w-xl">
            <p className="text-2xl text-white mb-8 italic serif">&ldquo;{closing.cta}&rdquo;</p>
            <div className="flex flex-col gap-3">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="path-choice">
                <span>
                  <span className="path-choice-label">Connect on LinkedIn</span>
                  <div className="path-choice-flavor">Route: Direct Connection →</div>
                </span>
                <Link size={18} />
              </a>
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="path-choice">
                  <span>
                    <span className="path-choice-label">View GitHub</span>
                    <div className="path-choice-flavor">Route: See the Code →</div>
                  </span>
                  <GitBranch size={18} />
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="path-choice">
                  <span>
                    <span className="path-choice-label">Send an Email</span>
                    <div className="path-choice-flavor">Route: Start a Thread →</div>
                  </span>
                  <Mail size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-xs" style={{background:"var(--charcoal)", color:"#6B7280"}}>
        <p className="mono">© {new Date().getFullYear()} {name} · Built with Next.js &amp; Supabase</p>
      </footer>
    </div>
  );
}
