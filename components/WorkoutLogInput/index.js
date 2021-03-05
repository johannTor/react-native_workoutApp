import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, FlatList, Alert, Platform } from 'react-native';
import PressableWorkout from '../PressableWorkout';
import storage from '../../util/storageMethods';
import DateTimePicker from '@react-native-community/datetimepicker';
import getNextId from '../../util/general';
import styles from './styles';

// Input component for selecting a workout and choosing a date it was performed
export default function WorkoutLogInput({toggleWindow, saveLog, loggedWorkouts}) {
  const [workout, setWorkout] = useState({name: ''});
  const [workouts, setWorkouts] = useState([]);
  const [date, setDate] = useState(new Date(Date.now()));
  const [showDate, setShowDate] = useState(false);

  useEffect(() => {
    // Getting the available workouts
    const getWorkouts = async () => {
      const data = await storage.readData('workouts');
      if(data !== null) {
        setWorkouts(data);
      }
    };
    getWorkouts();
  }, []);

  const validateLogWorkout = () => {
    if(workout.name === '' || workout === undefined) {
      Alert.alert('Missing info', 'Select a workout you finished', [{ text: 'OK', onPress: () => null }],{ cancelable: false });
      return;
    }
    // Give the logs an incremental ids, (assumes the first element in the arry is the newest one)
    const logId = loggedWorkouts.length <= 0 ? 1 : getNextId(loggedWorkouts);
    const loggedWorkout = {id: logId, workout: workout, date: date};
    saveLog(loggedWorkout);
    setWorkout({name: ''});
    setDate(new Date(Date.now()));
    toggleWindow();
  };

  const changeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showCalendar = () => {
    setShowDate(true);
  };

  const selectWorkout = (chosenWorkout) => {
    setWorkout(chosenWorkout);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>What workout did you finish?</Text>
      <View style={styles.inputContainer}>
        {workouts.length > 0 ? <FlatList data={workouts} style={styles.listComponent} renderItem={({item, index}) => <PressableWorkout selected={workout} workout={item} changeSelected={selectWorkout} />} keyExtractor={(item, index) => index.toString()}/> : <Text style={{color: '#fff'}}>No workouts have been created</Text>}
        <Pressable style={styles.dateBtn} onPress={showCalendar}><Text style={{fontSize: 20, color: '#fff'}}>Change Date</Text></Pressable>
        <Text style={styles.chosenDate}>Workout date: {`${date.getMonth() +1}/${date.getDate()}/${date.getFullYear()}`}</Text>
        {showDate && <DateTimePicker value={date} mode={'date'} display={'spinner'} onChange={changeDate}/>}
        <View style={styles.inputBtns}>
          <Pressable style={styles.saveBtn} onPress={() => validateLogWorkout()}><Text style={{fontSize: 18}}>Save</Text></Pressable>
          <Pressable style={styles.cancelBtn} onPress={() => toggleWindow()}><Text style={{fontSize: 18}}>Cancel</Text></Pressable>
        </View>
      </View>
    </View>
  )
}
