import React from "react";
// import Navigation from '../components/Navigation';
// import Slider from '../components/Slider/Slider';
// import HeaderSlider from '../components/Carousel';
import Header from '../components/Header/Header';
import Destinations from '../components/Destinations';
import Reviews from '../components/ReviewSection';
import FeaturedPosts from '../components/FeaturedPosts';
import Services from '../components/Services';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';
import Quote from '../Quotes/Quote';


const IndexPage = () => (
  <>
    <Header />
    <Destinations />
    <Reviews />
    <FeaturedPosts />
    <Services />
    <SubscribeSection />
    <Footer />
  </>
)

export default IndexPage
