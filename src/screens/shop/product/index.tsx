import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export default function Product(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
    </View>
  );
}
