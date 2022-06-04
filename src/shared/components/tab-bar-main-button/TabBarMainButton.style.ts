import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      position: "relative",
      width: 75,
      alignItems: "center",
    },
    background: {
      position: "absolute",
      top: 0,
      backgroundColor: colors.background,
    },
    button: {
      top: -22.5,
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 50,
      borderRadius: 27,
      backgroundColor: colors.primary,
    },
  });
};
