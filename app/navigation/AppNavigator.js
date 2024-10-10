import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import MenuList from "../screens/MenuList";
import CustomerFavorite from "../screens/CustomerFavorite";
import MenuFullView from "../screens/MenuFullView";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="MenuList"
        component={MenuList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu-book" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="CustomerFavorite"
        component={CustomerFavorite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
      ></Stack.Screen>
      <Stack.Screen name="MenuFullView" component={MenuFullView}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default AppNavigator;
