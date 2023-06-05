// ProfileHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import DarkButton from './DarkButton';
import theme from '../theme';

const ProfileHeader = ({ profileImage, profileName, tagline }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.profileName}>{profileName}</Text>
        <Text style={styles.tagline}>{tagline}</Text>
        <DarkButton onPress={() => {}} title="Edit Profile" />
      </View>
      <Image source={profileImage} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    padding: 30,
    marginBottom: 10,
  },
  profileImage: {
    width: 130,
    height: 150,
    borderRadius: 20,
  },
  textContainer: {
    justifyContent: 'space-between',
    flex: 1,
    marginRight: 10,
  },
  profileName: {
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    color: theme.colors.black,
    marginBottom: 5,
  },
  tagline: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: theme.colors.black,
    marginBottom: 20,
  },
});

export default ProfileHeader;
