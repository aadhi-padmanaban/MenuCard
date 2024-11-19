import React from "react";
import { Image, View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

import Card from "./Card";
import AppHeader from "./AppHeader";
import AppText from "./AppText";
import Colors from "../config/Colors";

const categories = [
  {
    name: "Veg",
    image: "https://img.freepik.com/premium-vector/bruschetta-with-various-vegetable-round-plate-isolated_1639-24656.jpg",
    background: "#fff",
    color: "#2eb774",
  },
  {
    name: "Non-Veg",
    image: "https://img.freepik.com/premium-vector/chicken-wings-asian-style-tomatoes-sauce-plate-white-background_852896-31545.jpg",
    background: "#fff",
    color: "#f94449",
  },
  {
    name: "Veg",
    image: "https://img.freepik.com/premium-vector/bruschetta-with-various-vegetable-round-plate-isolated_1639-24656.jpg",
    background: "#fff",
    color: "#2eb774",
  },
  {
    name: "Non-Veg",
    image: "https://img.freepik.com/premium-vector/chicken-wings-asian-style-tomatoes-sauce-plate-white-background_852896-31545.jpg",
    background: "#fff",
    color: "#f94449",
  },
  {
    name: "Veg",
    image: "https://img.freepik.com/premium-vector/bruschetta-with-various-vegetable-round-plate-isolated_1639-24656.jpg",
    background: "#fff",
    color: "#2eb774",
  },
  {
    name: "Non-Veg",
    image: "https://img.freepik.com/premium-vector/chicken-wings-asian-style-tomatoes-sauce-plate-white-background_852896-31545.jpg",
    background: "#fff",
    color: "#f94449",
  },
  {
    name: "Veg",
    image: "https://img.freepik.com/premium-vector/bruschetta-with-various-vegetable-round-plate-isolated_1639-24656.jpg",
    background: "#fff",
    color: "#2eb774",
  },
  {
    name: "Non-Veg",
    image: "https://img.freepik.com/premium-vector/chicken-wings-asian-style-tomatoes-sauce-plate-white-background_852896-31545.jpg",
    background: "#fff",
    color: "#f94449",
  },
];

const CategoryCard = ({ item }) => {
  return (
    <View style={[styles.catcontainer, { backgroundColor: item.background }]}>
      <Card style={styles.imgcontainer}>
        <Image
          style={styles.image}
          source={{ uri: item.image }}
          contentFit="cover"
          transition={1000}
        />
      </Card>
      <AppText style={[styles.catname, { color: item.color }]} numberOfLines={1}>
        {item.name}
      </AppText>
    </View>
  );
};

const Category = () => {
  return (
    <View>
      <AppHeader style={styles.cattext}>Category</AppHeader>
      <View style={styles.catewrap}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(item=>(
          <CategoryCard item={item} />
        ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cattext: {
    flexDirection: "row",
    fontSize: 16,
    marginVertical: 5,
  },
  catewrap: {
    flexDirection: "row",
  },
  catcontainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    // height: 90,
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginRight:6
  },
  catname: {
    paddingHorizontal: 3,
    fontWeight:600
  },
  image: {
    flex: 1,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  imgcontainer: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 5,
    marginTop: 5,
    borderRadius: 50,
    padding:5,
    backgroundColor:Colors.red
  },
});
export default Category;
