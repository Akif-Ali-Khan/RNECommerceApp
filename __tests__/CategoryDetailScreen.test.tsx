import React from 'react';
import App from '../src/App';
import {render, waitFor} from '@testing-library/react-native';

// Note: import mock data
import api from '../src/services/apiConfig';
import MockAdapter from 'axios-mock-adapter';
import CategoryDetails from '../src/services/mock/CategoryDetails.json';
import CategoriesList from '../src/services/mock/CategoryDetails.json';
import ProductList from '../src/services/mock/ProductList.json';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

jest.useFakeTimers();

const mock = new MockAdapter(api);

mock.onGet('/nav').reply(200, {
  categoryDetails: CategoryDetails,
});

mock.onGet('/products').reply(200, {
  productList: ProductList,
});

describe('CategoryDetailScreen', () => {
  it('renders loading component when no data', async () => {
    const {getByTestId} = render(<App />);
    const loadingComponent = getByTestId('loading-component');
    expect(loadingComponent).toBeTruthy();
  });

  it('get categories', async () => {
    const {data} = await api.get('/nav');
    const categories = data.categoryDetails[0];
    expect(categories).toStrictEqual(CategoriesList);
  });

  it('get products', async () => {
    const {data} = await api.get('/products');
    const products = data.productList;
    expect(products).toStrictEqual(ProductList);
  });

  it('renders category details when data is present', async () => {
    const {getByText} = render(<App />);
    await waitFor(() => {
      const categoryHeader = getByText('New In');
      expect(categoryHeader).toBeTruthy();

      const subcategory1 = getByText('Sub Category 1');
      expect(subcategory1).toBeTruthy();

      const subcategory2 = getByText('Sub Category 2');
      expect(subcategory2).toBeTruthy();

      const product1 = getByText(
        'Black Sheet Strappy Textured Glitter Bodycon Dress',
      );
      expect(product1).toBeTruthy();

      const product2 = getByText(
        'Stone Ribbed Strappy Cut Out Detail Bodycon Dress',
      );
      expect(product2).toBeTruthy();
    });
  });
});
