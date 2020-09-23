//import libraries
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem'

// create a component
const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal =>  meal.categoryIds.indexOf(catId) >= 0);

    const renderMealItem = itemData => {
        return(
            <MealItem 
                title={itemData.item.title} 
                onSelectMeal={() => {}} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
            />
        )
    }

    return(
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals} 
                renderItem={renderMealItem}
                style={{width: '90%'}}
            />
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