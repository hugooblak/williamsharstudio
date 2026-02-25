import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TRUST_POINTS = [
    {
        label: "Bokadirekt",
        value: "4.9/5",
        unit: "baserat på 3 800+ betyg",
        order: "order-1 lg:order-3"
    },
    {
        label: "Google",
        value: "450+",
        unit: "verifierade stjärnor",
        order: "order-2 lg:order-4"
    },
    {
        label: "Erfarenhet",
        value: "17+",
        unit: "År i yrket",
        order: "order-3 lg:order-1"
    },
    {
        label: "Plats",
        value: "Vasastan",
        unit: "Sthlm City",
        order: "order-4 lg:order-2"
    }
]

const REVIEWS = [
    "I came to Nahid to fix my hair that got ruined after living abroad, and I’m in awe of the results! Just after this one visit I have the final results I wanted.",
    "Williams Hårstudio är som att komma hem. Fin service, gott kaffe med chokladkex och ett stort glas kallt vatten. Professionella medarbetare.",
    "Nahid klipper noggrant efter vad jag ville och kunde bolla hur det kunde bli bättre för mig. En av de mest professionella i Vasastan.",
    "Kände mig som George Clooney när jag gick hem. Precisionen och bemötandet är i en klass för sig själv. Bästa klippningen på 10 år.",
    "Nahid klippte båda mina barn (4 och 7 år). Hon tog sig verkligen tid, var så gullig mot dem och lyckades både charma och klippa dem perfekt."
]

export default function Trustrip() {
    const sectionRef = useRef(null)
    const itemsRef = useRef([])
    const quoteRef = useRef(null)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(itemsRef.current,
                { y: 15, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 95%",
                    }
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            gsap.to(quoteRef.current, {
                opacity: 0,
                y: -3,
                duration: 0.4,
                onComplete: () => {
                    setIndex((prev) => (prev + 1) % REVIEWS.length)
                    gsap.fromTo(quoteRef.current,
                        { y: 3, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.4 }
                    )
                }
            })
        }, 8000)
        return () => clearTimeout(timer)
    }, [index])

    return (
        <section ref={sectionRef} className="bg-white py-8 md:py-10 border-b border-ink/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                    {/* Trust Points Grid - Kompakt gap */}
                    <div className="grid grid-cols-2 lg:flex lg:items-center gap-x-8 gap-y-6 md:gap-x-12 w-full lg:w-auto">
                        {TRUST_POINTS.map((point, i) => (
                            <div
                                key={i}
                                ref={el => itemsRef.current[i] = el}
                                className={`flex flex-col items-center lg:items-start ${point.order}`}
                            >
                                <span className="font-mono text-[9px] md:text-[10px] text-oak-deep font-black uppercase tracking-[0.2em] mb-1">
                                    {point.label}
                                </span>
                                <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                                    <span className="font-heading font-bold text-ink text-xl md:text-2xl tracking-tighter uppercase leading-tight">
                                        {point.value}
                                    </span>
                                    <span className="font-body text-ink/60 text-[10px] md:text-xs lowercase font-medium">
                                        {point.unit}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Divider - Kortare för att spara vertikal plats */}
                    <div className="hidden lg:block w-px h-8 bg-ink/10 lg:order-5" />

                    {/* Review Slider - Mindre padding och tightare text */}
                    <div
                        ref={el => itemsRef.current[TRUST_POINTS.length] = el}
                        className="w-full lg:max-w-sm flex flex-col items-center lg:items-start lg:order-6"
                    >
                        <div className="flex gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-oak rounded-full opacity-70" />
                            ))}
                        </div>

                        <div ref={quoteRef} className="min-h-[80px] md:min-h-[60px] flex flex-col justify-center text-center lg:text-left">
                            <p className="font-body text-ink/80 text-sm md:text-base italic leading-snug font-semibold">
                                "{REVIEWS[index]}"
                            </p>
                            <p className="font-mono text-[9px] text-ink/30 uppercase mt-2 font-bold tracking-widest">
                                — Verifierad recension
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}