import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< Updated upstream
import ScreenWrapper from './components/ScreenWrapper';
import HomeScreen from './Screens/HomeScreen';
=======
import MainScreen from './Screens/MainScreen'; // Updated this line
>>>>>>> Stashed changes

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
<<<<<<< Updated upstream
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={(props) => (
            <ScreenWrapper>
              <HomeScreen {...props} />
            </ScreenWrapper>
          )}
=======
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen} // And this line
>>>>>>> Stashed changes
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
