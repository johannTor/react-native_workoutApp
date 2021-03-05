import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function index({exercise, addExercise}) {
  const [isChosen, setIsChosen] = useState(false);

  const handleClick = () => {
    setIsChosen(!isChosen);
    addExercise(exercise);
  };

  return (
    <>
      <Pressable style={[styles.exItem, isChosen ? {backgroundColor: 'rgba(43,166,234,0.7)'} : null]} onPress={() => handleClick()}><Text style={styles.itemName}>{exercise.name}</Text><Text style={styles.itemInfo}>Reps: {exercise.reps} Sets: {exercise.sets} Rest: {exercise.rest}</Text></Pressable>
    </>
  )
}
