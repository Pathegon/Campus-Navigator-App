import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const TextBox = ({ placeholder, onChangeText, width = 328, height = 48 }) => {
  const [text, setText] = useState('');

  const handleChangeText = (inputText) => {
    setText(inputText);
    onChangeText(inputText);
  };

  return (
    <TextInput
      style={[styles.input, { width, height }]}
      onChangeText={handleChangeText}
      value={text}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.grey}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.grey,
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 10,
    color: theme.colors.black,
    fontSize: theme.fontSizes.medium,
    fontFamily: 'Outfit-Regular',
  },
});

export default TextBox;
