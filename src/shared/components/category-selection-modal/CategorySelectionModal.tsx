import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./CategorySelectionModal.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { Modalize } from "react-native-modalize";
import { ScreenHeight } from "@freakycoder/react-native-helpers";
import CategoryButton from "@shared-components/category-button/CategoryButton";
import { EXPENSE_CATEGORIES } from "@shared-constants";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface CategorySelectionModalProps {
  style?: CustomStyleProp;
  modalRef: any;
}

const CategorySelectionModal: React.FC<CategorySelectionModalProps> = ({
  style,
  modalRef,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Modalize
      ref={modalRef}
      modalHeight={ScreenHeight * 0.4}
      modalStyle={styles.modalStyle}
    >
      <View style={[styles.container, style]}>
        <Text h1 bold>
          Categories
        </Text>
        <FlatList
          data={EXPENSE_CATEGORIES}
          numColumns={3}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
          renderItem={({ item, index }) => {
            const { name, icon } = item;
            return (
              <CategoryButton
                style={{ marginTop: 16 }}
                key={index}
                source={icon}
                category={name}
                onPress={() => {}}
              />
            );
          }}
        />
      </View>
    </Modalize>
  );
};

export default CategorySelectionModal;
