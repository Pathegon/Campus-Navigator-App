import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const PopularLocationsTile = ({ image, title, likes, onLike }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.likesContainer}>
        <Text style={styles.likes}>{likes} people liked this!</Text>
        <Icon name="heart" size={24} color={theme.colors.black} onPress={onLike} style={styles.likeIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 219,
    height: 198,
    borderRadius: 10,
    padding: 8,
    justifyContent: 'space-between',
    borderColor: theme.colors.grey,
    borderWidth: 1,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 207,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Outfit-Regular',
    fontSize: theme.fontSizes.large,
    fontWeight: '900',
    color: theme.colors.black,
    
    textAlign: 'left',
  },
  likesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likes: {
    fontFamily: 'Outfit-Regular',
    fontSize: theme.fontSizes.small,
    color: theme.colors.grey,
  },
  likeIcon: {
    alignSelf: 'flex-end',
  },
});

export default PopularLocationsTile;
