import { useSelector } from 'react-redux';

import HomeCarousel from '../components/Home/Sections/HomeCarousel/HomeCarousel';
import HotDeals from '../components/Home/Sections/HotDeals/HotDeals';
import BannersFull from '../components/Home/Sections/Banners/BannersFull';
import evBanner from '../assets/Images/Banners/ev-banner.jpg';
import UserReview from '../components/Home/Sections/UserTestimonials/UserReview';
import Section from '../components/displayLayouts/CategorySection/Section';
import Sale from '../components/Home/Sections/Sale/Sale';
import ProductYear from '../components/Home/Sections/ProductYear/ProductYear';
import CompanySection from '../components/displayLayouts/CategorySection/Company/CompanySection';

import Carosuel from '../components/Home/Sections/CarouselHome/Carosuel';
import Featured from '../components/Home/Sections/Featured/Featured';
import Insight from '../components/Home/Sections/Insight/Insight';

const Home = () => {

  const width = useSelector((state) => state.EbikeLelo.width);

  return (
    <>
      <Carosuel />
      <Featured />

      <Insight />

      {/* <HomeCarousel /> */}
      {/* <Sale /> */}
      <ProductYear />
      {width >= 766 && <CompanySection heading={"Explore Companies"} link='/bikes/new' />}
      <Section heading="New Arrivals" link='/bikes/new' />
      <BannersFull img={evBanner} heading={"Book Electric Vehicle"} info={"Get Best Affordable Electric Vehicles"} btn={"Book Now"} />
      <Section heading="Our Best Recommendation" link='/search' />
      <HotDeals />
      <UserReview title={"User Testimonials"} />
      <Section heading="Special Offers" link='/deals' />
      {/* <AboutUs path={'/about-us'} /> */}
    </>
  )
}

export default Home