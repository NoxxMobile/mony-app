import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { ScreenHeight, ScreenWidth } from "@freakycoder/react-native-helpers";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      height: ScreenHeight * 0.3,
      width: ScreenWidth * 0.8,
      borderRadius: 24,
      padding: 24,
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
    activePeriodText: {
      marginLeft: 8,
    },
    activePeriodDateText: {
      marginTop: 8,
    },
    progressBar: {
      marginTop: 16,
    },
  });
};
