//import libraries
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

// create a component
const MealList = (props) => {
    const renderMealItem = itemData => {
        return(
            <MealItem 
                title={itemData.item.title} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }
                    })
                }} 
            />
        )
    }
    
    return (
        <View style={styles.list}>
            <FlatList 
                data={props.displayedMeals} 
                renderItem={renderMealItem}
                style={{width: '90%'}}
            />
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//make this component available to the app
export default MealList;
