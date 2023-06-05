import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import ReviewsAndTestimonials from '../components/ReviewsAndTestimonials';

const Details = ({ route }) => {
  const { location } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{location.title}</Text>
            <Text style={styles.category}>{location.category}</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{location.address}</Text>
          </View>
          <View style={styles.reviewsContainer}>
            <Text style={styles.reviews}>{location.reviews} Reviews</Text>
          </View>
        </View>
        <Image source={require('../assets/images/compass.png')} style={styles.image} />
      </View>

      <Text style={styles.heading}>Location Details</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Location Name:</Text>
          <Text style={styles.value}>{location.title}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Primary Purpose:</Text>
          <Text style={styles.value}>Purpose Value</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Reviews:</Text>
          <Text style={styles.value}>{location.reviews}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Average Pricing:</Text>
          <Text style={styles.value}>Pricing Value</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Air Conditioned:</Text>
          <Text style={styles.value}>Yes</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Disability Friendly:</Text>
          <Text style={styles.value}>Yes</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Building Number:</Text>
          <Text style={styles.value}>Building Number Value</Text>
        </View>
      </View>

      <ReviewsAndTestimonials testimonials={[]} layout={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 5,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    color: theme.colors.black,
  },
  category: {
    fontFamily: 'Outfit-Thin',
    fontSize: 16,
    color: theme.colors.grey,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  address: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: theme.colors.black,
  },
  reviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviews: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: theme.colors.black,
    marginLeft: 5,
  },
  image: {
    width: '20%',
    aspectRatio: 1,
    marginLeft: 15,
  },
  heading: {
    fontFamily: 'Outfit-Bold',
    fontSize: 18,
    color: theme.colors.black,
    marginBottom: 10,
  },
  detailsContainer: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  label: {
    fontFamily: 'Outfit-Bold',
    fontSize: 16,
    color: theme.colors.black,
  },
  value: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: theme.colors.black,
  },
});

export default Details;
