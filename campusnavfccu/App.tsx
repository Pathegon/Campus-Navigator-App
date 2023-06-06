import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './Screens/HomeScreen';
import MainScreen from './Screens/MainScreen';
import CreateEditScreen from './Screens/CreateEditScreen';
import SearchLocations from './Screens/SearchLocations';
import Details from './Screens/Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      tabBarOptions={{
        activeTintColor: '#0E1C36',
        inactiveTintColor: '#8F9BB3',
        style: {
          backgroundColor: '#EDF0F7',
        },
      }}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchLocations"
        component={SearchLocations}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateEdit"
        component={CreateEditScreen}
        options={{
          tabBarLabel: 'Create/Edit',
          tabBarIcon: ({ color, size }) => (
            <Icon name="edit" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator initialRouteName="MainTab" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTab" component={MainTab} />
          <Stack.Screen name="Details" component={Details} options={{ title: 'Location Details' }} />
        </Stack.Navigator>
      ) : (
        <HomeScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
};

export default App;
