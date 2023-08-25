// import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReview, Subscribe, Footer } from './sections/index'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import CustomerReview from './sections/CustomerReview'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
import Nav from './components/Nav'
const App = () => (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-1 padding wide:padding-l padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  )
  
export default App;