import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

//#region Props
interface LoadingComponentProps {}
//#endregion

//#region UI
const LoadingComponent: React.FC<LoadingComponentProps> = () => {
  return (
    <View style={styles.loadingWrapper} testID="loading-component">
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default LoadingComponent;
//#endregion

//#region Styling
const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
//#endregion
