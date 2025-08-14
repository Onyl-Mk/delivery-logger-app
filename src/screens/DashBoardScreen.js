// src/screens/DashboardScreen.js

import React, { useMemo } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Button } from 'react-native';
import { useDeliveries } from '../services/DeliveriesContext';
import { MainStyles } from '../styles/styles';
import { useTranslation } from 'react-i18next';

const Card = ({ children, style }) => <View style={[styles.card, style]}>{children}</View>;


const SummaryCard = ({ title, value, color, icon, style }) => (
  <View style={[styles.summaryCard, { backgroundColor: color }, style]}>
    <View>
      <Text style={styles.summaryValue}>{value}</Text>
      <Text style={styles.summaryTitle}>{title}</Text>
    </View>
    <Text>{icon}</Text>
  </View>
);

const StatusCard = ({ title, value, icon, color }) => (
  <View style={[styles.statusCard, { backgroundColor: color }]}>
    <Text style={styles.statusIcon}>{icon}</Text>
    <View>
      <Text style={styles.statusValue}>{value}</Text>
      <Text style={styles.statusTitle}>{title}</Text>
    </View>
  </View>
)

export default function DashboardScreen({ navigation }) {

  const { deliveries } = useDeliveries()
  const { t, i18n } = useTranslation();
 
  const stats = useMemo (() => {

    const total = deliveries.length;
    const delivered = deliveries.filter(d => d.status?.toLowerCase() === 'delivered').length;
    const pending = deliveries.filter(d => d.status?.toLowerCase() === 'pending').length;
    const inTransit = deliveries.filter(d => d.status?.toLowerCase() === 'in transit').length;

    const urgentDeliveries = deliveries.filter(d => d.priority?.toLowerCase() === 'urgent').length;
    const highPriorityDeliveries = deliveries.filter(d => d.priority?.toLowerCase() === 'high').length;

    const successRate = total > 0 ? (delivered / total) * 100 : 0;

    console.log("Dashboard is recalculating stats...", { urgentDeliveries, highPriorityDeliveries});

    return { total, delivered, pending, inTransit, urgentDeliveries, highPriorityDeliveries, successRate: successRate.toFixed(0) };
  }, [deliveries]);

  const handleFilterNavigation = (filter) => {
    navigation.navigate('Deliveries',{
      screen: 'Deliveries',
      params: { filter: filter }
    })
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t('dashboard.title')}</Text>
          <View style={styles.langSwitcher}>
            <Button title="EN" onPress={() => i18n.changeLanguage('en')} disabled={i18n.language === 'en'} />
            <Button title="FR" onPress={() => i18n.changeLanguage('fr')} disabled={i18n.language === 'fr'} />
          </View>
        </View>
        <View style={styles.summaryContainer}>
          <SummaryCard title={t('dashboard.totalDeliveries')} value={stats.total} color="#3b82f6" />
          <SummaryCard title={t('dashboard.delivered')} value={stats.delivered} color="#22c55e" />
        </View>

        <Card>
          <Text style={styles.sectionTitle}>{t('dashboard.statusOverview')}</Text>
          <View style={styles.statusRow}>
            <StatusCard title={t('status.Pending')} value={stats.pending} icon="⏳" color="#f97316" />
            <StatusCard title={t('status.In Transit')} value={stats.inTransit} icon="🚚" color="#f59e0b" />
          </View>
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => navigation.navigate('Deliveries')}
          >
            <Text style={styles.viewAllText}>{t('dashboard.viewAll')}</Text>
            <Text style={styles.viewAllText}>→</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>{t('dashboard.performance')}</Text>
          <Text style={styles.performanceLabel}>{t('dashboard.successRate')}</Text>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${stats.successRate}%` }]} />
          </View>
          <Text style={styles.performanceValue}>{stats.successRate}%</Text>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>{t('dashboard.attentionNeeded')}</Text>
          <TouchableOpacity
            style={[styles.attentionCard, { backgroundColor: '#4f1a1a' }]}
            onPress={() => handleFilterNavigation('Urgent')}
          >
            <Text style={styles.attentionTitle}>{t('dashboard.urgentDeliveries')}</Text>
            <Text style={styles.attentionSubtitle}>{t('dashboard.urgentSubtitle')}</Text>
            <View style={styles.attentionBadge}>
              <Text style={styles.attentionBadgeText}>{stats.urgentDeliveries}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
              style={[styles.attentionCard, {backgroundColor: '#573312'}]}
              onPress={() => handleFilterNavigation('High')}
          >
            <Text style={styles.attentionTitle}>{t('dashboard.highPriority')}</Text>
            <Text style={styles.attentionSubtitle}>{t('dashboard.highSubtitle')}</Text>
            <View style={[styles.attentionBadge, { backgroundColor: '#fb923c' }]}>
              <Text style={styles.attentionBadgeText}>{stats.highPriorityDeliveries}</Text>
            </View>
          </TouchableOpacity>
        </Card>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainStyles.colors.background,
    paddingTop: 15,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  langSwitcher: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginBottom: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryCard: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 5,
  },
  summaryValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  summaryTitle: {
    fontSize: 14,
    color: '#e2e8f0',
    marginTop: 4,
  },
  summaryIcon: { fontSize: 24, color: '#ffffff', opacity: 0.8 },
  card: { backgroundColor: '#1e293b', borderRadius: 16, padding: 20, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#cbd5e1', marginBottom: 16 },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statusCard: { flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 12, width: '48%', backgroundColor: '#334155' },
  statusIcon: { fontSize: 24, marginRight: 12 },
  statusValue: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  statusTitle: { fontSize: 14, color: '#94a3b8' },
  viewAllButton: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#334155' },
  viewAllText: { fontSize: 16, fontWeight: '500', color: '#94a3b8' },  
  performanceLabel: { fontSize: 14, color: '#94a3b8', marginBottom: 8 },
  progressBarBackground: { height: 8, backgroundColor: '#334155', borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: MainStyles.colors.accent },
  performanceValue: { fontSize: 14, color: '#94a3b8', textAlign: 'right', marginTop: 4 },
  attentionCard: { borderRadius: 12, padding: 16, marginBottom: 12, position: 'relative' },
  attentionTitle: { fontSize: 16, fontWeight: 'bold', color: '#fef2f2' },
  attentionSubtitle: { fontSize: 14, color: '#fee2e2', marginTop: 2 },
  attentionBadge: { position: 'absolute', top: 16, right: 16, backgroundColor: '#ef4444', borderRadius: 12, width: 24, height: 24, justifyContent: 'center', alignItems: 'center' },
  attentionBadgeText: { color: 'white', fontWeight: 'bold' }
});