// Test.tsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PopularLocations from './components/PopularLocations';

const Test: React.FC = () => {
  const locations = [
    {
      image: require('./assets/images/sample.jpg'),
      title: 'Location 1',
      likes: 100,
      onLike: () => {},
    },
    {
      image: require('./assets/images/sample.jpg'),
      title: 'Location 2',
      likes: 200,
      onLike: () => {},
    },
    // Add more locations here...
  ];

  return (
    <ScrollView style={styles.container}>
      <PopularLocations locations={locations} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Test;
