import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import './header.css'
function Header(){
    return (
        <header className="Apppp-header">
                  
                <div className='body'>
                <section className='contain'>
                  <div className='top-card banner-msg-box form_container msg'>
                    <div className='top-Header'>
                    Let's develop a passion for learning!
                    </div>
                    <div className='top-middle'>
                    “Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” <br></br>
                      <div className='ae'>               ― Albert Einstein</div> 
                    </div>
                  </div>
                  <div className="slide" >
                  <Carousel className="slide"  controls={true} keyboard={true} touch={true} interval={2500}>
                        <Carousel.Item>
                          <img
                          className="d-block w-900 home-im"
                            src="https://www.ineteconomics.org/uploads/featured/iStock-1171902434.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                          className="d-block w-900 home-im"
                            src="https://cdn-res.keymedia.com/cms/images/us/039/0248_637214159053363868.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-900 home-im"
                            src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NvbXB1dGVyLWtleWJvYXJkLTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0="
                            alt="Third slide"
                          />
                        </Carousel.Item>
                  </Carousel>
                  </div>
                  </section>

                </div>
              </header>

    )
    
}
export default Header;