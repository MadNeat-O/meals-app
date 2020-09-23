//import libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data'

//Create functions

// create a component
const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity 
                style={styles.gridItem} 
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

//make this component available to the app
export default CategoriesScreen;