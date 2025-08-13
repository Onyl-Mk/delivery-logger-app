import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MainStyles } from '../styles/styles';
import { useTranslation } from 'react-i18next';


import StatsScreen from '../screens/StatsScreen';
import DashboardScreen from '../screens/DashBoardScreen';
import NewDeliveryScreen from '../screens/NewDeliveryScreen';
import DeliveriesNavigator from './DeliveriesNagivator';




const BottomTab = createBottomTabNavigator();

export default function HomeTabs() {
  const { t } = useTranslation();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: MainStyles.colors.background },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: MainStyles.colors.background, borderTopWidth: 0 },
        tabBarActiveTintColor: MainStyles.colors.accent,
      }}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
          title: t('tabs.dashboard'),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          
        }}
      />
      <BottomTab.Screen
        name="Deliveries"
        component={DeliveriesNavigator}
        options={{
          headerShown: false,
          title: t('tabs.deliveries'),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="New Delivery"
        component={NewDeliveryScreen}
        options={{
          headerShown: false,
          title: t('tabs.add'),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          headerShown: false,
          title: t('tabs.stats'),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={size} color={color} />
          ),
        }}
      />

    </BottomTab.Navigator>
  );
}

