import {useQuery} from 'react-query';
import {getCategoryDetails, getSubCategoryDetails} from './api';

export const useCategoryDetails = () =>
  useQuery(['categoryDetails'], () => getCategoryDetails());

export const useSubCategoryDetails = () =>
  useQuery(['subCategoryDetails'], () => getSubCategoryDetails());
