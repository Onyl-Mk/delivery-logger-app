import './src/i18n'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; // Adjust the import path as necessary
import { DeliveriesProvider } from './src/services/DeliveriesContext'; // Import your context provider

export default function App() {
  return (
    <DeliveriesProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </DeliveriesProvider>
  );
}