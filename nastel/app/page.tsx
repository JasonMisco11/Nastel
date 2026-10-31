import Image from "next/image";

const phone = "233243075120";
const whatsapp = `https://wa.me/${phone}`;
const contactLink = (message: string) => `${whatsapp}?text=${encodeURIComponent(message)}`;
const bookingLink = contactLink("Hello Nastel, I’d love to book a consultation. Please let me know what times are available.");

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M20.4 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4.1a8.2 8.2 0 1 1 15.3-4.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.8 8.1c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.6 1.4c.1.2 0 .4-.1.6l-.5.6c-.2.2-.1.4 0 .6.5.8 1.1 1.4 1.9 1.9.2.1.4.1.6-.1l.6-.8c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.3.6-.1.5-.4.9-.9 1.2-.4.3-.9.4-1.5.3-1-.2-2.1-.8-3.1-1.7-1.1-.9-1.8-2-2.1-3-.2-.8.1-1.7.7-2.2Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement"><span>MADE TO MEASURE · ACCRA, GHANA</span><span>For every kind of occasion</span></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Nastel home">
          <Image src="/nastel-logo.jpg" width={2816} height={1536} alt="Nastel" priority />
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">What we make</a>
          <a href="#about">Our approach</a>
          <a href="#visit">Find us</a>
        </nav>
        <a className="header-book" href={bookingLink} target="_blank" rel="noreferrer">Book a fitting <ArrowIcon /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> THOUGHTFULLY MADE. MADE FOR YOU.</p>
          <h1>Wear the<br /><em>feeling.</em></h1>
          <p className="hero-intro">Considered, custom clothing for the moments that matter — and all the days in between.</p>
          <div className="hero-actions">
            <a className="button button-dark" href={bookingLink} target="_blank" rel="noreferrer">Start a conversation <ArrowIcon /></a>
            <a className="text-link" href="#services">Explore the atelier <span>↓</span></a>
          </div>
          <div className="hero-note"><span className="note-mark">N.</span><span>Personal style, shaped<br />one stitch at a time.</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" role="img" aria-label="Editorial portrait in a beautifully tailored outfit" />
          <div className="image-caption"><span>THE NASTEL POINT OF VIEW</span><span>01 — 03</span></div>
          <div className="hero-seal"><span>MADE<br />WITH<br />INTENTION</span><b>✳</b></div>
        </div>
      </section>

      <section className="intro-strip" id="about">
        <div className="strip-label">THE ART OF<br />A GOOD FIT</div>
        <p>Clothes should feel like <em>you.</em> At Nastel, we bring your ideas to life with personal fittings, considered details and a little atelier magic.</p>
        <a className="round-link" href="#services" aria-label="Discover our services"><ArrowIcon /></a>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">THE ATELIER</p><h2>Made for <em>your</em> moment.</h2></div>
          <p>From the first sketch to the final fitting, every piece begins with a conversation.</p>
        </div>
        <div className="service-grid">
          <article className="service-card women-card">
            <div className="service-image women-image" role="img" aria-label="Woman wearing a statement custom outfit" />
            <div className="service-meta"><span>01 / WOMENSWEAR</span><span>✳</span></div>
            <h3>Her own kind<br />of beautiful.</h3>
            <p>Statement dresses, occasion wear and everyday pieces, made around your shape and your style.</p>
            <a href={contactLink("Hello Nastel, I’m interested in womenswear.")} target="_blank" rel="noreferrer">Explore womenswear <ArrowIcon /></a>
          </article>
          <article className="service-card men-card">
            <div className="service-image men-image" role="img" aria-label="Man in a tailored suit" />
            <div className="service-meta"><span>02 / MENSWEAR</span><span>✳</span></div>
            <h3>Sharp by nature.<br />Yours by design.</h3>
            <p>Modern tailoring, traditional craftsmanship and the right fit for every occasion.</p>
            <a href={contactLink("Hello Nastel, I’m interested in menswear.")} target="_blank" rel="noreferrer">Explore menswear <ArrowIcon /></a>
          </article>
          <article className="service-card craft-card">
            <div className="craft-art"><span className="thread-line" /><span className="craft-letter">N</span><span className="craft-star">✳</span></div>
            <div className="service-meta"><span>03 / THE FINISHING TOUCH</span><span>✳</span></div>
            <h3>Little changes.<br />Big difference.</h3>
            <p>Alterations and thoughtful adjustments to make a much-loved piece feel just right.</p>
            <a href={contactLink("Hello Nastel, I’d like to ask about alterations.")} target="_blank" rel="noreferrer">Ask about alterations <ArrowIcon /></a>
          </article>
        </div>
      </section>

      <section className="quote-band">
        <span className="quote-spark">✳</span>
        <p>“A great fit is more than how it looks.<br />It’s how <em>you feel</em> when you walk in.”</p>
        <span className="quote-credit">THE NASTEL PROMISE</span>
      </section>

      <section className="visit section-pad" id="visit">
        <div className="visit-copy">
          <p className="eyebrow">COME SAY HELLO</p>
          <h2>Your next favourite<br />piece starts <em>here.</em></h2>
          <p className="visit-description">Tell us what you have in mind. We’ll help you find the right fabric, fit and finishing touches.</p>
          <div className="contact-details">
            <div><span>CALL OR WHATSAPP</span><a href="tel:+233243075120">+233 24 307 5120</a></div>
            <div><span>VISIT THE ATELIER</span><a href="https://maps.google.com/?q=M+Tech+Computer+Service,+Accra" target="_blank" rel="noreferrer">M Tech Computer Service, Accra ↗</a></div>
          </div>
          <div className="visit-actions">
            <a className="button button-dark" href={bookingLink} target="_blank" rel="noreferrer">Book on WhatsApp <ArrowIcon /></a>
            <a className="save-link" href="/nastel.vcf" download>Save our number <span>↓</span></a>
          </div>
        </div>
        <div className="map-wrap">
          <iframe title="Map showing the Nastel atelier at M Tech Computer Service in Accra" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1895873618128!2d-0.25079792596142975!3d5.685719294295945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9f09c57c752b%3A0x4565ec588b077192!2sM%20Tech%20Computer%20Service!5e0!3m2!1sen!2sgh!4v1793448140984!5m2!1sen!2sgh" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <a className="map-caption" href="https://maps.google.com/?q=M+Tech+Computer+Service,+Accra" target="_blank" rel="noreferrer"><span>OPEN IN GOOGLE MAPS</span><ArrowIcon /></a>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#top">Nastel<span>✳</span></a>
        <p>Made with care in Accra, Ghana.</p>
        <a href={bookingLink} target="_blank" rel="noreferrer">Let’s make something yours <ArrowIcon /></a>
        <span className="copyright">© NASTEL 2026</span>
      </footer>

      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Nastel on WhatsApp"><WhatsAppIcon /><span>Let’s chat</span></a>
    </main>
  );
}
