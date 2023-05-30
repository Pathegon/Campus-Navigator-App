import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Navigator</Text>
      <Text style={styles.subtitle}>
        Helping you navigate to FCCU with ease.{'\n'}
        A complete solution to getting lost!
      </Text>
      <TextInput style={styles.searchBox} placeholder="Search" />

      <View style={styles.popularLocationContainer}>
        <Image source={require('./armacost_building.jpg')} style={styles.locationImage} />
        <Text style={styles.locationTitle}>Armacost Building</Text>
        <Text style={styles.locationDescription}>
          The Armacost Science Building houses the departments of natural and social sciences at FCC.
          It offers state of the art labs & research facilities including a natural history museum.
        </Text>
      </View>

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
  popularLocationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  locationImage: {
    width: 200,
    height: 150,
    marginBottom: 10,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  locationDescription: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
});

export default Screen2;
