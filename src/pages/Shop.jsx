import ShopItem from '../components/ShopItem';

const Shop = () => {
  return (
    <>
      <section className='shop-banner'>
        <div className='container-xxl'>
          <div className='row justify-content-center align-items-center'>
            <div className='repair-details p-5 text-center'>
              <div>
                <h2 className='text-white'>
                  <span className='text-success'>100%</span> Off on All Products
                  And Accessories
                </h2>
              </div>
              <div>
                <p className='text-white'>Make your order we will Deliver</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='shop-products p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <ShopItem />
          </div>
        </div>
      </section>
      <section className='pegination p-3'>
        <div className='container-xxl'>
          <div className='row '>
            <div className='col-12 d-flex align-items-center justify-content-center'>
              {' '}
              <nav aria-label='Page navigation example'>
                <ul className='pagination'>
                  <li className='page-item'>
                    <a className='page-link' href='#' aria-label='Previous'>
                      <span aria-hidden='true'>&laquo;</span>
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      1
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      2
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      3
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#' aria-label='Next'>
                      <span aria-hidden='true'>&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
