import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, Button } from 'react-bootstrap';
import './Home.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <div className="home">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <div className="text-container">
              <div className="text-content">
                <h1>Welcome to Our Website</h1>
                <p>This is a brief introduction about the website. Here you can add some more descriptive text or any other content you'd like to display on the Home page.</p>
                <Button variant="primary" onClick={handleSignInClick}>Sign In</Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption className="carousel-caption">
            <div className="text-container">
              <div className="text-content">
                <h1>Welcome to Our Website</h1>
                <p>This is a brief introduction about the website. Here you can add some more descriptive text or any other content you'd like to display on the Home page.</p>
                <Button variant="primary" onClick={handleSignInClick}>Sign In</Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption className="carousel-caption">
            <div className="text-container">
              <div className="text-content">
                <h1>Welcome to Our Website</h1>
                <p>This is a brief introduction about the website. Here you can add some more descriptive text or any other content you'd like to display on the Home page.</p>
                <Button variant="primary" onClick={handleSignInClick}>Sign In</Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="additional-info">
        <div id="about-section" className="info-text">
          <div className="info-container">
            <h2>About Our Organization</h2>
            <p>Here you can provide more information about your organization, its mission, values, achievements, etc.</p>
          </div>
          <div className="info-container">
            <h2>Our Services</h2>
            <p>Describe the services or products your organization offers. Highlight key features and benefits.</p>
          </div>
        </div>
        <div className="info-image">
          <img src={image3} alt="Info" />
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Your Organization. All rights reserved.</p>
        <p>Contact us: info@yourorganization.com</p>
      </footer>
    </div>
  );
};

export default Home;










