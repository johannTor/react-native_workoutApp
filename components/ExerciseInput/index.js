import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert, Keyboard } from 'react-native';
import getNextId from '../../util/general';
import styles from './styles';

export default function ExerciseInput({saveExercise, toggleInput, exercises}) {
  const [exName, setExName] = useState('');
  const [exRep, setExRep] = useState('');
  const [exSet, setExSet] = useState('');
  const [exRest, setExRest] = useState('');
  const [exOther, setExOther] = useState('');

  const validateExercise = () => {
    if(!exName) {
      Alert.alert('Missing info', 'Please insert a name', [{ text: 'OK', onPress: () => null }],{ cancelable: false });
      return;
    }
    if(exRep < 0 || exSet < 0 || exRest < 0) {
      Alert.alert('Invalid info', 'Exercise numbers must be positive', [{ text: 'OK', onPress: () => null }],{ cancelable: false });
      return;
    }
    if(!Number.isInteger(exRep) || !Number.isInteger(exSet) || !Number.isInteger(exRest)) {
      Alert.alert('Invalid info', 'Reps, sets & rest must be numbers', [{ text: 'OK', onPress: () => null }],{ cancelable: false });
      return;
    }
    const newExercise = {id: getNextId(exercises), name: exName, reps: exRep, sets: exSet, rest: exRest, other: exOther};
    setExName('');
    saveExercise(newExercise);
    setExRep(0);
    setExSet(0);
    setExRest(0);
    setExOther('');
    Keyboard.dismiss();
    toggleInput();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>New Exercise</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.exInput} placeholder={'Exercise name...*'} value={exName} onChangeText={(text) => setExName(text)}/>
        <TextInput keyboardType={'numeric'} style={styles.exInput} placeholder={'No. of reps...'} value={String(exRep)} onChangeText={(text) => setExRep(Number(text))}/>
        <TextInput keyboardType={'numeric'} style={styles.exInput} placeholder={'No. of sets...'} value={String(exSet)} onChangeText={(text) => setExSet(Number(text))}/>
        <TextInput keyboardType={'numeric'} style={styles.exInput} placeholder={'Rest between sets...'} value={String(exRest)} onChangeText={(text) => setExRest(Number(text))}/>
        <TextInput style={styles.exInput} placeholder={'Other...'} value={exOther} onChangeText={(text) => setExOther(text)}/>
        <View style={styles.inputBtns}>
          <Pressable style={styles.exSave} onPress={() => validateExercise()}><Text style={{fontSize: 18}}>Save</Text></Pressable>
          <Pressable style={styles.exCancel} onPress={() => toggleInput()}><Text style={{fontSize: 18}}>Cancel</Text></Pressable>
        </View>
      </View>      
    </View>
  )
}
