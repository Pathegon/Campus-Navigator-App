// PopularLocations.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import theme from '../theme';
import PopularLocationsTile from './tiles/PopularLocationsTile';

const screenWidth = Dimensions.get('window').width;

const PopularLocations = ({ locations }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Locations</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {locations.map((location, index) => (
          <View key={index} style={styles.tileContainer}>
            <PopularLocationsTile {...location} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF0F7',
    padding: 10,
  },
  title: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  scrollView: {
    marginTop: 10,
  },
  tileContainer: {
    marginRight: screenWidth * 0.05, // 5% of the screen width
  },
});

export default PopularLocations;
