import React, { useState, useRef, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import Colors from "../config/Colors";
import AppText from "../components/AppText";
import AppLabel from "../components/AppLabel";
import Separator from "../components/Separator";
import RenderHtml from "react-native-render-html";
import MyBottomSheet from "../hooks/MyBottomSheet";
import MyBottomSheetModal from "../components/MyBottomSheetModal";
// import BottomSheet from "@gorhom/bottom-sheet";

const { width } = Dimensions.get("window");
const WIDTH = width;
const source = {
  html: `
<p style="text-align:justify;">
  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
</p>`,
};

const MenuFullView = ({ navigation }) => {
  const bottomSheetRef = useRef(null);

  // const handleExpandPress = ()=> bottomSheetRef.current?.expand();
  const openModal = () => bottomSheetRef.current?.present();

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                  <TouchableWithoutFeedback onPress={() => navigation.navigate("FullScreenMediaView")}>
                    <Image
                      style={styles.thumbImage}
                      source={{ uri: "https://picsum.photos/seed/3000/2500" }}
                    />
                  </TouchableWithoutFeedback>
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
            <Separator style={styles.Separator} />
          </View>
          <View style={styles.body}>
            <View style={styles.name}>
              <AppText style={styles.offerinfo}>In Offer</AppText>
              <AppHeader style={styles.menutitle}>
                Menufullview Menufullview Menufullview Menufullview Menufullview
              </AppHeader>
            </View>
            <View style={styles.description}>
              <AppText style={styles.starrating}>
                4.2 <MaterialCommunityIcons name="star" size={14} />
              </AppText>
              <AppHeader style={styles.price}>
                Rs.300 <AppHeader style={styles.delamt}>Rs.500</AppHeader>
              </AppHeader>
              <View style={styles.notif}>
                <AppText style={styles.monthlyPurch}>
                  150+ Bought last month
                </AppText>
                <TouchableHighlight
                  onPress={openModal}
                  underlayColor={Colors.light}
                >
                  <AppLabel style={styles.ratingwrap}>
                    {/* onPress={() => setIsVisible(true)} */}
                    90 Ratings & 50+ Reviews Available
                  </AppLabel>
                </TouchableHighlight>
              </View>
              <RenderHtml contentWidth={WIDTH} source={source} />
            </View>
          </View>
        </View>
      </ScrollView>
      <MyBottomSheetModal ref={bottomSheetRef} />
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenPadding: {
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
    backgroundColor: Colors.light,
    paddingHorizontal: 5,
  },
  imgrow: {
    flex: 1,
    flexDirection: "row",
  },
  thumbImage: {
    width: 50,
    height: 50,
    marginHorizontal: 2,
    marginVertical: 5,
    borderRadius: 4,
  },
  viewall: {
    backgroundColor: Colors.red,
    width: 50,
    height: 50,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  viewalltext: {
    color: Colors.white,
    fontSize: 13,
  },
  Separator: {
    borderColor: Colors.light,
    borderBottomWidth: 1,
  },
  offerinfo: {
    color: Colors.green,
    fontSize: 13,
  },
  menutitle: {
    fontSize: 20,
    fontWeight: 500,
    color: Colors.black,
    textAlign: "justify",
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 5,
  },
  notif: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  delamt: {
    textDecorationLine: "line-through",
    fontSize: 15,
    color: Colors.gray,
  },
  body: {
    marginHorizontal: 10,
  },
  description: {
    marginVertical: 6,
  },
  monthlyPurch: {
    fontSize: 14,
    fontWeight: 500,
  },
  starrating: {
    fontSize: 14,
    fontWeight: 800,
    color: Colors.green,
  },
  ratingwrap: {
    fontWeight: 600,
    color: Colors.blue,
    textDecorationLine: "underline",
    fontSize: 13,
  },
  desc_content: {
    fontSize: 15,
    marginTop: 10,
    color: Colors.black,
    fontWeight: 400,
    textAlign: "justify",
  },
});
export default MenuFullView;
