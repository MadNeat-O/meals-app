//import libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

// create a component
const GridTile = (props) => {
    return (
        <TouchableOpacity 
                style={styles.gridItem} 
                onPress={props.onSelect}
            >
            <View style={{...styles.ViewContainer, ...{backgroundColor: props.color}}}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

// define your styles
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow: Platform.OS === 'android' && Platform.version >= 21 ? 'hidden' : 'visible',
        elevation: 3,
    },
    ViewContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    // title: {
    //     fontFamily: 'open-sans-bold',
    //     fontSize: 20
    // }
});

//make this component available to the app
export default GridTile;
