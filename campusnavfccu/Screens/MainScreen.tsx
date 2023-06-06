import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Campus Navigator</Text>
      <Text style={styles.tagline}>Helping you easily navigate to FCCU. A complete solution to getting lost!</Text>
      <View style={styles.searchContainer}>
        <TextBox placeholder="Search for locations..." />
        <TouchableOpacity onPress={onSearchPress} style={styles.searchIcon}>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <BigTilesWithLargeDescription
        image={require('../assets/images/armacost.jpg')}
        title="Armacost Building"
        description="The Armacost Science Building houses the departments of natural and social sciences at FCC. 

        It offers state of the art labs & research facilities including a natural history museum."
      />
      <PopularLocations
        locations={[
          {
            image: require('../assets/images/nblock.jpg'),
            title: 'N Block',
            likes: 101,
            onLike: () => {},
          },
          {
            image: require('../assets/images/lucas.jpg'),
            title: 'Lucas Cafe',
            likes: 100,
            onLike: () => {},
          },
          {
            image: require('../assets/images/pool.jpg'),
            title: 'Swimming Pool',
            likes: 100,
            onLike: () => {},
          },
          {
            image: require('../assets/images/eblock.jpg'),
            title: 'E Block',
            likes: 100,
            onLike: () => {},
          },
          // Add more locations here...
        ]}
      />
      <BigTiles
        image={require('../assets/images/sinclair-hall.jpg')}
        title="Sinclair Hall"
        description="Sinclair Hall was inaugurated as the first auditorium on campus."
      />
      <BigTiles
        image={require('../assets/images/botanical.jpg')}
        title="Botanical Gardens"
        description="Botanic Gardens of Forman Christian College cover an area of seven acres and include wide diversity of native and exotic flora."
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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