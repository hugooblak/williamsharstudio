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
                                        <stop offset="80%" stopColor="#E5D3B3" />
                                        <stop offset="80%" stopColor="rgba(26,26,26,0.1)" />
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
                                fill={filled ? '#E5D3B3' : 'rgba(26,26,26,0.1)'}
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
        <footer ref={footerRef} className="bg-white text-ink pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Top CTA Banner */}
                <div className="footer-col bg-[#FDFBF7] border border-oak/30 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
                    <div>
                        <h2 className="font-heading font-black text-ink text-3xl md:text-4xl leading-tight mb-2">
                            Redo för din nästa klippning?
                        </h2>
                        <p className="font-body text-ink/60 text-sm">
                            Boka online på under 60 sekunder.
                        </p>
                    </div>
                    <a
                        href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="footer-boka-btn"
                        className="flex-shrink-0 inline-flex items-center gap-2 bg-oak hover:bg-oak-dark text-ink font-heading font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-oak/30"
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
                            <div className="font-mono text-oak-dark text-[11px] tracking-widest uppercase">Precision på Gävlegatan</div>
                        </div>
                        {/* Review summary */}
                        <div className="bg-slate border border-ink/5 rounded-2xl p-5">
                            <StarRating rating={STARS} />
                            <div className="mt-3">
                                <span className="font-mono-nums font-bold text-ink text-2xl">4.9</span>
                                <span className="font-body text-ink/50 text-sm ml-1">av 5 stjärnor</span>
                            </div>
                            <p className="font-body text-ink/60 text-xs mt-1 leading-relaxed">
                                Baserat på 3 863 recensioner via{' '}
                                <a
                                    href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-oak-dark hover:underline font-medium"
                                >
                                    Bokadirekt.se
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Contact col */}
                    <div className="footer-col">
                        <h3 className="font-heading font-semibold text-ink/50 text-xs tracking-widest uppercase mb-6">
                            Kontakt & Besök
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-oak-dark mt-0.5">📍</span>
                                <div>
                                    <p className="font-body text-ink font-medium">Gävlegatan 1</p>
                                    <p className="font-body text-ink/60 text-sm">113 30 Stockholm</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-oak-dark">📞</span>
                                <a
                                    href="tel:0707790666"
                                    className="font-mono text-ink hover:text-oak-dark transition-colors"
                                >
                                    070-779 06 66
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-oak-dark">🌐</span>
                                <a
                                    href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-body text-ink/60 hover:text-oak-dark transition-colors text-sm"
                                >
                                    bokadirekt.se
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours col */}
                    <div className="footer-col">
                        <h3 className="font-heading font-semibold text-ink/50 text-xs tracking-widest uppercase mb-6">
                            Öppettider
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { day: 'Måndag – Fredag', time: '09:00 – 19:00' },
                                { day: 'Lördag', time: '10:00 – 17:00' },
                                { day: 'Söndag', time: 'Stängt' },
                            ].map((row) => (
                                <li key={row.day} className="flex justify-between items-center pb-3 border-b border-ink/5 last:border-0">
                                    <span className="font-body text-ink/60 text-sm">{row.day}</span>
                                    <span className="font-mono text-ink text-sm">{row.time}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Topprankning badge */}
                        <div className="mt-6 inline-flex items-center gap-2 bg-[#FDFBF7] border border-oak/30 rounded-full px-4 py-2.5">
                            <span className="text-lg">🏆</span>
                            <span className="font-mono text-oak-dark text-xs font-semibold tracking-wide">
                                Topprankning 2024
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="oak-line mb-8" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-body text-ink/40 text-xs">
                        © 2026 William's Hårstudio. Alla rättigheter förbehållna.
                    </p>
                    <p className="font-mono text-ink/30 text-[10px] tracking-widest uppercase">
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
                    className="w-full flex items-center justify-center gap-2 bg-oak text-ink font-heading font-bold text-base py-4 rounded-full hover:bg-oak-dark transition-colors"
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
