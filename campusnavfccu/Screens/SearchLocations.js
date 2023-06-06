import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchedLocationsTile from '../components/tiles/SearchedLocationsTile';
import theme from '../theme';

const locationsData = [
  { title: 'Armacost Building', category: 'Study Centers', address: 'Address 1', reviews: 20 },
  { title: 'Ewing Memorial Library', category: 'Knowledge Hub', address: 'Address 2', reviews: 50 },
  { title: 'London Bridge', category: 'A Smokers Paradise' , address: 'Address 3', reviews: 35 },
  { title: 'Lucas Cafe', category: 'Food', address: 'Address 4', reviews: 35 },
  { title: 'Secret Hideout Spot', category: 'Shhh', address: 'Address 5', reviews: 35 },
  // Add more dummy data as needed
];

const SearchLocations = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [displayedLocations, setDisplayedLocations] = useState(locationsData);

  const handleSearch = (text) => {
    setSearchText(text);

    if (text === '') {
      setDisplayedLocations(locationsData);
      return;
    }

    const filteredLocations = locationsData.filter((location) =>
      location.title.toLowerCase().includes(text.toLowerCase())
    );

    setDisplayedLocations(filteredLocations);
  };

  const handleLocationPress = (location) => {
    console.log('Button Pressed:', location);
    navigation.navigate('Details', { location });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          onChangeText={handleSearch}
          value={searchText}
          placeholder="Search for locations..."
        />
        <Icon name="search" size={20} style={styles.searchIcon} />
      </View>
      <Text style={styles.foundText}>{displayedLocations.length} Locations Found</Text>
      <FlatList
        data={displayedLocations}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleLocationPress(item)}>
            <SearchedLocationsTile
              title={item.title}
              category={item.category}
              address={item.address}
              reviews={item.reviews}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: theme.fontSizes.medium,
    fontFamily: 'Outfit-Regular',
  },
  searchIcon: {
    alignSelf: 'center',
    marginRight: 10,
  },
  foundText: {
    fontSize: theme.fontSizes.medium,
    marginBottom: 15,
    fontFamily: 'Outfit-Bold',
    color: 'black',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 15,
  },
});

export default SearchLocations;
