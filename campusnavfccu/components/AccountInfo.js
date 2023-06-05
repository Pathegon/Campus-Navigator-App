// AccountInfo.js
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import theme from '../theme';

const AccountInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Account Info</Text>
        <Text style={styles.edit}>Edit</Text>
      </View>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.textInput} secureTextEntry />
      <Text style={styles.label}>Date of Birth</Text>
      <TextInput style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF0F7',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  edit: {
    fontFamily: 'Outfit-Regular',
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  label: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: theme.colors.black,
    marginTop: 10,
  },
  textInput: {
    height: 40, // Increase the height
    width: 300,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.black,
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    marginTop: 5,
    fontSize: 12, // Decrease the font size
  },
});

export default AccountInfo;
