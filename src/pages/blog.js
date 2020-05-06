import React from 'react';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Jumbotron from '../components/Jumbotron';
import blog from '../images/blog.jpg';
import { Container } from 'react-bootstrap';

const BlogPage = () => {
  return(
    <PrimaryLayout>
        <Jumbotron 
        img={blog}
        heading='Blog'
      />
      <Container>
        
      </Container>
    </PrimaryLayout>
  )
}

export default BlogPage;