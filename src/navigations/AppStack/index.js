import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// IMPORTS STACKS
import Players from '~/navigations/PlayerStack';
// IMPORTS PAGES
import Home from '~/pages/Home';
import Home3 from '~/pages/Dashboard';
import Dashboard from '~/pages/Dashboard';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '~/styles'


const AppStackTabBottom = createBottomTabNavigator(
  {
    Home,
    Players,
    Dashboard,
    Home3
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'Players') {
          iconName = `suitcase`;
        } else if (routeName === 'Dashboard') {
          iconName = `network-wired`;
        } else if (routeName === 'Home3') {
          iconName = `cogs`
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white' ,
      inactiveTintColor: colors.secondary,
      showLabel: false,
      tabStyle: {
        backgroundColor: colors.primary,
      }
    },
    initialRouteName: 'Players'
  }
);

export default createAppContainer(AppStackTabBottom);