"use client";

import { useEffect, useRef, useState, type PointerEvent as PointerEventType } from "react";

type Look = { src: string; title: string; alt: string };
type GalleryName = "womenswear" | "menswear";

const looks: Record<GalleryName, Look[]> = {
  womenswear: [
    { src: "/upscaled/look-women-01.jpg", title: "Black & gold occasionwear", alt: "Woman wearing a black and gold African print dress" },
    { src: "/upscaled/look-women-02.jpg", title: "Red floral statement", alt: "Woman wearing a fitted turquoise and red floral print dress" },
    { src: "/upscaled/look-women-04.jpg", title: "Golden Ankara", alt: "Woman wearing a yellow and black Ankara outfit" },
    { src: "/upscaled/look-women-05.jpg", title: "Rust & forest green", alt: "Woman wearing an embroidered rust and green occasion dress" },
    { src: "/upscaled/look-women-06.jpg", title: "Beaded evening look", alt: "Woman wearing a dark beaded evening gown" },
  ],
  menswear: [
    { src: "/upscaled/look-men-01.jpg", title: "Plum embroidery", alt: "Man wearing a plum embroidered tunic and cap" },
    { src: "/upscaled/look-men-02.jpg", title: "Olive tailoring", alt: "Man wearing an olive two-piece outfit with dark trim" },
    { src: "/upscaled/look-men-03.jpg", title: "Ochre statement robe", alt: "Man wearing an ochre robe with embroidered back detail" },
    { src: "/upscaled/look-men-04.jpg", title: "Sky blue embroidery", alt: "Man wearing a pale blue embroidered tunic" },
  ],
};

const heroLooks = [
  { ...looks.womenswear[4], label: "Beaded evening look" },
  { ...looks.womenswear[2], label: "Golden Ankara" },
  { ...looks.womenswear[3], label: "Rust & forest green" },
];

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={direction === "left" ? "arrow-left" : undefined}>
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Heart() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M20.2 8.8c0 4.5-8.2 10.1-8.2 10.1S3.8 13.3 3.8 8.8A4.1 4.1 0 0 1 12 7a4.1 4.1 0 0 1 8.2 1.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>;
}

export function HeroLookDeck() {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState<number[]>([]);
  const [exitDirection, setExitDirection] = useState<"like" | "another" | null>(null);
  const startPoint = useRef<{ x: number; y: number } | null>(null);

  function advance(action: "like" | "another") {
    if (exitDirection) return;
    if (action === "like") setLiked((previous) => previous.includes(index) ? previous : [...previous, index]);
    setExitDirection(action);
  }

  function finishSwipe() {
    if (!exitDirection) return;
    setIndex((current) => (current + 1) % heroLooks.length);
    setExitDirection(null);
  }

  function handlePointerUp(event: PointerEventType<HTMLDivElement>) {
    if (!startPoint.current) return;
    const deltaX = event.clientX - startPoint.current.x;
    const deltaY = event.clientY - startPoint.current.y;
    startPoint.current = null;
    if (Math.abs(deltaX) > 65 && Math.abs(deltaX) > Math.abs(deltaY)) {
      advance(deltaX > 0 ? "like" : "another");
    }
  }

  const currentLook = heroLooks[index];
  const nextIndex = (index + 1) % heroLooks.length;

  return (
    <div className="hero-visual">
      <div
        className="hero-deck"
        aria-label="Swipe through three womenswear looks. Swipe right to like a look or left for another."
        onPointerDown={(event) => { startPoint.current = { x: event.clientX, y: event.clientY }; event.currentTarget.setPointerCapture(event.pointerId); }}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => { startPoint.current = null; }}
      >
        {[2, 1, 0].map((depth) => {
          const lookIndex = (index + depth) % heroLooks.length;
          const look = heroLooks[lookIndex];
          return (
            <div
              key={`${index}-${depth}`}
              className={`hero-swipe-card deck-depth-${depth}${depth === 0 && exitDirection ? ` throw-${exitDirection}` : ""}`}
              style={{ backgroundImage: `url("${look.src}")` }}
              role="img"
              aria-label={look.alt}
              onTransitionEnd={depth === 0 ? (event) => { if (event.propertyName === "transform") finishSwipe(); } : undefined}
            >
              {depth === 0 && <span className={`swipe-stamp ${exitDirection ? `stamp-${exitDirection}` : ""}`}>{exitDirection === "like" ? "LOVE" : "NEXT"}</span>}
            </div>
          );
        })}
        <div className="hero-seal"><span>MADE<br />FOR YOUR<br />MOMENT</span></div>
      </div>
      <div className="image-caption"><span>{currentLook.label}</span><span>LOOK 0{index + 1} / 03</span></div>
      <div className="deck-controls">
        <button className="deck-button deck-like" onClick={() => advance("like")} disabled={!!exitDirection} aria-label={`Like ${currentLook.title}`}><Heart /> Like this</button>
        <div className="deck-progress" aria-label={`Look ${index + 1} of ${heroLooks.length}`}>
          {heroLooks.map((look, dotIndex) => <span key={look.src} className={dotIndex === index ? "active" : dotIndex < index || liked.includes(dotIndex) ? "liked" : ""} />)}
        </div>
        <button className="deck-button deck-next" onClick={() => advance("another")} disabled={!!exitDirection}>Another <Arrow /></button>
      </div>
      <div className="deck-bottom">
        <div className="deck-live" aria-live="polite">{liked.includes((index + heroLooks.length - 1) % heroLooks.length) ? "Look saved to your favourites." : `Swipe right to like ${currentLook.title}, or left for another.`}</div>
        <a className="deck-contact" href={`https://wa.me/233243075120?text=${encodeURIComponent(`Hello Nastel, I love the ${heroLooks[liked[liked.length - 1] ?? index].title} look and would like to make something similar.`)}`} target="_blank" rel="noreferrer">Ask about a look <Arrow /></a>
      </div>
      <span className="sr-only">Next look: {heroLooks[nextIndex].title}</span>
    </div>
  );
}

export function FashionGalleryCards() {
  const [activeGallery, setActiveGallery] = useState<GalleryName | null>(null);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const startX = useRef<number | null>(null);
  const selectedLooks = activeGallery ? looks[activeGallery] : [];

  useEffect(() => {
    if (!activeGallery) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [activeGallery]);

  useEffect(() => {
    if (!activeGallery) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (activeImage !== null) setActiveImage(null);
        else setActiveGallery(null);
      }
      if (activeImage !== null && event.key === "ArrowRight") setActiveImage((index) => ((index ?? 0) + 1) % selectedLooks.length);
      if (activeImage !== null && event.key === "ArrowLeft") setActiveImage((index) => ((index ?? 0) + selectedLooks.length - 1) % selectedLooks.length);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeGallery, activeImage, selectedLooks.length]);

  function showGallery(name: GalleryName) {
    setActiveImage(null);
    setActiveGallery(name);
  }

  function closeGallery() {
    setActiveImage(null);
    setActiveGallery(null);
  }

  function moveImage(direction: -1 | 1) {
    setActiveImage((index) => ((index ?? 0) + direction + selectedLooks.length) % selectedLooks.length);
  }

  return (
    <>
      <div className="service-grid">
        <article className="service-card women-card">
          <button className="service-image-button" onClick={() => showGallery("womenswear")} aria-label="Open the womenswear lookbook">
          <span className="service-image women-image" role="img" aria-label={looks.womenswear[2].alt} />
            <span className="image-view-hint">VIEW LOOKBOOK <Arrow /></span>
          </button>
          <div className="service-meta"><span>01 / WOMEN’S WEAR</span><span>✳</span></div>
          <h3>Made to make<br />an entrance.</h3>
          <p>Show-stopping occasion looks, beautiful daywear and the details that make it yours.</p>
          <button className="service-link" onClick={() => showGallery("womenswear")}>Explore 5 looks <Arrow /></button>
        </article>
        <article className="service-card men-card">
          <button className="service-image-button" onClick={() => showGallery("menswear")} aria-label="Open the menswear lookbook">
          <span className="service-image men-image" role="img" aria-label={looks.menswear[0].alt} />
            <span className="image-view-hint">VIEW LOOKBOOK <Arrow /></span>
          </button>
          <div className="service-meta"><span>02 / MEN’S WEAR</span><span>✳</span></div>
          <h3>Tradition with<br />a fresh point of view.</h3>
          <p>Distinctive African formalwear and smart, made-to-measure pieces for every occasion.</p>
          <button className="service-link" onClick={() => showGallery("menswear")}>Explore 4 looks <Arrow /></button>
        </article>
        <article className="service-card craft-card">
          <div className="service-image detail-image" role="img" aria-label="Woman modelling a bold print skirt with a contemporary tailored jacket" />
          <div className="service-meta"><span>03 / YOUR OWN DESIGN</span><span>✳</span></div>
          <h3>A little bold.<br />A lot of you.</h3>
          <p>Start with a fabric you love. We’ll help shape it into a one-of-a-kind piece.</p>
          <a className="service-link" href={`https://wa.me/233243075120?text=${encodeURIComponent("Hello Nastel, I have an idea for a custom design.")}`} target="_blank" rel="noreferrer">Bring your idea <Arrow /></a>
        </article>
      </div>

      {activeGallery && (
        <div className="gallery-backdrop" onMouseDown={(event) => { if (event.currentTarget === event.target) closeGallery(); }}>
          <section className="gallery-panel" role="dialog" aria-modal="true" aria-labelledby="gallery-title">
            <div className="gallery-topline"><span>NASTEL / THE LOOKBOOK</span><button className="gallery-close" onClick={closeGallery} aria-label="Close lookbook">×</button></div>
            <div className="gallery-heading"><div><p className="eyebrow">{activeGallery === "womenswear" ? "MADE FOR HER" : "MADE FOR HIM"}</p><h2 id="gallery-title">{activeGallery === "womenswear" ? "Women’s wear" : "Men’s wear"}<em>.</em></h2></div><p>Tap a look to zoom.<br />Swipe to see the next one.</p></div>
            <div className="gallery-grid">
              {selectedLooks.map((look, index) => (
                <button className="gallery-tile" key={look.src} onClick={() => setActiveImage(index)} aria-label={`View ${look.title}`}>
                  <span className="gallery-tile-photo" role="img" aria-label={look.alt} style={{ backgroundImage: `url("${look.src}")` }} />
                  <span className="gallery-tile-caption"><span>0{index + 1}</span>{look.title}<span className="tile-zoom">↗</span></span>
                </button>
              ))}
            </div>
            <div className="gallery-footer"><span>HAVE A LOOK IN MIND?</span><a href={`https://wa.me/233243075120?text=${encodeURIComponent(`Hello Nastel, I’d like to book a ${activeGallery === "womenswear" ? "womenswear" : "menswear"} fitting.`)}`} target="_blank" rel="noreferrer">Let’s talk on WhatsApp <Arrow /></a></div>
          </section>

          {activeImage !== null && (
            <div className="lightbox-backdrop" onMouseDown={(event) => { if (event.currentTarget === event.target) setActiveImage(null); }}>
              <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${activeGallery} image viewer`}>
                <button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close image viewer">×</button>
                <button className="lightbox-arrow lightbox-previous" onClick={() => moveImage(-1)} aria-label="Previous look"><Arrow direction="left" /></button>
                <div className="lightbox-photo" role="img" aria-label={selectedLooks[activeImage].alt} style={{ backgroundImage: `url("${selectedLooks[activeImage].src}")` }} onPointerDown={(event) => { startX.current = event.clientX; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerUp={(event) => { if (startX.current === null) return; const change = event.clientX - startX.current; startX.current = null; if (Math.abs(change) > 60) moveImage(change < 0 ? 1 : -1); }} />
                <button className="lightbox-arrow lightbox-next" onClick={() => moveImage(1)} aria-label="Next look"><Arrow /></button>
                <div className="lightbox-caption"><span>{selectedLooks[activeImage].title}</span><span>0{activeImage + 1} / 0{selectedLooks.length}</span></div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
