import Prod from './Prod';
import { PRODUCTS, PRODUCTS1 } from '../components/Products';
const ShopItem = () => {
  return (
    <>
      {[...PRODUCTS, ...PRODUCTS1].map((product) => (
        <Prod key={product.id} data={product} />
      ))}
    </>
  );
};

export default ShopItem;
