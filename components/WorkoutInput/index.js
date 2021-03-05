import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToggleableExercise from '../ToggleableExercise';
import getNextId from '../../util/general';
import styles from './styles';

export default function WorkoutInput({toggleWindow, saveWorkout, workouts}) {
  const [workout, setWorkout] = useState({id: '', name: '', exercises: []});
  const [exercises, setExercises] = useState([]);
  const [chosenExercises, setChosenExercises] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    try {
      const data = await AsyncStorage.getItem('exercises');
      if(data !== null) {
        setExercises(JSON.parse(data));
      }
    } catch(err) {
      console.warn('Err: ', err);
    }
  }

  const validateWorkout = () => {
    if(!workout.name) {
      Alert.alert('Missing info', 'Name is missing', [{ text: 'OK', onPress: () => null }],{ cancelable: false });
      return;
    }
    if(chosenExercises.length <= 0) {
      Alert.alert('Missing info', 'Choose at least one exercise', [{ text: 'OK', onPress: () => null }],{ cancelable: false });
      return;
    }
    // Do this in a more clean way? create a workout object out of the inputs and send it to saveworkout
    const newId = workouts.length <= 0 ? 1 : getNextId(workouts);
    console.warn('Id is: ', newId);
    const wName = workout.name;
    const newWorkout = {id: newId, name: wName, exercises: chosenExercises}
    setWorkout(newWorkout);
    // const savedWorkout = {id: newId, ...workout, exercises: chosenExercises};
    console.warn('newone: ', newWorkout);
    saveWorkout(newWorkout);
    setWorkout({id: '', name: '', exercises: []});
    toggleWindow();
  };

  // Handles the selection of the available exercises to create a workout
  const addRemoveExToWorkout = (exercise) => {
    const found = chosenExercises.findIndex(item => item.name === exercise.name);
    // If exercise has already been chosen splice it from the list and re-set the state
    if(found !== -1) {
      const cpyArr = chosenExercises.map((item) => item)
      cpyArr.splice(found, 1);
      setChosenExercises(cpyArr);
      return;
    }
    setChosenExercises([...chosenExercises, exercise]);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>New Workout</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.workoutInput} onChangeText={(text) => setWorkout({...workout, name: text})} placeholder={'Workout name...'} />
        {exercises.length > 0 ? <FlatList data={exercises} style={styles.listComponent} renderItem={({item, index}) => <ToggleableExercise exercise={item} addExercise={addRemoveExToWorkout} />} keyExtractor={(item, index) => index.toString()}/> : <Text style={{color: '#fff', marginVertical: 12}}>No exercises available</Text>}
        <View style={styles.inputBtns}>
          <Pressable style={styles.saveBtn} onPress={() => validateWorkout()}><Text style={{fontSize: 18}}>Save</Text></Pressable>
          <Pressable style={styles.cancelBtn} onPress={() => toggleWindow()}><Text style={{fontSize: 18}}>Cancel</Text></Pressable>
        </View>
      </View>      
    </View>
  )
}
