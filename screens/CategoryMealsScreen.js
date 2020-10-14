//import libraries
import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

// create a component
const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals )

    const displayedMeals = availableMeals.filter(meal =>  meal.categoryIds.indexOf(catId) >= 0);

    return(
        <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
    )
};

//make this component available to the app
export default CategoryMealScreen;