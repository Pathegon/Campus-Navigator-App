// SearchedLocationsTile.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../theme';
import LightButton from '../LightButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchedLocationsTile = ({ title, category, address, reviews }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.addressContainer}>
          <Icon name="map-marker" size={20} color={theme.colors.black} />
          <Text style={styles.address}>{address}</Text>
        </View>
        <View style={styles.reviewsContainer}>
          <Icon name="star" size={20} color={theme.colors.black} />
          <Text style={styles.reviews}>{reviews} Reviews</Text>
        </View>
        <LightButton title="Find" onPress={() => {}} style={styles.findButton} />
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 160,
    borderColor: theme.colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Outfit-Regular',
    fontSize: 22, // Increase this
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  category: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16, // Decrease this
    color: theme.colors.grey,
    paddingBottom: 32,
  },
  address: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    color: theme.colors.black,
    marginLeft: 5, // Adjust this
  },
  reviews: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    color: theme.colors.black,
    marginTop: 0, // Adjust this
  },
  findButton: {
    width: 74,
    position: 'absolute', // Add this
    right: 10, // Adjust this
    bottom: 10, // Adjust this
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  reviewsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5, // Adjust this
  },
});

export default SearchedLocationsTile;
