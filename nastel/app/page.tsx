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
          <p className="eyebrow"><span /> AFRICAN COUTURE · ACCRA, GHANA</p>
          <h1>Wear your<br /><em>story.</em></h1>
          <p className="hero-intro">Beautiful African fashion, cut to your fit and made for the way you want to feel.</p>
          <div className="hero-actions">
            <a className="button button-dark" href={bookingLink} target="_blank" rel="noreferrer">Let’s make your look <ArrowIcon /></a>
            <a className="text-link" href="#services">See what we make <span>↓</span></a>
          </div>
          <div className="hero-note"><span className="note-mark">N.</span><span>Custom womenswear & menswear<br />made with care in Accra.</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" role="img" aria-label="Two African women wearing vibrant Ankara outfits and matching headwraps" />
          <div className="image-caption"><span>COLOR · CRAFT · CHARACTER</span><span>NASTEL / 01</span></div>
          <div className="hero-seal"><span>MADE<br />FOR YOUR<br />MOMENT</span><b>✳</b></div>
        </div>
      </section>

      <section className="intro-strip" id="about">
        <div className="strip-label">YOUR FABRIC.<br />YOUR FIT. YOUR MOMENT.</div>
        <p>From bold prints to beautiful finishing, we make clothes that let <em>you</em> walk in as yourself.</p>
        <a className="round-link" href="#services" aria-label="Discover our services"><ArrowIcon /></a>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">THE NASTEL LOOKBOOK</p><h2>Colour made <em>personal.</em></h2></div>
          <p>Bring the fabric, bring the idea. We’ll make the look feel unmistakably yours.</p>
        </div>
        <div className="service-grid">
          <article className="service-card women-card">
            <div className="service-image women-image" role="img" aria-label="Elegant Ghanaian woman wearing a green lace dress with Kente sash and matching headwrap" />
            <div className="service-meta"><span>01 / WOMENSWEAR</span><span>✳</span></div>
            <h3>Made to make<br />an entrance.</h3>
            <p>Show-stopping occasion looks, beautiful daywear and the details that make it yours.</p>
            <a href={contactLink("Hello Nastel, I’m interested in womenswear.")} target="_blank" rel="noreferrer">Find your look <ArrowIcon /></a>
          </article>
          <article className="service-card men-card">
            <div className="service-image men-image" role="img" aria-label="Confident man wearing embroidered African formalwear" />
            <div className="service-meta"><span>02 / MENSWEAR</span><span>✳</span></div>
            <h3>Tradition with<br />a fresh point of view.</h3>
            <p>Distinctive African formalwear and smart, made-to-measure pieces for every occasion.</p>
            <a href={contactLink("Hello Nastel, I’m interested in menswear.")} target="_blank" rel="noreferrer">Find your fit <ArrowIcon /></a>
          </article>
          <article className="service-card craft-card">
            <div className="service-image detail-image" role="img" aria-label="Woman modelling a bold print skirt with a contemporary tailored jacket" />
            <div className="service-meta"><span>03 / YOUR OWN DESIGN</span><span>✳</span></div>
            <h3>A little bold.<br />A lot of you.</h3>
            <p>Start with a fabric you love. We’ll help shape it into a one-of-a-kind piece.</p>
            <a href={contactLink("Hello Nastel, I have an idea for a custom design.")} target="_blank" rel="noreferrer">Bring your idea <ArrowIcon /></a>
          </article>
        </div>
      </section>

      <section className="quote-band">
        <span className="quote-spark">✳</span>
        <p>“Let your clothes speak<br />in a voice that’s <em>all your own.</em>”</p>
        <span className="quote-credit">YOUR STORY, WORN WITH PRIDE</span>
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
