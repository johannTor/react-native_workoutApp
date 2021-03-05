import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function ExerciseItem({item, remItem}) {
  return (
    <View style={styles.container}>
      <Text style={styles.listText}>{item.name}</Text>
      <Pressable onPress={() => remItem(item.id)}><Text style={styles.remBtn}>X</Text></Pressable>
    </View>
  )
}
