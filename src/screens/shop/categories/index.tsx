import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {Props} from '../../../navigation/shop/types';

export default function Categories({navigation}: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      <Button
        onPress={() => navigation.navigate('Products')}
        color="#695D98"
        title="Go to Products"
      />
    </View>
  );
}
