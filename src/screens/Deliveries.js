import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useDeliveries } from '../services/DeliveriesContext'; 
import DeliveryCard from '../components/DeliveryCard';
import { MainStyles } from '../styles/styles';
import { FlashList } from '@shopify/flash-list';
import { useTranslation } from 'react-i18next';

export default function Deliveries({ route }) {
  const { deliveries } = useDeliveries();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Total');

  const statusCounts = useMemo(() => {
    return {
      Total: deliveries.length,
      Pending: deliveries.filter(d => d.status === 'Pending').length,
      'In Transit': deliveries.filter(d => d.status === 'In Transit').length,
      Delivered: deliveries.filter(d => d.status === 'Delivered').length,
      Cancelled: deliveries.filter(d => d.status === 'Cancelled').length,
      Urgent: deliveries.filter(d => d.priority === 'Urgent').length,
      High: deliveries.filter(d => d.priority === 'High').length,
    }
  }, [deliveries])

  const filters = ['Total', 'Delivered', 'Pending', 'In Transit', 'Cancelled', 'Urgent', 'High'];

  useEffect(() => {
    if(route.params?.filter) {
      setActiveFilter(route.params.filter);
    }
  }, [route.params?.filter]);

  const filteredDeliveries = useMemo(() => {
    let results = deliveries;

    if(activeFilter !== 'Total') {
      results = results.filter(delivery => {
        if(delivery.priority?.toLowerCase() === activeFilter.toLowerCase()) {
          return true;
        }
        if(delivery.status?.toLowerCase() === activeFilter.toLowerCase()) {
          return true;
        }
        return false;
      });
    }

    if (searchQuery.trim() !== '') {
      const lowercasedQuery = searchQuery.toLowerCase();
      results = results.filter(delivery =>
        delivery.recipient?.toLowerCase().includes(lowercasedQuery) ||
        delivery.trackingNumber?.toLowerCase().includes(lowercasedQuery)
      );
    }

    console.log(`Filter: '${activeFilter}', Search: '${searchQuery}', Results: ${results.length}`);

    return results;
  }, [deliveries, searchQuery, activeFilter]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('deliveriesScreen.title')}</Text>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScrollView}>
          {filters.map(filter => (
            <TouchableOpacity
          key={filter}
          style={[styles.filterChip, activeFilter === filter && styles.activeFilterChip]}
          onPress={() => setActiveFilter(filter)}
        >
          <Text style={[styles.filterText, activeFilter === filter && styles.activeFilterText]}>
            {`${statusCounts[filter] || 0} ${t(`filters.${filter}`)}`}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>

    <View style={styles.controlsContainer}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder={t('deliveriesScreen.searchPlaceholder')}
          placeholderTextColor="#94a3b8"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

    </View>
      <View style={styles.listContainer}>
        <Text style={styles.listHeaderText}>{t('deliveriesScreen.showingResults', { count: filteredDeliveries.length })}</Text>
      <FlashList
        data={filteredDeliveries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DeliveryCard delivery={item} />}
        ListEmptyComponent={<Text style={styles.emptyText}>{t('deliveriesScreen.noResults')}</Text>}
        estimatedItemSize={150}
        extraData={searchQuery}
        />
      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainStyles.colors.background,
    paddingTop: 15,
  },
  header: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  filterScrollView: { paddingHorizontal: 20, paddingVertical: 10 },
  filterChip: { backgroundColor: '#1e293b', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 99, marginRight: 10 },
  activeFilterChip: { backgroundColor: MainStyles.colors.accent },
  filterText: { color: '#cbd5e1', fontWeight: 'bold' },
  activeFilterText: { color: 'white' },
  controlsContainer: { paddingHorizontal: 20, marginBottom: 10 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1e293b', borderRadius: 8, paddingHorizontal: 12 },
  searchIcon: { fontSize: 18, color: '#94a3b8', marginRight: 8 },
  searchInput: { flex: 1, color: 'white', height: 44, fontSize: 16 },
  listHeaderText: { color: '#94a3b8', marginBottom: 16, fontWeight: '500', paddingHorizontal: 20 },
  emptyText: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    paddingHorizontal: 20,
  },
   listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listHeaderText: {
    color: '#94a3b8',
    marginBottom: 16,
    fontWeight: '500',
  },
  emptyText: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});




