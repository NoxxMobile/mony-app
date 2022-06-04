import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import styles from "./Balance.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import fonts from "@fonts";
import { formatCurrency } from "@utils";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface BalanceProps {
  style?: CustomStyleProp;
  balance: number;
  currencyTextColor?: string;
}

const Balance: React.FC<BalanceProps> = ({
  style,
  balance,
  currencyTextColor,
}) => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <View style={[styles.balance, style]}>
      <Text h3 color={colors.offBlack} fontFamily={fonts.montserrat.medium}>
        Balance
      </Text>
      <View style={styles.balanceValueText}>
        <Text h1 bold color={currencyTextColor || colors.white}>
          {formatCurrency("en-US", "USD", 3).format(balance)}
        </Text>
      </View>
    </View>
  );
};

export default Balance;
