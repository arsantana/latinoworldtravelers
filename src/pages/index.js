import React from "react";
import Navigation from '../components/Navigation';
import Slider from '../components/Slider/Slider';
import Destinations from '../components/Destinations';
import Reviews from '../components/ReviewSection';
import FeaturedPosts from '../components/FeaturedPosts';
import Services from '../components/Services';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
]

const IndexPage = () => (
  <>
    <Navigation />
    <Slider slides={images} autoPlay={3}  />
    <Destinations />
    <Reviews />
    <FeaturedPosts />
    <Services />
    <SubscribeSection />
    <Footer />
  </>
)

export default IndexPage
