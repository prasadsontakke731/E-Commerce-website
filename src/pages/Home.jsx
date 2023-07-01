// import React from 'react';

import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import NewArrivels from '../components/NewArrivels';
import Img1 from '../assets/images/banner/b17.jpg';
import Img2 from '../assets/images/banner/b10.jpg';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <>
      <section className='banner'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='d-flex flex-column justify-content-center '>
                <div
                  id='carouselExampleInterval'
                  className='carousel slide'
                  data-bs-ride='carousel'
                >
                  <div className='carousel-inner'>
                    <div className='back-details'>
                      <p className='mb-3'>Trade in offer</p>
                      <h1>Super Value Deals</h1>
                      <h2>On all products</h2>

                      <p className='mb-3'>Save more today with Apneck</p>

                      <Link
                        to='/shop'
                        className='btn btn-primary'
                        id='button-link'
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />
      <section className='featured-products p-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1>Featured Products</h1>
              <p>All Weather New Modern Designs</p>
            </div>
            <FeaturedProducts />
          </div>
        </div>
      </section>
      <section className='repair-services p-5'>
        <div className='container-xxl'>
          <div className='row '>
            <div className='repair-details text-center align-items-center'>
              <h5 className='mb-3 text-white'>Repair Services</h5>
              <h2 className='mb-3 text-white'>
                On 70% Off on All Products And Accessories
              </h2>
              <button>Explore Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className='new-products p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='text-center'>
              <h1>New Arrivals</h1>
              <p>Your Best Designer outfits</p>
            </div>
            <NewArrivels />
          </div>
        </div>
      </section>
      <section className='deals p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6 col-sm-12 col-12 p-4'>
              <div className='card border-black'>
                <div className='d-flex'>
                  <div className='col-md-4'>
                    <img
                      src={Img1}
                      alt=''
                      className='img-fluid rounded-start h-100 p-2'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <span>Hot Deals</span>
                      <h3 className='card-title'>Buy One get One Free</h3>
                      <p>
                        The latest collection in our closet feel cute our outfit
                      </p>
                      <Link to={'/blog'}>
                        <button className='button-deals'>Learn More </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6 col-sm-12 col-12 p-4'>
              <div className='card border-black'>
                <div className='d-flex'>
                  <div className='col-md-4 '>
                    <img
                      src={Img2}
                      alt=''
                      className='img-fluid rounded-start h-100 p-2'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <span>Hot Deals</span>
                      <h3 className='card-title'>Buy One get One Free</h3>
                      <p>
                        The latest collection in our closet feel cute our outfit
                      </p>
                      <Link to={'/blog'}>
                        {' '}
                        <button className='button-deals'>Learn More </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blogs p-3 mb-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='text-center mb-3'>
              <h1>What Our Custmer Says...</h1>
              <p>Our Custmer never miss a bit on providing feedback</p>
            </div>
            <Blog />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
