import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Exercises from './Exercises';
import Workouts from './Workouts';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  <Navigator headerMode='none'>
    <Screen name='Exercises' component={Exercises} />
    <Screen name='Workouts' component={Workouts} />
  </Navigator>
};

export const AppNavigator = () => {
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
};