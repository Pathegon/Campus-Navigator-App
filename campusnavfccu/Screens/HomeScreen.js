import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../theme'; // Assuming theme.js is located in the same directory as HomeScreen.js

const HomeScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const fontSize = Math.min(windowWidth / 10, windowHeight / 24) * 1.1; // Increased font size by 10%
  const subTextFontSize = fontSize * 0.48; // Adjusted subtext font size to 80% of the original font size
  const marginTop = windowHeight * 0.15; // Responsive margin top calculation

  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer, { marginTop }]}>
        <Text style={[styles.logoText, { fontSize, fontFamily: 'Outfit-Bold' }]}>
          <Text style={styles.fccuText}>FCCU</Text>
          <Text style={styles.navigatorText}> Navigator</Text>
        </Text>
        <Text style={[styles.subText, { fontSize: subTextFontSize }]}>
          your search,
          {'\n'}
          is our command.
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
  subText: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'left',
    color: 'black',
    marginTop: 2,
    marginLeft: 150,
  },
});

export default HomeScreen;
