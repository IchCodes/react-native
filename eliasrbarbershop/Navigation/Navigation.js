import React from 'react'
import { StyleSheet ,Image } from 'react-native'
import { 
    createStackNavigator 
} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from '../components/Search'
import FilmDetail from '../components/FilmDetails'
import Favorites from '../components/Favorites'
import Test from '../components/Test'

const SearchStackNavigation = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }
    },
    FilmDetail: {
        screen: FilmDetail,
        navigationOptions: {
            title: "Detail Film"
        }
    }
}) 

const FavoritesStackNavigator = createStackNavigator({
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        title: 'Favoris'
      }
    },
    FilmDetail: {
      screen: FilmDetail
    }
  })

const MoviesTabNavigator = createBottomTabNavigator({
    Search: {
        screen: SearchStackNavigation,
        navigationOptions: {
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
              return <Image
                source={require('../Images/ic_search.png')}
                style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
            }
          }
    },
    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
              return <Image
                source={require('../Images/ic_favorite.png')}
                style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
            }
          }
    },
    Test: {
      screen: Test
    }
}, {
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: '#FFFFFF' // Couleur d'arrière-plan des onglets non sélectionnés
    }
})

const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30
    }
  })

export default createAppContainer(MoviesTabNavigator)