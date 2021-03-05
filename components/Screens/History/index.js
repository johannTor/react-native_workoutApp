import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import ScreenTitle from '../../ScreenTitle';
import WorkoutLogInput from '../../WorkoutLogInput';
import LogItem from '../../LogItem';
import storage from '../../../util/storageMethods';
import styles from './styles';

export default function Home() {
  const title = 'Workout History';
  const LOG_STORAGE = 'loggedWorkouts';
  const [loggedWorkouts, setLoggedWorkouts] = useState([]);
  const [showInput, setShowInput] = useState(false);
  
  useEffect(() => {
    const getLogs = async () => {
      const data = await storage.readData(LOG_STORAGE);
      if(data !== null) {
        setLoggedWorkouts(data);
      }
      // await storage.removeValue('loggedWorkouts');
    };
    getLogs();
  }, []);

  const toggleAddWindow = () => {
    setShowInput(!showInput);
  };

  const logWorkout = (log) => {
    const logCpy = [...loggedWorkouts];
    logCpy.push(log);
    storage.storeData(logCpy, LOG_STORAGE);
    setLoggedWorkouts(logCpy);
    // console.warn('Saved log');
  };

  // Remove logged workout with the id given
  const removeLog = (id) => {
    const found = loggedWorkouts.findIndex((item) => item.id === id);
    if(found !== -1) {
      // Possibly a shallow copy? 
      const cpyArr = loggedWorkouts.map(x => x);
      cpyArr.splice(found, 1);
      setLoggedWorkouts(cpyArr);
      storage.storeData(cpyArr, LOG_STORAGE);
    }
  };

  // Render date as well
  return (
    <View style={styles.container}>
      <ScreenTitle title={title} />
      <Pressable style={styles.addBtn} onPress={() => toggleAddWindow()}><Text style={styles.addBtnText}>Log a workout</Text></Pressable>
      {showInput ? <WorkoutLogInput toggleWindow={toggleAddWindow} saveLog={logWorkout} loggedWorkouts={loggedWorkouts}/> : null}
      {loggedWorkouts.length > 0 ? <FlatList data={loggedWorkouts.sort((a, b) => new Date(b.date) - new Date(a.date))} style={styles.listComponent} renderItem={({item, index}) => <LogItem item={item} removeItem={removeLog} />} keyExtractor={(item, index) => index.toString()} /> :<Text style={{color: '#fff'}}>No workouts have been logged</Text>}
    </View>
  )
}
