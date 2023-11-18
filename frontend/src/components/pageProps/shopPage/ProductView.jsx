import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import ProductGridView from '../../displayLayouts/ProductGridView';
import ProductListView from '../../displayLayouts/ProductListView';
import CardSkeleton from '../Skeleton/CardSkeleton';

const ProductView = ({ currentItems }) => {
  const items = currentItems;
  const gridViewActive = useSelector((state) => state.EbikeLelo.gridViewActive);
  const listViewActive = useSelector((state) => state.EbikeLelo.listViewActive);
  const [loading, setLoading] = useState(true);
  const delay = useSelector((state) => state.EbikeLelo.debounceDelay);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [items, gridViewActive, listViewActive]);

  return (
    <>
      {
        loading ? <CardSkeleton /> :
          <div >
            <div className='flex flex-wrap '>
              {gridViewActive && currentItems &&
                items.map(({ _id, productName, price, color, badge, imgSrc, des }) => (
                  <ProductGridView
                    key={_id}
                    _id={_id}
                    productName={productName}
                    price={price}
                    color={color}
                    badge={badge}
                    imgSrc={imgSrc.Bike}
                    des={des}
                  />

                ))
              }
            </div>
            {listViewActive && currentItems &&
              currentItems.map(({ _id, productName, price, color, badge, imgSrc, des }) => (
                <div key={_id} className="w-full">
                  <Link to={`/products/company/${productName}/${_id}`}>
                    <ProductListView
                      _id={_id}
                      productName={productName}
                      price={price}
                      color={color}
                      badge={badge}
                      imgSrc={imgSrc.Bike}
                      des={des}
                    />
                  </Link>
                </div>
              ))
            }
          </div>
      }
    </>
  )
}

export default ProductView