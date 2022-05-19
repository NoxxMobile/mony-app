import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./InsightScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

interface InsightScreenProps {}

const InsightScreen: React.FC<InsightScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Insight
      </Text>
    </View>
  );
};

export default InsightScreen;
