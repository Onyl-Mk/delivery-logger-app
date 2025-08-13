import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DELIVERIES_STORAGE_KEY = '@deliveries_data';

const DeliveriesContext = createContext();


export const DeliveriesProvider = ({ children }) => {
    const [deliveries, setDeliveries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadDeliveries = async () => {
            try {
                const storedDeliveries = await AsyncStorage.getItem(DELIVERIES_STORAGE_KEY)
                if (storedDeliveries !== null) {
                    setDeliveries(JSON.parse(storedDeliveries))
                }
            } catch (error) {
                console.error("Error loading deliveries from storage:", error)
            } finally {
                setIsLoading(false)
            }
        }
        loadDeliveries()
    }, [])


    useEffect(() => {
        if(!isLoading) {
            const saveDeliveries = async () => {
                try {
                    const jsonValue = JSON.stringify(deliveries)
                    await AsyncStorage.setItem(DELIVERIES_STORAGE_KEY, jsonValue)
                } catch (error) {
                    console.error("Error saving deliveries to storage:", error)
                }
            }
            saveDeliveries()
        }
    }, [deliveries, isLoading])

    const addDelivery = (deliveryData) => {
        const newDelivery = {
            id: Math.random().toString(36).substring(2, 9),
            ...deliveryData,
            status: 'pending',
            
        }
        setDeliveries(currentDeliveries => [...currentDeliveries, newDelivery])
    }

    const updateDeliveryStatus = (deliveryId, newStatus) => {
        setDeliveries(currentDeliveries =>
            currentDeliveries.map(delivery =>
                delivery.id === deliveryId ? { ...delivery, status: newStatus } : delivery
            )
        )
    }

    const deleteDelivery = (deliveryId) => {
        setDeliveries(currentDeliveries =>
            currentDeliveries.filter(delivery => delivery.id !== deliveryId)
        )
    }

    const value = {
        deliveries,
        addDelivery,
        updateDeliveryStatus,
        deleteDelivery,
    }

    return (
        <DeliveriesContext.Provider value={value}>
            {children}
        </DeliveriesContext.Provider>
    )
}

export const useDeliveries = () => {
    return useContext(DeliveriesContext);
}