import { getNewProducts, getSearchProduct, products } from '../../assets/constants'

export const loader = async ({ params }) => {
  let results;
  if (params.productId) {
    results = getSearchProduct(params.productId);
  } else if (params.productNew) {
    results = getNewProducts(true);
  }
  else {
    results = products;
  }
  return results;
}