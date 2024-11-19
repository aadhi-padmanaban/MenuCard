import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Text,
} from "react-native";
import AppText from "../components/AppText";
import Colors from "../config/Colors";
import { useRoute } from "@react-navigation/native";
import listingsApi from "../api/listings";

const { width, height } = Dimensions.get("window");
const screenheight = Dimensions.get("screen").height;
// const fullImage = [
//   {
//     id: "1",
//     image: "https://picsum.photos/seed/picsum/720/1500",
//   },
//   {
//     id: "2",
//     image: "https://picsum.photos/seed/picsum/720/1500",
//   },
//   {
//     id: "3",
//     image: "https://picsum.photos/seed/picsum/720/1500",
//   },
//   {
//     id: "4",
//     image: "https://picsum.photos/seed/picsum/720/1500",
//   },
//   {
//     id: "5",
//     image: "https://picsum.photos/seed/picsum/720/1500",
//   },
//   {
//     id: "6",
//     image: "https://picsum.photos/seed/picsum/720/1500",
//   },
// ];

const RenderImageComponent = ({ imgc }) => {
  const imgref = useRef(null);
  return (
    <>
      <Image
        ref={imgref}
        style={styles.image}
        resizeMode="cover"
        source={{ uri: imgc.image }}
      />
      <View style={styles.title}>
        <AppText style={styles.titlename} numberOfLines={2}>
          {imgc ? imgc.name : "Loading..."}
        </AppText>
      </View>
      {/* <AppText>sdf</AppText> */}
    </>
  );
};

const FullScreenMediaView = () => {
  const route = useRoute();
  const [scrollIndex, setScrollIndex] = useState(route.params.id);
  const [fullImage, setimglist] = useState([]);
  const [offset_val, setOffsetval] = useState(0);
  const [loading,setLoading]=useState(0);
  const loadMediaList = async () => {
    if(loading){
      return;
    }
    setLoading(1);
    console.log(offset_val + "ins");
    const skipparam = offset_val != 0 ? "&skip=" + offset_val : "";
    const endUrl = "?limit=10" + skipparam + "&select=name,image,rating";
    const response = await listingsApi.getMediaList(endUrl);
    setimglist((exist)=>{return [...exist, ...response.data.recipes]});
    setOffsetval((a) => a + 10);
    console.log(endUrl);
    setLoading(0);
  };
  useEffect(() => {
    loadMediaList();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={fullImage}
        snapToInterval={height}
        snapToStart
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        // initialScrollIndex={scrollIndex}
        renderItem={({ item, index }) => {
          return <RenderImageComponent imgc={item} />;
        }}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        onEndReached={() => loadMediaList()}
        onEndReachedThreshold={3}
        initialNumToRender={1}
        windowSize={5}
        // debug
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
    bottom: screenheight - height,
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
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
});
export default FullScreenMediaView;
