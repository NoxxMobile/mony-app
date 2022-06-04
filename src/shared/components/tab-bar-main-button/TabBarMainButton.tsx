import React, { useMemo } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import Icon from "react-native-dynamic-vector-icons";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useTheme } from "@react-navigation/native";
import createStyles from "./TabBarMainButton.style";

interface TabBarMainButtonProps {
  onPress: () => void;
}

const TabBarMainButton: React.FC<TabBarMainButtonProps> = ({ onPress }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const renderBackground = () => (
    <Svg width={75} height={61} viewBox="0 0 75 61" style={styles.background}>
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill="#fff"
      />
    </Svg>
  );

  return (
    <View style={styles.container} pointerEvents="box-none">
      {renderBackground()}
      <RNBounceable style={styles.button} onPress={onPress}>
        <Icon name="plus" type="Entypo" size={30} color={colors.white} />
      </RNBounceable>
    </View>
  );
};

export default TabBarMainButton;
