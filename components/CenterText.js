import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CenterText({ text }) {
  return <Text style={styles.centerText}>{text}</Text>;
}

const styles = StyleSheet.create({
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
