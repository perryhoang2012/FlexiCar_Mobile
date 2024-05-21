import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../untils/scaling';

export const styles = StyleSheet.create({
  avatar: {
    width: verticalScale(70),
    height: verticalScale(70),
    borderRadius: moderateScale({size: 20}),
  },
});
