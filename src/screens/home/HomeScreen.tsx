import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
/**
 * ? Shared Imports
 */
import UserService from "./services/userService";
import AccountsCard from "@shared-components/accounts-card/AccountsCard";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  React.useEffect(() => {
    const mockUserData = {
      id: "301395-3150134",
      username: "FreakyCoder",
      fullname: "Kuray",
      email: "freakycoder@gmail.com",
      socialType: "google",
      creationDate: 1652631678000,
      photo: null,
    };
    UserService.setUserData(mockUserData);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderMainList = () => (
    <View style={styles.listContainer}>
      <AccountsCard onPress={() => {}} onThreeDotPress={() => {}} />
    </View>
  );

  const renderContent = () => (
    <View style={styles.contentContainer}>{renderMainList()}</View>
  );

  return (
    <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
  );
};

export default HomeScreen;
