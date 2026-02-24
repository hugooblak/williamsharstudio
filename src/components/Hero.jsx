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
        // Use fromTo to guarantee the end state
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
            className="relative w-full"
            style={{ height: '95dvh', minHeight: '600px' }}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
            />

            {/* Gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(250,249,246,0.2) 0%, rgba(250,249,246,0.6) 55%, rgba(250,249,246,0.95) 100%)',
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-start justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-28 max-w-7xl mx-auto">
                {/* Eyebrow */}
                <p
                    ref={subRef}
                    className="font-mono text-oak-dark text-xs md:text-sm tracking-[0.25em] uppercase mb-4"
                    style={{ opacity: 0 }}
                >
                    En lugn oas i hjärtat av staden där din vision blir verklighet.
                </p>

                {/* Headline */}
                <h1
                    ref={headlineRef}
                    className="font-heading font-black text-ink text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight max-w-4xl mb-8"
                    style={{ opacity: 0 }}
                >
                    Skräddarsydd hårvård<br />
                    <span className="text-oak-dark font-normal italic">för din unika stil.</span>
                </h1>

                {/* CTA + badge row */}
                <div
                    ref={ctaRef}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full"
                    style={{ opacity: 0 }}
                >
                    <a
                        href="#tjanster"
                        id="hero-boka-btn"
                        className="inline-flex items-center gap-3 bg-oak hover:bg-oak-dark text-ink font-heading font-bold text-base px-7 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-oak/40"
                    >
                        Upptäck våra behandlingar
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    {/* Social proof pill */}
                    <div
                        ref={badgeRef}
                        className="social-pill inline-flex items-center gap-2.5 rounded-full px-5 py-3 !bg-white/40 !border-white/40"
                        style={{ opacity: 0 }}
                    >
                        <span className="text-lg leading-none">⭐</span>
                        <span className="font-body text-ink text-sm font-medium leading-tight">
                            4.9/5{' '}
                            <span className="text-ink/70 font-normal">
                                (3 863+ betyg på Bokadirekt)
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
                <span className="font-mono text-ink text-[10px] tracking-widest uppercase">Scroll</span>
                <div className="w-px h-8 bg-ink/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-ink animate-bounce" style={{ animationDuration: '1.6s' }} />
                </div>
            </div>
        </section>
    )
}
