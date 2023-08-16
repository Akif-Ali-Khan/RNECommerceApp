import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

//#region Props
interface CategoryHeaderComponentProps {
  title: string | undefined;
  imageUri: string | undefined;
}
//#endregion

//#region UI
const CategoryHeaderComponent: React.FC<CategoryHeaderComponentProps> = ({
  title,
  imageUri,
}) => {
  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={{uri: imageUri}}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

export default CategoryHeaderComponent;
//#endregion

//#region Styling
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 200,
    padding: 12,
    backgroundColor: '#eaeaea',
  },
  image: {
    flex: 1,
    borderRadius: 13,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },
});
//#endregion
