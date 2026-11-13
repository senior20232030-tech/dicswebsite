import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homeSlides } from "@/lib/news";

export function HomeSlideshow() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => { setPlaying(!window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActive((v) => (v + 1) % homeSlides.length), 5500);
    return () => window.clearInterval(timer);
  }, [playing]);
  const move = (step: number) => { setPlaying(false); setActive((v) => (v + step + homeSlides.length) % homeSlides.length); };
  return (
    <section className="border-b border-border bg-card py-6" aria-label="DICS facility photographs">
      <div className="container-site">
        <div className="relative h-56 overflow-hidden rounded-md bg-tech sm:h-72 lg:h-80">
          {homeSlides.map((slide, i) => <img key={slide.src} src={slide.src} alt={slide.alt} aria-hidden={i !== active} loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${i === active ? "opacity-100" : "opacity-0"}`} />)}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-card/95 px-4 py-3">
            <p className="text-sm font-medium text-foreground">{homeSlides[active]?.label}</p>
            <div className="flex shrink-0 gap-1">
              <Button variant="ghost" size="icon" aria-label="Previous photograph" title="Previous photograph" onClick={() => move(-1)}><ChevronLeft /></Button>
              <Button variant="ghost" size="icon" aria-label={playing ? "Pause slideshow" : "Play slideshow"} title={playing ? "Pause slideshow" : "Play slideshow"} onClick={() => setPlaying((v) => !v)}>{playing ? <Pause /> : <Play />}</Button>
              <Button variant="ghost" size="icon" aria-label="Next photograph" title="Next photograph" onClick={() => move(1)}><ChevronRight /></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}