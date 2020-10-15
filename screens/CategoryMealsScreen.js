//import libraries
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

// create a component
const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');
    const availableMeals = useSelector(state => state.meals.filteredMeals )
    const displayedMeals = availableMeals.filter(meal =>  meal.categoryIds.indexOf(catId) >= 0);

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.screen}>
                <Text>
                    No available meals based on your filter settings.
                </Text>
            </View>
        )
    }
    return(
        <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
    )
};

//Stylesheet
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'open-sans'
    }
});

//make this component available to the app
export default CategoryMealScreen;