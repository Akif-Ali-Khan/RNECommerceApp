import api from '../services/apiConfig';
import {Category, Product} from '../models';

// This sets the mock adapter on the default instance
export const getCategoryDetails = async (): Promise<Category> => {
  const {data} = await api.get('/nav');
  return data[0];
};

export const getSubCategoryDetails = async (): Promise<Product[]> => {
  const {data} = await api.get('/products');
  return data;
};
