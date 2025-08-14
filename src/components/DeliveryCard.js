import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MainStyles } from '../styles/styles';

export default function DeliveryCard({ delivery }) {
  const navigation = useNavigation();

  
  const handlePress = () => {
    navigation.navigate('DeliveryDetails', { deliveryId: delivery.id });
  };

 
  if (!delivery) {
    return null; 
  }

  return (
    
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      
      <View>
        <Text style={styles.trackingNumber}>{delivery.trackingNumber || 'No Tracking #'}</Text>
        <Text style={styles.recipient}>Recipient: {delivery.recipient || 'N/A'}</Text>
      </View>
      <Text style={styles.status}>{delivery.status || 'Pending'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackingNumber: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recipient: {
    color: '#cbd5e1',
    fontSize: 14,
    marginTop: 5,
  },
  status: {
    color: '#facc15', // Default color for 'Pending'
    fontSize: 14,
    fontWeight: 'bold',
  },
});
