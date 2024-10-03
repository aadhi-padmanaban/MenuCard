import React from "react";
import { View, Dimensions, Image, FlatList, StyleSheet } from "react-native";
import Card from "./Card";
import AppText from "./AppText";
import AppHeader from "./AppHeader";
import Colors from "../config/Colors";

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width / 2 + width / 4;

const signatureItems = [
  {
    name: "First Menu name",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    name: "Second Menu name",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    name: "Third Menu name",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
];

const SignatureItems = () => {
  return (
    <View style={styles.section}>
      <AppHeader>Signature Items</AppHeader>
      <FlatList
        data={signatureItems}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Card style={styles.cardcontainer}>
              <Image style={styles.image} source={{ uri: item.image }} />
            </Card>
            <AppText>{item.name}</AppText>
          </View>
        )}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    marginVerticle: 10,
  },
  container: {
    width: CARD_WIDTH,
    height: 230,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  cardcontainer: {
    height: 200,
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
});
export default SignatureItems;
