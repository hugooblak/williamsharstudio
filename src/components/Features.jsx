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
            <p className="font-mono text-oak-deep text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">01 / Inspiration</p>
            <h3 className="font-heading font-bold text-ink text-2xl mb-6">Vårt arbete</h3>
            <div className="relative flex-1 rounded-3xl overflow-hidden bg-paper shadow-inner min-h-[380px]">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span className="font-heading font-semibold text-white text-lg shadow-sm">{img.caption}</span>
                        </div>
                    </div>
                ))}
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
            <p className="font-mono text-oak-deep text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">02 / Process</p>
            <h3 className="font-heading font-bold text-ink text-2xl mb-6">Vår process</h3>
            <div className="flex-1 bg-paper border border-oak/30 rounded-3xl p-8 flex flex-col justify-center gap-6 shadow-sm min-h-[380px]">
                {PROCESS_STEPS.map((step, i) => (
                    <div key={step} className={`flex items-center gap-4 transition-all duration-500 ${visibleSteps.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <span className="font-mono text-oak-deep font-bold w-6">{String(i + 1).padStart(2, '0')}</span>
                        <div className="flex-1 h-px bg-ink/10" />
                        <span className="font-heading font-semibold text-ink text-sm md:text-base tracking-wider">{step}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function LocationPillar() {
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        const now = new Date()
        const hour = now.getHours()
        setIsOpen(hour >= 10 && hour < 19)
    }, [])

    return (
        <div className="flex flex-col h-full">
            <p className="font-mono text-oak-deep text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">03 / Hitta oss</p>
            <h3 className="font-heading font-bold text-ink text-2xl mb-6">Vår plats</h3>
            <div className="flex-1 bg-paper border border-oak/20 rounded-3xl p-8 flex flex-col justify-between shadow-sm min-h-[380px]">
                <div>
                    <div className="flex items-start gap-3 mb-5">
                        <span className="text-2xl mt-0.5">📍</span>
                        <div>
                            <p className="font-heading font-bold text-ink text-xl">Gävlegatan 1</p>
                            <p className="font-body text-ink/60 text-sm">113 30 Stockholm</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-green-600 animate-pulse' : 'bg-red-500'}`} />
                        <span className="font-body text-sm font-bold text-ink">{isOpen ? 'Öppet nu' : 'Stängt'}</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center pb-3 border-b border-ink/5">
                            <span className="font-body text-ink/70 text-sm">Måndag – Söndag</span>
                            <span className="font-mono text-ink text-sm font-semibold">10:00 – 19:00</span>
                        </div>
                        <p className="font-body text-ink/40 text-[11px] italic mt-2">
                            * Avvikande tider kan förekomma vid storhelger.
                        </p>
                    </div>
                </div>
                <a
                    href="https://www.google.com/maps/dir/?api=1&destination=William's+Hårstudio+Gävlegatan+1+Stockholm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-oak/20 hover:border-oak-deep text-ink hover:text-oak-deep font-heading font-bold text-sm px-5 py-3 rounded-full transition-all duration-200"
                >
                    Öppna vägbeskrivning
                </a>
            </div>
        </div>
    )
}

export default function Features() {
    return (
        <section id="om-oss" className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-16 max-w-xl">
                    <p className="font-mono text-oak-deep text-xs tracking-[0.3em] uppercase mb-3 font-bold">Tre pelare</p>
                    <h2 className="font-heading font-black text-ink text-4xl md:text-5xl leading-tight">Det vi gör bäst</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <PortfolioPillar />
                    <ProcessPillar />
                    <LocationPillar />
                </div>

                <div className="w-full h-[350px] rounded-3xl overflow-hidden border border-ink/10 shadow-sm relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.8441!2d18.0333!3d59.3444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6f6e0b0001%3A0x6d8b9e6f6e0b0001!2zR8OkdmxlZ2F0YW4gMSwgMTEzIDMwIFN0b2NraG9sbQ!5e0!3m2!1ssv!2sse!4v1710000000000!5m2!1ssv!2sse"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.0) brightness(1.0)' }}
                        allowFullScreen=""
                        loading="lazy"
                        className="transition-all duration-700 group-hover:filter-none"
                    ></iframe>
                    <div className="absolute top-4 right-4 bg-paper/90 backdrop-blur-sm px-4 py-2 rounded-full border border-oak-deep/20 shadow-md pointer-events-none z-10">
                        <span className="font-mono text-[10px] text-ink font-bold uppercase tracking-widest">
                            Hitta till studion
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}