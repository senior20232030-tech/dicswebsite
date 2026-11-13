import journey from "@/assets/news/corporate-journey.pdf.asset.json";
import manufacturing from "@/assets/news/manufacturing.jpg.asset.json";
import facility from "@/assets/news/facility.jpg.asset.json";
import { catalogAssetUrl } from "@/lib/catalog-asset-url";

export const journeyPdf = catalogAssetUrl(journey);
export const homeSlides = [
  { src: catalogAssetUrl(manufacturing), alt: "DICS engineers assembling industrial control panels in the Bangalore manufacturing unit", label: "Engineering & manufacturing · Bangalore" },
  { src: catalogAssetUrl(facility), alt: "DICS manufacturing facility in Peenya, Bangalore", label: "Our manufacturing facility · Peenya" },
];