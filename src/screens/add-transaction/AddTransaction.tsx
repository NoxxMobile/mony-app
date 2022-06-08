import React, { useState, useMemo } from "react";
import { View, StyleProp, ViewStyle, TextInput } from "react-native";
import moment from "moment";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-dynamic-vector-icons";
import DatePicker from "react-native-neat-date-picker";
import ModernKeyboard from "react-native-modern-keyboard";
import * as NavigationService from "react-navigation-helpers";
import SegmentedControl from "react-native-segmented-control-2";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import createStyles from "./AddTransaction.style";
import Button from "@shared-components/button/Button";
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
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [transaction, setTransaction] = useState<string>();

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  };

  const onConfirm = (output: any) => {
    // You should close the modal in here
    setShowDatePicker(false);

    setSelectedDate(output.date);

    // The parameter 'output' is an object containing date and dateString (for single mode).
    // For range mode, the output contains startDate, startDateString, endDate, and EndDateString
    console.log(output.date);
    console.log(output.dateString);
  };

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
      style={{
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e8e8e8",
      }}
      activeTabColor={selectedTabIndex === 0 ? "#10943c" : "#941010"}
      // activeTextColor="#fff"
      onChange={(index: number) => setSelectedTabIndex(index)}
    />
  );

  const renderDatePickerButton = () => (
    <Button
      style={styles.datePickerButton}
      color={colors.offBlack}
      text={moment(selectedDate).format("D MMM YYYY")}
      onPress={openDatePicker}
    />
  );

  const renderDatePicker = () => (
    <DatePicker
      isVisible={showDatePicker}
      mode={"single"}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );

  const renderTransactionKeyboard = () => (
    <View style={styles.transactionKeyboard}>
      <TextInput
        style={[
          styles.transactionTextInput,
          {
            color: transaction ? colors.offBlack : colors.offGray,
          },
        ]}
      >
        {transaction || "USD"}
      </TextInput>
      <ModernKeyboard
        onInputChange={(value: string) => {
          setTransaction(value);
        }}
      />
    </View>
  );

  return (
    <View style={[styles.container, style]}>
      {renderHeader()}
      {renderSegmentedControl()}
      {renderDatePickerButton()}
      {renderTransactionKeyboard()}
      {renderDatePicker()}
    </View>
  );
};

export default AddTransaction;
