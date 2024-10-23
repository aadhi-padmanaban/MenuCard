import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../config/Colors";
import AppText from "../components/AppText";

const Progress = ({ rcolor, percent }) => {
  return (
    <View style={styles.progresscontainer}>
      <View
        style={[
          styles.progress,
          { backgroundColor: Colors[rcolor], width: percent },
        ]}
      ></View>
    </View>
  );
};
const styles = StyleSheet.create({
  progresscontainer: {
    backgroundColor: Colors.light,
    width: "100%",
    height: 5,
    borderRadius: 5,
  },
  progress: {
    width: "0%",
    height: 5,
    borderRadius: 5,
  },
});
export default Progress;
