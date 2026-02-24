import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HERO_IMAGE =
    'https://images.unsplash.com/photo-1527736947477-2790e28f3443?w=1800&q=80&auto=format&fit=crop'

export default function Hero() {
    const headlineRef = useRef(null)
    const subRef = useRef(null)
    const badgeRef = useRef(null)
    const ctaRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 })
        tl.fromTo(subRef.current,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 }
        )
            .fromTo(headlineRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9 },
                '-=0.4'
            )
            .fromTo(badgeRef.current,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6 },
                '-=0.5'
            )
            .fromTo(ctaRef.current,
                { y: 16, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                '-=0.4'
            )
    }, [])

    return (
        <section
            id="hero"
            className="relative w-full bg-black"
            style={{ height: '95dvh', minHeight: '600px' }}
        >
            {/* Background image container - Ökad mörkhetsgrad för vit text-kontrast */}
            <div className="absolute inset-0 z-0 bg-black">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 grayscale-[10%]"
                    style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
                />
            </div>

            {/* Gradient overlay - Mörkare i botten och toppen för att lyfta fram innehållet */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%)',
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-start justify-start pt-52 md:pt-64 px-6 md:px-16 lg:px-28 max-w-7xl mx-auto">
                {/* Eyebrow - Ändrad till VIT */}
                <p
                    ref={subRef}
                    className="font-mono text-white text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 drop-shadow-lg"
                    style={{ opacity: 0 }}
                >
                    En lugn oas i hjärtat av staden.
                </p>

                {/* Headline - Ändrad till VIT */}
                <h1
                    ref={headlineRef}
                    className="font-heading font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight max-w-4xl mb-8 drop-shadow-xl"
                    style={{ opacity: 0 }}
                >
                    Skräddarsydd hårvård<br />
                    <span className="text-oak font-normal italic drop-shadow-md">för din unika stil.</span>
                </h1>

                {/* CTA + badge row */}
                <div
                    ref={ctaRef}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full"
                    style={{ opacity: 0 }}
                >
                    {/* Uppdaterad knapp - Guld/Oak istället för svart */}
                    <a
                        href="#tjanster"
                        className="inline-flex items-center gap-3 bg-oak hover:bg-oak-dark text-ink font-heading font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
                    >
                        Upptäck våra behandlingar
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    {/* Social proof pill */}
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2.5 rounded-full px-5 py-3 bg-white/10 border border-white/20 shadow-md backdrop-blur-md"
                        style={{ opacity: 0 }}
                    >
                        <span className="text-lg leading-none">⭐</span>
                        <span className="font-body text-white text-sm font-semibold leading-tight">
                            4.9/5{' '}
                            <span className="text-white/70 font-normal">
                                (3 863+ betyg)
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-80">
                <span className="font-mono text-white text-[10px] tracking-widest uppercase">Scroll</span>
                <div className="w-px h-8 bg-white/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white animate-bounce" style={{ animationDuration: '1.6s' }} />
                </div>
            </div>
        </section>
    )
}