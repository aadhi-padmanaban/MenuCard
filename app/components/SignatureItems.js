import React from "react";
import { View, Dimensions, Image, FlatList, StyleSheet } from "react-native";
import Card from "./Card";
import AppText from "./AppText";
import AppHeader from "./AppHeader";
import AppLabel from "./AppLabel";
import Colors from "../config/Colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      <AppHeader style={styles.headertext}>Signature Items</AppHeader>
      <FlatList
        data={signatureItems}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Card style={styles.cardcontainer}>
              <Image style={styles.image} source={{ uri: item.image }} />
            </Card>
            <View style={styles.content}>
              <View>
                <AppText style={styles.signName}>{item.name}</AppText>
                <AppText style={styles.secondary}>
                  100+ bought last month
                </AppText>
              </View>
              <AppLabel style={styles.rating}>
                4<MaterialCommunityIcons name="star" size={15} />
              </AppLabel>
            </View>
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
  headertext: {
    fontSize: 16,
    marginVertical: 5,
  },
  section: {
    marginVerticle: 10,
  },
  container: {
    width: CARD_WIDTH,
    height: 250,
    backgroundColor: Colors.white,
    marginRight: 6,
    borderRadius: 10,
  },
  cardcontainer: {
    height: 200,
  },
  image: {
    width: "100%",
    height: 190,
    objectFit: "cover",
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    // paddingVertical:6
  },
  signName: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 3,
    color: Colors.black,
  },
  secondary: {
    fontSize: 10,
    fontWeight: 500,
  },
  rating: {
    fontSize: 15,
    fontWeight: 600,
    color: Colors.green,
  },
});
export default SignatureItems;
