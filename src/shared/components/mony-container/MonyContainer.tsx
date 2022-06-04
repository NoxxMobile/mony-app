import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import createStyles from "./MonyContainer.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import fonts from "@fonts";
import { formatCurrency } from "@utils";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface MonyCardProps {
  style?: CustomStyleProp;
  mony: number;
  type: string;
  iconName?: string;
  iconType?: string;
}

const MonyContainer: React.FC<MonyCardProps> = ({
  style,
  iconName = "arrow-up",
  iconType = "FontAwesome",
  mony,
  type,
}) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.arrowCircle}>
        <Icon name={iconName} type={iconType} color={colors.white} size={16} />
      </View>
      <View style={styles.content}>
        <Text h3 bold color={colors.white}>
          {formatCurrency().format(mony)}
        </Text>
        <Text
          style={styles.typeText}
          fontFamily={fonts.montserrat.medium}
          color={colors.offBlack}
        >
          {type}
        </Text>
      </View>
    </View>
  );
};

export default MonyContainer;
