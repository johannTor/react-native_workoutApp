import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Screens/Home';
import Exercises from './components/Screens/Exercises';
import Workouts from './components/Screens/Workouts';
import History from './components/Screens/History';
// import { AppNavigator } from './components/AppNavigator';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home}  options={{title: 'Home'}}/>
        <Screen name="Exercises" component={Exercises}  options={{title: 'Exercises'}}/>
        <Screen name='Workouts' component={Workouts}  options={{title: 'Workouts'}}/>
        <Screen name='History' component={History} options={{title: 'History'}}/>
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d4d4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
