import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenWrapper from './components/ScreenWrapper';
import SearchLocations from './Screens/SearchLocations';
import Details from './Screens/Details';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchLocations" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SearchLocations" component={SearchLocations} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Location Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
