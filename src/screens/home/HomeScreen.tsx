import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";
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
import ActivePeriodCard from "@shared-components/active-period/ActivePeriodCard";
import MyNetWorthCard from "@shared-components/my-net-worth-card/MyNetWorthCard";

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
    <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.listContainer}
      contentInset={{ left: 24, right: 24 }}
    >
      <AccountsCard
        style={styles.accountsCard}
        onPress={() => {}}
        onThreeDotPress={() => {}}
      />
      <View style={styles.activePeriodCard}>
        <ActivePeriodCard income={75637.35} expenses={31653.11} />
        <MyNetWorthCard style={styles.mynetWorthCard} />
      </View>
    </ScrollView>
  );

  const renderContent = () => (
    <View style={styles.contentContainer}>{renderMainList()}</View>
  );

  return (
    <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
  );
};

export default HomeScreen;
