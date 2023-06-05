// Header.js
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/compass.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 62,
    backgroundColor: '#AFCBFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 60,
    height: 60,
  },
});

export default Header;
