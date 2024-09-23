import { React } from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../config/Colors";

function AppButton({
  children,
  onPress,
  icon,
  style,
  btntext,
  iconcolor = Colors.red,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, style]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={iconcolor}
            style={{
              verticalAlign: "middle",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        )}
        <Text style={[styles.text, btntext]}>{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.red,
    borderRadius: 25,
    alignItems: "center",
  },
  text: {
    color: Colors.pureWhite,
    padding: 10,
    fontSize: 20,
  },
});
export default AppButton;
