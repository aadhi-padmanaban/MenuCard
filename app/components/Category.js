import React from "react";
import { Image, View, Text, StyleSheet, FlatList } from "react-native";

import Card from "./Card";
import AppHeader from "./AppHeader";
import AppText from "./AppText";
import Colors from "../config/Colors";

const categories = [
  {
    name: "Veg",
    image: "https://picsum.photos/200/200",
    background: "#c5fcce",
    color: "#2eb774",
  },
  {
    name: "Non-Veg",
    image: "https://picsum.photos/200/200",
    background: "#fcebec",
    color: "#f94449",
  },
];

const CategoryCard = ({ item, index }) => {
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
        <FlatList
          data={categories}
          renderItem={({item, index}) => (
            <CategoryCard item={item} index={index} />
          )}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
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
    height: 90,
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginRight:6
  },
  catname: {
    paddingHorizontal: 3,
  },
  image: {
    flex: 1,
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  imgcontainer: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
  },
});
export default Category;
