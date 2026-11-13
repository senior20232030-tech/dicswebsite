import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/Blocks";
import { events } from "@/lib/events";
import { seo } from "@/lib/seo";
import { journeyPdf } from "@/lib/news";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: seo("News & Events — Our Journey", "Explore the DICS and Sansree corporate journey since 1996, our company presentation, milestones and exhibitions.") }),
  component: Events,
});

function Events() {
  return (
    <>
      <PageHeader title="News & Events" eyebrow="DICS" crumbs={[{ label: "News & Events" }]} />
      <section className="container-site py-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div><h2 className="text-2xl font-bold">Our Journey</h2><p className="mt-1 text-sm text-muted-foreground">Digital Instruments &amp; Control Systems · Sansree Automation · Since 1996</p></div>
          <div className="flex gap-2">
            <Button asChild variant="outline"><a href={journeyPdf} target="_blank" rel="noopener noreferrer"><ExternalLink /> Open PDF</a></Button>
            <Button asChild><a href={journeyPdf} download="DICS-Corporate-Journey-2026.pdf" target="_blank" rel="noopener noreferrer"><Download /> Download</a></Button>
          </div>
        </div>
        <object data={`${journeyPdf}#page=4&view=FitH`} type="application/pdf" aria-label="DICS corporate journey presentation" className="h-[65vh] min-h-80 w-full border border-border bg-tech">
          <div className="grid min-h-80 place-items-center"><Button asChild variant="outline"><a href={journeyPdf} target="_blank" rel="noopener noreferrer">View Our Journey <ExternalLink /></a></Button></div>
        </object>
      </section>
      <section className="container-site py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((e) => (
            <Link
              key={e.slug}
              to="/events/$slug"
              params={{ slug: e.slug }}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
            >
              <div className="aspect-[16/10] overflow-hidden bg-tech">
                <img src={e.cover} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{e.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-bold group-hover:text-primary">{e.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.summary}</p>
                <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-primary">
                  Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
