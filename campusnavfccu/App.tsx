// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from './Test';
import ScreenWrapper from './components/ScreenWrapper';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen
          name="Test"
          component={(props) => (
            <ScreenWrapper>
              <Test {...props} />
            </ScreenWrapper>
          )}
          options={{ headerShown: false }}
        />
        {/* Add more screens here... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
