import { React } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../config/Colors";

function AppLabel({ children, style }) {
  return <Text style={[styles.textstyle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 16,
    color: Colors.black,
  },
});
export default AppLabel;
