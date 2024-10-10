import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

import AppText from "./AppText";
import Card from "./Card";
import Colors from "../config/Colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width - (10 + 10);

const FullWidthCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </Card>
      <View style={styles.content}>
        <View>
          <AppText numberOfLines={1} style={styles.title}>
            {item.title}
          </AppText>
          {item.monthPurchase && (
            <AppText style={styles.monthlyPurch}>{item.monthPurchase}</AppText>
          )}
          {item.star && (
            <AppText style={styles.starrating}>
              {item.star}
              <MaterialCommunityIcons name="star" size={10} />
              Rating
            </AppText>
          )}
        </View>
        <AppText style={styles.subtitle}>{item.amount}</AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: "auto",
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  cardContainer: {
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    height: 190,
    width: "100%",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 7,
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
    color: Colors.black,
    marginBottom: 5,
  },
  subtitle: {
    fontWeight: 600,
    fontSize: 15,
  },
  monthlyPurch: {
    fontSize: 10,
    fontWeight: 500,
  },
  starrating: {
    fontSize: 10,
    fontWeight: 600,
    color: Colors.green,
  },
});
export default FullWidthCard;
