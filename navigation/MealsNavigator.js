import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Categories',
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTitleStyle: {
            color: Platform.OS === 'android' ? '' : Colors.primary
        }
    }
});

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    }
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight: () => 
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='FAV'
                    iconName='ios-star'
                    onPress={() => {
                        console.log('works?');
                    }}
                />
            </HeaderButtons>
    }
}

const MealsFavTabNav = createBottomTabNavigator({
    Meals: { 
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-restaurant'
                        size={25}
                        color={tabInfo.tintColor}
                    />)
            }
        }},
    Favorites: { 
        screen: FavoritesScreen, 
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-star'
                        size={25}
                        color={tabInfo.tintColor}
                    />)
            }
        }},
}, {
    tabBarOptions: {
        activeTintColor: Colors.primary
    }
});

export default createAppContainer(MealsFavTabNav);
