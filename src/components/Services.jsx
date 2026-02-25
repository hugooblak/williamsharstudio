import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PRICE_CATEGORIES = [
    {
        title: 'Klippning & Styling',
        services: [
            { name: 'Herrklippning', price: '480:-', info: '45 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/herrklippning-187538' },
            { name: 'Damklippning inkl. tvätt & fön', price: '580:-', info: '60 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/damklippning-inklusive-tvatt-fon-187540' },
            { name: 'Damklippning (extra tjockt/långt)', price: '650:-', info: '70 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/damklippning-extra-tjockt-langt-har-3301846' },
            { name: 'Skinfade', price: '450:-', info: '40 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/skinfade-1330813' },
            { name: 'Student Herrklipp', price: '390:-', info: 'Inkl. tvätt', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/student-herrklipp-187541' },
            { name: 'Student Damklipp inkl. tvätt & fön', price: '490:-', info: '60 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/student-damklippning-inklusive-tvatt-fon-187542' },
            { name: 'Barnklippning (upp till 13 år)', price: '350:-', info: 'Pojke/Flicka', url: 'https://www.bokadirekt.se/places/williams-harstudio-20126' },
            { name: 'Pensionär Herr/Dam', price: '380/390:-', info: 'Vardagar', url: 'https://www.bokadirekt.se/places/williams-harstudio-20126' },
            { name: 'Maskinklipp (ej fade)', price: '200:-', info: '15 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/maskinklipp-1350970' },
            { name: 'Tvätt & Fön (Kort/Långt)', price: 'fr. 350:-', info: '35 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/tvatt-fon-kort-har-187533' },
            { name: 'Rakpermanent', price: 'Gratis konsultation', info: '30 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/rakpermanent-187537' },
            { name: 'Hårförlängning', price: 'Ring för pris', info: '240 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/harforlangning-187546' },
            { name: 'Håruppsättning', price: 'fr. 799:-', info: '60 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/haruppsattning--1032964' },
        ]
    },
    {
        title: 'Färg, Slingor & Balayage',
        services: [
            { name: 'Färg utväxt (max 3 cm)', price: '790:-', info: '70 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/farg-utvaxt-se-info-187547' },
            { name: 'Färga hela håret', price: '1 300:-', info: '80 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/farga-hela-haret-187544' },
            { name: 'Balayage inkl. klippning', price: 'fr. 1 900:-', info: 'Pris beror på tjocklek', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/balayage-2023638' },
            { name: 'Slingor Kort hår', price: 'fr. 1 500:-', info: 'Axellångt', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/slingor-kort-har-187545' },
            { name: 'Slingor Mellanlångt hår', price: 'fr. 1 700:-', info: 'Nedanför axlarna', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/slingor-mellanlangt-har-3106731' },
            { name: 'Slingor Långt hår inkl. klipp', price: 'fr. 1 900:-', info: '150 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/slingor-langt-har-3106736' },
            { name: 'Ombre', price: 'fr. 1 900:-', info: '120 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/ombre-2023639' },
        ]
    },
    {
        title: 'Behandlingar & Laser',
        services: [
            { name: 'Proteinbehandling', price: 'fr. 2 500:-', info: 'Intensiv vård', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/protein-behandling-2149742' },
            { name: 'Keratinbehandling', price: 'fr. 1 700:-', info: 'Återuppbyggande', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/keratin-behandling-2148817' },
            { name: 'Laser Helkropp + Ansikte', price: '1 800:-', info: 'Paketpris', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/laser-helkropp-ansikte-paketpris-187548' },
            { name: 'Laser Hela ben', price: '800:-', info: '45 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/laser-hela-ben-187549' },
            { name: 'Laser Ansikte', price: '550:-', info: '30 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/laser-ansikte-187553' },
            { name: 'Laser Armhåla', price: '550:-', info: '30 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/laser-armhala-187550' },
            { name: 'Huvudmassage (tillägg)', price: '150:-', info: '15 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/huvudmassage-187532' },
        ]
    },
    {
        title: 'Skägg, Fransar & Bryn',
        services: [
            { name: 'Paket: Herrklipp & Skägg', price: '600:-', info: '60 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/paket-prisherrklippning-och-skagg-553601' },
            { name: 'Skägg (trimmning)', price: '300:-', info: '30 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/skagg-1330810' },
            { name: 'Skinfade sidorna', price: '320:-', info: 'Endast sidor', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/skinfade-sidorna-1330812' },
            { name: 'Lashlift', price: '699:-', info: '40 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/lashlift-3027484' },
            { name: 'Browlift', price: '699:-', info: '40 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/browlift-2134902' },
            { name: 'Trådning hela ansiktet', price: '400:-', info: '30 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/tradning-hela-ansiktet-3257199' },
            { name: 'Trådning bryn + färg', price: '500:-', info: '40 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/tradning-utav-hela-ansiktet-ogonbrynsfarg-3120064' },
            { name: 'Trådning bryn (endast)', price: '200:-', info: '15 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/tradning-ogonbryn-1029408' },
            { name: 'Fransfärg', price: '200:-', info: '15 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/fransfargning-187536' },
            { name: 'Ögonbrynsfärg', price: '200:-', info: '15 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/ogonbrynsfarg-553603' },
            { name: 'Makeup', price: 'fr. 1 200:-', info: '60 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/makeup-1032967' },
            { name: 'Makeup Brud', price: 'fr. 1 500:-', info: '90 min', url: 'https://www.bokadirekt.se/boka-tjanst/williams-harstudio-20126/makeup-brud-1893979' },
        ]
    }
]

export default function Services() {
    const [openIndex, setOpenIndex] = useState(0)
    const sectionRef = useRef(null)
    const headingRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(headingRef.current,
            { y: 32, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 85%',
                },
            }
        )
    }, [])

    return (
        <section id="tjanster" ref={sectionRef} className="bg-paper py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <div ref={headingRef} className="mb-16">
                    <p className="font-mono text-oak-deep text-xs tracking-[0.3em] uppercase mb-3 font-bold">
                        Meny & Priser
                    </p>
                    <h2 className="font-heading font-black text-ink text-4xl md:text-5xl leading-tight">
                        Vår Prislista
                    </h2>
                    <div className="oak-line mt-6 max-w-xs" />
                </div>

                <div className="space-y-4">
                    {PRICE_CATEGORIES.map((cat, i) => (
                        <div key={i} className="bg-white border border-ink/10 rounded-2xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate/40 transition-colors"
                            >
                                <span className="font-heading font-bold text-ink text-lg md:text-xl">
                                    {cat.title}
                                </span>
                                <span className={`transform transition-transform duration-300 text-oak-deep ${openIndex === i ? 'rotate-180' : ''}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>

                            <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <div className="p-6 pt-0 space-y-1">
                                    {cat.services.map((s, j) => (
                                        <div key={j} className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-ink/5 last:border-0 group">
                                            <div className="flex flex-col">
                                                <span className="font-body text-ink font-bold text-base">
                                                    {s.name}
                                                </span>
                                                <span className="font-mono text-[11px] text-oak-deep/80 uppercase tracking-wider mt-1 font-bold">
                                                    {s.info}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between sm:justify-end gap-6 mt-4 sm:mt-0">
                                                <span className="font-mono-nums font-black text-ink text-base md:text-lg">
                                                    {s.price}
                                                </span>
                                                {/* HÄR ANVÄNDS NU s.url ISTÄLLET FÖR EN FAST LÄNK */}
                                                <a
                                                    href={s.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-oak text-ink font-heading font-bold text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:bg-oak-dark hover:scale-105 hover:shadow-lg hover:shadow-oak/30"
                                                >
                                                    Boka
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="font-body text-ink/60 text-sm mb-8 italic font-medium">
                        * Priserna kan variera beroende på behandlingens omfattning.
                    </p>
                    <a
                        href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oak text-ink font-heading font-bold text-sm px-10 py-5 rounded-full transition-all duration-300 hover:bg-oak-dark hover:scale-105 shadow-xl hover:shadow-oak/30"
                    >
                        Utforska alla våra behandlingar
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}