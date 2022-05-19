import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from "react-native-dynamic-vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/**
 * ? Local & Shared Imports
 */
import { SCREENS } from "@shared-constants";
import { LightTheme, DarkTheme, palette } from "@theme/themes";
// ? Screens
import HomeScreen from "@screens/home/HomeScreen";
import ProfileScreen from "@screens/profile/ProfileScreen";
import TransactionsScreen from "@screens/transactions/TransactionsScreen";
import insightScreen from "@screens/insight/InsightScreen";

import HomeIMG from "@assets/app/bottom-bar/house.png";
import TransactionIMG from "@assets/app/bottom-bar/transaction2.png";
import UserIMG from "@assets/app/bottom-bar/account.png";

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabIcon = (route: any, color: string, size: number) => {
    let icon = <Icon name="home" type="Ionicons" size={size} color={color} />;
    switch (route.name) {
      case SCREENS.HOME: {
        icon = (
          <FastImage
            source={HomeIMG}
            style={styles.homeIcon}
            tintColor={color}
          />
        );
        break;
      }
      case SCREENS.INSIGHT: {
        icon = (
          <Icon
            name="insights"
            type="MaterialIcons"
            size={size}
            color={color}
          />
        );
        break;
      }
      case SCREENS.TRANSACTIONS: {
        // icon = <Icon name="list" type="Entypo" size={size} color={color} />;
        icon = (
          <FastImage
            source={TransactionIMG}
            style={styles.transactionIcon}
            tintColor={color}
          />
        );
        break;
      }
      case SCREENS.PROFILE: {
        icon = (
          <FastImage
            source={UserIMG}
            style={styles.userIcon}
            tintColor={color}
          />
        );
        break;
      }
    }
    return icon;
  };

  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => renderTabIcon(route, color, size),
          tabBarActiveTintColor: palette.primary,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: isDarkMode ? palette.black : palette.white,
          },
        })}
      >
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen
          name={SCREENS.TRANSACTIONS}
          component={TransactionsScreen}
        />
        <Tab.Screen name={SCREENS.INSIGHT} component={insightScreen} />
        <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={renderTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

export const styles = StyleSheet.create({
  homeIcon: {
    width: 20,
    height: 20,
  },
  transactionIcon: {
    width: 28,
    height: 28,
  },
  userIcon: {
    width: 25,
    height: 25,
  },
});
