import { createFileRoute } from '@tanstack/react-router';
import { PageHeading, CTABanner } from '@/components/site';
import { faqs, pageHead } from '@/lib/site-data';
export const Route=createFileRoute('/faq')({head:()=>pageHead('Gutter FAQs','Get answers about gutter materials, maintenance, repairs, estimates, and gutter guards for Texas properties.'),component:FAQ});
function FAQ(){return <main><PageHeading eyebrow="Straight answers" title="Let’s clear a few things up." description="Common questions about gutters, maintenance, and getting started with GutterMax."/><section className="section"><div className="container-site faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section><CTABanner/></main>}
