import React, { useEffect, useState } from 'react';
import SQLite from 'react-native-sqlite-storage';
import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from 'react-native';
import theme from '../theme';
import CustomInput from '../components/TextBox.js';
import LightButton from '../components/LightButton.js';

let db;

const HomeScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const fontSize = Math.min(windowWidth / 10, windowHeight / 24) * 1.1;
  const subTextFontSize = fontSize * 0.46;
  const marginTop = windowHeight * 0.15;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    db = SQLite.openDatabase(
      {
        name: 'MainDB',
        location: 'default',
      },
      () => {},
      error => console.log(error),
    );

    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, password TEXT);',
        [],
        () => {},
        (_, error) => {
          console.log(error);
          return false;
        },
      );

      tx.executeSql(
        'SELECT * FROM Users',
        [],
        (_, { rows: { _array } }) => {
          // If the Users table is empty, add some initial users
          if (_array.length === 0) {
            tx.executeSql(
              'INSERT INTO Users (email, password) VALUES (?, ?)',
              ['user1@example.com', 'password1'],
            );
            tx.executeSql(
              'INSERT INTO Users (email, password) VALUES (?, ?)',
              ['user2@example.com', 'password2'],
            );
          }
        },
        (_, error) => {
          console.log(error);
          return false;
        },
      );
    });
  }, []);

  const handleLogin = () => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM Users WHERE email = ? AND password = ?`, // Use 'Users' instead of 'users'
        [email, password],
        (tx, results) => {
          if (results.rows.length > 0) {
            Alert.alert('Failure', 'Invalid email or password');
          } else {
            Alert.alert('Sucess', 'You Are Logged in');
          }
        },
        error => { console.log(error); }
      );
    });
  };
  
  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer, { marginTop }]}>
        <Text style={[styles.logoText, { fontSize, fontFamily: 'Outfit-Bold' }]}>
          <Text style={styles.fccuText}>FCCU</Text>
          <Text style={styles.navigatorText}> Navigator</Text>
        </Text>
        <Text style={[styles.subText, { fontSize: subTextFontSize }]}>
          your search,
          {'\n'}
          is our command.
        </Text>
        <View style={styles.inputWrapper}>
          {/* Email input */}
          <CustomInput
            placeholder="Enter Email"
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
          {/* Add spacing between inputs */}
          <View style={styles.inputSpacing} />
          {/* Password input */}
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.passwordInputText}
              placeholder="Enter Password"
              onChangeText={(password) => {
                setPassword(password);
              }}
              secureTextEntry
            />
          </View>
          {/* Add LightButton with margin */}
          <View style={styles.buttonMargin}>
            <LightButton title="Login" onPress={handleLogin} fontSize={18} />
          </View>
          {/* Not registered text */}
          <Text style={styles.createAccountText}>
            Not registered yet?{' '}
            <Text style={styles.boldText}>Create Account</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fccuText: {
    color: theme.colors.oxfordBlue,
  },
  navigatorText: {
    color: theme.colors.jordyBlue,
  },
  subText: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'left',
    color: 'black',
    marginTop: 2,
    marginLeft: 150,
    marginBottom: 28,
  },
  inputWrapper: {
    marginTop: 20,
  },
  inputSpacing: {
    height: 30,
  },
  passwordInput: {
    borderColor: theme.colors.grey,
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 10,
    marginTop: 10,
  },
  passwordInputText: {
    color: theme.colors.black,
    fontSize: theme.fontSizes.medium,
    fontFamily: 'Outfit-Regular',
    height: 48,
  },
  buttonMargin: {
    marginTop: 40,
  },
  createAccountText: {
    fontFamily: 'Outfit-Light',
    color: theme.colors.grey,
    marginTop: 40,
    textAlign: 'center',
  },
  boldText: {
    fontFamily: 'Outfit-Bold',
    color: 'black',
  },
});

export default HomeScreen;
