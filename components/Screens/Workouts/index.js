import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
import ScreenTitle from '../../ScreenTitle';
import WorkoutInput from '../../WorkoutInput';
import WorkoutItem from '../../WorkoutItem';
import storage from '../../../util/storageMethods';
import styles from './styles';

/*
{
  id: number,
  name: string, required
  exercises: exercise array, required
}
*/

export default function Workouts() {
  const title = 'My Workouts';
  const WORKOUT_STORAGE = 'workouts';
  const [workouts, setWorkouts] = useState([]);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const getWorkouts = async () => {
      const data = await storage.readData(WORKOUT_STORAGE);
      if(data !== null) {
        setWorkouts(data);
      }
    }
    getWorkouts();
  }, []);

  const toggleAddWindow = () => {
    setShowInput(!showInput);
  };

  const addWorkout = (workout) => {
    const workoutsCpy = workouts;
    workoutsCpy.push(workout);
    storage.storeData(workoutsCpy, WORKOUT_STORAGE);
    setWorkouts(workoutsCpy);
    // console.warn('saved: ', workout);
  };

  const removeWorkout = (id) => {
    const found = workouts.findIndex((item) => item.id === id);
    if(found !== -1) {
      const cpyArr = [...workouts];
      cpyArr.splice(found, 1);
      setWorkouts(cpyArr);
      storage.storeData(cpyArr, WORKOUT_STORAGE);
    }
  };

  return (
    <View style={styles.container}>
      <ScreenTitle title={title} />
      <Pressable style={styles.addBtn} onPress={() => toggleAddWindow()}><Text style={styles.addBtnText}>Add workout</Text></Pressable>
      {showInput ? <WorkoutInput toggleWindow={toggleAddWindow} saveWorkout={addWorkout} workouts={workouts}/> : null}
      {workouts.length > 0 ? <FlatList data={workouts} style={styles.listComponent} renderItem={({item, index}) => <WorkoutItem item={item} removeItem={removeWorkout} />} keyExtractor={(item, index) => index.toString()} /> : <Text style={{color: '#fff'}}>No workouts saved</Text>}
    </View>
  )
}
