import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function LogItem({item, removeItem}) {
  const dateObj = new Date(item.date)
  const dateStr = `${dateObj.getMonth()+1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
  return (
    <View style={styles.container}>
      <Text style={styles.listText}>{item.workout.name}: {dateStr}</Text>
      <Pressable onPress={() => removeItem(item.id)}>
        <Text style={styles.remBtn}>X</Text>
      </Pressable>
    </View>
  )
}
