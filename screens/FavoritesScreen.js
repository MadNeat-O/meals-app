//import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';

import { MEALS } from '../data/dummy-data';

// create a component
const FavoritesScreen = (props) => {
    const displayedMeals  = MEALS.filter(meal => meal.id === 'm1' || meal.id ==='m2' )
    return(
       <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
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
export default FavoritesScreen;