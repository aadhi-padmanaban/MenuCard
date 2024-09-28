import React, { Children } from "react";

import { StyleSheet, View } from "react-native";

const Card = ({ Children }) => {
  return <View>{Children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Card;
