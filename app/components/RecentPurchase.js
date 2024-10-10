import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import AppHeader from "./AppHeader";
import AppText from "./AppText";
import Colors from "../config/Colors";
import Separator from "./Separator";
import { useNavigation } from "@react-navigation/native";
import FullWidthCard from "./FullWidthCard";


const recentPurchase = [
  {
    title: "Recent one",
    amount: "Rs.100",
    image: "https://picsum.photos/seed/696/3000/2000",
    monthPurchase: "100+ bought last month",
    star: "4",
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
    monthPurchase: "150+ bought last month",
    star: "4",
  },
  {
    title: "Recent four",
    amount: "Rs.400",
    image: "https://picsum.photos/seed/696/3000/2000",
    star: "4",
  },
];

const RecentPurchase = ({ onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.recentwrap}>
      <View style={styles.headertext}>
        <AppHeader style={styles.header}>Customer Favourite</AppHeader>
        <TouchableHighlight
          underlayColor={Colors.white}
          onPress={() => navigation.navigate("CustomerFavorite")}
        >
          <AppText style={styles.viewall}>View All</AppText>
        </TouchableHighlight>
      </View>
      <FlatList
        data={recentPurchase}
        renderItem={({ item, index }) => (
          <TouchableHighlight
            underlayColor={Colors.white}
            onPress={() => navigation.navigate("MenuFullView")}
          >
            <FullWidthCard item={item}/>
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item.title}
        scrollEnabled={false}
        ItemSeparatorComponent={<Separator />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  recentwrap: {
    marginVertical: 15,
  },
  header: {
    fontSize: 16,
  },
  headertext: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  viewall: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 13,
  },
  
});
export default RecentPurchase;
