import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { label: 'Tjänster', href: '#tjanster' },
        { label: 'Om oss', href: '#om-oss' },
        { label: 'Hitta oss', href: '#hitta-oss' },
    ]

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-ink/5 py-0'
                : 'bg-transparent py-2'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex flex-col leading-tight group">
                    <span
                        className={`font-heading font-bold text-[18px] tracking-tight transition-colors duration-300 ${scrolled ? 'text-ink' : 'text-white'
                            }`}
                    >
                        William's Hårstudio
                    </span>
                    <span
                        className={`font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-ink/60' : 'text-oak'
                            }`}
                    >
                        Gävlegatan · Stockholm
                    </span>
                </a>

                {/* Desktop nav links */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <li key={l.label}>
                            <a
                                href={l.href}
                                className={`font-body text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-oak-dark ${scrolled ? 'text-ink/70' : 'text-white'
                                    }`}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-2 bg-oak hover:bg-oak-dark text-ink font-heading font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-oak/30"
                    >
                        Boka Tid
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        className={`md:hidden p-2 transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Meny"
                    >
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            {menuOpen ? (
                                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            ) : (
                                <>
                                    <path d="M3 7h16M3 11h16M3 15h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-ink/5 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 py-4 flex flex-col gap-4">
                    {links.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-body text-ink/80 hover:text-oak-dark font-medium text-base py-1"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="https://www.bokadirekt.se/places/williams-harstudio-20126"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-oak text-ink font-heading font-bold text-sm px-5 py-3 rounded-full mt-2"
                    >
                        Boka Tid
                    </a>
                </div>
            </div>
        </nav>
    )
}