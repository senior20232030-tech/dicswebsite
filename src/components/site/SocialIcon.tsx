import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function SocialIcon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const Icon = { LinkedIn: Linkedin, Facebook, Instagram, YouTube: Youtube }[name];
  if (Icon) return <Icon className={className} aria-hidden />;
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden><path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.4L1 2h6.4l4.4 5.9L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" /></svg>;
}