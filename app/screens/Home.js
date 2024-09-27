import React from "react";
import Screen from "../components/Screen";
import Colors from "../config/Colors";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";

const Home = () => {
  return (
    <Screen>
      <StatusBar backgroundColor={Colors.red} />
      <SearchBar />
      <Category />
    </Screen>
  );
};
export default Home;
