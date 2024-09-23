import { React } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../config/Colors";

function AppHeader({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.headerText, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 26,
    color: Colors.black,
    fontWeight: "500",
  },
});

export default AppHeader;
