// Test.tsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LightButton from './components/LightButton';
import DarkButton from './components/DarkButton';
import TextBox from './components/TextBox';
import PopularLocationsTile from './components/tiles/PopularLocationsTile';
import SearchedLocationsTile from './components/tiles/SearchedLocationsTile';
import BigTiles from './components/tiles/BigTiles';
import BigTilesWithLargeDescription from './components/tiles/BigTilesWithLargeDescription';
import ReviewsAndTestimonials from './components/ReviewsAndTestimonials';

const Test: React.FC = () => {
  const testimonials = [
    {
      userImage: require('./assets/images/sample.jpg'),
      userName: 'User Name',
      rating: 5,
      timeElapsed: '3 min ago',
      review: 'The generator does take into account which race is randomly picked, and changes some of the details accordingly. For example, if the character is an elf, they will have a higher chance of looking good and clean, they will, of course, have an elvish name, and tend to be related to more elvish related towns and people.',
      location: 'Location',
    },
    {
      userImage: require('./assets/images/sample.jpg'),
      userName: 'User Name',
      rating: 5,
      timeElapsed: '3 min ago',
      review: 'This is a review.',
      location: 'Location',
    },
    // Add more testimonials here...
  ];

  return (
    <ScrollView style={styles.container}>
      <LightButton onPress={() => {}} title="Light Button" />
      <DarkButton onPress={() => {}} title="Dark Button" />
      <TextBox onChangeText={(text) => {}} placeholder="Enter text" />
      <PopularLocationsTile
        image={require('./assets/images/sample.jpg')}
        title="Popular Location"
        likes={100}
        onLike={() => {}}
      />
      <BigTiles
        image={require('./assets/images/sample.jpg')}
        title="Big Tile"
        description="A large reptile with four legs, two arms, a long tail, a skin covered in thick, large scales in orange, red, blue and green, a wide mouth, 2 small eyes, an almost hidden nose and virtually invisible ears."
      />
      <SearchedLocationsTile
        title="Searched Location"
        category="Category"
        address="Address"
        reviews={100}
      />
      <BigTilesWithLargeDescription
        image={require('./assets/images/sample.jpg')}
        title="Big Tile with Large Description"
        description="Large Description"
      />
      <ReviewsAndTestimonials testimonials={testimonials} layout={1} />
      <ReviewsAndTestimonials testimonials={testimonials} layout={2} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Test;
