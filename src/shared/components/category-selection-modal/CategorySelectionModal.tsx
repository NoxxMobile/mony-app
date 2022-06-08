import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./CategorySelectionModal.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { Modalize } from "react-native-modalize";
import { ScreenHeight } from "@freakycoder/react-native-helpers";

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
      </View>
    </Modalize>
  );
};

export default CategorySelectionModal;
