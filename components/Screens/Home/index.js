import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import ScreenTitle from '../../ScreenTitle';
import styles from './styles';
import quotes from '../../../assets/quotes/quotes';

export default function Home({navigation}) {
  const title = 'WorkoutLogger';
  const [currQuote, setCurrQuote] = useState({});
  
  // We can listen to focus/blur events to detect when a user opens/closes a screen
  useEffect(() => {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    };
    // Generate a new quote when entering the home screen
    const unsubscribe = navigation.addListener('focus', () => {
      // Screen was focused
      const newQuote = quotes[getRandomInt(quotes.length)];
      setCurrQuote(newQuote);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScreenTitle title={title} />
      <Text style={styles.quote}>"{currQuote.quote}"</Text>
      <Text style={styles.author}>- {currQuote.author}</Text>
      <View style={styles.homeLinks}>
        <Pressable style={styles.navButton} onPress={() => navigation.navigate('Exercises')}><Text style={styles.btnText}>Exercises</Text></Pressable>
        <Pressable style={styles.navButton} onPress={() => navigation.navigate('Workouts')}><Text style={styles.btnText}>Workouts</Text></Pressable>
        <Pressable style={styles.navButton} onPress={() => navigation.navigate('History')}><Text style={styles.btnText}>History</Text></Pressable>
      </View>
    </View>
  )
}
