//import libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import GridTile from '../components/GridTile';

import { CATEGORIES } from '../data/dummy-data'

//Create functions

// create a component
const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <GridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
            }} />
        )
    }

    return(
        <FlatList 
            numColumns={2} 
            data={CATEGORIES}
            renderItem={renderGridItem} 
        />
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
export default CategoriesScreen;