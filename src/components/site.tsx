import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Phone, Menu, X, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gorilla from '@/assets/gorilla.png';

const links = [{ to: '/', label: 'Home' }, { to: '/services', label: 'Services' }, { to: '/about', label: 'About Us' }, { to: '/gallery', label: 'Gallery' }, { to: '/reviews', label: 'Reviews' }, { to: '/faq', label: 'FAQ' }] as const;

export function Brand() { 
  return (
    <Link to="/" className="brand" aria-label="GutterMax Services home">
      <img src={gorilla} width={1024} height={1024} alt="GutterMax gorilla" />
      <div>
        <div className="brand-name">GUTTER<span>MAX</span></div>
        <div className="brand-sub">SERVICES</div>
      </div>
    </Link>
  ); 
}

export function EstimateButton({ variant = 'default', label = 'Get a Free Estimate' }: { variant?: 'default' | 'hero' | 'heroOutline' | 'secondary'; label?: string }) { 
  return (
    <Button asChild variant={variant} size="lg">
      <Link to="/estimate">{label}<ArrowUpRight size={16} /></Link>
    </Button>
  ); 
}

export function SiteHeader() { 
  const [open, setOpen] = useState(false); 
  return (
    <>
      <div className="topbar">
        <div className="container-site flex justify-between items-center">
          <span className="flex items-center gap-2"><MapPin size={12} />Texas tough. Locally focused. Built to protect.</span>
          <span className="topbar-right">Residential & Commercial Gutter Services</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container-site header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(l => <Link key={l.to} to={l.to} className="nav-link" activeProps={{ className: 'active' }} activeOptions={{ exact: true }}>{l.label}</Link>)}
          </nav>
          <a href="tel:+15125550148" className="header-phone">
            <Phone size={17} className="text-primary"/>
            <span className="phone-number">(512) 555-0148<small>Sample phone number</small></span>
          </a>
          <div className="header-estimate"><EstimateButton /></div>
          <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X/> : <Menu/>}
          </Button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map(l => <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>)}
            <Button asChild><Link to="/estimate" onClick={() => setOpen(false)}>Get a Free Estimate<ArrowUpRight/></Link></Button>
          </nav>
        )}
      </header>
    </>
  ); 
}

export function CTABanner() { 
  return (
    <section className="cta-band">
      <div className="container-site cta-inner">
        <div>
          <h2>Strong gutters. Stronger peace of mind.</h2>
          <p>Let’s give your home the protection it deserves. Start with a free, no-pressure estimate.</p>
        </div>
        <EstimateButton variant="secondary" />
      </div>
    </section>
  ); 
}

export function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { 
  return (
    <section className="page-heading">
      <div className="container-site">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="page-title">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  ); 
}

export function SiteFooter() { 
  return (
    <footer>
      <div className="container-site">
        <div className="footer-grid">
          <div>
            <Brand/>
            <p>Protect your home from the top down.<br/>Dependable gutter care for Texas homes and businesses.</p>
            
            {/* Social Media Icons na inilagay sa inyong minarkahang area */}
            <div className="flex items-center space-x-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="footer-links">
              {links.slice(1).map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
            </div>
          </div>
          <div>
            <h3>Let’s talk gutters</h3>
            <div className="footer-links">
              <Link to="/estimate">Request a free estimate ↗</Link>
              <a href="tel:+15125550148">(512) 555-0148</a>
              <span>Texas, USA</span>
              <span className="sample-note">Phone and city list are samples.</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GutterMax Services. All rights reserved.</span>
          <span>Designed and Developed by Lyks Saavedra.</span>
        </div>
      </div>
    </footer>
  ); 
}
