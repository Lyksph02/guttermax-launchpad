import { createFileRoute } from '@tanstack/react-router';
import { PageHeading, CTABanner } from '@/components/site';
import { BeforeAfter } from '@/components/sections';
import { pageHead } from '@/lib/site-data';
import home from '@/assets/guttermax-home.jpg';
import detail from '@/assets/gutter-detail.jpg';
export const Route=createFileRoute('/gallery')({head:()=>pageHead('Gutter Project Gallery','Explore gutter installation details and an interactive before-and-after gutter comparison.'),component:Gallery});
function Gallery(){return <main><PageHeading eyebrow="A closer look" title="See the difference." description="Clean lines. Thoughtful details. A gutter system that complements and protects your property."/><section className="section"><div className="container-site"><BeforeAfter/><p className="sample-note">Illustrative comparison using generated images; not an actual project. Real project photos are awaiting upload.</p><div className="grid md:grid-cols-2 gap-6 mt-9">{[{src:home,title:'Seamless roofline protection',alt:'Texas home with white gutters'},{src:detail,title:'Down to the last detail',alt:'White gutter and downspout detail'}].map(i=><figure key={i.title}><img src={i.src} alt={`${i.alt}; generated illustrative image`} width={1024} height={1024} loading="lazy" className="detail-image"/><figcaption className="mt-3 font-medium text-sm">{i.title}</figcaption></figure>)}</div></div></section><CTABanner/></main>}
