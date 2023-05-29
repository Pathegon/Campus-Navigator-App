import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../styles'; // adjust the path if necessary

const { width, height } = Dimensions.get('window');

export function DarkButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.darkButton} onPress={onPress}>
      <Text style={styles.darkButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function LightButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.lightButton} onPress={onPress}>
      <Text style={styles.lightButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  darkButton: {
    backgroundColor: colors.oxfordBlue,
    borderRadius: 8,
    width: width * 0.416, // 150/360
    height: height * 0.0389, // 44/1130
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkButtonText: {
    color: colors.ivory,
    fontFamily: 'Outfit-Bold',
    fontSize: 14,
  },
  lightButton: {
    backgroundColor: colors.jordyBlue,
    borderRadius: 8,
    width: width * 0.934, // 328/352
    height: height * 0.0648, // 48/740
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightButtonText: {
    color: colors.oxfordBlue,
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
  },
});
