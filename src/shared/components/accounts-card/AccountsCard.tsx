import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle, TouchableHighlight } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-dynamic-vector-icons";
import RNBounceable from "@freakycoder/react-native-bounceable";
import Text from "@shared-components/text-wrapper/TextWrapper";
/**
 * ? Local Imports
 */
import createStyles from "./AccountsCard.style";
import fonts from "@fonts";
import MonyContainer from "@shared-components/mony-container/MonyContainer";
import { formatCurrency } from "@utils";
import Button from "@shared-components/button/Button";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface AccountsCardProps {
  style?: CustomStyleProp;
  onPress: () => void;
  onThreeDotPress: () => void;
}

const AccountsCard: React.FC<AccountsCardProps> = ({
  style,
  onPress,
  onThreeDotPress,
}) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View style={styles.circle} />
        <Text color={colors.white} bold style={styles.accountNameText}>
          Main
        </Text>
      </View>
      <TouchableHighlight
        underlayColor="rgba(255,255,255,0.1)"
        style={styles.threeDot}
        onPress={onThreeDotPress}
      >
        <Icon
          name="dots-three-horizontal"
          type="Entypo"
          color={colors.offBlack}
          size={24}
        />
      </TouchableHighlight>
    </View>
  );

  const renderBalance = () => (
    <View style={styles.balance}>
      <Text h3 color={colors.offBlack} fontFamily={fonts.montserrat.medium}>
        Balance
      </Text>
      <View style={styles.balanceValueText}>
        <Text h1 bold color={colors.white}>
          {formatCurrency("en-US", "USD", 3).format(753637.96)}
        </Text>
      </View>
    </View>
  );

  const renderIncomeExpenses = () => (
    <View style={styles.incomeExpenses}>
      <MonyContainer mony={32500} type="Income" iconName="arrow-down" />
      <MonyContainer style={styles.expenses} mony={12500} type="Expenses" />
    </View>
  );

  return (
    <RNBounceable
      style={[styles.container, style]}
      bounceEffect={0.98}
      onPress={onPress}
    >
      {renderHeader()}
      {renderBalance()}
      {renderIncomeExpenses()}
      <Button
        text="Add Transaction"
        style={styles.addTransactionButton}
        fontFamily={fonts.montserrat.bold}
        large
        onPress={() => {}}
      />
    </RNBounceable>
  );
};

export default AccountsCard;
