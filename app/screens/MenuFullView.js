import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import Colors from "../config/Colors";
import AppText from "../components/AppText";
import Separator from "../components/Separator";
const MenuFullView = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.screenPadding}>
          <View style={styles.headers}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View style={styles.backwrap}>
                <MaterialIcons
                  style={styles.back}
                  size={20}
                  name={"arrow-back-ios"}
                />
              </View>
            </TouchableWithoutFeedback>
            <Image
              style={styles.image}
              source={{ uri: "https://picsum.photos/seed/3000/2500" }}
            />
            <View style={styles.thumbwrap}>
              <View style={styles.imgrow}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image
                  style={styles.thumbImage}
                  source={{ uri: "https://picsum.photos/seed/3000/2500" }}
                />
                <Image
                  style={styles.thumbImage}
                  source={{ uri: "https://picsum.photos/seed/3000/2500" }}
                />
                <Image
                  style={styles.thumbImage}
                  source={{ uri: "https://picsum.photos/seed/3000/2500" }}
                />
                <Image
                  style={styles.thumbImage}
                  source={{ uri: "https://picsum.photos/seed/3000/2500" }}
                />
                <Image
                  style={styles.thumbImage}
                  source={{ uri: "https://picsum.photos/seed/3000/2500" }}
                />
                <Image
                  style={styles.thumbImage}
                  source={{ uri: "https://picsum.photos/seed/3000/2500" }}
                />
                <Image
                  style={styles.thumbImage}
                  source={{ uri: "https://picsum.photos/seed/3000/2500" }}
                />
                </ScrollView>
              </View>
              <View style={styles.viewall}>
                <AppText style={styles.viewalltext}>View All</AppText>
              </View>
            </View>
            <Separator style={styles.Separator}/>
          </View>
          <View>
            <View style={styles.name}>
            <AppHeader >Menufullview</AppHeader>
            <AppHeader style={styles.price}>Rs.300</AppHeader>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenPadding: {
    paddingHorizontal: 6,
    paddingTop: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 19,
  },
  backwrap: {
    position: "absolute",
    width: 25,
    height: 25,
    zIndex: 500,
    left: 0,
    top: 15,
    left: 10,
    color: Colors.black,
    borderColor: Colors.black,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    fontSize: 18,
    marginLeft: "auto",
  },
  image: {
    height: 300,
    width: "100%",
  },
  thumbwrap: {
    flexDirection: "row",
    flex: 1,
    backgroundColor:Colors.light,
    paddingHorizontal:5
  },
  imgrow: {
    flex: 1,
    flexDirection: "row",
  },
  thumbImage: {
    width: 50,
    height: 50,
    marginHorizontal:2,
    marginVertical:5,
    borderRadius:4
  },
  viewall:{
    backgroundColor:Colors.red,
    width:50,
    height:50,
    marginVertical:5,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:5
  },
  viewalltext:{
    color:Colors.white,
    fontSize:13
  },
  Separator:{
    borderColor:Colors.light,
    borderBottomWidth:1
  },
  name:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  price:{
    fontSize:18,
    verticalAlign:"middleg"
  }
});
export default MenuFullView;
