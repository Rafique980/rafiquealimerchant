import { createFileRoute } from "@tanstack/react-router";
import profilePhoto from "@/assets/rafiqueali-profile.jpg.asset.json";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  GraduationCap,
  Award,
  Sparkles,
  Database,
  BarChart3,
  Code2,
  Wrench,
  Brain,
  MapPin,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const SKILLS = [
  {
    title: "Languages & Libraries",
    icon: Code2,
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
  },
  {
    title: "Data Viz & BI",
    icon: BarChart3,
    items: ["Power BI", "Plotly", "Streamlit"],
  },
  {
    title: "Database & Analytics",
    icon: Database,
    items: ["MySQL", "SQL", "Data Cleaning", "ETL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Excel", "GitHub"],
  },
  {
    title: "Concepts",
    icon: Brain,
    items: ["Exploratory Data Analysis", "Time Series Forecasting (ARIMA)", "Machine Learning Basics"],
  },
];

const PROJECTS = [
  {
    title: "Sales Analytics & Forecasting Web App",
    description:
      "Interactive Streamlit dashboard for revenue trends, KPIs, and product analysis. Implements ARIMA time-series forecasting for sales prediction and auto-generates business insights.",
    tags: ["Python", "Streamlit", "Plotly", "ARIMA"],
    links: [
      { label: "Live Demo", href: "https://sales-forecast-dashboard-kxzh3m7itdudwlsbatmjkh.streamlit.app/", icon: ExternalLink, variant: "primary" as const },
      { label: "GitHub", href: "https://github.com/Rafique980/Ai-powered-Sales-dashboard", icon: Github, variant: "outline" as const },
    ],
  },
  {
    title: "Ecommerce Customer Analytics Dashboard",
    description:
      "End-to-end analytics on a 100k+ record relational ecommerce dataset. Cleaning in Python/SQL, modeling relationships across orders, customers, payments, products, reviews and sellers, then Power BI dashboards for revenue, customer, payment and review analytics.",
    tags: ["MySQL", "Power BI", "Python"],
    links: [
      { label: "Download .pbix", href: "https://drive.google.com/file/d/1dosRdQbCd7ZAY9rlqAgHz04vuW9_wdGX/view?usp=drivesdk", icon: Download, variant: "primary" as const },
      { label: "GitHub", href: "https://github.com/Rafique980/ecommerce-sales-analytics-dashboard", icon: Github, variant: "outline" as const },
    ],
  },
  {
    title: "Customer Churn Prediction & Analysis",
    description:
      "Classification models to predict churn risk, analysis of churn-driving behavioral factors, and business-focused retention recommendations with visualizations.",
    tags: ["Python", "Machine Learning", "Tableau"],
    links: [
      { label: "Live Dashboard", href: "https://public.tableau.com/app/profile/rafique.merchant/viz/CustomerChurnAnalysisDashboard_17851419341160/Dashboard1", icon: ExternalLink, variant: "primary" as const },
      { label: "GitHub", href: "https://github.com/Rafique980/Customer-Churn-Prediction", icon: Github, variant: "outline" as const },
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "Tata — GenAI Powered Data Analytics Job Simulation",
    org: "Forage",
    date: "May 2026",
    detail:
      "EDA with AI-assisted tools, predictive modeling insights for delinquency risk, and an AI-driven collections strategy proposal.",
    verify: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_69feefc482b3bdb1025bfe63_1778848721471_completion_certificate.pdf",
  },
  {
    title: "Deloitte Australia — Data Analytics Job Simulation",
    org: "Forage",
    date: "May 2026",
    detail:
      "Forensic technology data analysis, interactive Tableau dashboard, and Excel-based classification with business insights.",
    verify: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_69feefc482b3bdb1025bfe63_1779088934449_completion_certificate.pdf",
  },
  {
    title: "Google Cloud Computing Foundations",
    org: "Google",
    date: "Certificate",
    detail: "Fundamentals of cloud infrastructure, storage, and compute services on GCP.",
    verify: "https://www.credly.com/badges/f3c72d2d-3995-4bc1-a693-bd0b7dabad20/linked_in_profile",
  },
  {
    title: "MS-CIT",
    org: "MKCL",
    date: "Score: 81/100",
    detail: "Microsoft Office suite and computer fundamentals certification.",
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Portfolio() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-lg" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display font-bold">
          <img
            src={profilePhoto.url}
            alt="Rafiqueali Merchant"
            className="h-8 w-8 rounded-full object-cover ring-2 ring-primary/60"
          />
          <span className="hidden sm:inline">Rafiqueali</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          Let's talk
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md border border-border p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div data-reveal className="opacity-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for internships & collaborations
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Rafiqueali <span className="text-accent-glow">Merchant</span>
            </h1>
            <p className="mt-4 font-display text-xl text-muted-foreground sm:text-2xl">
              Aspiring Data Analyst — turning raw data into decisions.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              A data science student who enjoys turning messy datasets into dashboards,
              forecasts, and business insights. Comfortable across the full pipeline —
              cleaning in Python, querying in SQL, visualizing in Power BI and Plotly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/Rafiqueali-Merchant-Resume.docx"
                download
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div data-reveal className="opacity-0">
            <HeroChart />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroChart() {
  // Decorative SVG "chart" motif — not real data, just texture.
  const points = [12, 28, 22, 40, 34, 55, 48, 68, 60, 82, 74, 92];
  const w = 400;
  const h = 240;
  const stepX = w / (points.length - 1);
  const maxY = 100;
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * stepX} ${h - (p / maxY) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <div className="card-surface relative overflow-hidden p-6">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-mono">revenue.csv</span>
        <span className="flex items-center gap-1 text-primary">
          <Sparkles className="h-3 w-3" /> forecast
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
        <Stat label="CGPA" value="8.80" />
        <Stat label="Projects" value="3" />
        <Stat label="Certs" value="4" />
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-4 h-40 w-full">
        <defs>
          <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={0}
            x2={w}
            y1={(h / 4) * i}
            y2={(h / 4) * i}
            stroke="var(--border)"
            strokeDasharray="3 4"
          />
        ))}
        <path d={area} fill="url(#area)" />
        <path d={path} fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" />
        {points.map((p, i) => (
          <circle
            key={i}
            cx={i * stepX}
            cy={h - (p / maxY) * h}
            r={i === points.length - 1 ? 5 : 2.5}
            fill="var(--primary)"
          />
        ))}
      </svg>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-background/40 p-3">
      <div className="font-display text-2xl font-bold text-primary">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div data-reveal className="opacity-0 mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="01 / About" title="A little about me" />
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div data-reveal className="opacity-0 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a BSc Data Science student who genuinely enjoys the moment a messy CSV
              turns into a clean chart that says something useful. Most of my time goes into
              building small end-to-end projects — pulling data, cleaning it, modeling it,
              and shipping a dashboard or notebook I'd actually want to read.
            </p>
            <p>
              Right now I'm sharpening my skills through real analytics projects and industry
              job simulations while finishing my degree. I'm looking for internships and
              collaborations where I can learn from experienced teams and contribute real
              analysis, not just slide decks.
            </p>
          </div>
          <div data-reveal className="opacity-0 card-surface p-6">
            <div className="flex items-center gap-3 text-primary">
              <GraduationCap className="h-5 w-5" />
              <span className="text-xs font-mono uppercase tracking-wider">Education</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold">BSc Data Science</h3>
            <p className="text-sm text-muted-foreground">Valia College of Commerce</p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
              <span className="text-muted-foreground">Expected 2027</span>
              <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-primary">
                CGPA 8.80/10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative border-t border-border py-24">
      <div className="pointer-events-none absolute inset-0 dot-bg opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="02 / Skills"
          title="The stack I work with"
          sub="Grouped by what they do in a real analytics workflow."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} data-reveal className="opacity-0 card-surface p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="03 / Projects"
          title="Things I've built"
          sub="Shipped analytics projects — click through for code, dashboards, and demos."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              data-reveal
              className="opacity-0 card-surface flex flex-col p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  ./project
                </span>
              </div>
              <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                  {p.links.map((l) => {
                    const Icon = l.icon;
                    const primary =
                      "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90";
                    const outline =
                      "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary";
                    return (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={l.variant === "primary" ? primary : outline}
                      >
                        <Icon className="h-3.5 w-3.5" /> {l.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="04 / Certifications"
          title="Learning in public"
          sub="Structured programs and job simulations I've completed alongside my degree."
        />
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2" />
          <div className="space-y-6">
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={c.title}
                data-reveal
                className={`opacity-0 relative grid gap-4 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div className="relative pl-12 md:pl-0">
                  <span className="absolute left-2 top-4 grid h-5 w-5 place-items-center rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2">
                    <Award className="h-2.5 w-2.5 text-primary" />
                  </span>
                  <div className="card-surface p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-primary">{c.org}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">{c.date}</span>
                    </div>
                    <h3 className="mt-2 font-semibold leading-snug">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:rafiquealimerchant@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="relative border-t border-border py-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="05 / Contact"
          title="Let's build something with data"
          sub="Internship, project collaboration, or just a hello — I'll get back to you."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div data-reveal className="opacity-0 space-y-4">
            <ContactRow icon={Mail} label="Email" value="rafiquealimerchant@gmail.com" href="mailto:rafiquealimerchant@gmail.com" />
            <ContactRow icon={Phone} label="Phone" value="+91 98208 87454" href="tel:+919820887454" />
            <ContactRow icon={Linkedin} label="LinkedIn" value="rafiqueali-merchant" href="https://linkedin.com/in/rafiqueali-merchant-771159364" />
            <ContactRow icon={Github} label="GitHub" value="Rafique980" href="https://github.com/Rafique980" />
            <ContactRow icon={MapPin} label="Based in" value="Mumbai, India" />
          </div>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            data-reveal
            className="opacity-0 card-surface space-y-4 p-6"
          >
            <div>
              <label className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <input
                required
                name="name"
                className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full resize-none rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="What would you like to talk about?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Send className="h-4 w-4" />
              {sent ? "Opening your mail app…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="card-surface flex items-center gap-4 p-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rafiqueali Merchant. Built with data & care.
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/rafiqueali-merchant-771159364"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Rafique980"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="mailto:rafiquealimerchant@gmail.com"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
