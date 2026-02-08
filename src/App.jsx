import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import WhyChooseMe from './components/WhyChooseMe'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
                  <WhyChooseMe />
            <Services />
            <Work />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}
