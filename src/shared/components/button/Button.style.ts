import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      minHeight: 50,
      minWidth: 150,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.button,
    },
    largeButton: {
      height: 75,
    },
    textStyle: {
      fontSize: 24,
      color: colors.white,
    },
  });
};
