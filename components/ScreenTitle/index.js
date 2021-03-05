import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

export default function ScreenTitle(props) {
  return (
    <>
      <Text style={styles.screenTitle}>{props.title}</Text>
    </>
  )
}
