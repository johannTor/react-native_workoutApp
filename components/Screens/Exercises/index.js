import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, Pressable } from 'react-native';
import ScreenTitle from '../../ScreenTitle';
import ExerciseInput from '../../ExerciseInput';
import ExerciseItem from '../../ExerciseItem';
import storage from '../../../util/storageMethods';
import styles from './styles';

export default function Exercises() {
  const title = 'Exercises';
  const EXERCISE_STORAGE = 'exercises';
  const [exercises, setExercises] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);

  // Reading the data from storage once component mounts
  useEffect(() => {
    // setExercises(readData());
    const getExercises = async () => {
      const data = await storage.readData(EXERCISE_STORAGE);
      if(data !== null) {
        setExercises(data);
      }
      // storage.removeValue(EXERCISE_STORAGE);
    };
    getExercises();
  }, []);

  const addExercise = (newEx) => {
    const arrCpy = exercises;
    arrCpy.push(newEx);
    setExercises(arrCpy);
    storage.storeData(exercises, EXERCISE_STORAGE);
    updateList();
  }

  const updateList = () => {
    setRefreshList(!refreshList);
  };

  const toggleExInput = () => {
    setInputVisible(!inputVisible);
  };

  const remExercise = (id) => {
    const found = exercises.findIndex((item) => item.id === id);
    if(found !== -1) {
      const cpy = [...exercises];
      cpy.splice(found, 1);
      setExercises(cpy);
      storage.storeData(cpy, EXERCISE_STORAGE);
    }
  };

  return (
    <View style={styles.container}>
      <ScreenTitle title={title} />
      <Pressable style={styles.addBtn} onPress={toggleExInput}><Text style={styles.addBtnText}>Add an exercise</Text></Pressable>
      {inputVisible ? <ExerciseInput saveExercise={addExercise} toggleInput={toggleExInput} exercises={exercises}/> : null}
      {/* <ExerciseInput saveExercise={addExercise} /> */}
      <Text style={styles.listTitle}>My Exercises</Text>
      {exercises.length > 0 ? <FlatList data={exercises} style={styles.listComponent} extraData={refreshList} renderItem={({item, index}) => <ExerciseItem item={item} remItem={remExercise}/>} keyExtractor={(item, index) => index.toString()}/> : <Text style={{color: '#fff'}}>No exercises saved</Text>}
    </View>
  )
}
