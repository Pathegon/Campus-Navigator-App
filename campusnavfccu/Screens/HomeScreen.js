import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../theme'; // Assuming theme.js is located in the same directory as HomeScreen.js

const HomeScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const fontSize = Math.min(windowWidth / 10, windowHeight / 24); // Updated font size calculation
  const marginTop = windowHeight * 0.15; // Responsive margin top calculation

  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer, { marginTop }]}>
        <Text style={[styles.logoText, { fontSize, fontFamily: 'Outfit-ExtraBold' }]}>
          <Text style={styles.fccuText}>FCCU</Text>
          <Text style={styles.navigatorText}> Navigator</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fccuText: {
    color: theme.colors.oxfordBlue, // Color for "FCCU"
  },
  navigatorText: {
    color: theme.colors.jordyBlue, // Color for "Navigator"
  },
});

export default HomeScreen;
