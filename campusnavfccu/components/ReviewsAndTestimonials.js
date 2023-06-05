// ReviewsAndTestimonials.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import theme from '../theme';
import Testimonial from './Testimonial';

const ReviewsAndTestimonials = ({ testimonials, layout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reviews & Testimonials</Text>
      <Text style={styles.subtitle}>Feedback on some particular spots</Text>
      <ScrollView
        horizontal={layout === 1}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} layout={layout} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF0F7',
    padding: 10,
  },
  title: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.black,
    lineHeight: 18,
  },
  subtitle: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: theme.colors.black,
    lineHeight: 18,
  },
  scrollView: {
    marginTop: 10,
  },
});

export default ReviewsAndTestimonials;
