import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import moment from "moment";
import { useTheme } from "@react-navigation/native";
import * as Progress from "react-native-progress";
/**
 * ? Local Imports
 */
import createStyles from "./ActivePeriodCard.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import Balance from "@shared-components/balance/Balance";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { calculateProgress } from "@utils";
import RNBounceable from "@freakycoder/react-native-bounceable";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ActivePeriodCardProps {
  style?: CustomStyleProp;
  income: number;
  expenses: number;
  onPress: () => void;
}

const ActivePeriodCard: React.FC<ActivePeriodCardProps> = ({
  style,
  income,
  expenses,
  onPress,
}) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const balance = income - expenses;
  const progress = calculateProgress(expenses, income);

  const renderHeader = () => (
    <>
      <View style={styles.headerContent}>
        <View style={styles.circle} />
        <Text color={colors.offBlack} bold style={styles.activePeriodText}>
          Active Period
        </Text>
      </View>
      <Text color={colors.offBlack} style={styles.activePeriodDateText}>
        {moment().format("MMMM YYYY")}
      </Text>
    </>
  );

  const renderBalance = () => (
    <Balance balance={balance} currencyTextColor={colors.offBlack} />
  );

  const renderProgress = () => (
    <View style={styles.progressBar}>
      <Progress.Bar
        progress={progress}
        height={10}
        borderRadius={50}
        width={ScreenWidth * 0.65}
        color={colors.calpyse}
        borderColor={colors.white}
        unfilledColor={colors.danger}
      />
    </View>
  );

  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      {renderHeader()}
      {renderBalance()}
      {renderProgress()}
    </RNBounceable>
  );
};

export default ActivePeriodCard;
