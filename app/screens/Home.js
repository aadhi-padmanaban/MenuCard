import React from "react";
import Screen from "../components/Screen";
import Colors from "../config/Colors";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import FeaturedItems from "../components/FeaturedItems";
import SignatureItems from "../components/SignatureItems";
import RecentPurchase from "../components/RecentPurchase";

const Home = () => {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.screenPadding}>
          <StatusBar backgroundColor={Colors.red} />
          <SearchBar />
          <Category />
          <FeaturedItems />
          <SignatureItems />
          <RecentPurchase />
        </View>
      </ScrollView>
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
