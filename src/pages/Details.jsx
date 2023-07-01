import ProductDetails from '../components/ProductDetails';

const Details = () => {
  return (
    <>
      <section className='details'>
        <div className='container-xxl'>
          <div className='row p-5'>
            <ProductDetails />
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
