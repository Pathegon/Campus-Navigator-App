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
import ProfileHeader from './components/ProfileHeader';

const Test: React.FC = () => {
  const testimonials = [
    // ...testimonials data...
  ];

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader
        profileImage={require('./assets/images/sample.jpg')}
        profileName="User Name"
        tagline="This is a tagline."
      />
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
      <ReviewsAndTestimonials testimonials={testimonials} layout="horizontal" />
      <ReviewsAndTestimonials testimonials={testimonials} layout="vertical" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Test;
