import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { ScreenHeight, ScreenWidth } from "@freakycoder/react-native-helpers";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      padding: 32,
      width: ScreenWidth * 0.7,
      height: ScreenHeight * 0.5,
      borderRadius: 24,
      backgroundColor: colors.black,
    },
    circle: {
      width: 10,
      height: 10,
      borderRadius: 10,
      backgroundColor: colors.white,
    },
    header: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerContent: {
      flexDirection: "row",
      alignItems: "center",
    },
    threeDot: {
      width: 40,
      height: 40,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    accountNameText: {
      marginLeft: 8,
    },
    balance: {
      marginTop: 64,
    },
    balanceValueText: {
      marginTop: 16,
    },
    incomeExpenses: {
      marginTop: 32,
      width: "100%",
    },
    expenses: {
      marginTop: 24,
    },
  });
};
