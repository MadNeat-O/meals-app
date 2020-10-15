//import libraries
import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/mealsActions';

// create a component
const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = (props) => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    const mealIsFav = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavHandler})
    }, [toggleFavHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: mealIsFav})
    }, [mealIsFav]);

    return(
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration} min</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            
            {selectedMeal.ingredients.map(ingredient => 
                <ListItem key={ingredient}>{ingredient}</ListItem>
            )}
            
            <Text style={styles.title}>Steps</Text>
            
            {selectedMeal.steps.map(step => 
                <ListItem key={step}>{step}</ListItem>
            )}

        </ScrollView>
    )
};

// define your styles
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 5,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    }
});

//make this component available to the app
export default MealDetailScreen;