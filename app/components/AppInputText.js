import { React } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../config/Colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function AppInputText({
  primaryIcon,
  primaryiconcolor,
  secondaryIcon,
  style,
  ...otherProps
}) {
  return (
    <View style={[styles.container, style]}>
      {primaryIcon && (
        <AntDesign
          style={styles.primaryIcon}
          name={primaryIcon}
          size={20}
          color={primaryiconcolor}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
      {secondaryIcon && (
        <MaterialCommunityIcons
          style={styles.secondaryIcon}
          name={secondaryIcon}
          size={20}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    width: "100%",
    flexDirection: "row",
    paddingVertical: "auto",
    // flex:1,
    alignItems: "center",
    verticalAlign: "middle",
    justifyContent: "center",
  },
  primaryIcon: {
    
    // width: 20,
    marginLeft: 10,
  },
  secondaryIcon: {
    alignItems: "center",
    verticalAlign: "middle",
    paddingRight: 13,
  },
  textInput: {
    fontSize: 18,
    padding: 10,
    flex: 1,
  },
});
export default AppInputText;
