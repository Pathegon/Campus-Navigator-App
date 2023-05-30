import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Navigator</Text>
      <Text style={styles.subtitle}>
        Helping you navigate to FCCU with ease.{'\n'}
        A complete solution to getting lost!
      </Text>
      <TextInput style={styles.searchBox} placeholder="Search" />
      {/* Rest of the screen content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 230,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchBox: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default Screen2;
