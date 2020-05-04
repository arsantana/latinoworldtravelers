import React from 'react';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Jumbotron from '../components/Jumbotron';
import contact from '../images/contact.jpg';
import { Container } from 'react-bootstrap';


const ContactPage = () => {
  return(
    <PrimaryLayout>
      <Jumbotron 
        img={contact}
        heading='Contact'
      />
      <Container>
        <h1>Get in touch with us!</h1>
      </Container>
    </PrimaryLayout>
  )
}

export default ContactPage;