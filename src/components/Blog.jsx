import blog1 from '../assets/images/blog/blog-1.jpg';
import blog2 from '../assets/images/blog/blog-2.jpg';
import blog3 from '../assets/images/blog/blog-3.jpg';
import blog4 from '../assets/images/blog/blog-4.jpg';
const Blog = () => {
  return (
    <>
      <div className='col-3 col-md-6  col-sm-12 col-12'>
        <div className='card'>
          <img src={blog1} alt='' className='card-img-top p-3 img-fluid mb-3' />
          <div className='card-body'>
            <p className='mb-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              doloremque nostrum vel sequi praesentium quis modi commodi dolore
              ipsa placeat.
            </p>
            <button className='button-blog'>Learn More...</button>
          </div>
        </div>
      </div>
      <div className='col-3 col-md-6 col-sm-12 col-12'>
        <div className='card'>
          <img src={blog2} alt='' className='card-img-top p-3 img-fluid mb-3' />
          <div className='card-body'>
            <p className='mb-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              doloremque nostrum vel sequi praesentium quis modi commodi dolore
              ipsa placeat.
            </p>
            <button className='button-blog'>Learn More...</button>
          </div>
        </div>
      </div>
      <div className='col-3 col-md-6 col-sm-12 col-12'>
        <div className='card'>
          <img src={blog3} alt='' className='card-img-top p-3 img-fluid mb-3' />
          <div className='card-body'>
            <p className='mb-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              doloremque nostrum vel sequi praesentium quis modi commodi dolore
              ipsa placeat.
            </p>
            <button className='button-blog'>Learn More...</button>
          </div>
        </div>
      </div>
      <div className='col-3 col-md-6 col-sm-12 col-12'>
        <div className='card'>
          <img src={blog4} alt='' className='card-img-top p-3 img-fluid mb-3' />
          <div className='card-body'>
            <p className='mb-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              doloremque nostrum vel sequi praesentium quis modi commodi dolore
              ipsa placeat.
            </p>
            <button className='button-blog'>Learn More...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
