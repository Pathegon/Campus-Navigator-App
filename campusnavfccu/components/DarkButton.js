import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const DarkButton = ({ onPress, title, width = 108, height = 40 }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { width, height }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.oxfordBlue,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.small,
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
});

export default DarkButton;
