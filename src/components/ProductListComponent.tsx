import {Product} from '../models';
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ProductListItemComponent from './ProductListItemComponent';

//#region Props
interface ProductListComponentProps {
  products: Product[];
}
//#endregion

//#region UI
const ProductListComponent: React.FC<ProductListComponentProps> = ({
  products,
}) => {
  const renderItem = ({item}: {item: Product}) => (
    <ProductListItemComponent product={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductListComponent;
//#endregion

//#region Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});
//#endregion
