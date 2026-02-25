import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1527736947477-2790e28f3443?w=1800&q=80&auto=format&fit=crop'

export default function Hero() {
    const headlineRef = useRef(null)
    const subRef = useRef(null)
    const badgeRef = useRef(null)
    const ctaRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        // Vi mörkar ner elementen med GSAP istället för hårdkodad CSS för att säkra att de syns om JS dör
        const elements = [subRef.current, headlineRef.current, badgeRef.current, ctaRef.current]

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(subRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
        )
            .fromTo(headlineRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5"
            )
            .fromTo([badgeRef.current, ctaRef.current],
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
                "-=0.4"
            )
    }, [])

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative w-full bg-black overflow-hidden"
            style={{ height: '95dvh', minHeight: '600px' }}
        >
            {/* Background & Overlays */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 grayscale-[15%]"
                    style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-16 lg:px-28 max-w-7xl mx-auto">

                {/* Social Proof Pill - Rent & Auktoritärt */}
                <div ref={badgeRef} className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                    <span className="text-oak text-sm">★★★★★</span>
                    <span className="font-body text-white text-xs md:text-sm font-semibold tracking-wide">
                        4.9/5 <span className="text-white/60 font-normal">| 4 300+ verifierade omdömen</span>
                    </span>
                </div>
                <p ref={subRef} className="font-mono text-black text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">
                    William's Hårstudio — Vasastan
                </p>

                <h1 ref={headlineRef} className="font-heading font-black text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1] tracking-tight max-w-5xl mb-10">
                    Din vision. <br />
                    <span className="text-oak font-normal italic pr-4">Vår expertis.</span>
                </h1>

                {/* Knapp-rad */}
                <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                    {/* Primär CTA: Boka - Matchar nu Navbar exakt */}
                    <a
                        href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-oak hover:bg-oak-dark text-ink font-heading font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-oak/30"
                    >
                        Boka tid
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>

                    {/* Sekundär CTA: Ring - Nu med tydlig hover-effekt */}
                    <a
                        href="tel:0707790666"
                        className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 font-heading font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="relative">Ring oss</span>
                    </a>
                </div>
            </div>

            {/* Scroll Indikator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3 opacity-40">
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section >
    )
}