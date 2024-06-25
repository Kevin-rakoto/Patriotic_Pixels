import Header from "../components/layout/Header"
import Hero from "../components/route/hero/Hero"
import Categories from "../components/categories/Categories"
import BestDeals from "../components/route/best-deals/BestDeals"
import FeaturedProduct from "../components/route/featured-product/FeaturedProduct"
import Sponsored from "../components/route/sponsored/Sponsored"
import Footer from "../components/layout/Footer"

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories/>
      <BestDeals />
      <FeaturedProduct />
      <Sponsored/>
      <Footer />
    </div>
  )
}

export default HomePage