import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    arrowCircle: {
      width: 40,
      height: 40,
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.whiteTransparent01,
    },
    content: {
      marginLeft: 8,
    },
    typeText: {
      marginTop: 3,
    },
  });
};
