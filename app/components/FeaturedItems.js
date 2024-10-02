import React from "react";
import { Image, View, StyleSheet, FlatList } from "react-native";
import Card from "./Card";
import AppText from "./AppText";
import Colors from "../config/Colors";
import AppHeader from "./AppHeader";

const featuredItems = [
  {
    name: "Feat One",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    name: "Feat Two",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    name: "Feat Three",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    name: "Feat Four",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
];
const FeaturedItems = () => {
  return (
    <View style={styles.featwrap}>
      <AppHeader style={styles.headername}>Featured Items</AppHeader>
      <FlatList
        data={featuredItems}
        renderItem={({item,index}) => (
          <Card style={styles.container}>
            <Image
              style={styles.image}
              source={{ uri: item.image }}
            />
            <AppText style={styles.name} numberOfLines={1}>
              {item.name}
            </AppText>
          </Card>
        )}
        keyExtractor={(item)=>item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  featwrap: {
    marginVertical: 10,
  },
  container: {
    width: 150,
    height: 200,
    marginRight:6,
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    overflow: "hidden",
    borderRadius: 10,
  },
  name: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    padding: 10,
    fontSize: 18,
    color: Colors.white,
  },
  headername: {
    fontSize: 16,
    marginVertical: 5,
  },
});
export default FeaturedItems;
