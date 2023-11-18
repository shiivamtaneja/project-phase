import { useState } from 'react';

import ProductBanner from '../../../components/pageProps/shopPage/ProductBanner';
import Pagination from '../../../components/pageProps/shopPage/Pagination';

const ShopMain = () => {
  const [itemsPerPage, setItemPerPage] = useState(12)
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemPerPage(itemsPerPage)
  }

  return (
    <>
      <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
      <Pagination itemsPerPage={itemsPerPage} />
    </>
  )
}

export default ShopMain