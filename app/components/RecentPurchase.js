import React from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import Card from "./Card";
import AppHeader from "./AppHeader";
import AppText from "./AppText";
import Colors from "../config/Colors";

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width - (12 + 12);

const recentPurchase = [
  {
    title: "Recent one",
    amount: "Rs.100",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    title: "Recent two",
    amount: "Rs.200",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    title: "Recent three",
    amount: "Rs.300",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    title: "Recent four",
    amount: "Rs.400",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
];

const RecentPurchase = () => {
  return (
    <View>
      <View style={styles.headertext}>
        <AppHeader style={styles.header}>Customer Favourite</AppHeader>
        <AppText>View All</AppText>
      </View>
      <FlatList
        data={recentPurchase}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Card>
              <Image style={styles.image} source={{ uri: item.image }} />
            </Card>
            <View style={styles.content}>
              <AppText numberOfLines={1}>{item.title}</AppText>
              <AppText>{item.amount}</AppText>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 16,
  },
  headertext: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    width: CARD_WIDTH,
    height: 230,
    borderRadius: 15,
    backgroundColor: Colors.white,
  },
  image: {
    height: 200,
    width: "100%",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default RecentPurchase;
