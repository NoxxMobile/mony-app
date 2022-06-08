import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import fonts from "@fonts";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      padding: 24,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    segmentedControlStyle: {
      height: 35,
      width: ScreenWidth * 0.5,
    },
    datePickerButton: {
      marginTop: 16,
      borderRadius: 8,
      alignSelf: "center",
      width: ScreenWidth * 0.35,
      backgroundColor: "#e8e8e8",
    },
    transactionKeyboard: {
      flex: 1,
      bottom: 64,
      justifyContent: "flex-end",
    },
    transactionTextInput: {
      marginRight: 32,
      fontSize: 48,
      textAlign: "right",
      fontFamily: fonts.montserrat.bold,
    },
  });
};
