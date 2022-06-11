import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle, FlatList } from "react-native";
import { Modalize } from "react-native-modalize";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./CategorySelectionModal.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import CategoryButton from "@shared-components/category-button/CategoryButton";
import { EXPENSE_CATEGORIES } from "@shared-constants";
import { ICategory } from "@services/models";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface CategorySelectionModalProps {
  style?: CustomStyleProp;
  modalRef: any;
  onSelect: (selectedCategory: ICategory) => void;
}

const CategorySelectionModal: React.FC<CategorySelectionModalProps> = ({
  style,
  modalRef,
  onSelect,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Modalize
      handlePosition="inside"
      ref={modalRef}
      overlayStyle={{ backgroundColor: "transparent" }}
      modalStyle={styles.modalStyle}
    >
      <View style={[styles.container, style]}>
        <Text h1 bold>
          Categories
        </Text>
        <FlatList
          data={EXPENSE_CATEGORIES}
          numColumns={3}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-around",
          }}
          contentInset={{ bottom: 16 }}
          renderItem={({ item, index }) => {
            const { name, icon } = item;
            return (
              <CategoryButton
                style={{ marginTop: 16 }}
                key={index}
                source={icon}
                category={name}
                onPress={() => onSelect?.(item)}
              />
            );
          }}
        />
      </View>
    </Modalize>
  );
};

export default CategorySelectionModal;
