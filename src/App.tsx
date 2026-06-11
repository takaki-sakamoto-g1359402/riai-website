import { useEffect, useMemo, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Check,
  ChevronRight,
  ExternalLink,
  Menu,
  Search,
  ShieldCheck,
  X
} from "lucide-react";
import { command, copy, icons, Lang, PhaseId, t } from "./content";

const phaseOrder: PhaseId[] = ["plan", "act", "reflect", "learn"];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [activePhase, setActivePhase] = useState<PhaseId>("plan");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t(copy.meta.title, lang);
  }, [lang]);

  const activePhaseData = useMemo(
    () => command.phases.find((phase) => phase.id === activePhase) ?? command.phases[0],
    [activePhase]
  );

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
      <div className="min-h-screen overflow-hidden bg-soft-field text-ink antialiased">
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
          href="#main"
        >
          {t(copy.a11y.skip, lang)}
        </a>
        <SiteHeader
          lang={lang}
          menuOpen={menuOpen}
          setLang={setLang}
          setMenuOpen={setMenuOpen}
        />
        <main id="main">
          <Hero lang={lang} />
          <Mission lang={lang} />
          <CommandCenter
            activePhase={activePhase}
            activePhaseData={activePhaseData}
            lang={lang}
            setActivePhase={setActivePhase}
          />
          <Architecture lang={lang} />
          <SafetyAndUseCases lang={lang} />
          <Roadmap lang={lang} />
          <CommunityCta lang={lang} />
        </main>
        <SiteFooter lang={lang} />
      </div>
    </MotionConfig>
  );
}

function SiteHeader({
  lang,
  menuOpen,
  setLang,
  setMenuOpen
}: {
  lang: Lang;
  menuOpen: boolean;
  setLang: (lang: Lang) => void;
  setMenuOpen: (open: boolean) => void;
}) {
  const navItems = [
    { label: copy.nav.product, href: "#product" },
    { label: copy.nav.architecture, href: "#architecture" },
    { label: copy.nav.safety, href: "#safety" },
    { label: copy.nav.roadmap, href: "#roadmap" },
    { label: copy.nav.community, href: "#community" }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-pearl/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          className="font-display text-2xl font-medium tracking-normal text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lagoon"
          href="#top"
          aria-label={t(copy.a11y.home, lang)}
        >
          Riai
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-graphite/80 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lagoon"
              href={item.href}
            >
              {t(item.label, lang)}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle lang={lang} setLang={setLang} />
          <a
            className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-white shadow-quiet transition hover:bg-pine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lagoon"
            href="#command"
          >
            {t(copy.nav.command, lang)}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 bg-white/60 text-ink lg:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t(copy.a11y.closeMenu, lang) : t(copy.a11y.openMenu, lang)}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={cx(
          "border-t border-ink/10 bg-pearl px-4 py-4 lg:hidden",
          menuOpen ? "block" : "hidden"
        )}
      >
        <nav className="grid gap-2 text-sm font-semibold text-ink">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="rounded-md px-3 py-3 hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lagoon"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {t(item.label, lang)}
            </a>
          ))}
        </nav>
        <div className="mt-4 flex items-center justify-between gap-3">
          <LanguageToggle lang={lang} setLang={setLang} />
          <a
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white"
            href="#command"
            onClick={() => setMenuOpen(false)}
          >
            {t(copy.nav.command, lang)}
          </a>
        </div>
      </div>
    </header>
  );
}

function LanguageToggle({
  lang,
  setLang
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  return (
    <div
      className="grid grid-cols-2 rounded-md border border-ink/15 bg-white/70 p-1 text-xs font-bold text-graphite shadow-sm"
      role="group"
      aria-label={t(copy.a11y.language, lang)}
    >
      {(["en", "ja"] as Lang[]).map((item) => (
        <button
          key={item}
          className={cx(
            "rounded px-3 py-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-lagoon",
            lang === item ? "bg-ink text-white shadow-sm" : "hover:bg-mist/70"
          )}
          type="button"
          aria-pressed={lang === item}
          onClick={() => setLang(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const coreWebp = assetUrl("assets/riai-core.webp");
  const corePng = assetUrl("assets/riai-core.png");

  return (
    <section id="top" className="relative pt-24 sm:pt-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,32,31,0.07)_1px,transparent_1px),linear-gradient(180deg,rgba(20,32,31,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-[clamp(4.6rem,14vw,12rem)] font-medium leading-[0.83] tracking-normal text-ink">
            {t(copy.hero.h1, lang)}
          </h1>
          <p className="mt-8 max-w-2xl text-balance text-2xl font-medium leading-tight text-graphite sm:text-3xl">
            {t(copy.hero.lead, lang)}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-graphite/78 sm:text-lg">
            {t(copy.hero.body, lang)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-white shadow-command transition hover:bg-pine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lagoon"
              href="#command"
            >
              {t(copy.hero.primary, lang)}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/15 bg-white/65 px-5 py-3 text-sm font-bold text-ink shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lagoon"
              href="#safety"
            >
              {t(copy.hero.secondary, lang)}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-x-8 bottom-4 h-20 bg-[linear-gradient(90deg,transparent,rgba(15,57,52,0.18),transparent)] blur-2xl" />
          <div className="relative mx-auto max-w-[560px] overflow-hidden rounded-lg border border-white/70 bg-white/35 shadow-glass backdrop-blur">
            <picture>
              <source srcSet={coreWebp} type="image/webp" />
              <img
                className="aspect-[5/6] h-auto w-full object-cover"
                src={corePng}
                alt={t(copy.hero.visualAlt, lang)}
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(245,243,238,0.76))]" />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {phaseOrder.slice(0, 3).map((phase) => {
                const phaseData = command.phases.find((item) => item.id === phase)!;
                const Icon = icons[phaseData.icon];
                return (
                  <div
                    key={phase}
                    className="rounded-md border border-white/70 bg-pearl/82 p-3 shadow-sm backdrop-blur"
                  >
                    <Icon size={16} className="text-lagoon" aria-hidden="true" />
                    <p className="mt-2 text-xs font-bold text-ink">{t(phaseData.label, lang)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-3 px-4 pb-14 sm:grid-cols-3 sm:px-6 lg:px-8">
        {copy.stats.map((stat) => (
          <div
            key={t(stat.label, "en")}
            className="rounded-lg border border-ink/10 bg-white/58 p-5 shadow-quiet backdrop-blur"
          >
            <p className="font-display text-4xl font-medium text-pine">{stat.value}</p>
            <p className="mt-2 text-sm font-bold text-ink">{t(stat.label, lang)}</p>
            <p className="mt-1 text-sm text-graphite/70">{t(stat.detail, lang)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Mission({ lang }: { lang: Lang }) {
  return (
    <section id="product" className="border-y border-ink/10 bg-pearl/72 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <SectionLabel>{t(copy.nav.product, lang)}</SectionLabel>
          <h2 className="mt-4 max-w-xl font-display text-5xl font-medium leading-none tracking-normal text-ink sm:text-6xl">
            {t(copy.sections.missionTitle, lang)}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/78">
            {t(copy.sections.missionBody, lang)}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {copy.missionCards.map((card) => (
            <FeatureRow
              key={t(card.title, "en")}
              icon={card.icon}
              title={t(card.title, lang)}
              text={t(card.text, lang)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CommandCenter({
  activePhase,
  activePhaseData,
  lang,
  setActivePhase
}: {
  activePhase: PhaseId;
  activePhaseData: (typeof command.phases)[number];
  lang: Lang;
  setActivePhase: (phase: PhaseId) => void;
}) {
  const ActiveIcon = icons[activePhaseData.icon];
  const [memoryQuery, setMemoryQuery] = useState("");
  const visibleMemories = command.memories.filter((memory) => {
    const query = memoryQuery.trim().toLowerCase();
    if (!query) {
      return true;
    }

    return `${t(memory.title, "en")} ${t(memory.title, "ja")}`.toLowerCase().includes(query);
  });
  const sidebarItems = [
    { icon: ShieldCheck, label: command.sidebar.commandCenter, active: true },
    { icon: Search, label: command.sidebar.agents, active: false },
    { icon: Check, label: command.sidebar.tasks, active: false },
    { icon: ExternalLink, label: command.sidebar.memory, active: false }
  ];

  return (
    <section id="command" className="bg-[#f8f7f2] py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>{t(copy.hero.primary, lang)}</SectionLabel>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-normal text-ink sm:text-6xl">
              {t(command.title, lang)}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-graphite/75">
              {t(command.subtitle, lang)}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-lagoon/20 bg-white px-4 py-3 text-sm font-semibold text-graphite shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-lagoon" aria-hidden="true" />
            {t(command.systemStatus, lang)}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-command">
          <div className="grid lg:grid-cols-[238px_1fr]">
            <aside className="bg-command-rail p-5 text-white">
              <div className="flex items-center justify-between">
                <p className="font-display text-3xl font-medium">Riai</p>
                <Bell size={18} className="text-celadon" aria-hidden="true" />
              </div>
              <nav className="mt-8 grid gap-2 text-sm font-semibold" aria-label={t(command.sidebar.navigation, lang)}>
                {sidebarItems.map((item) => {
                  const TypedIcon = item.icon;
                  return (
                    <a
                      key={t(item.label, "en")}
                      className={cx(
                        "flex items-center gap-3 rounded-md px-3 py-3 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-celadon",
                        item.active
                          ? "bg-white/13 text-white"
                          : "text-white/72 hover:bg-white/9 hover:text-white"
                      )}
                      href="#command"
                    >
                      <TypedIcon size={17} aria-hidden="true" />
                      {t(item.label, lang)}
                    </a>
                  );
                })}
              </nav>
              <div className="mt-10 rounded-lg border border-white/14 bg-white/8 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-celadon">
                  {t(command.labels.state, lang)}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/82">{t(activePhaseData.detail, lang)}</p>
              </div>
            </aside>

            <div className="min-w-0 bg-[#fbfaf6]">
              <div className="border-b border-ink/10 px-4 py-4 sm:px-6">
                <div
                  className="grid grid-cols-2 gap-2 lg:grid-cols-4"
                  role="tablist"
                  aria-label={t(copy.a11y.agentPhase, lang)}
                >
                  {command.phases.map((phase) => {
                    const Icon = icons[phase.icon];
                    const active = activePhase === phase.id;
                    return (
                      <button
                        key={phase.id}
                        className={cx(
                          "flex items-center justify-center gap-2 rounded-md border px-3 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-lagoon",
                          active
                            ? "border-lagoon/35 bg-celadon/18 text-pine shadow-sm"
                            : "border-ink/10 bg-white text-graphite/68 hover:text-ink"
                        )}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        aria-controls="phase-panel"
                        id={`phase-tab-${phase.id}`}
                        onClick={() => setActivePhase(phase.id)}
                      >
                        <Icon size={17} aria-hidden="true" />
                        {t(phase.label, lang)}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                id="phase-panel"
                role="tabpanel"
                aria-labelledby={`phase-tab-${activePhase}`}
                className="grid gap-4 p-4 sm:p-6 xl:grid-cols-[1.15fr_0.85fr]"
              >
                <div className="grid gap-4">
                  <Panel title={t(command.labels.activeAgents, lang)}>
                    <div className="grid gap-3 md:grid-cols-3">
                      {command.agents.map((agent) => (
                        <AgentCard key={t(agent.name, "en")} agent={agent} lang={lang} />
                      ))}
                    </div>
                  </Panel>
                  <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
                    <Panel title={t(command.labels.timeline, lang)}>
                      <div className="space-y-1">
                        {command.timeline.map((item) => (
                          <TimelineItem key={t(item.label, "en")} item={item} lang={lang} />
                        ))}
                      </div>
                    </Panel>
                    <Panel title={t(command.labels.activity, lang)}>
                      <div className="space-y-3">
                        {command.activity.map((item) => {
                          const Icon = icons[item.icon];
                          return (
                            <div
                              key={t(item.title, "en")}
                              className="flex gap-3 rounded-md border border-ink/8 bg-white px-3 py-3"
                            >
                              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-mist text-pine">
                                <Icon size={16} aria-hidden="true" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-ink">{t(item.title, lang)}</p>
                                <p className="mt-1 text-xs leading-5 text-graphite/68">
                                  {t(item.text, lang)}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </Panel>
                  </div>
                </div>

                <div className="grid gap-4">
                  <Panel title={t(command.labels.safetyChecks, lang)}>
                    <div className="space-y-2">
                      {command.safetyChecks.map((check) => (
                        <div
                          key={t(check.name, "en")}
                          className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-ink/8 pb-2 last:border-b-0 last:pb-0"
                        >
                          <div className="flex items-center gap-2">
                            <Check className="text-lagoon" size={16} aria-hidden="true" />
                            <span className="text-sm font-semibold text-graphite">{t(check.name, lang)}</span>
                          </div>
                          <span
                            className={cx(
                              "text-xs font-bold",
                              t(check.status, "en") === "Needs approval" ? "text-copper" : "text-lagoon"
                            )}
                          >
                            {t(check.status, lang)}
                          </span>
                          <span className="text-xs text-graphite/55">{check.time}</span>
                        </div>
                      ))}
                    </div>
                  </Panel>

                  <Panel title={t(command.labels.memory, lang)}>
                    <label className="sr-only" htmlFor="memory-search">
                      {t(command.memorySearch.label, lang)}
                    </label>
                    <div className="mb-4 flex items-center gap-2 rounded-md border border-ink/10 bg-white px-3 py-2">
                      <Search size={16} className="text-graphite/55" aria-hidden="true" />
                      <input
                        id="memory-search"
                        className="w-full bg-transparent text-sm outline-none placeholder:text-graphite/45"
                        placeholder={t(command.memorySearch.placeholder, lang)}
                        type="search"
                        value={memoryQuery}
                        onChange={(event) => setMemoryQuery(event.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      {visibleMemories.map((memory) => (
                        <div
                          key={t(memory.title, "en")}
                          className="flex items-start justify-between gap-3 border-b border-ink/8 pb-2 last:border-b-0"
                        >
                          <p className="text-sm font-medium leading-5 text-graphite">{t(memory.title, lang)}</p>
                          <span className="shrink-0 text-xs text-graphite/50">{t(memory.time, lang)}</span>
                        </div>
                      ))}
                      {visibleMemories.length === 0 && (
                        <p className="rounded-md border border-ink/8 bg-white px-3 py-3 text-sm text-graphite/62">
                          {t(command.memorySearch.empty, lang)}
                        </p>
                      )}
                    </div>
                  </Panel>

                  <Panel title={t(command.labels.rulePanel, lang)}>
                    <div className="space-y-3">
                      {command.rules.map((rule) => (
                        <div key={t(rule.label, "en")} className="flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold text-graphite">{t(rule.label, lang)}</span>
                          <span className="rounded-md bg-celadon/18 px-2.5 py-1 text-xs font-bold text-pine">
                            {t(rule.mode, lang)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Panel>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-lg border border-copper/18 bg-[#fff8ed] px-4 py-4 text-sm leading-6 text-graphite">
          <ActiveIcon className="mt-1 shrink-0 text-copper" size={18} aria-hidden="true" />
          <p>{t(activePhaseData.detail, lang)}</p>
        </div>
      </div>
    </section>
  );
}

function AgentCard({
  agent,
  lang
}: {
  agent: (typeof command.agents)[number];
  lang: Lang;
}) {
  const toneClass =
    agent.tone === "lagoon"
      ? "bg-lagoon"
      : agent.tone === "copper"
        ? "bg-copper"
        : "bg-pine";

  return (
    <article className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold text-ink">{t(agent.name, lang)}</h3>
          <div className="mt-2 flex items-center gap-2">
            <span className={cx("h-2 w-2 rounded-full", toneClass)} aria-hidden="true" />
            <p className="text-xs font-semibold text-graphite/70">{t(agent.state, lang)}</p>
          </div>
        </div>
        <CpuChip />
      </div>
      <p className="mt-5 min-h-12 text-sm leading-6 text-graphite/78">{t(agent.task, lang)}</p>
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-xs font-bold text-graphite/65">
          <span>{t(command.labels.progress, lang)}</span>
          <span>{agent.progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded bg-mist">
          <div
            className={cx("h-full rounded", toneClass)}
            style={{ width: `${agent.progress}%` }}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between text-xs font-bold text-graphite/62">
        <span>{t(command.labels.eta, lang)}</span>
        <span>{agent.eta}</span>
      </div>
    </article>
  );
}

function CpuChip() {
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-mist text-pine" aria-hidden="true">
      <span className="h-3.5 w-3.5 rounded-sm border border-current" />
    </span>
  );
}

function TimelineItem({
  item,
  lang
}: {
  item: (typeof command.timeline)[number];
  lang: Lang;
}) {
  const isDone = item.state === "done";
  const isActive = item.state === "active";
  return (
    <div
      className={cx(
        "relative grid grid-cols-[28px_1fr] gap-3 rounded-md px-2 py-3",
        isActive && "border border-lagoon/25 bg-celadon/12"
      )}
    >
      <div className="relative flex justify-center">
        <span
          className={cx(
            "mt-1 flex h-4 w-4 items-center justify-center rounded-full border",
            isDone
              ? "border-lagoon bg-lagoon text-white"
              : isActive
                ? "border-lagoon bg-white"
                : "border-graphite/35 bg-white"
          )}
        >
          {isDone && <Check size={11} aria-hidden="true" />}
        </span>
      </div>
      <div>
        <p className="text-sm font-bold text-ink">{t(item.label, lang)}</p>
        <p className="mt-1 text-xs leading-5 text-graphite/65">{t(item.detail, lang)}</p>
      </div>
    </div>
  );
}

function Architecture({ lang }: { lang: Lang }) {
  return (
    <section id="architecture" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel>{t(copy.sections.architectureTitle, lang)}</SectionLabel>
            <h2 className="mt-4 font-display text-5xl font-medium leading-none tracking-normal text-ink sm:text-6xl">
              {t(copy.sections.visionTitle, lang)}
            </h2>
            <div className="mt-8 grid gap-4">
              {copy.vision.map((item) => (
                <div key={t(item.title, "en")} className="border-l-2 border-lagoon/45 pl-5">
                  <h3 className="text-base font-bold text-ink">{t(item.title, lang)}</h3>
                  <p className="mt-2 text-sm leading-7 text-graphite/72">{t(item.text, lang)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white/62 p-4 shadow-glass backdrop-blur sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {copy.architectureNodes.map((node, index) => {
                const Icon = icons[node.icon];
                return (
                  <motion.div
                    key={node.id}
                    className="rounded-lg border border-ink/10 bg-[#fffdf8] p-5"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-md bg-mist text-pine">
                        <Icon size={19} aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-ink">{t(node.title, lang)}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-graphite/70">{t(node.text, lang)}</p>
                    <div className="mt-5 h-1.5 rounded bg-mist">
                      <div
                        className="h-full rounded bg-[linear-gradient(90deg,#1e7067,#bc7652)]"
                        style={{ width: `${58 + index * 10}%` }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-4 rounded-lg border border-lagoon/18 bg-celadon/13 p-5">
              <p className="text-sm font-bold text-pine">{t(command.memorySafetyLayer.title, lang)}</p>
              <p className="mt-2 text-sm leading-6 text-graphite/72">
                {t(command.memorySafetyLayer.text, lang)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SafetyAndUseCases({ lang }: { lang: Lang }) {
  return (
    <section id="safety" className="border-y border-ink/10 bg-[#eef4ee] py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <SectionLabel>{t(copy.sections.safetyTitle, lang)}</SectionLabel>
          <h2 className="mt-4 font-display text-5xl font-medium leading-none tracking-normal text-ink sm:text-6xl">
            {t(copy.sections.safetyTitle, lang)}
          </h2>
          <div className="mt-8 grid gap-4">
            {copy.safetyItems.map((item) => (
              <FeatureRow
                key={t(item.title, "en")}
                icon={item.icon}
                title={t(item.title, lang)}
                text={t(item.text, lang)}
              />
            ))}
          </div>
        </div>
        <div>
          <SectionLabel>{t(copy.sections.useCasesTitle, lang)}</SectionLabel>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {copy.useCases.map((item) => {
              const Icon = icons[item.icon];
              return (
                <article
                  key={t(item.title, "en")}
                  className="rounded-lg border border-ink/10 bg-white/72 p-5 shadow-quiet backdrop-blur"
                >
                  <Icon className="text-lagoon" size={22} aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-ink">{t(item.title, lang)}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite/72">{t(item.text, lang)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap({ lang }: { lang: Lang }) {
  return (
    <section id="roadmap" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <SectionLabel>{t(copy.sections.roadmapTitle, lang)}</SectionLabel>
            <h2 className="mt-4 font-display text-5xl font-medium leading-none tracking-normal text-ink sm:text-6xl">
              {t(copy.sections.roadmapTitle, lang)}
            </h2>
          </div>
          <div className="grid gap-4">
            {copy.roadmap.map((item, index) => (
              <article
                key={t(item.title, "en")}
                className="grid gap-4 rounded-lg border border-ink/10 bg-white/66 p-5 shadow-quiet backdrop-blur sm:grid-cols-[120px_1fr]"
              >
                <div>
                  <p className="font-display text-3xl font-medium text-pine">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-copper">
                    {t(item.period, lang)}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">{t(item.title, lang)}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite/72">{t(item.text, lang)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityCta({ lang }: { lang: Lang }) {
  return (
    <section id="community" className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-ink/10 bg-command-rail text-white shadow-command">
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-14">
          <div>
            <SectionLabel dark>{t(copy.sections.communityTitle, lang)}</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-none tracking-normal sm:text-6xl">
              {t(copy.cta.title, lang)}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">{t(copy.cta.text, lang)}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-celadon"
                href="#command"
              >
                {t(copy.cta.primary, lang)}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/22 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-celadon"
                href="#roadmap"
              >
                {t(copy.cta.secondary, lang)}
              </a>
            </div>
          </div>
          <div className="grid content-end gap-3">
            {command.rules.map((rule) => (
              <div
                key={t(rule.label, "en")}
                className="flex items-center justify-between gap-4 rounded-lg border border-white/14 bg-white/8 p-4"
              >
                <span className="text-sm font-semibold text-white/82">{t(rule.label, lang)}</span>
                <ChevronRight size={17} className="text-celadon" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-ink/10 bg-pearl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-graphite/70 lg:flex-row lg:items-center">
        <div>
          <p className="font-display text-3xl font-medium text-ink">Riai</p>
          <p className="mt-2 max-w-3xl leading-6">{t(copy.footer.legal, lang)}</p>
        </div>
        <nav className="flex flex-wrap gap-4 font-semibold text-graphite" aria-label={t(copy.a11y.footer, lang)}>
          <a href="#product" className="hover:text-ink">
            {t(copy.nav.product, lang)}
          </a>
          <a href="#safety" className="hover:text-ink">
            {t(copy.nav.safety, lang)}
          </a>
          <a href="#roadmap" className="hover:text-ink">
            {t(copy.nav.roadmap, lang)}
          </a>
        </nav>
      </div>
    </footer>
  );
}

function FeatureRow({
  icon,
  title,
  text
}: {
  icon: keyof typeof icons;
  title: string;
  text: string;
}) {
  const Icon = icons[icon];

  return (
    <article className="rounded-lg border border-ink/10 bg-white/65 p-5 shadow-quiet backdrop-blur">
      <div className="flex gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-mist text-pine">
          <Icon size={21} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-graphite/72">{text}</p>
        </div>
      </div>
    </article>
  );
}

function Panel({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-ink/10 bg-[#fffdf8] p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-sm font-extrabold text-ink">{title}</h3>
      </div>
      {children}
    </section>
  );
}

function SectionLabel({
  children,
  dark
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={cx(
        "text-xs font-extrabold uppercase tracking-[0.18em]",
        dark ? "text-celadon" : "text-lagoon"
      )}
    >
      {children}
    </p>
  );
}
