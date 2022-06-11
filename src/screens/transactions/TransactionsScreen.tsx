import React, { useMemo } from "react";
import { View, SectionList } from "react-native";
import moment from "moment";
import { useTheme } from "@react-navigation/native";

/**
 * ? Local Imports
 */
import createStyles from "./TransactionsScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import fonts from "@fonts";
import { formatCurrency } from "@utils";
import TransactionCard from "@shared-components/transaction-card/TransactionCard";
import { transactions } from "../../utils/mocks/transactions";
import { Transaction } from "@services/models/transaction.model";

const DATA = [
  {
    title: moment(new Date()).format("MMM YYYY"),
    total: 130593.95,
    data: transactions,
  },
  {
    title: moment(1651468160000).format("MMM YYYY"),
    total: -31519.55,
    data: transactions,
  },
  {
    title: moment(1631718960000).format("MMM YYYY"),
    total: 87549.53,
    data: transactions,
  },
  {
    title: moment(1615475760000).format("MMM YYYY"),
    total: 45135.5,
    data: transactions,
  },
];

interface TransactionsScreenProps {}

const TransactionsScreen: React.FC<TransactionsScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const Item = ({ data }: { data: Transaction }) => (
    <View style={styles.item}>
      <TransactionCard data={data} />
    </View>
  );

  const Header = ({ title, total }: { title: string; total: number }) => (
    <View
      style={{
        marginTop: 48,
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text h3 fontFamily={fonts.montserrat.bold}>
        {title}
      </Text>
      <Text h2 bold color={total > 0 ? colors.incomeGreen : colors.expensesRed}>
        {formatCurrency().format(total)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        stickySectionHeadersEnabled={false}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => <Item data={item} />}
        renderSectionHeader={({ section: { title, total } }) => (
          <Header title={title} total={total} />
        )}
      />
    </SafeAreaView>
  );
};

export default TransactionsScreen;
