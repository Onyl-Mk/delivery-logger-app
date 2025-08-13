import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useDeliveries } from '../services/DeliveriesContext';
import { MainStyles } from '../styles/styles';
import { useTranslation } from 'react-i18next';


function DeliveryDetailsScreen({ route, navigation }) {
    const { deliveryId } = route.params;
    const { deliveries, updateDeliveryStatus, deleteDelivery } = useDeliveries()
    const { t } = useTranslation();

    const delivery = deliveries.find(d => d.id === deliveryId)

    if(!delivery) {
        return(
            <View style={styles.container}  >
                <Text style={styles.errorText}>{t('deliveryScreen.notFound')}</Text>
            </View>
        )
    }

    const handleStatusUpdate = (newStatus) => {
        updateDeliveryStatus(deliveryId, newStatus)

        navigation.goBack()
    }

    const handleDelete = () => {
      Alert.alert(
        t('detailsScreen.deleteTitle'),
        t('detailsScreen.deleteMessage'),
        [
          {
            text: t('common.cancel'),
            style: 'cancel'
          },
          {
            text: t('common.delete'),
            onPress: () => {
              deleteDelivery(delivery.id);
              navigation.goBack();
            },
            style: 'destructive'
          }
        ]
      )
    }

    const statusOptions = ['Pending', 'In Transit', 'Delivered', 'Cancelled']

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.header}>{t('detailsScreen.trackingHeader', { trackingNumber: delivery.trackingNumber })}</Text>
                <DetailRow label={t('detailsScreen.recipient')} value={delivery.recipient} />
                <DetailRow label={t('detailsScreen.status')} value={delivery.status} />
                <DetailRow label={t('detailsScreen.priority')} value={delivery.priority} />
            </View>

            <View style={styles.card}>
                <Text style={styles.header}>{t('detailsScreen.updateHeader')}:</Text>
                {statusOptions.map(status => (
                    <TouchableOpacity 
                        key={status} 
                        style={[
                            styles.button,
                            delivery.status === status && styles.disabledButton
                        ]}
                        disabled={delivery.status === status}
                        onPress={() => handleStatusUpdate(status)}>
                        <Text style={styles.buttonText}>{t('detailsScreen.markAs', { status: t(`status.${status}`, { defaultValue: status }) })}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.card}>
              <TouchableOpacity 
              style={[styles.button, styles.deleteButton]}
              onPress={handleDelete}
              >
                <Text style={styles.buttonText}>{t('detailsScreen.deleteDelivery')}</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const DetailRow = ({ label, value }) => {
    return (
        <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>{label}:</Text>
            <Text style={styles.detailValue}>{value}</Text>
        </View>
    );
};

export default DeliveryDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainStyles.colors.background,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 20,
    margin: 20,
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    paddingBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailLabel: {
    color: '#94a3b8',
    fontSize: 16,
  },
  detailValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    backgroundColor: MainStyles.colors.accent,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  disabledButton: {
    backgroundColor: '#475569',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
  },
  deleteButton: {
    backgroundColor: '#ef4444', // A distinct red color
  },
});
