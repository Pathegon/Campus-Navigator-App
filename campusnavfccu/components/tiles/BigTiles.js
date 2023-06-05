// BigTiles.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../../theme';
import LightButton from '../LightButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const BigTiles = ({ title, image, description }) => {
  // Function to truncate description
  const truncateDescription = (desc, length) => {
    return desc && desc.length > length ? desc.substr(0, length - 1) + '...' : desc;
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{truncateDescription(description, 100)}</Text>
      <Icon name="heart-o" size={20} color={theme.colors.black} style={styles.likeButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 20, // Add this to create space between components
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Outfit-Regular',
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.black,
    marginTop: 10,
  },
  description: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: theme.colors.black,
    marginTop: 5,
  },
  likeButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});

export default BigTiles;
