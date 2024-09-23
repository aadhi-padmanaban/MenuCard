import { React } from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../config/Colors";

function AppText({ children, style, onPress, ...otherProps }) {
  return (
    <Text onPress={onPress} style={[styles.textstyle, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 16,
    color: Colors.gray,
  },
});
export default AppText;
