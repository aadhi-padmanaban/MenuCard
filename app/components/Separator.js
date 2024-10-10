import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../config/Colors";

const Separator = ({style}) => {
  return <View style={[styles.bordProp, style]}></View>;
};
const styles = StyleSheet.create({
  bordProp: {
    marginVertical:5
  },
});
export default Separator;
