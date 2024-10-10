import React from "react";
import AppInputText from "./AppInputText";
import { AntDesign } from "@expo/vector-icons";
import { TouchableHighlight, StyleSheet, View } from "react-native";
import Colors from "../config/Colors";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <AppInputText
        primaryIcon="search1"
        primaryIconColor={Colors.red}
        placeholder="Search Menu"
        style={styles.inputtext}
      />
      <TouchableHighlight style={styles.submitbtn}>
        <AntDesign name="search1" size={20} />
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom:5
  },
  inputtext: {
    flex: 1,
    // marginRight: 50,
  },
  submitbtn: {
    width: 50,
    height: 50,
    backgroundColor: Colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SearchBar;
