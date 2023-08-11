import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopNavigator from '../shop';
import SettingsNavigator from '../settings';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Shop" component={ShopNavigator} />
      <Stack.Screen name="SettingsStack" component={SettingsNavigator} />
    </Stack.Navigator>
  );
}
