import React, { useMemo } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./Button.style";
import Text, {
  ITextWrapperProps,
} from "@shared-components/text-wrapper/TextWrapper";
import RNBounceable from "@freakycoder/react-native-bounceable";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ButtonProps extends ITextWrapperProps {
  style?: CustomStyleProp;
  large?: boolean;
  text: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  style,
  large,
  text,
  onPress,
  ...rest
}) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <RNBounceable
      style={[styles.container, large && styles.largeButton, style]}
      onPress={onPress}
    >
      <Text h3 color={colors.white} {...rest}>
        {text}
      </Text>
    </RNBounceable>
  );
};

export default Button;
