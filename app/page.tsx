"use client";
import { useState, useEffect, useRef, memo } from "react";
import { MorphingText } from "@/components/ui/morphing-text";
import { FocusCards } from "@/components/ui/focus-cards";

const HeroVideo = memo(function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.defaultMuted = true;
    v.play().catch(() => {});
  }, []);
  return (
    <video
      ref={ref}
      className="hero__video"
      src="/videos/her.mp4"
      preload="none"
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
    />
  );
});

/* ══════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════ */
const LANG = {
  es: {
    "nav-about": "Nosotros",
    "nav-exp": "Experiencias",
    "nav-dest": "Destinos",
    "nav-book": "Reservar",
    "hero-title": "Desde<br />el mar.",
    "about-headline": "Detrás de cada salida",
    "about-p1": "Cada salida combina navegación, paradas en calas y tiempo en el agua.",
    "about-p2": "Snorkel, paddle o simplemente parar y disfrutar.<br />A veces cuevas, a veces delfines.<br /><br />Con los mejores capitanes para que tengas un día increíble.",
    "about-aside": "Charters privados & experiencias<br />Ibiza desde el mar",
    "exp-kicker": "Lo que ofrecemos",
    "exp-headline": "¿Cómo quieres<br />vivirlo?",
    "exp-1-name": "Lancha",
    "exp-1-sub": "Salir unas horas, o quedarse todo el día.\nRápido, simple, a tu ritmo.",
    "exp-1-dur": "",
    "exp-2-name": "Catamarán",
    "exp-2-sub": "El mar sin prisa. Parar, nadar, quedarse más.\nUn día entero que se alarga solo.",
    "exp-2-dur": "",
    "exp-3-name": "Velero",
    "exp-3-sub": "Dormir en el mar cambia todo.\nUna noche, o varios días a bordo.",
    "exp-3-dur": "",
    "exp-cta": "Ver experiencia",
    "hero-sub": "Navega con nosotros",
    "hero-sub-strong": "Navega",
    "hero-sub-light": " con nosotros",
    "hero-subtitle": "Ibiza hace el resto.",
    "hero-cta": "viví el mar →",
    "ig-kicker": "Momentos reales",
    "ig-title": "El mar, día a día.",
    "xcar-kicker": "Experiencias",
    "dest-kicker": "Dónde vamos",
    "dest-title": "Los mejores spots<br />de Ibiza y Formentera.",
    "dest-note-1": "El lugar más mágico del Mediterráneo.",
    "dest-note-2": "Otro mundo.",
    "dest-note-3": "Vista directa a Es Vedrà. Agua inmóvil.",
    "dest-note-4": "Poca gente. Mucho mar.",
    "dest-note-5": "El comienzo de todo.",
    "dest-cta": "Descubrir →",
    "gallery-kicker": "Momentos reales",
    "contact-kicker": "Reservas",
    "contact-prompt": "Contáctanos.",
    "contact-season-l": "Temporada",
    "contact-season-v": "Abril — Noviembre",
    "form-name": "Nombre",
    "form-guests": "Personas",
    "form-date": "Fecha aproximada",
    "form-type": "¿Qué experiencia buscas?",
    "form-msg": "Cuéntanos más",
    "ph-name": "Tu nombre",
    "ph-msg": "Aniversario, cumpleaños, o simplemente un día que queréis recordar…",
    "sel-placeholder": "Seleccionar",
    "sel-sunrise": "Lancha",
    "sel-full": "Catamarán",
    "sel-custom": "Velero",
    "sel-unsure": "Aún no lo sé",
    "form-submit": "Enviar consulta",
    "form-sent": "Enviado ✓",
    "form-trust": "Respondemos en menos de 24h.",
    "cta-book": "Reservar →",
    "cta-exp": "Ver experiencias →",
    "footer-privacy": "Privacidad",
    "wa-msg": "Hola%2C%20me%20interesa%20reservar%20un%20charter%20con%20ByCorazonada",
  },
  en: {
    "nav-about": "About",
    "nav-exp": "Experiences",
    "nav-dest": "Destinations",
    "nav-book": "Book",
    "hero-title": "From<br />the sea.",
    "about-headline": "A boat and the urge<br />to show you this sea<br />the way it deserves.",
    "about-p1": "ByCorazonada started with a spontaneous decision. Get on the boat with no fixed plan and see where the wind takes you. It began like that. Still does.",
    "about-p2": "No set itinerary. No script. Every trip is different — because the sea is too.",
    "about-aside": "Private charters & experiences<br />Ibiza from the sea",
    "exp-kicker": "What we offer",
    "exp-headline": "How do you want<br />to live it?",
    "exp-1-name": "Boat",
    "exp-1-sub": "A few hours, or the whole day.\nFast, simple, on your terms.",
    "exp-1-dur": "",
    "exp-2-name": "Catamaran",
    "exp-2-sub": "The sea without rushing. Stop, swim, stay longer.\nA full day that stretches itself.",
    "exp-2-dur": "",
    "exp-3-name": "Sailboat",
    "exp-3-sub": "Sleeping at sea changes everything.\nOne night, or several days on board.",
    "exp-3-dur": "",
    "exp-cta": "See experience",
    "hero-sub": "Step on board.",
    "hero-sub-strong": "Sail",
    "hero-sub-light": " with us",
    "hero-subtitle": "Ibiza does the rest.",
    "hero-cta": "feel the sea →",
    "ig-kicker": "Follow us",
    "ig-title": "The sea, day by day.",
    "xcar-kicker": "Experiences",
    "dest-kicker": "Where we go",
    "dest-title": "Corners that aren't<br />on any map.",
    "dest-note-1": "The most magical spot in the Mediterranean.",
    "dest-note-2": "Another world.",
    "dest-note-3": "Es Vedrà view. Still, flat water.",
    "dest-note-4": "Few people. Open sea.",
    "dest-note-5": "Where it all begins.",
    "dest-cta": "Discover →",
    "gallery-kicker": "Real moments",
    "contact-kicker": "Bookings",
    "contact-prompt": "Contact us.",
    "contact-season-l": "Season",
    "contact-season-v": "April — November",
    "form-name": "Name",
    "form-guests": "Guests",
    "form-date": "Approximate date",
    "form-type": "What kind of day are you after?",
    "form-msg": "Tell us more",
    "ph-name": "Your name",
    "ph-msg": "Anniversary, birthday, or just a day you want to remember…",
    "sel-placeholder": "Select",
    "sel-sunrise": "Boat",
    "sel-full": "Catamaran",
    "sel-custom": "Sailboat",
    "sel-unsure": "Not sure yet",
    "form-submit": "Send enquiry",
    "form-sent": "Sent ✓",
    "form-trust": "We reply within 24 hours.",
    "cta-book": "Book now →",
    "cta-exp": "See experiences →",
    "footer-privacy": "Privacy",
    "wa-msg": "Hi%2C%20I'd%20love%20to%20know%20more%20about%20a%20charter%20with%20ByCorazonada",
  },
} as const;

type Lang = keyof typeof LANG;

export default function ByCorazonadaPage() {
  const [lang, setLang] = useState<Lang>("es");
  const [navSolid, setNavSolid] = useState(false);
  const [waVisible, setWaVisible] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [expType, setExpType] = useState("");
  const heroBgRef = useRef<HTMLImageElement>(null);

  const t = LANG[lang];

  // Nav scroll listener
  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 52);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero zoom on mount
  useEffect(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (heroBgRef.current) heroBgRef.current.classList.add("loaded");
      }, 60);
    });
  }, []);

  // WhatsApp delayed show
  useEffect(() => {
    const timer = setTimeout(() => setWaVisible(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  // IntersectionObserver for fades
  useEffect(() => {
    const fades = document.querySelectorAll<HTMLElement>(".fade");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("show");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -24px 0px" }
      );
      fades.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      fades.forEach((el) => el.classList.add("show"));
    }
  }, []);

  // Elfsight Instagram feed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);


  // Smooth anchor scroll accounting for fixed nav
  useEffect(() => {
    const handleAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const nav = document.querySelector(".nav") as HTMLElement;
      const offset = nav ? nav.getBoundingClientRect().height + 8 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", handleAnchor);
    return () => document.removeEventListener("click", handleAnchor);
  }, []);


  const waHref = `https://wa.me/59898027809?text=${t["wa-msg"]}`;

  return (
    <>
      {/* ═══════════════════════════════════════════
          NAV
      ═══════════════════════════════════════════ */}
      <nav className={`nav${navSolid ? " solid" : ""}`} aria-label="Navegación">
        <a href="/" className="nav__mark">
          <img src="/brand_assets/byCorazonada_logo.png" alt="ByCorazonada" />
          <span className="nav__name">ByCorazonada</span>
        </a>

        <div className="nav__links">
          <a href="#experiencias">{t["nav-exp"]}</a>
          <a href="#destinos">{t["nav-dest"]}</a>
          <a href="#nosotros">{t["nav-about"]}</a>
        </div>

        <a href="#contacto" className="nav__book">{t["nav-book"]}</a>

        <div className="nav__social" aria-label="Redes sociales">
          <a href="https://www.instagram.com/corazonadasailing" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@corazonada.sailin" target="_blank" rel="noopener" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.28 8.28 0 0 0 4.84 1.53V6.84a4.85 4.85 0 0 1-1.07-.15z"/>
            </svg>
          </a>
        </div>

        <div className="lang-toggle" role="group" aria-label="Language">
          <button
            className={`lang-btn${lang === "es" ? " active" : ""}`}
            onClick={() => setLang("es")}
          >ES</button>
          <span className="lang-toggle__sep" aria-hidden="true">/</span>
          <button
            className={`lang-btn${lang === "en" ? " active" : ""}`}
            onClick={() => setLang("en")}
          >EN</button>
        </div>

        <button className="nav__burger" aria-label="Menú">
          <span></span><span></span>
        </button>
      </nav>


      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="hero" aria-label="Portada">
        <HeroVideo />
        <div className="hero__vignette" aria-hidden="true"></div>

        {/* Morphing text — centered over hero, above vignette */}
        <div className="absolute inset-0 z-[4] flex items-center justify-center pointer-events-none">
          <MorphingText
            texts={["MAR", "CATAMARÁN", "IBIZA", "FORMENTERA"]}
            className="font-bold tracking-[0.2em] text-white h-24 text-[4rem] md:h-36 md:text-[6rem] lg:h-44 lg:text-[8rem]"
          />
        </div>

        <div className="hero__body">
          <p className="hero__tag">Ibiza · Formentera</p>
          <a href="#contacto" className="hero__sub hero__sub-cta">
            <span className="hero__sub-cta__strong">{t["hero-sub-strong"]}</span><span className="hero__sub-cta__light">{t["hero-sub-light"]}</span><span className="hero__sub-cta__arrow"> →</span>
          </a>
        </div>
        <span className="hero__scroll" aria-hidden="true">scroll</span>
      </section>


      {/* ═══════════════════════════════════════════
          EXPERIENCES
      ═══════════════════════════════════════════ */}
      <section className="experiences" id="experiencias">
        <div className="gut">
          <div className="experiences__intro fade">
            <p className="kicker">{t["exp-kicker"]}</p>
            <h2
              className="experiences__headline"
              dangerouslySetInnerHTML={{ __html: t["exp-headline"] }}
            />
          </div>

          <div className="exp-cards">
            {([
              {
                name: t["exp-1-name"], sub: t["exp-1-sub"], dur: t["exp-1-dur"],
                img:      "/images/celeste.JPG",
                imgHover: "/images/velero.jpeg",
              },
              {
                name: t["exp-2-name"], sub: t["exp-2-sub"], dur: t["exp-2-dur"],
                img:      "/images/Barco1.JPG",
                imgHover: "/images/paraiso.jpeg",
              },
              {
                name: t["exp-3-name"], sub: t["exp-3-sub"], dur: t["exp-3-dur"],
                img:      "/images/vela.jpeg",
                imgHover: "/images/sunset.JPG",
              },
            ] as const).map((exp, i) => (
              <a key={i} href="#contacto" className="exp-card">
                <div className="exp-card__img-wrap">
                  <img className="exp-card__img exp-card__img--default" src={exp.img} alt="" loading="lazy" />
                  <img className="exp-card__img exp-card__img--hover" src={exp.imgHover} alt="" loading="lazy" />
                </div>
                <div className="exp-card__body">
                  {exp.dur && <p className="exp-card__dur">{exp.dur}</p>}
                  <h3 className="exp-card__name">{exp.name}</h3>
                  <p className="exp-card__sub" style={{ whiteSpace: "pre-line" }}>{exp.sub}</p>
                  <span className="exp-card__cta">{t["exp-cta"]} →</span>
                </div>
              </a>
            ))}
          </div>
          <div className="section-cta">
            <a href="#contacto" className="section-cta__link">{t["cta-book"]}</a>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          DESTINATIONS
      ═══════════════════════════════════════════ */}
      <section className="destinations" id="destinos">
        <div className="gut">
          <div className="destinations__head fade">
            <p className="kicker">{t["dest-kicker"]}</p>
            <h2
              className="destinations__title"
              dangerouslySetInnerHTML={{ __html: t["dest-title"] }}
            />
          </div>
        </div>
        <div className="gut">
          <div className="dest-grid fade" data-delay="1">
            <a href="#contacto" className="dest-card">
              <img src="/images/colores.JPG" alt="Es Vedrà, Ibiza" loading="lazy" />
              <div className="dest-card__overlay"></div>
              <div className="dest-card__label">
                <span className="dest-card__place">Ibiza</span>
                <span className="dest-card__name">Es Vedrà</span>
                <span className="dest-card__note">{t["dest-note-1"]}</span>
                <span className="dest-card__cta">{t["dest-cta"]}</span>
              </div>
            </a>
            <a href="#contacto" className="dest-card">
              <img src="/images/formentera2.JPG" alt="Ses Illetes, Formentera" loading="lazy" style={{objectPosition: "center 75%"}} />
              <div className="dest-card__overlay"></div>
              <div className="dest-card__label">
                <span className="dest-card__place">Formentera</span>
                <span className="dest-card__name">Ses Illetes</span>
                <span className="dest-card__note">{t["dest-note-2"]}</span>
                <span className="dest-card__cta">{t["dest-cta"]}</span>
              </div>
            </a>
            <a href="#contacto" className="dest-card">
              <img src="/images/delfines.JPG" alt="Cuevas de Saona, Formentera" loading="lazy" />
              <div className="dest-card__overlay"></div>
              <div className="dest-card__label">
                <span className="dest-card__place">Ibiza</span>
                <span className="dest-card__name">Mar Abierto</span>
                <span className="dest-card__note">{t["dest-note-4"]}</span>
                <span className="dest-card__cta">{t["dest-cta"]}</span>
              </div>
            </a>
          </div>
          <div className="section-cta">
            <a href="#contacto" className="section-cta__link">{t["cta-book"]}</a>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          INSTAGRAM FEED
      ═══════════════════════════════════════════ */}
      <section className="instagram" id="instagram">
        <div className="gut">
          <div className="instagram__head fade">
            <div>
              <p className="kicker">{t["ig-kicker"]}</p>
              <h2 className="instagram__title">{t["ig-title"]}</h2>
            </div>
            <a
              className="instagram__handle"
              href="https://www.instagram.com/corazonadasailing/"
              target="_blank"
              rel="noopener"
            >@corazonadasailing →</a>
          </div>
          <div className="elfsight-app-2f3717f5-ea02-4bcc-9619-9be8dbd50fd0" data-elfsight-app-lazy></div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════ */}
      <section className="about" id="nosotros">
        <div className="gut">
          <div className="about__grid">
            <div className="about__text">
              <h2
                className="about__headline fade"
                dangerouslySetInnerHTML={{ __html: t["about-headline"] }}
              />
              <div className="about__body fade" data-delay="1">
                <p>{t["about-p1"]}</p>
                <p dangerouslySetInnerHTML={{ __html: t["about-p2"] }} />
              </div>
              <p
                className="about__aside fade"
                data-delay="2"
                dangerouslySetInnerHTML={{ __html: t["about-aside"] }}
              />
            </div>
            <img
              className="about__photo fade"
              data-delay="1"
              src="/images/surfer.jpeg"
              alt="Personas en cubierta"
              loading="lazy"
            />
          </div>
          <div className="section-cta">
            <a href="#contacto" className="section-cta__link">{t["cta-book"]}</a>
          </div>
        </div>
      </section>


{/* ═══════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════ */}
      <section className="contact" id="contacto">
        <div className="gut">
          <div className="contact__grid">

            {/* left */}
            <div>
              <p className="kicker contact__kicker fade">{t["contact-kicker"]}</p>
              <h2
                className="contact__prompt fade"
                data-delay="1"
                dangerouslySetInnerHTML={{ __html: t["contact-prompt"] }}
              />
              <a className="contact__email fade" data-delay="2" href="mailto:bycorazonada@gmail.com">
                bycorazonada@gmail.com
              </a>
              <div className="contact__details fade" data-delay="2">
                <div className="contact__detail">
                  <span className="contact__detail-l">WhatsApp</span>
                  <span className="contact__detail-v">
                    <a href="https://wa.me/59898027809">+598 98027809</a>
                  </span>
                </div>
                <div className="contact__detail">
                  <span className="contact__detail-l">Instagram</span>
                  <span className="contact__detail-v">
                    <a href="https://www.instagram.com/corazonadasailing/" target="_blank" rel="noopener">@corazonadasailing</a>
                  </span>
                </div>
                <div className="contact__detail">
                  <span className="contact__detail-l">{t["contact-season-l"]}</span>
                  <span className="contact__detail-v">{t["contact-season-v"]}</span>
                </div>
                <div className="contact__detail">
                  <span className="contact__detail-l">Base</span>
                  <span className="contact__detail-v">Ibiza, Islas Baleares</span>
                </div>
              </div>
            </div>

            {/* right — form */}
            <form
              noValidate
              className="fade"
              data-delay="1"
              onSubmit={(e) => {
                e.preventDefault();
                setFormSent(true);
              }}
            >
              <div className="form__two">
                <div className="form__field">
                  <label className="form__label" htmlFor="nombre">{t["form-name"]}</label>
                  <input className="form__input" id="nombre" type="text" name="nombre" placeholder={t["ph-name"]} autoComplete="given-name"/>
                </div>
                <div className="form__field">
                  <label className="form__label" htmlFor="personas">{t["form-guests"]}</label>
                  <input className="form__input" id="personas" type="number" name="personas" placeholder="4" min={1} max={12}/>
                </div>
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="email">Email</label>
                <input className="form__input" id="email" type="email" name="email" placeholder="tu@email.com" autoComplete="email"/>
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="fecha">{t["form-date"]}</label>
                <input className="form__input" id="fecha" type="date" name="fecha"/>
              </div>
              <div className="form__field">
                <label className="form__label">{t["form-type"]}</label>
                <div className="form__chips">
                  {([
                    { value: "halfday",    label: t["sel-sunrise"] },
                    { value: "daycharter", label: t["sel-full"] },
                    { value: "overnight",  label: t["sel-custom"] },
                    { value: "unsure",     label: t["sel-unsure"] },
                  ] as const).map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      className={`form__chip${expType === opt.value ? " is-active" : ""}`}
                      onClick={() => setExpType(expType === opt.value ? "" : opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="tipo" value={expType} />
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="msg">{t["form-msg"]}</label>
                <textarea className="form__area" id="msg" name="msg" placeholder={t["ph-msg"]}></textarea>
              </div>
              <p className="form__trust">{t["form-trust"]}</p>
              <button
                type="submit"
                className="form__submit"
                disabled={formSent}
                style={formSent ? { background: "var(--olive)", color: "#fff" } : {}}
              >
                {formSent ? t["form-sent"] : t["form-submit"]}
              </button>
            </form>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="footer">
        <div className="gut footer__inner">
          <div className="footer__mark">
            <img src="/brand_assets/byCorazonada_logo.png" alt="ByCorazonada"/>
            <span className="footer__mark-name">ByCorazonada</span>
          </div>
          <div className="footer__right">
            <span>© 2025 · Ibiza</span>
            <div className="footer__social" aria-label="Redes sociales">
              <a href="https://www.instagram.com/corazonadasailing" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@corazonada.sailin" target="_blank" rel="noopener" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.28 8.28 0 0 0 4.84 1.53V6.84a4.85 4.85 0 0 1-1.07-.15z"/>
                </svg>
              </a>
            </div>
            <a href="#">{t["footer-privacy"]}</a>
          </div>
        </div>
      </footer>


      {/* ═══════════════════════════════════════════
          WHATSAPP
      ═══════════════════════════════════════════ */}
      <a
        className={`wa${waVisible ? " visible" : ""}`}
        href={waHref}
        target="_blank"
        rel="noopener"
        aria-label="Contactar por WhatsApp"
      >
        <span className="wa__label">WhatsApp</span>
        <span className="wa__icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="#fff" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.417A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            <path fill="var(--navy)" d="M17.004 14.57c-.277-.138-1.637-.807-1.89-.898-.254-.092-.438-.138-.622.138-.184.277-.713.898-.874 1.082-.16.184-.322.207-.598.07-.277-.139-1.168-.43-2.224-1.372-.822-.733-1.376-1.638-1.537-1.914-.162-.276-.017-.425.121-.562.124-.124.277-.322.415-.483.139-.162.185-.277.277-.46.092-.185.046-.346-.023-.484-.07-.139-.622-1.498-.852-2.051-.224-.539-.452-.466-.622-.475l-.53-.009c-.184 0-.483.07-.737.346-.253.277-.966.944-.966 2.303s.99 2.672 1.128 2.856c.138.184 1.95 2.978 4.727 4.177.66.285 1.175.456 1.577.583.662.21 1.265.18 1.741.11.531-.08 1.637-.669 1.868-1.315.23-.645.23-1.197.162-1.314-.07-.116-.253-.185-.53-.323z"/>
          </svg>
        </span>
      </a>
    </>
  );
}
