import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    segmentedControlStyle: {
      height: 35,
      width: ScreenWidth * 0.5,
    },
  });
};
