import { PRODUCTS1 } from './Products';
const NewArrivels = () => {
  return (
    <>
      <div className='row mt-4'>
        {PRODUCTS1.slice(3, 7).map((product) => (
          <div
            className='col-3 col-md-6 col-lg-3 col-sm-6 col-12 mb-3'
            key={product.id}
          >
            <div key={product.id}>
              <div className='card h-100 m-auto p-3 '>
                <img
                  src={product.image}
                  alt=''
                  className='card-img-top img-fluid m-auto p-3'
                />
                <div className='card-details'>
                  <div className='tittle mb-3'>
                    <span>{product.brand} </span>
                    <h5 className='mt-2'>{product.name} </h5>
                  </div>
                  <div className='card-footer text-center mb-3'>
                    <p className='mb-3'>{product.status} </p>

                    <p>
                      <strike className='text-danger'>{product.rate}</strike>{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewArrivels;
