import React, { useMemo, useRef, useEffect, forwardRef } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BottomSheet, {
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import AppLabel from "../components/AppLabel";
import Progress from "../components/Progress";
import Colors from "../config/Colors";

const review = [
  { id: "5", rating: "5.5k", color: "ratinggreen", percent: "100%" },
  { id: "4", rating: "560", color: "ratinggreen", percent: "70%" },
  { id: "3", rating: "5.5k", color: "ratinggreen", percent: "80%" },
  { id: "2", rating: "5.5k", color: "ratingyellow", percent: "40%" },
  { id: "1", rating: "5.5k", color: "ratingred", percent: "60%" },
];

const comments = [
  { id: "i1" },
  { id: "i2" },
  { id: "i3" },
  { id: "i4" },
  { id: "i5" },
  { id: "i6" },
  { id: "i7" },
  { id: "i8" },
  { id: "i9" },
  { id: "i10" },
];

const Rating = ({ rating }) => {
  return (
    <View style={styles.starrow}>
      <View style={styles.first}>
        <Text style={styles.perstar}>
          {rating.id}
          <MaterialCommunityIcons name="star" size={15} />
        </Text>
      </View>
      <View style={styles.middle}>
        <Progress rcolor={rating.color} percent={rating.percent} />
      </View>
      <View style={styles.last}>
        <Text style={styles.perstar}>{rating.rating}</Text>
      </View>
    </View>
  );
};

const Comments = (comment) => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.ratingcontent}>
        <AppLabel style={styles.ratingAt}>On 24 Apr 26</AppLabel>
        <AppText style={styles.comment}>
          Lorem contetn goe she sf sdfsdflj sdf Lorem contetn goe she sf
          sdfsdflj sdf Lorem contetn goe she sf sdfsdflj sdf
        </AppText>
      </View>
      <View style={styles.heart}>
        <MaterialCommunityIcons name="heart-outline" size={20} />
        <AppText style={styles.liked}>201</AppText>
      </View>
    </View>
  );
};

const MyBottomSheet = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ["25%", "50%", "75%", "100%"], []);

  return (
    //
    <BottomSheet
      ref={ref}
      // index={0}
      snapPoints={snapPoints}
      // onDismiss={() => setIsVisible(false)}
      enablePanDownToClose={true}
    >
      {/* <View style={styles.contentContainer}>
        <View style={styles.reviewContainer}>
          <View style={styles.rating}>
            <AppHeader>
              4.7 <MaterialCommunityIcons name="star" size={20} />
            </AppHeader>
            <AppText style={styles.ratingword}>90 Rating & 60 Reviews</AppText>
          </View>
          <View style={styles.starcontainer}>
            <FlatList
              data={review}
              renderItem={({ item, index }) => <Rating rating={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View> */}
      <BottomSheetFlatList
        data={comments}
        renderItem={({ item, index }) => <Comments comment={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
    </BottomSheet>
  );
});
const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
  },
  reviewContainer: {
    flexDirection: "row",
  },
  rating: {
    width: "30%",
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingword: {
    textAlign: "center",
  },
  starcontainer: {
    width: "70%",
  },
  pro: {
    flex: 1,
    width: "100%",
  },
  starrow: {
    flexDirection: "row",
  },
  first: {
    width: "10%",
    marginRight: 2,
    alignItems: "flex-end",
  },
  middle: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginRight: 2,
  },
  last: {
    width: "10%",
    alignItems: "flex-end",
  },
  ratingContainer: {
    marginVertical: 7,
    flexDirection: "row",
    paddingVertical: 8,
    paddingLeft: 10,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  ratingcontent: {
    flex: 1,
  },
  ratingAt: {
    fontSize: 13,
    fontWeight: 600,
    paddingBottom: 3,
  },
  comment: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: 400,
  },
  heart: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  liked: {
    fontSize: 10,
    color: Colors.black,
  },
});
export default MyBottomSheet;
