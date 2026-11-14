import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Factory, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumbs, SectionHeading } from "@/components/site/Blocks";
import { BrandLogo } from "@/components/site/BrandLogo";
import { events } from "@/lib/events";
import { brands } from "@/lib/site";
import { journeyPhotos, milestones, journeySectors, journeyOffices } from "@/lib/journey";
import { seo } from "@/lib/seo";

const cover = journeyPhotos[10]?.[1];
export const Route = createFileRoute("/events")({
  head: () => ({ meta: [
    ...seo("News & Events — The DICS & Sansree Journey", "Discover the DICS and Sansree journey since 1996: our milestones, people, automation partners, manufacturing facilities and offices across India."),
    ...(cover ? [{ property: "og:image", content: cover }, { name: "twitter:image", content: cover }] : []),
  ] }),
  component: Events,
});

function Photos({ page, city }: { page: number; city: string }) {
  return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{journeyPhotos[page]?.map((src, i) => <img key={src} src={src} alt={`${city} — ${page === 10 || page === 12 || page === 14 ? "manufacturing facility" : "office"} photo ${i + 1}`} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-md bg-tech object-cover" />)}</div>;
}

function Events() {
  return <>
    <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
      <img src={cover} alt="Inside the DICS Bangalore manufacturing facility" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="container-site py-12 lg:py-20">
        <Breadcrumbs crumbs={[{ label: "News & Events" }]} />
        <p className="mt-10 font-mono text-xs uppercase tracking-widest text-navy-muted">Digital Instruments &amp; Control Systems · Sansree Automation Pvt Ltd</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-normal text-navy-foreground sm:text-5xl lg:text-6xl">Our Journey</h1>
        <p className="mt-4 text-2xl font-medium text-navy-foreground">Since 1996. Together, moving industry forward.</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-muted">From an automation firm in Bengaluru to a nationwide team of engineers, manufacturing specialists and technology partners.</p>
        <Button asChild variant="heroOutline" className="mt-8"><Link to="/contact-us">Meet our team <ArrowRight /></Link></Button>
      </div>
    </section>

    <section className="border-b border-border bg-card">
      <div className="container-site grid grid-cols-2 gap-y-8 py-9 lg:grid-cols-4">
        {[{ value: "300+", label: "Employees", icon: Users }, { value: "60+", label: "Support engineers", icon: Handshake }, { value: "9", label: "Independent offices", icon: MapPin }, { value: "3", label: "Manufacturing facilities", icon: Factory }].map(({ value, label, icon: Icon }) => <div key={label} className="flex items-center gap-3 border-l-2 border-primary pl-4"><Icon className="hidden h-7 w-7 text-primary sm:block" /><div><p className="text-3xl font-bold text-foreground">{value}</p><p className="mt-1 text-sm text-muted-foreground">{label}</p></div></div>)}
      </div>
    </section>

    <section className="container-site py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div><SectionHeading eyebrow="DICS & Sansree" title="Built on engineering. Grown through people." /><p className="mt-5 leading-relaxed text-muted-foreground">Founded in 1996 with our head office in Bengaluru, DICS has grown through long-term technology partnerships, regional expansion and investment in our own manufacturing facilities.</p><p className="mt-4 leading-relaxed text-muted-foreground">Our nine independent offices serve Bengaluru, Chennai, Hyderabad, Mumbai, Coimbatore, Noida, Lucknow, Vizag and Pune. Six resident-engineer offices extend support to Hubballi, Mysuru, Mangalore, Hosur, Puducherry and Penukonda.</p></div>
        <img src={journeyPhotos[10]?.[0]} alt="DICS manufacturing building in Bangalore" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />
      </div>
    </section>

    <section className="bg-tech py-16 lg:py-20">
      <div className="container-site"><SectionHeading eyebrow="1996 onwards" title="Milestones that shaped us" intro="Our journey of partnerships, new offices and manufacturing growth." />
        <ol className="relative mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{milestones.map((m) => <li key={m.year} className="border-t-2 border-primary/30 pt-5"><p className="font-mono text-xl font-semibold text-primary">{m.year}</p><h3 className="mt-2 text-lg font-semibold tracking-normal text-foreground">{m.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.detail}</p></li>)}</ol>
      </div>
    </section>

    <section className="container-site py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]"><div><SectionHeading eyebrow="Together as a team" title="300+ people. One shared purpose." /><p className="mt-5 leading-relaxed text-muted-foreground">Experienced managers, application engineers, sales engineers, shop-floor technicians and support staff work together to support industrial automation across India.</p><p className="mt-5 border-l-2 border-primary pl-4 text-lg font-semibold text-foreground">Female employees represent 26% of our team.</p></div>
        <div className="divide-y divide-border">{[{ title: "Managers", experience: "20 years’ average experience", detail: "Leadership and operational expertise" }, { title: "Application engineers", experience: "12 years’ average experience", detail: "Technical guidance and application support" }, { title: "Sales engineers", experience: "15 years’ average experience", detail: "Product knowledge and customer relationships" }, { title: "Technicians & support staff", experience: "Shop-floor expertise", detail: "Manufacturing and day-to-day support" }].map((t) => <div key={t.title} className="py-5 first:pt-0"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="text-lg font-semibold tracking-normal text-foreground">{t.title}</h3><span className="text-sm text-primary">{t.experience}</span></div><p className="mt-2 text-sm text-muted-foreground">{t.detail}</p></div>)}</div>
      </div>
    </section>

    <section className="bg-tech py-16"><div className="container-site"><SectionHeading eyebrow="Industries we serve" title="Automation across applications" /><ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-5">{journeySectors.map((s) => <li key={s} className="border-b border-border pb-4 text-base font-semibold text-foreground">{s}</li>)}</ul></div></section>

    <section className="container-site py-16 lg:py-20"><SectionHeading eyebrow="Technology relationships" title="Partners in our progress" /><div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">{brands.map((b) => <Link key={b.slug} to="/our-brands/$slug" params={{ slug: b.slug }} className="flex h-24 items-center justify-center rounded-md border border-border bg-card p-4 transition-shadow hover:shadow-card"><BrandLogo brand={b} /></Link>)}</div><p className="mt-5 text-sm text-muted-foreground">Our corporate presentation also features Crouzet among our channel partners.</p></section>

    <section className="bg-tech py-16 lg:py-20"><div className="container-site"><SectionHeading eyebrow="Made with care" title="Inside our manufacturing facilities" intro="Our original facility photographs from Bangalore, Chennai and Mumbai." />
      <div className="mt-10 space-y-10">{[{ city: "Bangalore", page: 10, address: "A-321, 7th Main, 2nd Stage, Peenya Industrial Area, Bangalore 560058" }, { city: "Chennai", page: 12, address: "A4/3, Krishna Tower, III Phase, Thiru-vi-ka Industrial Estate, Guindy, Chennai 600032" }, { city: "Mumbai", page: 14, address: "101, Mayuresh Chambers, Sector 11, CBD Belapur, Navi Mumbai 400614" }].map((f) => <div key={f.city}><div className="mb-5 flex flex-col justify-between gap-2 md:flex-row md:items-end"><h3 className="text-2xl font-bold tracking-normal text-foreground">{f.city}</h3><p className="max-w-lg text-sm text-muted-foreground">{f.address}</p></div><Photos page={f.page} city={f.city} /></div>)}</div>
    </div></section>

    <section className="container-site py-16 lg:py-20"><div className="grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><SectionHeading eyebrow="Across India" title="Local presence. Connected expertise." /><img src={journeyPhotos[7]?.[0]} alt="DICS office network across India, as shown in the corporate presentation" loading="lazy" className="mt-6 h-auto w-full rounded-md" /><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Our independent offices include Lucknow, supported by a wider resident-engineer network.</p></div><Accordion type="single" collapsible defaultValue="Bangalore · Head Office">{journeyOffices.map((o) => <AccordionItem key={o.city} value={o.city}><AccordionTrigger className="py-5 text-lg font-semibold">{o.city}</AccordionTrigger><AccordionContent><address className="mb-5 space-y-2 text-sm not-italic text-muted-foreground"><p>{o.address}</p><p>{o.phone}</p><a href={`mailto:${o.email}`} className="inline-block text-primary hover:underline">{o.email}</a></address><Photos page={o.page} city={o.city} /></AccordionContent></AccordionItem>)}</Accordion></div></section>

    <section className="border-t border-border bg-tech py-16 lg:py-20"><div className="container-site"><SectionHeading eyebrow="News & Events" title="Our story continues" /><div className="mt-9 grid gap-8 md:grid-cols-2">{events.map((e) => <Link key={e.slug} to="/events/$slug" params={{ slug: e.slug }} className="group overflow-hidden rounded-lg border border-border bg-card"><img src={e.cover} alt={e.title} loading="lazy" className="aspect-[16/9] w-full object-cover" /><div className="p-6"><p className="eyebrow">{e.eyebrow}</p><h2 className="mt-3 text-2xl font-bold tracking-normal group-hover:text-primary">{e.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.summary}</p><span className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">Read more <ArrowRight className="h-4 w-4" /></span></div></Link>)}</div></div></section>
  </>;
}