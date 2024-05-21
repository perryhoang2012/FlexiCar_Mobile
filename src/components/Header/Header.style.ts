import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from '../../untils/index';
console.log(getStatusBarHeight);

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight + 30,
    paddingHorizontal: 30,
  },
  textTitle: {},
});
