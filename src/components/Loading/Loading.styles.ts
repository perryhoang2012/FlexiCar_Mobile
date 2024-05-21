import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../untils/scaling';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  body: {
    width: moderateScale({size: 200}),
    height: verticalScale(200),
    backgroundColor: '#EFF3FA',
    borderRadius: 10,
  },
});
