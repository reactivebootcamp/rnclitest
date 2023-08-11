/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../../screens/shop/categories';
import Products from '../../screens/shop/products';
import Product from '../../screens/shop/product';
import {ShopStackParamList} from './types';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

const SettingIcon = require('../../../assets/icons/settings.png');

const Stack = createNativeStackNavigator<ShopStackParamList>();

export default function ShopNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#695D98',
        },
        headerTintColor: '#fff',
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsStack')}>
            <Image style={styles.icon} source={SettingIcon} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
