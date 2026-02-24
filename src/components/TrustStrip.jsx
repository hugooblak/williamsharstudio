import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const REVIEWS = [
    {
        name: "Elias Berg",
        text: "Hittade äntligen en barberare som faktiskt förstår precision. Min skinfade har aldrig suttit bättre.",
        date: "2 dagar sedan",
        service: "Master Craft"
    },
    {
        name: "Sara Lindström",
        text: "William och teamet är magiska med färg. Lyckades få till exakt den kalla nyansen jag letat efter i flera år.",
        date: "1 vecka sedan",
        service: "Signature Color"
    },
    {
        name: "Johan Eriksson",
        text: "Känslan när man kliver in här är unik. Det är inte bara en klippning, det är 45 minuter total avkoppling.",
        date: "2 veckor sedan",
        service: "Classic Grooming"
    }
]

export default function Trustrip() {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        )
    }, [])

    return (
        <section
            ref={sectionRef}
            className="bg-white py-16 md:py-20 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-xl">
                        <p className="font-mono text-oak-deep text-[10px] tracking-[0.4em] uppercase mb-3 font-black">
                            Kunderfarenhet
                        </p>
                        <h2 className="font-heading font-black text-ink text-3xl md:text-5xl uppercase tracking-tighter leading-[0.95]">
                            Röster från <br /> studion
                        </h2>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 border-l-2 md:border-l-0 md:border-r-2 border-oak/20 pl-4 md:pl-0 md:pr-4">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#D4B996">
                                    <path d="M8 1l1.83 3.71 4.1.6-2.97 2.89.7 4.08L8 10.24 4.34 12.28l.7-4.08L2.07 5.31l4.1-.6L8 1z" />
                                </svg>
                            ))}
                        </div>
                        <p className="font-body text-ink/40 text-[11px] font-bold uppercase tracking-widest">
                            <span className="text-ink">3 800+</span> Verifierade besök
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {REVIEWS.map((rev, i) => (
                        <div
                            key={i}
                            ref={el => cardsRef.current[i] = el}
                            className="relative h-full"
                        >
                            <div className="relative h-full bg-paper/50 border border-ink/[0.03] p-8 md:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:bg-paper">
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="text-oak/40 font-serif text-5xl leading-none">“</div>
                                        <span className="font-mono text-[9px] text-ink/30 uppercase tracking-[0.2em] font-bold">
                                            Verified Stay
                                        </span>
                                    </div>

                                    <p className="font-body text-ink/80 text-lg leading-relaxed mb-8 font-medium">
                                        {rev.text}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-[1px] bg-ink/5 w-12" />
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-heading font-black text-ink text-base uppercase tracking-tight">
                                                {rev.name}
                                            </h4>
                                            <p className="font-mono text-[9px] text-oak-deep uppercase tracking-widest font-black">
                                                {rev.service}
                                            </p>
                                        </div>
                                        <p className="font-mono text-[9px] text-ink/20 uppercase">
                                            {rev.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center">
                    <a
                        href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-ink/60 hover:text-ink transition-all duration-300"
                    >
                        <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] border-b border-ink/10 pb-1 group-hover:border-oak">
                            Se alla recensioner på Bokadirekt
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}