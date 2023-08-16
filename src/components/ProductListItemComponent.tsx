import {Product} from '../models';
import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

const windowWidth = Dimensions.get('window').width;

//#region Props
interface ProductListItemComponentProps {
  product: Product;
}
//#endregion

//#region UI

const ProductListItemComponent: React.FC<ProductListItemComponentProps> = ({
  product,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <FastImage
          style={styles.image}
          source={{
            uri: product.img,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.innerContent}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.colorName}>{product.colour}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>
    </View>
  );
};

export default ProductListItemComponent;
//#endregion

//#region Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: '#D5DBDB',
    width: windowWidth / 2 - 24,
    height: 200,
    borderRadius: 12,
  },
  image: {
    flex: 1,
  },
  innerContent: {
    flex: 1,
    width: windowWidth / 2 - 24,
  },
  productName: {
    color: '#1C2833',
    marginTop: 5,
    fontSize: 16,
  },
  colorName: {
    color: '#1C2833',
    marginTop: 3,
    fontSize: 16,
  },
  productPrice: {
    color: '#1C2833',
    marginTop: 5,
    fontSize: 16,
  },
});
//#endregion
