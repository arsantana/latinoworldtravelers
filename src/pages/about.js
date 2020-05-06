import React from 'react';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Jumbotron from '../components/Jumbotron';
import girls from '../images/girls.jpg';
import girl1 from '../images/girl1.jpg';
import friends2 from '../images/friends2.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { css, jsx } from '@emotion/core'

const AboutPage = () => {
  return(
    <PrimaryLayout>
      <Jumbotron 
        img={girls}
        heading='About Us'
      />
      <Container>
        <Row className='my-5'>
          <Col className='my-4' >
          <h1 className="heading-secondary heading-teal "> About LWT </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deserunt fugit assumenda error laboriosam dolorem? Saepe officia labore ex magnam! Enim cupiditate ducimus in aut reiciendis necessitatibus excepturi dolor quod, incidunt eaque aperiam architecto modi aliquid provident quaerat explicabo nulla quos dolorum? Saepe alias possimus laborum neque quaerat nemo optio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum animi molestiae dicta, laboriosam beatae quae perferendis expedita sapiente ratione quos explicabo, eum, ex at! Laborum eius soluta reiciendis quae earum qui atque rem doloribus laboriosam sed id, distinctio, hic nam accusantium rerum, fuga aut quam minima aliquid eveniet placeat sit! Alias eius repellendus id facilis. Quia rem nesciunt ea ducimus?
          </Col>
          <Col className='my-4'>
          <Image css={ImageCSS} src={friends2}  />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col className='my-4' >
            <Image css={ImageCSS} src={friends2} />
          </Col>
          <Col className='my-4' >
          <h1 className="heading-secondary heading-teal "> Mission </h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique in quae, sit tempora corrupti illo. Adipisci obcaecati hic cupiditate recusandae iste esse natus, officiis aliquid minima distinctio harum suscipit amet odio dignissimos ut. Necessitatibus perspiciatis, non nisi rem voluptate magnam repellat vel animi pariatur, accusamus nulla aliquid minima, et neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident nulla incidunt sed, mollitia iure esse sapiente atque fugiat recusandae, aspernatur sunt commodi impedit enim quibusdam ut vel non fuga rerum obcaecati praesentium iusto. Sunt vel vero modi. Commodi vero dolorem maiores porro delectus nisi alias. Ratione perferendis perspiciatis molestias quae consequatur, veniam ad ducimus est cumque possimus facere. Earum cupiditate sit nulla consequatur odit saepe hic obcaecati, nisi nemo! Numquam maiores aut nulla ratione itaque, quam obcaecati doloremque dolorum dolorem tempora modi, voluptatibus amet inventore voluptas fugit corporis enim distinctio? Rerum quos corporis totam. Velit perspiciatis molestias officiis adipisci?
          </Col>
        </Row>
        <h1 className="heading-secondary heading-teal "> Team </h1>
        <Row className='my-4 d-flex justify-content-center' >
          
          <Col>
          <Image css={TeamCSS} src={girl1} ></Image>
          </Col>
          <Col>
          <Image css={TeamCSS} src={girl1} ></Image>
          </Col>
          <Col>
          <Image css={TeamCSS} src={girl1} ></Image>
          </Col>
          <Col>
          <Image css={TeamCSS} src={girl1} ></Image>
          </Col>
          
          
        </Row>
      </Container>
    </PrimaryLayout>
  )
}

const ImageCSS = css`
  width: auto;
  height: 30rem;
`

const TeamCSS = css `
  height: 21.5rem;
  width: 17.5rem;
  background-size: cover;
  background-repeat: no-repat;
  background-position: center;
`

export default AboutPage;