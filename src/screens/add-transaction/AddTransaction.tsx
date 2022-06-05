import React, { useState, useMemo } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-dynamic-vector-icons";
import * as NavigationService from "react-navigation-helpers";
import SegmentedControl from "react-native-segmented-control-2";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import createStyles from "./AddTransaction.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface AddTransactionProps {
  style?: CustomStyleProp;
}

const AddTransaction: React.FC<AddTransactionProps> = ({ style }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const handleCancelPress = () => {
    NavigationService.pop();
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <RNBounceable onPress={handleCancelPress}>
        <Text h4 color={colors.blue}>
          Cancel
        </Text>
      </RNBounceable>
      <Text h4 bold color={colors.blue}>
        Save
      </Text>
    </View>
  );

  const renderTab = (icon: string, text: string, index: number) => {
    const color = selectedTabIndex === index ? colors.white : colors.offBlack;
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon name={icon} type="Entypo" color={color} />
        <Text bold color={color} style={{ marginLeft: 16 }}>
          {text}
        </Text>
      </View>
    );
  };

  const renderSegmentedControl = () => (
    <SegmentedControl
      tabs={[
        renderTab("circle-with-plus", "Income", 0),
        renderTab("circle-with-minus", "Expenses", 1),
      ]}
      style={{ backgroundColor: "#e8e8e8", right: 8, marginTop: 16 }}
      activeTabColor={selectedTabIndex === 0 ? "#10943c" : "#941010"}
      // activeTextColor="#fff"
      onChange={(index: number) => setSelectedTabIndex(index)}
    />
  );

  return (
    <View style={[styles.container, style]}>
      {renderHeader()}
      {renderSegmentedControl()}
      <Text color={colors.offBlack}>Hello</Text>
    </View>
  );
};

export default AddTransaction;
