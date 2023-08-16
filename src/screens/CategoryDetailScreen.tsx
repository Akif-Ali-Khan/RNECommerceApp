import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {useCategoryDetails, useSubCategoryDetails} from '../services/queries';
import CategoryHeaderComponent from '../components/CategoryHeaderComponent';
import CategoryListItemComponent from '../components/CategoryListItemComponent';
import ProductListComponent from '../components/ProductListComponent';
import LoadingComponent from '../components/LoadingComponent';
import {SubCategory} from '../models';

//#region UI
const CategoryDetailScreen: React.FC = () => {
  const {data: categoryDetail} = useCategoryDetails();

  const [currentSubCategory, setCurrentSubCategory] = useState<string>(
    categoryDetail?.subCategories[0]?.title
      ? categoryDetail?.subCategories[0]?.title
      : '',
  );
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

  useEffect(() => {
    if (categoryDetail && categoryDetail.subCategories) {
      setSubCategories([...categoryDetail.subCategories]);
      setCurrentSubCategory('all');
    }
  }, [categoryDetail]);

  const {data: subCategoryDetail} = useSubCategoryDetails();

  const showLoading = () => <LoadingComponent />;

  const showCategoryDetails = () => {
    return (
      <View style={styles.innerContainer}>
        <CategoryHeaderComponent
          title={categoryDetail?.category}
          imageUri={categoryDetail?.img}
        />
        <CategoryListItemComponent
          subCategories={subCategories}
          currentSubCategory={currentSubCategory}
          setCurrentSubCategory={setCurrentSubCategory}
        />
        {!subCategoryDetail ? (
          showLoading()
        ) : (
          <ProductListComponent
            products={subCategoryDetail ? subCategoryDetail : []}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        {!categoryDetail && !subCategoryDetail
          ? showLoading()
          : showCategoryDetails()}
      </SafeAreaView>
    </View>
  );
};

export default CategoryDetailScreen;
//#endregion

//#region Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    flexDirection: 'column',
  },
  safeAreaView: {
    flex: 1,
    padding: 24,
  },
  innerContainer: {
    flex: 1,
  },
  loadingWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
//#endregion

//#region Default Props
CategoryDetailScreen.defaultProps = {
  categoryId: 'personal-care',
};
//#endregion
