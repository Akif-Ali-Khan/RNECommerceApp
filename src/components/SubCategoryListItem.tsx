import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

//#region Props
interface SubCategoryListItemProps {
  id: string | undefined;
  title: string | undefined;
  currentSubCategory: string;
  setCurrentSubCategory: (value: string) => void;
}
//#endregion

//#region UI
const SubCategoryListItem: React.FC<SubCategoryListItemProps> = ({
  id,
  title,
  currentSubCategory,
  setCurrentSubCategory,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.item,
        currentSubCategory === id && {backgroundColor: '#3498DB'},
      ]}
      onPress={() => {
        setCurrentSubCategory(id ? id : '');
      }}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubCategoryListItem;
//#endregion

//#region Styling
const styles = StyleSheet.create({
  item: {
    height: 40,
    backgroundColor: '#D5DBDB',
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 13,
    borderRadius: 9,
  },
  title: {
    fontSize: 14,
  },
});
//#endregion
