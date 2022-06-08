import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    modalStyle: {
      backgroundColor: colors.background,
    },
    container: {
      padding: 24,
    },
  });
};
