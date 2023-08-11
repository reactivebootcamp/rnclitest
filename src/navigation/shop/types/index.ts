import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ShopStackParamList = {
  Categories: undefined;
  Products: undefined;
  Product: undefined;
};

export type Props = NativeStackScreenProps<ShopStackParamList, 'Categories'>;
