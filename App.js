import './src/i18n'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; 
import { DeliveriesProvider } from './src/services/DeliveriesContext'; 

export default function App() {
  return (
    <DeliveriesProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </DeliveriesProvider>
  );
}