import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchedLocationsTile = ({ title, category, address, reviews, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <View style={styles.addressContainer}>
          <Icon name="map-marker" size={20} color={theme.colors.black} />
          <Text style={styles.address}>{address}</Text>
        </View>
        <View style={styles.reviewsContainer}>
          <Icon name="star" size={20} color={theme.colors.black} />
          <Text style={styles.reviews}>{reviews} Reviews</Text>
        </View>
      </View>
      <View style={styles.findButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.findButton}>
          <Text style={styles.findButtonText}>Find</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 160,
    borderColor: theme.colors.grey,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
    marginBottom: 40,
  },
  infoContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 19,
    color: theme.colors.black,
  },
  category: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: theme.colors.grey,
    paddingBottom: 32,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  address: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: theme.colors.black,
    marginLeft: 10,
  },
  reviewsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  reviews: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: theme.colors.black,
    marginLeft: 10,
  },
  findButtonContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  findButton: {
    width: 90,
    height: 30,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  findButtonText: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: theme.colors.white,
  },
});

export default SearchedLocationsTile;
