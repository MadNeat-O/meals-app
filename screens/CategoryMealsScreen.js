//import libraries
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

// create a component
const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return(
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to meals" onPress={() => {
                props.navigation.navigate('MealDetail')
            }} />
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
export default CategoryMealScreen;