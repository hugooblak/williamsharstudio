import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
    { name: 'Herrklippning', price: '480', unit: ':-' },
    { name: 'Skinfade', price: '450', unit: ':-' },
    { name: 'Damklippning', price: '580', unit: ':-' },
    { name: 'Barnklippning (under 12 år)', price: '320', unit: ':-' },
    { name: 'Skägg – Klippning & Formning', price: '280', unit: ':-' },
    { name: 'Klippning + Skägg Kombo', price: '680', unit: ':-' },
    { name: 'Rakning (Straight Razor)', price: '360', unit: ':-' },
    { name: 'Hårfärgning (herr)', price: '750', unit: ':-' },
    { name: 'Toning & Highlights', price: '950+', unit: ':-' },
]

export default function Services() {
    const sectionRef = useRef(null)
    const headingRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(headingRef.current,
            { y: 32, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 85%',
                },
            }
        )

        gsap.fromTo(sectionRef.current.querySelectorAll('.service-row'),
            { opacity: 0, y: 20 },
            {
                opacity: 1, y: 0,
                stagger: 0.07,
                duration: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            }
        )
    }, [])

    return (
        <section
            id="tjanster"
            ref={sectionRef}
            className="bg-paper py-24 md:py-32"
            aria-labelledby="prislista-heading"
        >
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                {/* Section header */}
                <div ref={headingRef} className="mb-16">
                    <p className="font-mono text-oak text-xs tracking-[0.3em] uppercase mb-3">
                        Vad vi erbjuder
                    </p>
                    <h2
                        id="prislista-heading"
                        className="font-heading font-black text-ink text-4xl md:text-5xl leading-tight"
                    >
                        Prislista
                    </h2>
                    <div className="oak-line mt-6 max-w-xs" />
                </div>

                {/* Service rows */}
                <div className="flex flex-col">
                    {SERVICES.map((s, i) => (
                        <div
                            key={i}
                            className="service-row group flex items-center justify-between py-5 border-b border-ink/8 hover:bg-slate/60 -mx-4 px-4 rounded-lg transition-colors duration-200"
                        >
                            {/* Name */}
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <span className="font-mono text-oak/40 text-xs w-5 flex-shrink-0">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="font-body text-ink font-medium text-base truncate">
                                    {s.name}
                                </span>
                            </div>

                            {/* Price + Boka */}
                            <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                                <span className="font-mono-nums font-semibold text-ink text-base">
                                    {s.price}
                                    <span className="text-ink/40 text-sm">{s.unit}</span>
                                </span>
                                <a
                                    href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="boka-btn bg-oak text-white font-heading font-semibold text-xs px-4 py-2 rounded-full hover:bg-oak-dark transition-colors"
                                    aria-label={`Boka ${s.name}`}
                                >
                                    Boka
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="services-boka-btn"
                        className="inline-flex items-center gap-2 bg-ink text-white font-heading font-bold text-sm px-8 py-4 rounded-full hover:bg-ink/80 transition-all duration-200 hover:scale-105"
                    >
                        Se alla tider & boka
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
