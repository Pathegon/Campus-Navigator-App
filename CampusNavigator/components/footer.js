import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // import the Ionicons set
import { colors } from '../styles'; // adjust the path if necessary

const { width, height } = Dimensions.get('window');

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Icon name="create-outline" size={30} color={colors.ivory} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="search-outline" size={30} color={colors.ivory} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="home-outline" size={30} color={colors.ivory} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="person-outline" size={30} color={colors.ivory} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="analytics-outline" size={30} color={colors.ivory} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.oxfordBlue,
    width: width,
    height: height * 0.085, // 63/740
  },
});
