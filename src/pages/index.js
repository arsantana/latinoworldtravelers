import React from "react";
import Header from '../components/Header/Header';
import AboutSection from '../components/AboutSection';
import Destinations from '../components/Destinations';
import Reviews from '../components/ReviewSection';
import FeaturedPosts from '../components/FeaturedPosts';
import Services from '../components/Services';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';



const IndexPage = () => (
  <>
    <Header />
    <AboutSection />
    <Destinations />
    <Reviews />
    <FeaturedPosts />
    <Services />
    <SubscribeSection />
    <Footer />
  </>
)

export default IndexPage
