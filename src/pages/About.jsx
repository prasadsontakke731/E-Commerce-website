import { Link } from 'react-router-dom';
import img1 from '../assets/images/abou/a6.jpg';
import img2 from '../assets/images/blog/blog-1.jpg';
import img3 from '../assets/images/blog/blog-2.jpg';
import img4 from '../assets/images/blog/blog-3.jpg';
import img5 from '../assets/images/blog/blog-4.jpg';
import img6 from '../assets/images/blog/b1.jpg';
// import img7 from '../assets/images/blog/b2.jpg';
// import img8 from '../assets/images/blog/b3.jpg';
import img9 from '../assets/images/blog/b4.jpg';
import vid from '../assets/images/abou/1-b9e724ac.mp4';

import Marquee from 'react-fast-marquee';

import icon1 from '../assets/images/icon/icon1.png';
import icon2 from '../assets/images/icon/icon2.png';
import icon3 from '../assets/images/icon/icon3.png';
import icon4 from '../assets/images/icon/icon4.png';
import icon5 from '../assets/images/icon/icon5.png';

const About = () => {
  return (
    <>
      <section className='about-wrapper p-5 d-flex justify-content-center align-items-center'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='shop-details text-center align-items-center'>
                <h1 className='text-white'>#Know Us</h1>
                <p className='text-white fs-3'>Get to know us more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='about-us p-5'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={img9} alt='' className='img-fluid p-5' />
          </div>
          <div className='col-md-6 d-flex flex-column align-items-center justify-content-center'>
            <h1>
              <b>Who are we?</b>
            </h1>
            <p className='card-text mb-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{' '}
              Quibusdam tempore unde aperiam, consectetur harum a eum error,{' '}
              <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod
              et sint facere reprehenderit?
            </p>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{' '}
              Quibusdam tempore unde aperiam, consectetur harum a eum error,{' '}
              <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod
              et sint facere reprehenderit?
            </p>
          </div>
        </div>
      </section>
      <section className='about-app p-5'>
        <h2 className='fs-1 text-center mb-4'>
          Download our <Link>App</Link>
        </h2>
        <div className='col-12 p-5 col-md-8 mx-auto'>
          <video loop muted autoPlay src={vid} className='w-100'></video>
        </div>
      </section>
      <section className='abouts p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 d-flex flex-column align-items-center'>
              <h1 className='mb-3'>What our customers say...</h1>
              <p className='mb-4'>
                Our customers never miss a bit on providing feedback
              </p>
            </div>
            <div className='col-12 col-md-6 p-3'>
              <div className='card mb-3'>
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <img
                      src={img1}
                      className='img-fluid rounded-start'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>Marvel Clein</h5>
                      <p className='card-text mb-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{' '}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className='card-text'>
                        <small className='text-body-secondary'>
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 p-3'>
              <div className='card mb-3'>
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <img
                      src={img2}
                      alt=''
                      className='img-fluid rounded-start'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>Melisa Ivy</h5>
                      <p className='card-text mb-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{' '}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className='card-text'>
                        <small className='text-body-secondary'>
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 p-3'>
              <div className='card mb-3'>
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <img
                      src={img3}
                      alt=''
                      className='img-fluid rounded-start'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>Tristian Ann</h5>
                      <p className='card-text mb-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{' '}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className='card-text'>
                        <small className='text-body-secondary'>
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 p-3'>
              <div className='card mb-3'>
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <img
                      src={img4}
                      alt=''
                      className='img-fluid rounded-start'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>Phillip Omosh</h5>
                      <p className='card-text mb-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{' '}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className='card-text'>
                        <small className='text-body-secondary'>
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 p-3'>
              <div className='card mb-3'>
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <img
                      src={img5}
                      alt=''
                      className='img-fluid rounded-start'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>Melisa Ivy</h5>
                      <p className='card-text mb-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{' '}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className='card-text'>
                        <small className='text-body-secondary'>
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 p-3'>
              <div className='card mb-3'>
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <img
                      src={img6}
                      className='img-fluid rounded-start'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>Marvel Clein</h5>
                      <p className='card-text mb-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{' '}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className='card-text'>
                        <small className='text-body-secondary'>
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 p-3'>
              <Marquee className='p-2 slide'>
                <div>
                  <img src={icon1} alt='' className='img-fluid' />
                  <p className='card-text mb-2'>Fast Orders</p>
                </div>
                <div>
                  <img src={icon2} alt='' className='img-fluid' />
                  <p className='card-text mb-2'>Quick Shipping</p>
                </div>
                <div>
                  <img src={icon3} alt='' className='img-fluid' />
                  <p className='card-text mb-2'>High Saves</p>
                </div>
                <div>
                  <img src={icon4} alt='' className='img-fluid' />
                  <p className='card-text'>24/7 Support</p>
                </div>
                <div>
                  <img src={icon5} alt='' className='img-fluid' />
                  <p className='card-text'>Online Orders</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
