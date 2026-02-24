import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PORTFOLIO_IMAGES = [
    {
        url: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80&auto=format&fit=crop',
        caption: 'Hårfärgning',
    },
    {
        url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop',
        caption: 'Styling',
    },
    {
        url: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80&auto=format&fit=crop',
        caption: 'Hårvård',
    },
    {
        url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80&auto=format&fit=crop',
        caption: 'Balayage',
    },
]

const PROCESS_STEPS = ['KONSULTATION', 'PRECISION', 'STYLING', 'PERFEKTION']

function PortfolioPillar() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((c) => (c + 1) % PORTFOLIO_IMAGES.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col h-full">
            <p className="font-mono text-oak-dark text-[10px] tracking-[0.3em] uppercase mb-4">01 / Inspiration</p>
            <h3 className="font-heading font-bold text-ink text-2xl mb-6">Vårt arbete</h3>
            <div className="relative flex-1 rounded-3xl overflow-hidden bg-slate" style={{ minHeight: '320px', maxHeight: '400px' }}>
                {PORTFOLIO_IMAGES.map((img, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{ opacity: i === current ? 1 : 0 }}
                    >
                        <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span className="font-heading font-semibold text-white text-lg">{img.caption}</span>
                        </div>
                    </div>
                ))}
                {/* Dot indicators */}
                <div className="absolute top-4 right-4 flex gap-1.5 z-10">
                    {PORTFOLIO_IMAGES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-oak w-4' : 'bg-white/50'
                                }`}
                            aria-label={`Bild ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

function ProcessPillar() {
    const [visibleSteps, setVisibleSteps] = useState([])
    const wrapperRef = useRef(null)
    const triggered = useRef(false)

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: 'top 75%',
            onEnter: () => {
                if (triggered.current) return
                triggered.current = true
                PROCESS_STEPS.forEach((_, i) => {
                    setTimeout(() => {
                        setVisibleSteps((prev) => [...prev, i])
                    }, i * 650)
                })
            },
        })
        return () => trigger.kill()
    }, [])

    return (
        <div ref={wrapperRef} className="flex flex-col h-full">
            <p className="font-mono text-oak-dark text-[10px] tracking-[0.3em] uppercase mb-4">02 / Process</p>
            <h3 className="font-heading font-bold text-ink text-2xl mb-6">Vår process</h3>
            <div className="flex-1 bg-[#FDFBF7] border border-oak/20 rounded-3xl p-8 flex flex-col justify-center gap-6 shadow-sm">
                {PROCESS_STEPS.map((step, i) => (
                    <div
                        key={step}
                        className={`flex items-center gap-4 transition-all duration-500 ${visibleSteps.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <span className="font-mono text-oak w-6">{String(i + 1).padStart(2, '0')}</span>
                        <div className="flex-1 h-px bg-ink/10" />
                        <span className="font-heading font-semibold text-ink text-sm md:text-base tracking-wider">
                            {step}
                        </span>
                        {visibleSteps.includes(i) && i === visibleSteps.length - 1 && (
                            <span className="cursor-blink text-oak-dark font-mono text-lg">_</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

function LocationPillar() {
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        // Simple open/closed status based on time (Mon–Sat 9–19)
        const now = new Date()
        const day = now.getDay() // 0=Sun
        const hour = now.getHours()
        setIsOpen(day >= 1 && day <= 6 && hour >= 9 && hour < 19)
    }, [])

    return (
        <div className="flex flex-col h-full">
            <p className="font-mono text-oak-dark text-[10px] tracking-[0.3em] uppercase mb-4">03 / Hitta oss</p>
            <h3 className="font-heading font-bold text-ink text-2xl mb-6">Vår plats</h3>
            <div className="flex-1 bg-slate rounded-3xl p-8 flex flex-col justify-between gap-6">
                {/* Address block */}
                <div id="hitta-oss">
                    <div className="flex items-start gap-3 mb-5">
                        <span className="text-2xl mt-0.5">📍</span>
                        <div>
                            <p className="font-heading font-bold text-ink text-xl">Gävlegatan 1</p>
                            <p className="font-body text-ink/50 text-sm">113 30 Stockholm</p>
                        </div>
                    </div>
                    {/* Status indicator */}
                    <div className="flex items-center gap-3 mb-6">
                        <div
                            className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${isOpen ? 'bg-green-500 pulse-dot' : 'bg-red-400'
                                }`}
                        />
                        <span className="font-body text-sm font-semibold text-ink">
                            {isOpen ? 'Öppet nu' : 'Stängt just nu'}
                        </span>
                        <span className="font-body text-xs text-ink/40">
                            {isOpen ? '· Stänger 19:00' : '· Öppnar 09:00'}
                        </span>
                    </div>
                </div>

                {/* Hours */}
                <div className="space-y-2">
                    {[
                        { day: 'Måndag – Fredag', time: '09:00 – 19:00' },
                        { day: 'Lördag', time: '10:00 – 17:00' },
                        { day: 'Söndag', time: 'Stängt' },
                    ].map((row) => (
                        <div key={row.day} className="flex justify-between items-center py-2 border-b border-ink/8 last:border-0">
                            <span className="font-body text-ink/60 text-sm">{row.day}</span>
                            <span className="font-mono text-ink text-sm font-medium">{row.time}</span>
                        </div>
                    ))}
                </div>

                {/* Directions CTA */}
                <a
                    href="https://maps.google.com/?q=Gävlegatan+1+Stockholm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-ink/20 hover:border-oak text-ink hover:text-oak font-heading font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200"
                >
                    Vägbeskrivning
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default function Features() {
    const sectionRef = useRef(null)
    const headingRef = useRef(null)

    useEffect(() => {
        gsap.from(headingRef.current, {
            y: 32,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: headingRef.current,
                start: 'top 88%',
            },
        })
    }, [])

    return (
        <section
            id="om-oss"
            ref={sectionRef}
            className="bg-white py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section heading */}
                <div ref={headingRef} className="mb-16 max-w-xl">
                    <p className="font-mono text-oak-dark text-xs tracking-[0.3em] uppercase mb-3">
                        Tre pelare
                    </p>
                    <h2 className="font-heading font-black text-ink text-4xl md:text-5xl leading-tight">
                        Det vi gör bäst
                    </h2>
                </div>

                {/* Three pillars grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PortfolioPillar />
                    <ProcessPillar />
                    <LocationPillar />
                </div>
            </div>
        </section>
    )
}
