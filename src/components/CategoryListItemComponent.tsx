import {SubCategory} from '../models';
import React from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import SubCategoryListItem from '../components/SubCategoryListItem';

const windowWidth = Dimensions.get('window').width;

//#region Props
interface CategoryListItemComponentProps {
  subCategories: SubCategory[];
  currentSubCategory: string;
  setCurrentSubCategory: (value: string) => void;
}
//#endregion

//#region UI
const CategoryListItemComponent: React.FC<CategoryListItemComponentProps> = ({
  subCategories,
  currentSubCategory,
  setCurrentSubCategory,
}) => {
  const renderItem = ({item}: {item: SubCategory}) => {
    return (
      <SubCategoryListItem
        title={item.title}
        id={item.title}
        currentSubCategory={currentSubCategory}
        setCurrentSubCategory={setCurrentSubCategory}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{height: 40}}
        horizontal={true}
        data={subCategories}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default CategoryListItemComponent;
//#endregion

//#region Styling
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    paddingLeft: 12,
    backgroundColor: '#eaeaea',
  },
});
//#endregion
