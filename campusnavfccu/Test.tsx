// Test.tsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LightButton from './components/LightButton';
import DarkButton from './components/DarkButton';
import TextBox from './components/TextBox';
import PopularLocations from './components/PopularLocations';
import SearchedLocations from './components/SearchedLocations';
import AccountInfo from './components/AccountInfo';

const Test: React.FC = () => {
  const popularLocations = [
    {
      image: require('./assets/images/sample.jpg'),
      title: 'Popular Location 1',
      likes: 100,
    },
    {
      image: require('./assets/images/sample.jpg'),
      title: 'Popular Location 2',
      likes: 200,
    },
    // Add more popular locations here...
  ];

  const searchedLocations = [
    {
      image: require('./assets/images/sample.jpg'),
      title: 'Searched Location 1',
      category: 'Category 1',
      address: 'Address 1',
      reviews: 100,
    },
    {
      image: require('./assets/images/sample.jpg'),
      title: 'Searched Location 2',
      category: 'Category 2',
      address: 'Address 2',
      reviews: 200,
    },
    // Add more searched locations here...
  ];

  return (
    <ScrollView style={styles.container}>
      <LightButton onPress={() => {}} title="Light Button" />
      <DarkButton onPress={() => {}} title="Dark Button" />
      <TextBox onChangeText={(text) => {}} placeholder="Enter text" />
      <AccountInfo />
      <PopularLocations locations={popularLocations} />
      <SearchedLocations locations={searchedLocations} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Test;
