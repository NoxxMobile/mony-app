import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    item: {
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: colors.white,
    },
    title: {
      fontSize: 24,
    },
  });
};
