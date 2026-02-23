import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="relative">
            <Navbar />
            <main>
                <Hero />
                <TrustStrip />
                <Services />
                <Features />
            </main>
            <Footer />
        </div>
    )
}
