import React from "react";
import Screen from "../components/Screen";
import { View, Text } from "react-native";
import Colors from "../config/Colors";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <Screen>
      <StatusBar backgroundColor={Colors.red} />
      <SearchBar />
    </Screen>
  );
};
export default Home;
