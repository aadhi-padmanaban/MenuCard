import React, { useEffect, useState } from "react";
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
import listingsApi from "../api/listings";

const MenuList = ({ navigation }) => {
  const [menuList, setMenuList]=useState([]);
  useEffect(() => {
    getMenuList();
  }, []);
  const getMenuList = async () => {
    const response = await listingsApi.getMenuList();
    setMenuList(response.data.recipes);
  };
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.recentwrap}>
          <View style={styles.headertext}>
            <AppHeader style={styles.header}>Menu List</AppHeader>
          </View>
          <FlatList
            data={menuList}
            renderItem={({ item, index }) => (
              <TouchableHighlight
                underlayColor={Colors.white}
                onPress={() => navigation.navigate("MenuFullView",{id:item.id})}
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
    justifyContent: "center",
    alignItems: "center",
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
export default MenuList;
