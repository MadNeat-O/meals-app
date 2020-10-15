//import libraries
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

// create a component
const FavoritesScreen = (props) => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0) {
        return (
            <View style={styles.screen}>
                <Text>Add favorite meals to see them here!</Text>
            </View>
        )
    } else {
        return <MealList displayedMeals={favMeals} navigation={props.navigation} />
    }
};

// define your styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'open-sans'
    }
});

//make this component available to the app
export default FavoritesScreen;