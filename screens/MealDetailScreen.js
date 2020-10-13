//import libraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import { MEALS } from '../data/dummy-data';
import DefaultText from '../components/DefaultText';

// create a component
const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    
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