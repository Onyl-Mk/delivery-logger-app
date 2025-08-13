import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Deliveries from "../screens/Deliveries";
import DeliveryDetailsScreen from "../screens/DeliveryDetailsScreen";
import { MainStyles } from "../styles/styles";

const Stack = createNativeStackNavigator();

function DeliveriesNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: MainStyles.colors.background },
                headerTintColor: "white",
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen
                name="Deliveries List"
                component={Deliveries}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DeliveryDetails"
                component={DeliveryDetailsScreen}
                options={{ title: "Delivery Details" }}
            />
        </Stack.Navigator>
    );
}


export default DeliveriesNavigator;