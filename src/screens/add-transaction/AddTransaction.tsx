import React, { useState, useMemo, useRef } from "react";
import { View, StyleProp, ViewStyle, TextInput } from "react-native";
import moment from "moment";
import FastImage from "react-native-fast-image";
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
import fonts from "@fonts";
import CategorySelectionModal from "@shared-components/category-selection-modal/CategorySelectionModal";
import { Modalize } from "react-native-modalize";
import { ICategory } from "@services/models";
import { EXPENSE_CATEGORIES } from "@shared-constants";

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
  const categoryModalRef = useRef<Modalize>(null);
  const [category, setCategory] = useState<ICategory>(EXPENSE_CATEGORIES[0]);

  const handleDatePickerPress = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    setShowDatePicker(false);
  };

  const onConfirm = (output: any) => {
    setShowDatePicker(false);
    setSelectedDate(output.date);
  };

  const handleCategoryPress = () => {
    categoryModalRef.current?.open();
  };

  const handleCancelPress = () => {
    NavigationService.pop();
  };

  const handleSavePress = () => {};

  const renderHeader = () => (
    <View style={styles.header}>
      <RNBounceable onPress={handleCancelPress}>
        <Text h4 color={colors.blue}>
          Cancel
        </Text>
      </RNBounceable>
      <RNBounceable onPress={handleSavePress}>
        <Text h4 bold color={colors.blue}>
          Save
        </Text>
      </RNBounceable>
    </View>
  );

  const renderTab = (
    icon: string,
    text: string,
    color: string,
    index: number,
  ) => {
    const selectedColor = selectedTabIndex === index ? color : colors.offBlack;
    return (
      <View style={styles.tab}>
        <Icon name={icon} type="Entypo" color={selectedColor} />
        <Text bold color={selectedColor} style={styles.tabTextStyle}>
          {text}
        </Text>
      </View>
    );
  };

  const renderSegmentedControl = () => (
    <SegmentedControl
      tabs={[
        renderTab("circle-with-minus", "Expenses", colors.expensesRed, 0),
        renderTab("circle-with-plus", "Income", colors.incomeGreen, 1),
      ]}
      style={styles.segmentedControlStyle}
      onChange={(index: number) => setSelectedTabIndex(index)}
    />
  );

  const renderDatePickerButton = () => (
    <Button
      style={styles.datePickerButton}
      color={colors.offBlack}
      text={moment(selectedDate).format("D MMM YYYY")}
      onPress={handleDatePickerPress}
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

  const renderCategoryButton = () => (
    <Button
      text={category.name}
      style={styles.categoryButton}
      color={colors.offBlack}
      iconComponent={
        <FastImage
          resizeMode="contain"
          source={category.icon}
          style={styles.categoryIcon}
        />
      }
      fontFamily={fonts.montserrat.medium}
      onPress={handleCategoryPress}
    />
  );

  const renderDateAndCategory = () => (
    <View style={styles.dateAndCategory}>
      {renderDatePickerButton()}
      {renderCategoryButton()}
    </View>
  );

  const renderCategorySelectionModal = () => (
    <CategorySelectionModal
      modalRef={categoryModalRef}
      onSelect={(selectedCategory: ICategory) => {
        setCategory(selectedCategory);
        categoryModalRef.current?.close();
      }}
    />
  );

  return (
    <View style={[styles.container, style]}>
      {renderHeader()}
      {renderSegmentedControl()}
      {renderDateAndCategory()}
      {renderTransactionKeyboard()}
      {renderDatePicker()}
      {renderCategorySelectionModal()}
    </View>
  );
};

export default AddTransaction;
