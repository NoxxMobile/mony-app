import React, { useMemo } from "react";
import { View, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-dynamic-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
/**
 * ? Shared Imports
 */
import UserService from "./services/userService";
import AccountsCard from "@shared-components/accounts-card/AccountsCard";

const profileURI =
  // eslint-disable-next-line max-len
  "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
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

  const renderMenuButton = () => (
    <RNBounceable>
      <Icon name="menu" type="Ionicons" color={colors.iconBlack} size={30} />
    </RNBounceable>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      {renderMenuButton()}
      <Image
        resizeMode="cover"
        source={{ uri: profileURI }}
        style={styles.profilePicImageStyle}
      />
    </View>
  );

  const renderMainList = () => (
    <View style={styles.listContainer}>
      <AccountsCard onPress={() => {}} onThreeDotPress={() => {}} />
    </View>
  );

  const renderContent = () => (
    <View style={styles.contentContainer}>{renderMainList()}</View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default HomeScreen;
