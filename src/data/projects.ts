// Single source of truth for showcased work.
// Imported by Showcase.astro (server render) and by its client script (state).

export interface Project {
  id: string;
  name: string;
  sector: string;
  year: string;
  /** Case-study route (placeholder until /work pages exist) */
  href: string;
  /** Fake URL shown in the mockup chrome */
  url: string;
  /** Mockup screenshot — also reused, blurred, as the reactive background */
  image: string;
  /** Tint used for glow, pill dot and background wash */
  accent: string;
  metric: { value: string; label: string };
  summary: string;
  stack: string[];
  /** Opens in a new tab (live client site instead of an internal case page) */
  external?: boolean;
  /** Image + crop used by the mobile carousel card (defaults to `image`) */
  thumb?: { src: string; position?: string };
  /**
   * Brand takeover: when present, the hover state shows this device composite
   * on a custom CSS backdrop instead of the generic browser mockup.
   */
  brand?: {
    scene: { src: string; width: number; height: number };
    backdrop: string;
    logo: string;
    /** Text that orbits the logo sticker (omit to hide the ring) */
    ring?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'burgerhouse',
    name: 'Burger House',
    sector: 'Food & Beverage · Mérida',
    year: '2025',
    href: 'https://www.burgerhousemerida.com',
    external: true,
    url: 'burgerhousemerida.com',
    image: '/work/burger-house/scene-wide.jpg',
    thumb: { src: '/work/burger-house/scene-portrait.jpg', position: 'center 73%' },
    accent: '#F74431',
    metric: { value: '0%', label: 'commission per order' },
    summary:
      'Digital menu & ordering system: live search, category filters and a cart that checks out straight to WhatsApp. Plus a build-your-own-burger station, video stories and full Meta Pixel + GA4 tracking.',
    stack: ['Tailwind', 'JavaScript', 'WhatsApp', 'Meta Pixel', 'GA4'],
    brand: {
      scene: { src: '/work/burger-house/scene-wide.jpg', width: 1024, height: 474 },
      backdrop:
        'radial-gradient(ellipse 60% 55% at 52% 34%, #8A0A1F 0%, #6A0717 38%, #4A0511 66%, #22030A 100%)',
      logo: '/work/burger-house/logo.png',
      ring: 'Familia • Amigos • Compartir • Mérida •',
    },
  },
  {
    id: 'fleetos',
    name: 'FleetOS',
    sector: 'Logistics SaaS · Venezuela',
    year: '2025',
    href: 'https://envias-production.up.railway.app',
    external: true,
    url: 'fleetos.app',
    image: '/work/envias/enviashero.jpg',
    thumb: { src: '/work/envias/enviashero.jpg', position: 'center 40%' },
    accent: '#3B82F6',
    metric: { value: '4', label: 'branches connected in real time' },
    summary:
      'Last-mile logistics SaaS: public shipment tracking, live KPI dashboard, GPS-powered route planner, mobile driver portal with photo proof-of-delivery and satellite client confirmation.',
    stack: ['Astro', 'PostgreSQL', 'Railway', 'Leaflet', 'WhatsApp API'],
    brand: {
      scene: { src: '/work/envias/enviashero.jpg', width: 1456, height: 816 },
      backdrop:
        'radial-gradient(ellipse 65% 60% at 50% 38%, #0F2460 0%, #091A4A 35%, #060F2E 65%, #020810 100%)',
      logo: '/work/envias/logo.svg',
    },
  },
  {
    id: 'onboardiq',
    name: 'OnboardIQ',
    sector: 'B2B SaaS',
    year: '2025',
    href: '/work/onboardiq',
    url: 'app.onboardiq.io',
    image: '/mockup-onboarding.jpg',
    accent: '#818CF8',
    metric: { value: '48h', label: 'time-to-value' },
    summary: 'Enterprise onboarding cut from 14 days to 48 hours. Eleven manual handoffs replaced by automated provisioning.',
    stack: ['Next.js', 'Temporal', 'Resend'],
  },
  {
    id: 'complianceflow',
    name: 'ComplianceFlow',
    sector: 'Financial Services',
    year: '2024',
    href: '/work/complianceflow',
    url: 'reports.complianceflow.io',
    image: '/mockup-compliance.jpg',
    accent: '#34D399',
    metric: { value: '−96%', label: 'reporting time' },
    summary: 'A 40-hour manual compliance cycle turned into a 90-minute pipeline. Zero manual errors in 8 months.',
    stack: ['Python', 'Airflow', 'dbt'],
  },
  {
    id: 'apex',
    name: 'Apex Storefront',
    sector: 'E-Commerce',
    year: '2024',
    href: '/work/apex-storefront',
    url: 'apex-store.io',
    image: '/mockup-ecommerce.jpg',
    accent: '#FB923C',
    metric: { value: '+34%', label: 'revenue in 60 days' },
    summary: 'Headless rebuild with real-time sync. 98/100 PageSpeed, cart abandonment down from 78% to 51%.',
    stack: ['Astro', 'Shopify API', 'Cloudflare'],
  },
];
