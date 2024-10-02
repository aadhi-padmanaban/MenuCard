import './gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import Colors from "./app/config/Colors";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar backgroundColor={Colors.red} />
    <AppNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
