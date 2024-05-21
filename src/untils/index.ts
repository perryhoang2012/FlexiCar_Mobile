import {Dimensions, Platform, StatusBar} from 'react-native';

const {height: D_HEIGHT, width: D_WIDTH} = Dimensions.get('window');

const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP12MAX_HEIGHT = 47;
const STATUSBAR_IP14PRO_HEIGHT = 49;

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XR_WIDTH = 414;
const XR_HEIGHT = 896;

const IP12_WIDTH = 390;
const IP12_HEIGHT = 844;

const IP12MAX_WIDTH = 428;
const IP12MAX_HEIGHT = 926;

const IP14PRO_WIDTH = 393;
const IP14PRO_HEIGHT = 852;

const IP14PROMAX_WIDTH = 430;
const IP14PROMAX_HEIGHT = 932;

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;

if (Platform.OS === 'ios' && !Platform.isPad) {
  if (D_WIDTH === X_WIDTH && D_HEIGHT === X_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (D_WIDTH === XR_WIDTH && D_HEIGHT === XR_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (D_WIDTH === IP12_WIDTH && D_HEIGHT === IP12_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12_HEIGHT;
  } else if (D_WIDTH === IP12MAX_WIDTH && D_HEIGHT === IP12MAX_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
  } else if (D_WIDTH === IP14PROMAX_WIDTH && D_HEIGHT === IP14PROMAX_HEIGHT) {
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
  } else if (D_WIDTH === IP14PRO_WIDTH && D_HEIGHT === IP14PRO_HEIGHT) {
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
  }
}

export const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
      (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT) ||
      (D_HEIGHT === XR_HEIGHT && D_WIDTH === XR_WIDTH) ||
      (D_HEIGHT === XR_WIDTH && D_WIDTH === XR_HEIGHT))
  );
};

export const getStatusBarHeight = Platform.select({
  ios: statusBarHeight,
  android: StatusBar.currentHeight,
  default: 0,
});
