//import libraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { MEALS } from '../data/dummy-data'

// create a component
const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    
    return(
        <ScrollView>
            <View style={styles.screen}>
                <Text>{selectedMeal.title}</Text>
            </View>
        </ScrollView>
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
export default MealDetailScreen;