import React from "react";
import Screen from "../components/Screen";
import Colors from "../config/Colors";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import { StatusBar, StyleSheet, View } from "react-native";
import FeaturedItems from "../components/FeaturedItems";
import SignatureItems from "../components/SignatureItems";

const Home = () => {
  return (
    <Screen>
      <View style={styles.screenPadding}>
        <StatusBar backgroundColor={Colors.red} />
        <SearchBar />
        <Category />
        <FeaturedItems />
        <SignatureItems />
        
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  screenPadding: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
});
export default Home;
