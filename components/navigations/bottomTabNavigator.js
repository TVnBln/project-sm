import React from 'react'
import {Icon} from 'react-native-elements'
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {
    HomeScreen,
    SearchScreen,
    NewPostScreen,
    RadarScreen,
    ProfileScreen,
    SettingsScreen,
} from '../../screens'

const Tab = createMaterialBottomTabNavigator()

const TabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName="Home"
        activeColor="rgba(242,160,191,0.5)"
        barStyle={{ backgroundColor: 'rgba(242,160,191,1)' }}
        labeled={false}
        >
        <Tab.Screen name="Home" component={HomeScreen}options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
            <Icon name="home" type="material" color="#ffffff"/>
            ),
          }}
        />
        <Tab.Screen name="Search" component={SearchScreen}options={{
            tabBarLabel: 'Search',
            tabBarIcon: () => (
            <Icon name="search" type="material" color="#ffffff"/>
            ),
          }}
        />
        <Tab.Screen name="NewPost" component={NewPostScreen}options={{
            tabBarLabel: 'New Post',
            tabBarIcon: () => (
            <Icon name="control-point" type="material" color="#ffffff"/>
            ),
          }}
        />
        <Tab.Screen name="Radar" component={RadarScreen}options={{
            tabBarLabel: 'Radar',
            tabBarIcon: () => (
            <Icon name="map" type="material" color="#ffffff"/>
            ),
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
            <Icon name="account-circle" type="material" color="#ffffff"/>
            ),
          }}
        />
      </Tab.Navigator>
    );
};

export default TabNavigator