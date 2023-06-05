import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import theme from '../theme'; // Assuming theme.js is located in the same directory as HomeScreen.js
import CustomInput from '../components/TextBox.js'; // Assuming the renamed TextBox component is imported as CustomInput
import LightButton from '../components/LightButton.js'; // Assuming the LightButton component file is located in the '../components' directory

// Open the database connection
const db = SQLite.openDatabase({ name: 'login.db' });

const HomeScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const fontSize = Math.min(windowWidth / 10, windowHeight / 24) * 1.1; // Increased font size by 10%
  const subTextFontSize = fontSize * 0.46; // Adjusted subtext font size to 46% of the original font size
  const marginTop = windowHeight * 0.15; // Responsive margin top calculation

  useEffect(() => {
    // Check if the database connection is successful
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT 1 FROM users LIMIT 1',
        [],
        () => {
          console.log('Database connected successfully!');
        },
        (_, error) => {
          console.log('Database connection failed:', error);
        }
      );
    });
  }, []);

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
              console.log('Entered Email:', email);
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
                console.log('Entered Password:', password);
              }}
              secureTextEntry // Display input as stars
            />
          </View>
          {/* Add LightButton with margin */}
          <View style={styles.buttonMargin}>
            <LightButton
              title="Login"
              onPress={() => {
                const username = 'testuser'; // Replace with the actual input value
                const password = 'testpassword'; // Replace with the actual input value
                // Perform the actions you want to take on login
              }}
              fontSize={18}
            />
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
    color: theme.colors.oxfordBlue, // Color for "FCCU"
  },
  navigatorText: {
    color: theme.colors.jordyBlue, // Color for "Navigator"
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
    marginTop: 20, // Add margin between inputs
  },
  inputSpacing: {
    height: 30, // Adjust the height as per the desired spacing
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
    marginTop: 40, // Add margin to the LightButton
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
