import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SettingsStackParamList = {
  Settings: undefined;
  Profile: undefined;
  Notifications: undefined;
  Favorites: undefined;
};

export type PropsSettings = NativeStackScreenProps<
  SettingsStackParamList,
  'Settings'
>;
