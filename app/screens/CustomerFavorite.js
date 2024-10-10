import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import AppHeader from "../components/AppHeader";
import Colors from "../config/Colors";
import Separator from "../components/Separator";
import FullWidthCard from "../components/FullWidthCard";
import Screen from "../components/Screen";

const recentPurchase = [
  {
    title: "Recent one",
    amount: "Rs.100",
    image: "https://picsum.photos/seed/3000/2000",
    monthPurchase: "100+ bought last month",
    star: "4",
  },
  {
    title: "Recent two",
    amount: "Rs.200",
    image: "https://picsum.photos/seed/3000/2000",
  },
  {
    title: "Recent three",
    amount: "Rs.300",
    image: "https://picsum.photos/seed/3000/2000",
    monthPurchase: "150+ bought last month",
    star: "4",
  },
  {
    title: "Recent four",
    amount: "Rs.400",
    image: "https://picsum.photos/seed/3000/2000",
    star: "4",
  },
];

const CustomerFavorite = ({ navigation }) => {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.recentwrap}>
          <View style={styles.headertext}>
            <AppHeader style={styles.header}>Customer Favourite</AppHeader>
          </View>
          <FlatList
            data={recentPurchase}
            renderItem={({ item, index }) => (
              <TouchableHighlight
                underlayColor={Colors.white}
                onPress={() => navigation.navigate("MenuFullView")}
              >
                <FullWidthCard item={item} />
              </TouchableHighlight>
            )}
            keyExtractor={(item) => item.title}
            scrollEnabled={false}
            ItemSeparatorComponent={<Separator />}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};
const styles = StyleSheet.create({
  recentwrap: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 19,
    justifyContent:"center",
    alignItems:"center",
  },
  headertext: {
    flexDirection: "row",
    justifyContent: "center",
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
export default CustomerFavorite;
