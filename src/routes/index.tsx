import { createFileRoute, Link } from '@tanstack/react-router';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EstimateButton, CTABanner } from '@/components/site';
import { TrustStrip, ServicesGrid, WhySection, BeforeAfter, ReviewCards, ServiceArea, Stars } from '@/components/sections';
import { pageHead } from '@/lib/site-data';
import home from '@/assets/guttermax-home.jpg';

export const Route = createFileRoute('/')({
  head: () => pageHead('Texas Gutter Specialists', 'Seamless gutters, repairs, cleaning, and leaf protection for Texas homes and businesses. Get a free estimate from GutterMax Services.'),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="hero">
        <img className="hero-img" src={home} width={1536} height={1024} alt="Texas brick home with seamless white gutters and a green lawn" fetchPriority="high" />
        <div className="container-site hero-content">
          <div className="eyebrow">
            <span className="dot" />
            Your local Texas gutter specialists
          </div>
          <h1>
            Protect your home.<br />
            From the <span>top down.</span>
          </h1>
          <p className="hero-description">Strong gutters. Expert care. Zero guesswork.<br />Dependable gutter solutions for Texas homes and businesses—because what’s underneath matters.</p>
          <div className="hero-actions">
            <EstimateButton variant="hero" />
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/services">
                Explore Our Services <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Inilipat dito ang Proof at Rating para nasa ilalim ng hero image at hindi sumabit sa damuhan */}
      <div className="container-site py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="hero-proof flex items-center gap-6">
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} />Licensed & insured</span>
            <span className="flex items-center gap-1.5"><Check size={16} />Free estimates</span>
            <span className="flex items-center gap-1.5"><Check size={16} />Texas proud</span>
          </div>
          <div className="hero-rating flex items-center gap-3">
            <span className="google-g font-bold text-lg">G</span>
            <div>
              <Stars />
              <div className="mt-1 text-sm">Your next five-star experience starts here.</div>
            </div>
          </div>
        </div>
      </div>

      <TrustStrip />

      <section className="section">
        <div className="container-site">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Built to handle whatever comes down</div>
              <h2>Every gutter need. One trusted team.</h2>
              <p className="section-copy">From a fresh install to a seasonal cleanout, we’ve got your roofline covered.</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/services">
                View All Services <ArrowRight />
              </Link>
            </Button>
          </div>
          <ServicesGrid />
        </div>
      </section>

      <WhySection />

      <section className="section">
        <div className="container-site">
          <div className="section-heading">
            <div>
              <div className="eyebrow">The difference is in the details</div>
              <h2>A stronger roofline starts here.</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/gallery">
                Explore the Gallery <ArrowRight />
              </Link>
            </Button>
          </div>
          <BeforeAfter />
          <p className="sample-note">Illustrative before-and-after concept using generated photos, not an actual completed project.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Good work. Happy neighbors.</div>
              <h2>Service worth talking about.</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/reviews">
                Customer Reviews <ArrowRight />
              </Link>
            </Button>
          </div>
          <ReviewCards />
        </div>
      </section>

      <ServiceArea />
      <CTABanner />
    </main>
  );
}
