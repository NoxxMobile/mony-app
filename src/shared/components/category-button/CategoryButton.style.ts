import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      width: 125,
      height: 125,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.white,
      shadowRadius: 8,
      shadowOpacity: 0.1,
      shadowColor: "#757575",
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    imageStyle: {
      width: 50,
      height: 50,
    },
    textStyle: {
      marginTop: 8,
    },
  });
};
