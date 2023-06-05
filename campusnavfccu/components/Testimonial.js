// Testimonial.js
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import theme from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;

const Testimonial = ({ userImage, userName, rating, timeElapsed = '', review, location, layout }) => {
  return (
    <View style={[styles.container, layout === 2 && { backgroundColor: '#EDF0F7' }]}>
      <Image source={userImage} style={styles.userImage} />
      <View style={styles.reviewContainer}>
        <View style={styles.header}>
          <Text style={styles.userName}>{userName}</Text>
          <Icon name="star" size={15} color={theme.colors.black} />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        {location && layout === 1 && <Text style={styles.location}>{location}</Text>}
        {timeElapsed && <Text style={styles.timeElapsed}>{timeElapsed}</Text>}
        <Text style={styles.review}>{review}</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    width: screenWidth - 20, // Subtracting the padding
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  reviewContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
    color: theme.colors.black,
    marginRight: 5,
    lineHeight: 20,
  },
  rating: {
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
    color: theme.colors.black,
    marginLeft: 5,
    lineHeight: 20,
  },
  timeElapsed: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: theme.colors.grey,
    lineHeight: 18,
    paddingTop: 5,
    paddingBottom: 8,
  },
  review: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: theme.colors.black,
    lineHeight: 22,
  },
  location: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: theme.colors.black,
    lineHeight: 18,
    paddingBottom: 8,
    fontWeight: 800,
  },
});

export default Testimonial;
