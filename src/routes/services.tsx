import { createFileRoute } from '@tanstack/react-router';
import { PageHeading, CTABanner } from '@/components/site';
import { ServicesGrid } from '@/components/sections';
import { pageHead } from '@/lib/site-data';
export const Route=createFileRoute('/services')({head:()=>pageHead('Gutter Services','Explore gutter installation, repair, cleaning, guards, drainage, and fascia and soffit repair in Texas.'),component:Services});
function Services(){return <main><PageHeading eyebrow="Residential & Commercial" title="Your roofline. Fully covered." description="Practical solutions for every part of your gutter system, with straightforward advice and careful workmanship."/><section className="section"><div className="container-site"><ServicesGrid detailed/></div></section><CTABanner/></main>}
