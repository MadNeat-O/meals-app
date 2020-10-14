//import libraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

// create a component
const FavoritesScreen = (props) => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    return(
       <MealList displayedMeals={favMeals} navigation={props.navigation} />
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