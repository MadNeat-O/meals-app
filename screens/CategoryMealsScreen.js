//import libraries
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

// create a component
const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal =>  meal.categoryIds.indexOf(catId) >= 0);

    return(
        <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
    )
};

// define your styles
const styles = StyleSheet.create({
    
});

//make this component available to the app
export default CategoryMealScreen;