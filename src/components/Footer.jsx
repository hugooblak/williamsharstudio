import { useRef } from 'react'

const STARS = 4.9

function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => {
                const filled = s <= Math.floor(rating)
                const partial = !filled && s === Math.ceil(rating)
                return (
                    <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="none">
                        {partial ? (
                            <>
                                <defs>
                                    <linearGradient id={`pg-${s}`}>
                                        <stop offset="80%" stopColor="#C4A484" />
                                        <stop offset="80%" stopColor="rgba(255,255,255,0.1)" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M8 1l1.83 3.71 4.1.6-2.97 2.89.7 4.08L8 10.24 4.34 12.28l.7-4.08L2.07 5.31l4.1-.6L8 1z"
                                    fill={`url(#pg-${s})`}
                                />
                            </>
                        ) : (
                            <path
                                d="M8 1l1.83 3.71 4.1.6-2.97 2.89.7 4.08L8 10.24 4.34 12.28l.7-4.08L2.07 5.31l4.1-.6L8 1z"
                                fill={filled ? '#C4A484' : 'rgba(255,255,255,0.15)'}
                            />
                        )}
                    </svg>
                )
            })}
        </div>
    )
}

export default function Footer() {
    const footerRef = useRef(null)

    return (
        <footer ref={footerRef} className="bg-ink text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Top CTA Banner */}
                <div className="footer-col bg-oak/10 border border-oak/20 rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h2 className="font-heading font-black text-white text-3xl md:text-4xl leading-tight mb-2">
                            Redo för din nästa klippning?
                        </h2>
                        <p className="font-body text-white/50 text-sm">
                            Boka online på under 60 sekunder.
                        </p>
                    </div>
                    <a
                        href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="footer-boka-btn"
                        className="flex-shrink-0 inline-flex items-center gap-2 bg-oak hover:bg-oak-dark text-white font-heading font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-oak/30"
                    >
                        Boka Tid
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                {/* Footer columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand col */}
                    <div className="footer-col">
                        <div className="mb-6">
                            <div className="font-heading font-bold text-xl mb-1">William's Hårstudio</div>
                            <div className="font-mono text-oak text-[11px] tracking-widest uppercase">Precision på Gävlegatan</div>
                        </div>
                        {/* Review summary */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <StarRating rating={STARS} />
                            <div className="mt-3">
                                <span className="font-mono-nums font-bold text-white text-2xl">4.9</span>
                                <span className="font-body text-white/40 text-sm ml-1">av 5 stjärnor</span>
                            </div>
                            <p className="font-body text-white/50 text-xs mt-1 leading-relaxed">
                                Baserat på 3 863 recensioner via{' '}
                                <a
                                    href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-oak hover:underline"
                                >
                                    Bokadirekt.se
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Contact col */}
                    <div className="footer-col">
                        <h3 className="font-heading font-semibold text-white/40 text-xs tracking-widest uppercase mb-6">
                            Kontakt & Besök
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-oak mt-0.5">📍</span>
                                <div>
                                    <p className="font-body text-white font-medium">Gävlegatan 1</p>
                                    <p className="font-body text-white/40 text-sm">113 30 Stockholm</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-oak">📞</span>
                                <a
                                    href="tel:0707790666"
                                    className="font-mono text-white hover:text-oak transition-colors"
                                >
                                    070 779 06 66
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-oak">🌐</span>
                                <a
                                    href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-body text-white/60 hover:text-oak transition-colors text-sm"
                                >
                                    bokadirekt.se
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours col */}
                    <div className="footer-col">
                        <h3 className="font-heading font-semibold text-white/40 text-xs tracking-widest uppercase mb-6">
                            Öppettider
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { day: 'Måndag – Fredag', time: '09:00 – 19:00' },
                                { day: 'Lördag', time: '10:00 – 17:00' },
                                { day: 'Söndag', time: 'Stängt' },
                            ].map((row) => (
                                <li key={row.day} className="flex justify-between items-center pb-3 border-b border-white/8 last:border-0">
                                    <span className="font-body text-white/50 text-sm">{row.day}</span>
                                    <span className="font-mono text-white text-sm">{row.time}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Topprankning badge */}
                        <div className="mt-6 inline-flex items-center gap-2 bg-oak/15 border border-oak/30 rounded-lg px-4 py-2.5">
                            <span className="text-lg">🏆</span>
                            <span className="font-mono text-oak text-xs font-semibold tracking-wide">
                                Topprankning 2024
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="oak-line mb-8" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-body text-white/25 text-xs">
                        © 2026 William's Hårstudio. Alla rättigheter förbehållna.
                    </p>
                    <p className="font-mono text-white/15 text-[10px] tracking-widest uppercase">
                        Gävlegatan · Stockholm · Sweden
                    </p>
                </div>
            </div>

            {/* Mobile sticky Boka Tid */}
            <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-paper border-t border-ink/10 px-4 py-3 shadow-lg">
                <a
                    href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="mobile-sticky-boka-btn"
                    className="w-full flex items-center justify-center gap-2 bg-oak text-white font-heading font-bold text-base py-4 rounded-full hover:bg-oak-dark transition-colors"
                >
                    Boka Tid
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </footer>
    )
}
