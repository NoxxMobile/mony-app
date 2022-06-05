import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
import UserService from "./services/userService";
import { transactions } from "../../utils/mocks/transactions";
/**
 * ? Shared Imports
 */
import fonts from "@fonts";
import Text from "@shared-components/text-wrapper/TextWrapper";
import AccountsCard from "@shared-components/accounts-card/AccountsCard";
import ActivePeriodCard from "@shared-components/active-period/ActivePeriodCard";
import MyNetWorthCard from "@shared-components/my-net-worth-card/MyNetWorthCard";
import TransactionCard from "@shared-components/transaction-card/TransactionCard";

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

  const renderScrollView = () => (
    <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      contentInset={styles.scContentInset}
      style={styles.listContainer}
    >
      <AccountsCard
        style={styles.accountsCard}
        onPress={() => {}}
        onThreeDotPress={() => {}}
      />
      <View style={styles.activePeriodCard}>
        <ActivePeriodCard
          income={75637.35}
          expenses={31653.11}
          onPress={() => {}}
        />
        <MyNetWorthCard style={styles.mynetWorthCard} onPress={() => {}} />
      </View>
    </ScrollView>
  );

  const renderTransactions = () => {
    return (
      <View style={styles.transactionsSection}>
        <View style={styles.transactionsHeader}>
          <Text h4 fontFamily={fonts.montserrat.medium} color={colors.offGray}>
            Transactions
          </Text>
          <RNBounceable onPress={() => {}}>
            <Text>See All</Text>
          </RNBounceable>
        </View>
        <View style={styles.transactions}>
          {transactions.map((transaction, index) => {
            return (
              <TransactionCard
                style={styles.transactionCard}
                key={index}
                data={transaction}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderContent = () => (
    <ScrollView style={styles.contentContainer}>
      {renderScrollView()}
      {renderTransactions()}
    </ScrollView>
  );

  return <View style={styles.container}>{renderContent()}</View>;
};

export default HomeScreen;
