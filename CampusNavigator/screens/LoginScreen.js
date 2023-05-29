import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { LightButton } from '../components/AppButton'; // adjust the path if necessary
import { colors } from '../styles'; // adjust the path if necessary

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    // handle login
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>FCCU <Text style={styles.titleHighlight}>Navigator</Text></Text>
        <Text style={styles.subtitle}>your search,</Text>
        <Text style={styles.subtitle}>is our command.</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
        secureTextEntry
      />
      <LightButton title="Login" onPress={handleLogin} />
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Not registered yet?</Text>
        <TouchableOpacity>
          <Text style={styles.registerLink}> Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ivory,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: width * 0.9, // 317/352
    height: height * 0.123, // 91/740
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 38,
    fontFamily: 'Outfit-Bold',
    color: colors.oxfordBlue,
  },
  titleHighlight: {
    color: colors.jordyBlue,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Outfit-Regular',
    color: colors.oxfordBlue,
  },
  input: {
    width: width * 0.934, // 328/352
    height: height * 0.0648, // 48/740
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 15,
    color: colors.oxfordBlue,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  registerText: {
    fontSize: 13,
    color: 'grey',
  },
  registerLink: {
    fontSize: 13,
    color: colors.oxfordBlue,
  },
});
