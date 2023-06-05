// ScreenWrapper.js
import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import FooterNavbar from './FooterNavbar';

const ScreenWrapper = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      {children}
      <FooterNavbar />
    </View>
  );
};

export default ScreenWrapper;
