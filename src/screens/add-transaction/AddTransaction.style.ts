import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  getStatusBarHeight,
  ScreenWidth,
} from "@freakycoder/react-native-helpers";
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
    tab: {
      flexDirection: "row",
      alignItems: "center",
    },
    tabTextStyle: {
      marginLeft: 16,
    },
    segmentedControlStyle: {
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e8e8e8",
    },
    datePickerButton: {
      marginTop: 16,
      borderRadius: 8,
      alignSelf: "center",
      marginLeft: 3,
      width: ScreenWidth * 0.35,
      backgroundColor: "#e8e8e8",
    },
    transactionKeyboard: {
      bottom: getStatusBarHeight(),
      position: "absolute",
      justifyContent: "flex-end",
    },
    transactionTextInput: {
      marginRight: 32,
      fontSize: 48,
      textAlign: "right",
      fontFamily: fonts.montserrat.bold,
    },
    dateAndCategory: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    categoryButton: {
      marginTop: 16,
      borderRadius: 8,
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      width: ScreenWidth * 0.5,
      backgroundColor: "#e8e8e8",
    },
    categoryIcon: {
      width: 30,
      height: 30,
      marginRight: 8,
    },
  });
};
