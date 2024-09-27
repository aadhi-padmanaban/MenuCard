import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import MenuList from "../screens/MenuList";
import CustomerFavorite from "../screens/CustomerFavorite";
import MaterialCommunityIcons from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
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
          <MaterialCommunityIcons name="menu-book" color={color} size={size} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="CustomerFavorite"
      component={CustomerFavorite}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="favorite" color={color} size={size} />
        ),
      }}
    ></Tab.Screen>
  </Tab.Navigator>;
};

const AppNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen name="HomeNavigator" component={HomeNavigator}></Stack.Screen>
  </Stack.Navigator>;
};
export default AppNavigator;
