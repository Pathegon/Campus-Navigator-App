import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenWrapper from './components/ScreenWrapper';
import SearchLocations from './Screens/SearchLocations';
import Details from './Screens/Details';
import CreateEditScreen from './Screens/CreateEditScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchLocations" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="SearchLocations" component={SearchLocations} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Location Details' }} />
        <Stack.Screen name="CreateEdit" component={CreateEditScreen} options={{ title: 'Create/Edit Location' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
