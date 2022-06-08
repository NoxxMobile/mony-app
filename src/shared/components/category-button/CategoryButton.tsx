import React, { useMemo } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import FastImage, { Source, ImageStyle } from "react-native-fast-image";
/**
 * ? Local Imports
 */
import createStyles from "./CategoryButton.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import RNBounceable from "@freakycoder/react-native-bounceable";
import fonts from "@fonts";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface CategoryButtonProps {
  source: Source;
  category: string;
  style?: CustomStyleProp;
  imageStyle?: CustomImageStyleProp;
  onPress: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  style,
  source,
  category,
  imageStyle,
  onPress,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      <FastImage source={source} style={[styles.imageStyle, imageStyle]} />
      <Text fontFamily={fonts.montserrat.medium} style={styles.textStyle}>
        {category}
      </Text>
    </RNBounceable>
  );
};

export default CategoryButton;
