import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Campus Navigator</Text>
        <Text style={styles.headerSubtitle}>Helping you navigate to FCCU with ease.</Text>
        <Text style={styles.headerSubtitle}>A complete solution to getting lost!</Text>
      </View>

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
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 230,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'center',
  },
  popularLocationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  popularLocationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  popularLocationsDescription: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#000000',
    marginBottom: 10,
  },
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
    backgroundColor: '#EDF0F7',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  tileImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  tileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  tileLikeCount: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'center',
    marginTop: 5,
  },
  tileHeart: {
    // Add your heart icon styles here
    // You can use an icon library or custom implementation
  },
});

export default Screen2;
