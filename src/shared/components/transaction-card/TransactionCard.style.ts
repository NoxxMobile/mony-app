import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      height: 75,
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 32,
      borderRadius: 24,
      width: ScreenWidth * 0.9,
      backgroundColor: colors.white,
    },
    value: {
      top: 16,
      right: 16,
      position: "absolute",
    },
    dateText: {
      marginTop: 8,
    },
  });
};
