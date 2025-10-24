"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Construction,
  Globe,
  Mail,
  MapPin,
  Palette,
  PhoneCall,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import clsx from "clsx";

type Service = {
  title: string;
  description: string;
  tag: string;
  icon: ReactNode;
};

const heroVideo =
  "https://cdn.coverr.co/videos/coverr-developers-collaborating-on-a-project-7081/1080p.mp4";
const cultureVideo =
  "https://cdn.coverr.co/videos/coverr-lights-of-the-future-9451/1080p.mp4";

const services: Service[] = [
  {
    title: "Full-Stack Web Engineering",
    description:
      "Strategic architecture, modular coding patterns, CI/CD and observability across enterprise-grade web ecosystems.",
    tag: "A-Z Delivery",
    icon: <Server className="h-6 w-6 text-sky-300" />,
  },
  {
    title: "Python & Django Platforms",
    description:
      "Reusable Django apps, DRF APIs, async tasks, and integrations for complex business workflows and admin tooling.",
    tag: "Python Excellence",
    icon: <Workflow className="h-6 w-6 text-cyan-300" />,
  },
  {
    title: "MERN Product Accelerators",
    description:
      "React experiences powered by Node.js and MongoDB for streaming, commerce, analytics, and high-frequency interactions.",
    tag: "Modern Apps",
    icon: <Rocket className="h-6 w-6 text-indigo-300" />,
  },
  {
    title: "Design to Pixel-Perfect Code",
    description:
      "Figma to production-grade interfaces with design systems, accessibility, motion, and component libraries baked in.",
    tag: "Creative Studio",
    icon: <Palette className="h-6 w-6 text-emerald-300" />,
  },
  {
    title: "Managed Cloud & Hosting",
    description:
      "AWS, Vercel, DigitalOcean, Docker, load balancing, disaster recovery, SSL, and automated backup policies.",
    tag: "Always-On",
    icon: <ShieldCheck className="h-6 w-6 text-teal-200" />,
  },
  {
    title: "SEO & Growth Optimization",
    description:
      "Keyword research for Indian markets, Core Web Vitals tuning, structured data, localized landing pages, and analytics.",
    tag: "Growth Engine",
    icon: <Globe className="h-6 w-6 text-sky-200" />,
  },
];

const differentiators = [
  {
    title: "Salem roots, nationwide reach",
    description:
      "Headquartered in Salem, Tamil Nadu while collaborating with startups, SMBs, and enterprises across New Delhi, Bengaluru, Mumbai, Hyderabad, and beyond.",
  },
  {
    title: "Industry-beating launch velocity",
    description:
      "Reusable accelerators, documented sprints, and automated pipelines reduce time-to-market while preserving craftsmanship.",
  },
  {
    title: "Partner-first collaboration",
    description:
      "Seasoned architects, UX strategists, content specialists, and DevOps experts aligned with your business KPIs from kickoff to ongoing optimization.",
  },
];

const process = [
  {
    phase: "Discover",
    title: "Strategy & SEO Intelligence",
    detail:
      "Deep requirement workshops, competition benchmarking, Indian buyer persona mapping, and content calendars that rank.",
  },
  {
    phase: "Design",
    title: "Experience Systems & Motion",
    detail:
      "Narrative-led UX, component libraries, micro-interactions, and brand-differentiating visuals crafted in collaboration.",
  },
  {
    phase: "Build",
    title: "Engineering & Integration",
    detail:
      "Python, Django, MERN, headless CMS, payment gateways, CRM, analytics, and automation stitched with test coverage.",
  },
  {
    phase: "Launch",
    title: "Hosting, Security, Growth",
    detail:
      "Vercel, AWS, or on-prem deployment, observability dashboards, SEO audits, and continuous conversion experiments.",
  },
];

const testimonials = [
  {
    name: "Shruti Menon",
    role: "Head of Product, D2C Beauty Brand (Mumbai)",
    quote:
      "Divinoft Developers translated our constantly evolving roadmap into weekly launches. The Django + React stack they set up is fast, resilient, and optimized for our marketing campaigns across India.",
  },
  {
    name: "Karthik Narayanan",
    role: "Founder, SaaS Platform (Chennai)",
    quote:
      "From Figma to deployment, everything felt intentional. Their SEO specialists helped us win high-intent keywords while the MERN app handles real-time collaboration without breaking a sweat.",
  },
  {
    name: "Aparna S.",
    role: "Marketing Director, Healthcare Group (Delhi NCR)",
    quote:
      "We migrated legacy portals onto a scalable Django foundation with zero downtime. Analytics, hosting, and security are now automated, freeing our teams to focus on patient experience.",
  },
];

const faqs = [
  {
    question:
      "Do you work with brands outside Salem, Tamil Nadu?",
    answer:
      "Absolutely. While our core team operates from Salem, we deliver to clients throughout India including Chennai, Bengaluru, Hyderabad, Pune, Mumbai, Delhi NCR, and international partners who need an agile Indian web team.",
  },
  {
    question: "How do you ensure SEO performance for competitive keywords?",
    answer:
      "Our SEO squad blends technical audits, India-specific keyword strategy, structured data, Core Web Vitals optimization, and localized content experiences. We apply iterative testing to grow organic traffic across regions.",
  },
  {
    question: "What deployment options do you support?",
    answer:
      "We handle end-to-end hosting and release engineering on Vercel, AWS, DigitalOcean, Azure, or custom infrastructure. CI/CD pipelines, containerization, automated backups, and 24/7 monitoring are included.",
  },
  {
    question:
      "Can you modernize an existing website without disrupting operations?",
    answer:
      "Yes. We run technical discovery, content inventory, and risk mapping to plan phased rollouts. Blue-green deployments, progressive re-skins, and API-first rebuilds keep your current revenue streams alive.",
  },
];

const metrics = [
  { label: "Projects delivered", value: "160+" },
  { label: "Avg. time to MVP", value: "6 weeks" },
  { label: "Core Web Vitals pass rate", value: "98%" },
  { label: "Client retention", value: "92%" },
];

const clientLogos = [
  "BharatOne Retail",
  "Skyline SaaS",
  "Medisphere Health",
  "TruHost Digital",
  "FinNest Capital",
  "Studio Prism",
];

const featureHighlight = [
  "API-first architectures, ready for mobile and IoT extensions.",
  "Inclusive UX with WCAG 2.2 accessibility baked into components.",
  "Content delivery edge-optimized for audiences across India.",
  "Marketing automation workflows integrated with CRM and analytics.",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Divinoft Developers",
      image:
        "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
      url: "https://agentic-9fd74f8b.vercel.app",
      telephone: "+91-91594-12345",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salem",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      areaServed: ["India"],
      sameAs: ["https://www.linkedin.com/company/divinoftdevelopers"],
      serviceOffer: services.map((service) => ({
        "@type": "Service",
        name: service.title,
        description: service.description,
      })),
    }),
    []
  );

  return (
    <div className="relative">
      <div className="smoke-layer" />
      <div className="aurora top-[-280px] left-[-180px]" />
      <div className="aurora right-[-160px] top-[-120px]" />
      <div className="aurora bottom-[-260px] left-[40%]" />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-24 px-6 pb-24 pt-10 md:px-12 lg:px-20">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sticky top-6 z-20 flex items-center justify-between rounded-full border border-slate-800/60 bg-slate-900/60 px-6 py-4 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-sky-400/20 ring-1 ring-sky-400/40" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
                Divinoft Developers
              </p>
              <p className="text-[0.85rem] text-slate-300">
                Salem | Chennai | Bengaluru | Mumbai | Pan India
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="#services"
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              Services
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              Process
            </Link>
            <Link
              href="#work"
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              Work
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-sky-400/60 bg-sky-400/10 px-5 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-400/20 hover:text-white"
            >
              Start a Project
            </Link>
          </div>
        </motion.header>

        <section className="relative isolate overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/60 shadow-[0_50px_150px_rgba(8,47,73,0.45)]">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-75"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-transparent" />
          <div className="relative z-10 flex flex-col gap-12 px-6 py-32 md:px-12 lg:flex-row lg:items-end lg:justify-between lg:px-20 lg:py-40">
            <div className="max-w-3xl space-y-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-sky-100"
              >
                <Sparkles className="h-4 w-4" />
                Salem-born, India-focused
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
              >
                We engineer full-stack web experiences that launch faster, rank higher, and convert better.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-slate-200 md:max-w-2xl md:text-xl"
              >
                Divinoft Developers partners with ambitious Indian brands to design, code, host, redesign, redevelop, and scale web products across Python, Django, and MERN ecosystems. Our Salem-based team aligns design, engineering, SEO, and hosting into one seamless journey.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-base font-semibold text-slate-950 shadow-[0_15px_45px_rgba(56,189,248,0.45)] transition hover:scale-[1.02] hover:bg-sky-300"
                >
                  Book a discovery call
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#services"
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-200/20 px-8 py-3 text-base font-semibold text-white transition hover:border-sky-300/50 hover:text-sky-100"
                >
                  Explore services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel relative max-w-sm space-y-8 p-6 md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
                Launch stats
              </p>
              <div className="space-y-2">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex items-baseline justify-between">
                    <p className="text-sm text-slate-300">{metric.label}</p>
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
              <div className="gradient-divider" />
              <p className="text-sm text-slate-300">
                We are obsessed with measurable outcomes - speed, search rankings, conversions, and scalability for Indian audiences.
              </p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="w-full">
          <div className="glass-panel flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
                Trusted by digital-first leaders
              </p>
              <p className="mt-2 max-w-xl text-base text-slate-200">
                Product founders, marketing teams, and IT heads rely on Divinoft Developers to engineer resilient experiences for fast-scaling Indian audiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-100 md:text-base">
              {clientLogos.map((client) => (
                <span
                  key={client}
                  className="floating-badge px-4 py-2 text-slate-100"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="services" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
                Services
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                Full-spectrum website services tailored to growth stories across India.
              </h2>
            </div>
            <p className="max-w-2xl text-base text-slate-200">
              From discovery to SEO sprints, we merge strategy, creativity, and engineering across Python, Django, MERN, Jamstack, and managed hosting ecosystems. Every engagement is tuned to Indian consumer journeys and multilingual content models.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-panel group h-full p-6 transition-all hover:border-sky-300/60 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl border border-slate-200/10 bg-slate-100/5 p-3 backdrop-blur">
                    {service.icon}
                  </div>
                  <span className="rounded-full border border-slate-200/20 bg-slate-100/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                    {service.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-base text-slate-300">{service.description}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-sky-200 opacity-0 transition group-hover:opacity-100">
                  Deploy-ready playbooks
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/60">
          <div className="absolute inset-0 opacity-70">
            <video
              className="h-full w-full object-cover"
              src={cultureVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="relative z-10 flex flex-col gap-10 bg-gradient-to-br from-slate-950/90 via-slate-950/60 to-slate-950/30 p-8 md:p-16 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Product squads that operate like an extension of your team.
              </h2>
              <p className="text-lg text-slate-200">
                We blend design studios, engineering pods, SEO specialists, and DevOps guardians into one unified delivery team. Motion narratives, glassmorphism, particle systems, and smoky gradients elevate every touchpoint without compromising performance.
              </p>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {featureHighlight.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-slate-200">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-sky-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel max-w-md space-y-8 p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200">
                  Why choose Divinoft?
                </p>
                <div className="mt-6 space-y-6">
                  {differentiators.map((item) => (
                    <div key={item.title}>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="#process"
                className="flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-white"
              >
                Discover our engagement model
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="process" className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
                Our Framework
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                A transparent roadmap from discovery to high-impact launch.
              </h2>
            </div>
            <p className="max-w-xl text-base text-slate-200">
              A sprint rhythm built for product founders and CXOs. Expect proactive communication, visual dashboards, and measurable success criteria every step of the way.
            </p>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute left-[12px] top-16 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-sky-300/60 via-slate-700/30 to-transparent md:block" />
            <div className="space-y-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.phase}
                  className="glass-panel relative overflow-hidden p-6 md:flex md:items-center md:gap-8 md:p-8"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="absolute left-6 top-6 hidden h-16 w-16 rounded-full bg-sky-300/20 blur-3xl md:block" />
                  <div className="relative w-full">
                    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-300/30 text-base text-sky-100">
                        {index + 1}
                      </span>
                      {step.phase}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-base text-slate-300">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="work" className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="glass-panel overflow-hidden p-0"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative h-full">
              <video
                className="h-full w-full object-cover"
                src="https://cdn.coverr.co/videos/coverr-team-of-engineers-discussing-project-9739/1080p.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">
                  Case Study Spotlight
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white">
                  Modern commerce infrastructure for a pan-India retail brand.
                </h3>
                <p className="mt-3 text-base text-slate-200">
                  Migrated a legacy PHP portal to a JAMstack storefront powered by Next.js, Django APIs, and headless CMS. Achieved 40% faster load speeds and 132% growth in organic sessions in three months.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  <span className="floating-badge px-4 py-2">Next.js</span>
                  <span className="floating-badge px-4 py-2">Django REST</span>
                  <span className="floating-badge px-4 py-2">Vercel</span>
                  <span className="floating-badge px-4 py-2">SEO Sprint</span>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="glass-panel flex flex-col gap-6 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200">
              Transformation narratives
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Healthcare portal redesign for national hospital chain
                </h4>
                <p className="mt-2 text-sm text-slate-300">
                  Introduced multilingual React front-end with SEO-first content model and HIPAA-ready Django backend for secure patient onboarding.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Education SaaS built on MERN with real-time analytics
                </h4>
                <p className="mt-2 text-sm text-slate-300">
                  Delivered collaborative classrooms, assessment engines, and microservices orchestrated on Kubernetes with automated deployments.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  SEO recovery & Core Web Vitals uplift for fintech platform
                </h4>
                <p className="mt-2 text-sm text-slate-300">
                  Refactored front-end bundles, improved server-side rendering, and launched landing pages that rank for regional credit terms.
                </p>
              </div>
            </div>
            <Link
              href="#contact"
              className="flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-white"
            >
              Let us architect your next success story
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.blockquote
              key={testimonial.name}
              className="glass-panel flex h-full flex-col gap-6 p-8"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="text-lg text-slate-100">{testimonial.quote}</p>
              <footer className="mt-auto">
                <p className="text-base font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-300">{testimonial.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </AnimatedSection>

        <AnimatedSection className="glass-panel overflow-hidden px-6 py-8 md:px-10 md:py-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">
                Continuous evolution
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Analytics, automation, and optimization keep your digital presence miles ahead.
              </h2>
              <p className="text-base text-slate-200">
                Divinoft Developers operates as a long-term partner. We monitor Core Web Vitals, launch growth experiments, and ship new features while your teams focus on market opportunities.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/10 bg-slate-900/60 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
                  Tooling
                </p>
                <p className="mt-3 text-base text-slate-300">
                  Jira | Linear | GitHub | GitLab | Notion | Slack | ClickUp
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/10 bg-slate-900/60 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
                  Integrations
                </p>
                <p className="mt-3 text-base text-slate-300">
                  Razorpay | Zoho | HubSpot | Salesforce | Google Analytics 4 | Mixpanel
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200">
              Frequently asked questions
            </p>
            <div className="mt-6 divide-y divide-slate-200/10">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={faq.question} className="py-5">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq((prev) => (prev === index ? null : index))
                      }
                      className="flex w-full items-center justify-between text-left text-lg font-semibold text-white transition hover:text-sky-100"
                    >
                      <span>{faq.question}</span>
                      <span
                        className={clsx(
                          "inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/20 text-sm transition",
                          isOpen ? "bg-sky-400/20 text-sky-100" : "text-slate-300"
                        )}
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    <motion.p
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={clsx(
                        "overflow-hidden text-base text-slate-300",
                        isOpen ? "mt-3" : "mt-0"
                      )}
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                );
              })}
            </div>
          </div>
          <motion.div
            className="glass-panel flex flex-col gap-8 p-8"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">
              Engagement accelerators
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Construction className="h-10 w-10 text-sky-300" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Rapid modernization blueprint
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Audit existing stack, identify quick wins, and chart a phased transformation plan with zero downtime.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Compass className="h-10 w-10 text-emerald-300" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    SEO-led content roadmap
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Indian buyer keyword intelligence, multilingual copy decks, and structured schema to outperform national competitors.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="#contact"
              className="flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-white"
            >
              Request a strategic workshop
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 md:p-12">
          <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-sky-300/30 blur-[180px]" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
                Let us co-create your next milestone
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Share your vision and we will deliver a roadmap - from Salem to scale across India.
              </h2>
              <p className="text-base text-slate-200">
                Send us your requirements, product backlog, or redesign wishlist. We will respond within one business day with next steps, timelines, and a curated playbook.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200/10 bg-slate-900/60 p-5">
                  <PhoneCall className="h-6 w-6 text-sky-300" />
                  <p className="mt-3 text-sm text-slate-300">Call us</p>
                  <p className="text-base font-semibold text-white">
                    +91 91594 12345
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/10 bg-slate-900/60 p-5">
                  <Mail className="h-6 w-6 text-sky-300" />
                  <p className="mt-3 text-sm text-slate-300">Email</p>
                  <p className="text-base font-semibold text-white">
                    hello@divinoft.com
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/10 bg-slate-900/60 p-5">
                  <MapPin className="h-6 w-6 text-sky-300" />
                  <p className="mt-3 text-sm text-slate-300">Studio</p>
                  <p className="text-base font-semibold text-white">
                    Fairlands, Salem, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>
            <form className="glass-panel w-full max-w-xl space-y-4 p-6 md:p-8" action="https://formsubmit.co/hello@divinoft.com" method="POST">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-200">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl border border-slate-200/10 bg-slate-950/60 px-4 py-3 text-base text-white shadow-inner focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                  />
                </label>
                <label className="space-y-2 text-sm text-slate-200">
                  Work email
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-slate-200/10 bg-slate-950/60 px-4 py-3 text-base text-white shadow-inner focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm text-slate-200">
                What can we build together?
                <textarea
                  name="project_details"
                  rows={4}
                  className="w-full rounded-xl border border-slate-200/10 bg-slate-950/60 px-4 py-3 text-base text-white shadow-inner focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                  placeholder="Tell us about your product vision, timeline, and KPIs..."
                />
              </label>
              <input type="hidden" name="_next" value="https://agentic-9fd74f8b.vercel.app/thank-you" />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-sky-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.45)] transition hover:scale-[1.01] hover:bg-sky-300"
              >
                Schedule a strategy call
                <ArrowUpRight className="h-5 w-5" />
              </button>
              <p className="text-xs text-slate-400">
                By submitting, you agree to our privacy commitment. We respond within one business day.
              </p>
            </form>
          </div>
        </AnimatedSection>

        <footer className="flex flex-col gap-6 pb-12 text-sm text-slate-400">
          <div className="gradient-divider" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p>
              (c) {new Date().getFullYear()} Divinoft Developers. Strategic web design, development, hosting, and SEO for Indian innovators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.linkedin.com/company/divinoftdevelopers"
                className="transition hover:text-white"
              >
                LinkedIn
              </Link>
              <Link href="tel:+919159412345" className="transition hover:text-white">
                +91 91594 12345
              </Link>
              <Link
                href="mailto:hello@divinoft.com"
                className="transition hover:text-white"
              >
                hello@divinoft.com
              </Link>
            </div>
          </div>
        </footer>
      </main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
