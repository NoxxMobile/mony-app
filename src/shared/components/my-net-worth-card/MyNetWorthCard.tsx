import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import RNBounceable from "@freakycoder/react-native-bounceable";

/**
 * ? Local Imports
 */
import createStyles from "./MyNetWorthCard.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { formatCurrency } from "@utils";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface MyNetWorthCardProps {
  style?: CustomStyleProp;
  onPress: () => void;
}

const MyNetWorthCard: React.FC<MyNetWorthCardProps> = ({ style, onPress }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const renderHeader = () => (
    <>
      <View style={styles.headerContent}>
        <View style={styles.circle} />
        <Text color={colors.offBlack} bold style={styles.headerText}>
          My Net Worth
        </Text>
      </View>
      <Text color={colors.offBlack} style={styles.headerDateText}>
        Until Now
      </Text>
    </>
  );

  const renderNetWorth = () => (
    <View style={styles.netWorth}>
      <Text h1 bold color={colors.offBlack}>
        {formatCurrency().format(315310.13)}
      </Text>
    </View>
  );

  const renderOverview = () => (
    <View style={styles.overview}>
      <Text>32 months and 310 transactions</Text>
    </View>
  );

  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      {renderHeader()}
      {renderNetWorth()}
      {renderOverview()}
    </RNBounceable>
  );
};

export default MyNetWorthCard;
