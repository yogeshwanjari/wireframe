import React, { Component } from 'react';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('screen').height
const styles = {
    parentContainer: {
        height: deviceHeight,
        justifyContent: 'center',
    },
    textStyle:{
        fontSize:18,
        textAlign:'center',
        paddingTop:32,
        fontWeight:"bold"
        
    },
    container: {
        backgroundColor: "#fff"
    },
    loader: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        paddingVertical: 10,
        margin: 5,
        backgroundColor: "#fff",
        fontSize:100,
        fontWeight:"bold"
    }
};
export default styles;