import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
    { value: '3 863+', label: 'Nöjda kunder' },
    { value: '4.9/5', label: 'på Bokadirekt' },
    { value: '#1', label: 'Topprankning 2024' },
    { value: '17+', label: 'Års erfarenhet' },
]

export default function TrustStrip() {
    const stripRef = useRef(null)

    useEffect(() => {
        const items = stripRef.current.querySelectorAll('.trust-item')
        gsap.fromTo(items,
            { opacity: 0, y: 16 },
            {
                opacity: 1, y: 0,
                stagger: 0.12,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: stripRef.current,
                    start: 'top 95%',
                },
            }
        )
    }, [])

    return (
        <section
            ref={stripRef}
            className="bg-white border-y border-oak/30 py-6"
            aria-label="Förtroendeindikatorer"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-0">
                    {ITEMS.map((item, i) => (
                        <div key={i} className="trust-item flex items-center gap-3" style={{ opacity: 0 }}>
                            {i > 0 && (
                                <div className="hidden md:block w-px h-6 bg-ink/10" />
                            )}
                            <div className="flex items-baseline gap-2 md:px-8">
                                <span className="font-mono-nums font-bold text-ink text-xl md:text-2xl">
                                    {item.value}
                                </span>
                                <span className="font-body text-oak-deep text-xs md:text-sm tracking-wide font-bold">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}