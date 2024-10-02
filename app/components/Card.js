import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

const Card = ({ children, style }) => {
  return <View style={[style]}>{children}</View>;
};

const styles = StyleSheet.create({
});
export default Card;
