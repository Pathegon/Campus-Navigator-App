// MainScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenWrapper from '../components/ScreenWrapper';
import TextBox from '../components/TextBox';
import BigTilesWithLargeDescription from '../components/tiles/BigTilesWithLargeDescription';
import BigTiles from '../components/tiles/BigTiles';
import PopularLocations from '../components/PopularLocations';
import ReviewsAndTestimonials from '../components/ReviewsAndTestimonials';

const MainScreen: React.FC = () => {
  const onSearchPress = () => {
    console.log('Search pressed');
  };

  return (
    <ScreenWrapper>
      <ScrollView>
        <Text style={styles.title}>Campus Navigator</Text>
        <Text style={styles.tagline}>Helping you easily navigate to FCCU. A complete solution to getting lost!</Text>
        <View style={styles.searchContainer}>
          <TextBox placeholder="Search for locations..." />
          <TouchableOpacity onPress={onSearchPress} style={styles.searchIcon}>
            <Icon name="search" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <BigTilesWithLargeDescription
          image={require('../assets/images/sample.jpg')}
          title="Big Tile with Large Description"
          description="Large Description"
        />
        <PopularLocations
          locations={[
            {
              image: require('../assets/images/sample.jpg'),
              title: 'Popular Location',
              likes: 100,
              onLike: () => {},
            },
            // Add more locations here...
            {
              image: require('../assets/images/sample.jpg'),
              title: 'Popular Location',
              likes: 100,
              onLike: () => {},
            },
            {
              image: require('../assets/images/sample.jpg'),
              title: 'Popular Location',
              likes: 100,
              onLike: () => {},
            },
            {
              image: require('../assets/images/sample.jpg'),
              title: 'Popular Location',
              likes: 100,
              onLike: () => {},
            },
          ]}
        />
        <BigTiles
          image={require('../assets/images/sample.jpg')}
          title="Big Tile"
          description="A large reptile with four legs, two arms, a long tail, a skin covered in thick, large scales in orange, red, blue and green, a wide mouth, 2 small eyes, an almost hidden nose and virtually invisible ears."
        />
        <BigTiles
          image={require('../assets/images/sample.jpg')}
          title="Big Tile"
          description="A large reptile with four legs, two arms, a long tail, a skin covered in thick, large scales in orange, red, blue and green, a wide mouth, 2 small eyes, an almost hidden nose and virtually invisible ears."
        />
        <ReviewsAndTestimonials
          testimonials={[
            {
              userImage: require('../assets/images/sample.jpg'),
              userName: 'User Name',
              rating: 5,
              timeElapsed: '3 min ago',
              review: 'This is a review.',
              location: 'Location',
            },
            // Add more testimonials here...
          ]}
          layout="horizontal"
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 8,
    padding: 10,
    color: '#000',
  },
  tagline: {
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 8,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
  },
});

export default MainScreen;
