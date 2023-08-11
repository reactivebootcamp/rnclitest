/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsStackParamList} from './types';
import Settings from '../../screens/settings';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
const LeftArrowIcon = require('../../../assets/icons/left-arrow.png');
const Stack = createNativeStackNavigator<SettingsStackParamList>();

export default function SettingsNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.icon} source={LeftArrowIcon} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
