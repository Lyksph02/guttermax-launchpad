import { createFileRoute } from '@tanstack/react-router';
import { PageHeading, CTABanner } from '@/components/site';
import { ReviewCards } from '@/components/sections';
import { pageHead } from '@/lib/site-data';
export const Route=createFileRoute('/reviews')({head:()=>pageHead('Customer Reviews','Read about the friendly service and careful workmanship GutterMax aims to bring to every Texas property.'),component:Reviews});
function Reviews(){return <main><PageHeading eyebrow="Our neighbors, our reputation" title="Good service leaves an impression." description="Clear communication. Respect for your property. Work that earns your confidence."/><section className="section"><div className="container-site"><ReviewCards/><div className="mt-8 border-t border-border pt-6"><h2>Real feedback matters.</h2><p className="section-copy">Verified testimonials and a direct link to our Google review profile will be added once supplied.</p></div></div></section><CTABanner/></main>}
