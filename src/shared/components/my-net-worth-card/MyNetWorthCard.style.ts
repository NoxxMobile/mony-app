import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { ScreenHeight, ScreenWidth } from "@freakycoder/react-native-helpers";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      padding: 24,
      borderRadius: 24,
      width: ScreenWidth * 0.8,
      height: ScreenHeight * 0.235,
      backgroundColor: colors.white,
    },
    circle: {
      width: 10,
      height: 10,
      borderRadius: 10,
      backgroundColor: colors.offBlack,
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
    headerText: {
      marginLeft: 8,
    },
    headerDateText: {
      marginTop: 8,
    },
    netWorth: {
      marginTop: 16,
    },
    overview: {
      marginTop: 32,
    },
  });
};
