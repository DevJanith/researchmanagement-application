import { faker } from '@faker-js/faker';
import { Button, Container, Stack, Typography } from '@mui/material';
import { sample } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getItems } from "../../actions/item.action";
import Iconify from '../../components/Iconify';
import Page from '../../components/Page';
import { ProductCartWidget, ProductFilterSidebar, ProductList, ProductSort } from '../../sections/@dashboard/products';
import PRODUCTS from '../../_mock/products';

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getItems());
    } catch (error) {
      console.log(error);
    }
  }, []);

  const items = useSelector((state) => state.itemReducer);

  const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

  const products = items.map((item, index) => {
    const setIndex = index + 1;

    return {
      id: item.id,
      cover: `/static/mock-images/products/farmProduct.jpg`,
      name: item.name,
      price: item.price,
      qty: item.qty,
      priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
      colors:
        (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
        (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
        (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
        (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
        (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
        (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
        PRODUCT_COLOR,
      status: sample(['sale', 'new', '', '']),
    };
  });

  console.log(products)
  console.log(PRODUCTS)

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={products} />
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
