import {ToastAndroid} from 'react-native';

export function toastGenerate(string) {
  ToastAndroid.showWithGravityAndOffset(
    string,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    5,
    5,
  );
}
