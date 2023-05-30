import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Screen2 = () => {
  const locations = [
    // Add your locations data here
    // Each location should have image, name, and likeCount properties
    // Example:
    // { image: require('./images/location1.png'), name: 'Location 1', likeCount: 31 },
  ];

  const handleLike = (locationIndex) => {
    // Handle the like functionality for the specified location
    // You can update the like count or perform any other actions
  };

  return (
    <View style={styles.container}>
      {/* Previous screen content */}
      
      <View style={styles.popularLocationContainer}>
        <Text style={styles.popularLocationsTitle}>Popular Locations</Text>
        <Text style={styles.popularLocationsDescription}>These locations are loved by FCCU!</Text>

        <View style={styles.tilesContainer}>
          {locations.map((location, index) => (
            <TouchableOpacity
              key={index}
              style={styles.tile}
              onPress={() => handleLocationPress(index)}
            >
              <Image source={location.image} style={styles.tileImage} />
              <Text style={styles.tileName}>{location.name}</Text>
              <Text style={styles.tileLikeCount}>{location.likeCount} people liked this!</Text>
              <TouchableOpacity
                style={styles.tileHeart}
                onPress={() => handleLike(index)}
              >
                {/* Render the heart icon */}
                {/* Add your implementation here */}
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Rest of the screen content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  // Previous styles

  tilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  tile: {
    width: width * 0.61, // 219/360
    height: height * 0.168, // 198/1178
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  tileImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  tileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 5,
  },
  tileLikeCount: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 5,
  },
  tileHeart: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    backgroundColor: '#F9FBF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen2;
