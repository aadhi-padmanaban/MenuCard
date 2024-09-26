import React from "react";
import { AppInputText } from "./AppInputText";
import { AntDesign } from "@expo/vector-icons";
import { TouchableHighlight, StyleSheet } from "react-native";
import Colors from "../config/Colors";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <AppInputText
        primaryIcon="book-search-outline"
        placeholder="Search Menu"
      />
      <TouchableHighlight style={styles.submitbtn}>
        <AntDesign name="search1" size={20} />
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  submitbtn: {
    width: 50,
    height: 50,
    backgroundColor: Colors.pureWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SearchBar;
