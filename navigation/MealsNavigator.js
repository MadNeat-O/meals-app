import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FiltersScreen'

import Colors from '../constants/Colors';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTitleStyle: {
            color: Platform.OS === 'android' ? '' : Colors.primary,
            fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        }
    }
}

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
}, defaultStackNavOptions
);

CategoriesScreen.navigationOptions = (navigationData) => {
    return {
        headerLeft: () => 
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title="Menu" 
                        iconName='ios-menu' 
                        onPress={() => {navigationData.navigation.toggleDrawer()}} />
                </HeaderButtons>
    }
}

FavoritesScreen.navigationOptions = (navigationData) => {
    return {
        headerLeft: () =>
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title="Menu" 
                        iconName='ios-menu' 
                        onPress={() => {navigationData.navigation.toggleDrawer()}} />
                </HeaderButtons>
    }
}

FilterScreen.navigationOptions = (navigationData) => {
    return {
        headerLeft: () =>
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title="Menu" 
                        iconName='ios-menu' 
                        onPress={() => {navigationData.navigation.toggleDrawer()}} />
                </HeaderButtons>
    }
}

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

const FavNav = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, defaultStackNavOptions);

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
        screen: FavNav, 
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

const FiltersNav = createStackNavigator({
    Filters: {
        screen: FilterScreen,
        navigationOptions: {
            headerTitle: 'Categories',
        }
    }
}, defaultStackNavOptions)

const MainNav = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNav,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNav  
}, {
    contentOptions: {
        activeTintColor: Colors.highlight,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNav);
