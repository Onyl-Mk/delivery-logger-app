import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useDeliveries } from '../services/DeliveriesContext';
import { MainStyles } from '../styles/styles';
import { useTranslation } from 'react-i18next';


const StatCard = ({ icon, value, title }) => (
    <View style={styles.statCard}>
        <Text style={styles.statIcon}>{icon}</Text>
        <View>
            <Text style={styles.statValue}>{value}</Text>
            <Text style={styles.statTitle}>{title}</Text>
        </View>
    </View>
);


const CustomBarChart = ({ data }) => {
   
    const maxValue = Math.max(...data.map(item => item.value), 1); 

    return (
        <View>
            <View style={styles.chartContainer}>
                {data.map((item, index) => (
                    <View key={index} style={styles.barWrapper}>
                        <View style={styles.barValueContainer}>
                            <Text style={styles.barValueText}>{item.value}</Text>
                        </View>
                        <View style={[styles.bar, { 
                            height: `${(item.value / maxValue) * 100}%`, 
                            backgroundColor: item.color 
                        }]} />
                    </View>
                ))}
            </View>
            
            <View style={styles.chartLabels}>
                {data.map((item, index) => (
                    <View key={index} style={styles.labelContainer}>
                        <View style={[styles.labelColor, { backgroundColor: item.color }]} />
                        <Text style={styles.labelText}>{item.label}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};


export default function StatsScreen() {
    const { deliveries } = useDeliveries();
    const { t } = useTranslation();

    const stats = useMemo(() => {
        const pending = deliveries.filter(d => d.status === 'Pending').length;
        const inTransit = deliveries.filter(d => d.status === 'In Transit').length;
        const delivered = deliveries.filter(d => d.status === 'Delivered').length;
        const failed = deliveries.filter(d => d.status === 'Failed').length;
        const total = deliveries.length;

       
        const chartData = [
            { value: pending, color: '#facc15', label: t('status.Pending') },
            { value: inTransit, color: '#60a5fa', label: t('status.In Transit') },
            { value: delivered, color: '#22c55e', label: t('status.Delivered') },
            { value: failed, color: '#ef4444', label: t('status.Failed') },
        ];

        return { total, pending, inTransit, delivered, failed, chartData };
    }, [deliveries]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.headerTitle}>{t('statsScreen.title')}</Text>

                <StatCard icon="📦" value={stats.total} title={t('statsScreen.total')} />
                <StatCard icon="🕒" value={stats.pending} title={t('statsScreen.pending')} />
                <StatCard icon="🚚" value={stats.inTransit} title={t('statsScreen.inTransit')} />
                <StatCard icon="✓" value={stats.delivered} title={t('statsScreen.delivered')} />
                <StatCard icon="❌" value={stats.failed} title={t('statsScreen.failed')} />

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{t('statsScreen.breakdown')}</Text>
                    <CustomBarChart data={stats.chartData} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: MainStyles.colors.background, paddingTop: 15 },
    scrollContent: { padding: 20 },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 },
    statCard: { backgroundColor: '#1e293b', borderRadius: 12, padding: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
    statIcon: { fontSize: 24, marginRight: 16, width: 30 },
    statValue: { color: 'white', fontSize: 20, fontWeight: 'bold' },
    statTitle: { color: '#94a3b8', fontSize: 14 },
    card: { backgroundColor: '#1e293b', borderRadius: 12, padding: 20, marginBottom: 16 },
    cardTitle: { color: '#cbd5e1', fontSize: 18, fontWeight: '600', marginBottom: 20 },
    chartContainer: {
        flexDirection: 'row',
        height: 150,
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#334155',
        paddingBottom: 10,
    },
    barWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    bar: {
        width: '50%',
        borderRadius: 4,
    },
    barValueContainer: {
        position: 'absolute',
        top: -20,
        width: '100%',
        alignItems: 'center',
    },
    barValueText: {
        color: '#94a3b8',
        fontSize: 12,
        fontWeight: 'bold',
    },
    chartLabels: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 16,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 8,
    },
    labelColor: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 6,
    },
    labelText: {
        color: '#94a3b8',
        fontSize: 12,
    },
});
