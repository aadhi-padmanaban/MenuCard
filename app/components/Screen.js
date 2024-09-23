import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

const Screen=({children})=>{
    return(
        <>
        <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
        </>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1
    }
});
export default Screen;