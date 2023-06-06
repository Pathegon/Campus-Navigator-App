// CreateEditScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import TextBox from '../components/TextBox';
import LightButton from '../components/LightButton';

const CreateEditScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Create/Edit</Text>
            <Text style={styles.tagline}>Create or edit a location!</Text>
          </View>
          <Image source={require('../assets/images/sample.jpg')} style={styles.image} />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Location Name*</Text>
          <TextBox placeholder="Enter location name" />
          <Text style={styles.label}>Primary Purpose*</Text>
          <TextBox placeholder="Enter primary purpose" />
          <Text style={styles.label}>Reviews*</Text>
          <TextBox placeholder="Enter reviews" />
          <Text style={styles.label}>Average Pricing*</Text>
          <TextBox placeholder="Enter average pricing" />
          <Text style={styles.label}>Air Conditioned*</Text>
          <TextBox placeholder="Enter air conditioned status" />
          <Text style={styles.label}>Disability Friendly*</Text>
          <TextBox placeholder="Enter disability friendly status" />
          <Text style={styles.label}>Building Number*</Text>
          <TextBox placeholder="Enter building number" />
        </View>
      </ScrollView>
      <LightButton title="Create / Edit" onPress={() => {}} style={styles.button} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  tagline: {
    fontSize: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
});

export default CreateEditScreen;
