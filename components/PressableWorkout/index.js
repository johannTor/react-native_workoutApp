import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function index({selected, workout, changeSelected}) {

  const handleClick = () => {
    changeSelected(workout);
  };

  return (
    <>
      <Pressable style={[styles.exItem, selected.name === workout.name ? {backgroundColor: 'rgba(43,166,234,0.7)'} : null]} onPress={() => handleClick()}><Text style={styles.itemName}>{workout.name}</Text></Pressable>
    </>
  )
}
