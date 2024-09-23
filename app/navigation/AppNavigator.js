import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MenuList from '../screens/MenuList';
import CustomerFavorite from '../screens/CustomerFavorite';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator=()=>{
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Stack.Screen name="MenuList" component={MenuList}></Stack.Screen>
        <Stack.Screen name="CustomerFavorite" component={CustomerFavorite}></Stack.Screen>
    </Tab.Navigator>
}

const AppNavigator=()=>{
    <Stack.Navigator>
        <Stack.Screen name="HomeNavigator" component={HomeNavigator}></Stack.Screen>
    </Stack.Navigator>
}
export default AppNavigator;