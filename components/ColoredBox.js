import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ColoredBox({ color }) {
  return <View style={[styles.box, { backgroundColor: color }]} />;
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
});
