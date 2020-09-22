//import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CategoriesScreen = (props) => {
    return(
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//make this component available to the app
export default CategoriesScreen;