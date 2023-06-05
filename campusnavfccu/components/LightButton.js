// LightButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const LightButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 328,
    height: 48,
    backgroundColor: theme.colors.jordyBlue,
    borderRadius: 8,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Outfit-Regular',
    fontSize: theme.fontSizes.large,
    color: theme.colors.black,
    textAlign: 'center',
  },
});

export default LightButton;
