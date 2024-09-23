import React from 'react';
import Screen from '../components/Screen';
import {View, Text} from 'react-native';
import Colors from '../config/Colors';

const Home=()=>{
    return(
        <Screen>
        <StatusBar backgroundColor={Colors.red} />
            <View><Text>HI</Text></View>
        </Screen>
    );
}
export default Home;