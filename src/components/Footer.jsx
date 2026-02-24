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
                                        <stop offset="80%" stopColor="#947D5C" />
                                        <stop offset="80%" stopColor="rgba(26,26,26,0.1)" />
                                    </linearGradient>
                                </defs>
                                <path d="M8 1l1.83 3.71 4.1.6-2.97 2.89.7 4.08L8 10.24 4.34 12.28l.7-4.08L2.07 5.31l4.1-.6L8 1z" fill={`url(#pg-${s})`} />
                            </>
                        ) : (
                            <path d="M8 1l1.83 3.71 4.1.6-2.97 2.89.7 4.08L8 10.24 4.34 12.28l.7-4.08L2.07 5.31l4.1-.6L8 1z" fill={filled ? '#947D5C' : 'rgba(26,26,26,0.1)'} />
                        )}
                    </svg>
                )
            })}
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="bg-white text-ink pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* CTA-sektion */}
                <div className="bg-paper border border-oak/40 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
                    <div>
                        <h2 className="font-heading font-black text-ink text-3xl md:text-4xl leading-tight mb-2">
                            Redo för din nästa klippning?
                        </h2>
                        <p className="font-body text-ink/70 text-base">
                            Boka online på under 60 sekunder.
                        </p>
                    </div>
                    <a
                        href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-2 bg-oak hover:bg-oak-dark text-ink font-heading font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-md"
                    >
                        Boka Tid
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Kolumn 1: Logo & Rating */}
                    <div className="footer-col">
                        <div className="mb-6">
                            <div className="font-heading font-bold text-xl mb-1">William's Hårstudio</div>
                            <div className="font-mono text-oak-deep text-[11px] tracking-widest uppercase font-bold">Precision på Gävlegatan</div>
                        </div>
                        <div className="bg-slate border border-ink/5 rounded-2xl p-5 shadow-sm inline-block">
                            <StarRating rating={STARS} />
                            <div className="mt-3">
                                <span className="font-mono-nums font-bold text-ink text-2xl">4.9</span>
                                <span className="font-body text-ink/50 text-sm ml-1">av 5 stjärnor</span>
                            </div>
                            <p className="font-body text-ink/60 text-xs mt-1 leading-relaxed">
                                Baserat på 3 863 recensioner via{' '}
                                <a href="https://www.bokadirekt.se/places/williams-harstudio-20126" target="_blank" rel="noopener noreferrer" className="text-oak-deep hover:underline font-bold">
                                    Bokadirekt.se
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Kolumn 2: Kontakt & Sociala Medier */}
                    <div className="footer-col">
                        <h3 className="font-heading font-bold text-ink/40 text-xs tracking-widest uppercase mb-6">Kontakt & Besök</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-oak-deep mt-0.5">📍</span>
                                <div>
                                    <p className="font-body text-ink font-bold">Gävlegatan 1</p>
                                    <p className="font-body text-ink/60 text-sm">113 30 Stockholm</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-oak-deep">📞</span>
                                <a href="tel:0707790666" className="font-mono text-ink font-bold hover:text-oak-deep transition-colors">070-779 06 66</a>
                            </li>
                        </ul>

                        {/* Sociala Ikoner */}
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-paper border border-oak/20 flex items-center justify-center text-ink hover:bg-oak hover:text-white transition-all duration-300 shadow-sm"
                                aria-label="Instagram"
                            >
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-paper border border-oak/20 flex items-center justify-center text-ink hover:bg-oak hover:text-white transition-all duration-300 shadow-sm"
                                aria-label="Facebook"
                            >
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Kolumn 3: Öppettider */}
                    <div className="footer-col">
                        <h3 className="font-heading font-bold text-ink/40 text-xs tracking-widest uppercase mb-6">Öppettider</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center pb-3 border-b border-ink/5 last:border-0">
                                <span className="font-body text-ink/70 text-sm">Måndag – Söndag</span>
                                <span className="font-mono text-ink text-sm font-semibold">10:00 – 19:00</span>
                            </li>
                        </ul>
                        <div className="mt-6 inline-flex items-center gap-2 bg-paper border border-oak/30 rounded-full px-4 py-2 shadow-sm">
                            <span className="text-lg">🏆</span>
                            <span className="font-mono text-oak-deep text-xs font-bold tracking-wide">Topprankning 2024</span>
                        </div>
                    </div>
                </div>

                <div className="oak-line mb-8" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-body text-ink/40 text-xs">© 2026 William's Hårstudio. Alla rättigheter förbehållna.</p>
                    <p className="font-mono text-ink/30 text-[10px] tracking-widest uppercase">Gävlegatan · Stockholm · Sweden</p>
                </div>
            </div>

            {/* Mobil Fast Boka-knapp */}
            <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white border-t border-ink/10 px-4 py-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
                <a href="https://www.bokadirekt.se/places/williams-harstudio-20126" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-oak text-ink font-heading font-bold text-base py-4 rounded-full shadow-sm">
                    Boka Tid
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </footer>
    )
}