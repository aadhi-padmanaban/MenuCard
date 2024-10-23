import React, { useRef } from "react";
import { View, StyleSheet, Image, FlatList, Dimensions } from "react-native";
import AppText from "../components/AppText";
import Colors from "../config/Colors";

const { width, height } = Dimensions.get("window");
const  screenheight=Dimensions.get("screen").height;
const fullImage = [
  {
    id: "1",
    image: "https://picsum.photos/seed/picsum/720/1500",
  },
  {
    id: "2",
    image: "https://picsum.photos/seed/picsum/720/1500",
  },
  {
    id: "3",
    image: "https://picsum.photos/seed/picsum/720/1500",
  },
  {
    id: "4",
    image: "https://picsum.photos/seed/picsum/720/1500",
  },
  {
    id: "5",
    image: "https://picsum.photos/seed/picsum/720/1500",
  },
  {
    id: "6",
    image: "https://picsum.photos/seed/picsum/720/1500",
  },
];

const RenderImageComponent = () => {
  const imgref = useRef(null);
  return (
    <>
      <Image
        ref={imgref}
        style={styles.image}
        resizeMode="cover"
        source={{ uri: "https://picsum.photos/seed/picsum/720/1500" }}
      />
      <View style={styles.title}>
        <AppText style={styles.titlename} numberOfLines={2}>
          Menu content with name with transparancy condition sdfdsf with
          transparancy condition sdfdsf
        </AppText>
      </View>
      {/* <AppText>sdf</AppText> */}
    </>
  );
};

const FullScreenMediaView = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={fullImage}
        snapToInterval={height}
        snapToStart
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        renderItem={({ item, index }) => <RenderImageComponent />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  image: {
    width: width,
    height: height,
    // width:"100%",
    // height:"100%",
  },
  title: {
    position: "absolute",
    bottom: (screenheight-height),
    left: 15,
    right: 15,
    backgroundColor: Colors.whiteTransparent,
    borderRadius: 13,
    display: "flex",
    justifyContent: "center",
  },
  titlename: {
    color: Colors.white,
    fontSize: 18,
    opacity: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
export default FullScreenMediaView;
