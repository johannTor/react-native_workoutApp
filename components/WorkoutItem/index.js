import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function WorkoutItem({item, removeItem}) {
  return (
    <View style={styles.container}>
      <Text style={styles.listText}>{item.name}</Text>
      <Pressable onPress={() => removeItem(item.id)}>
        <Text style={styles.remBtn}>X</Text>
      </Pressable>
    </View>
  )
}
