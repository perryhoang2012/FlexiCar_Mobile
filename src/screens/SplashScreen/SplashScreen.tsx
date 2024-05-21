import React, {useEffect, useState} from 'react';
import useGeneralStore from '../../store/useGeneralStore';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Block, Text} from '~components/index';
import {styles} from './SplashScreen.styles';
import Loading from '~components/Loading/Loading';
import CustomImage from '~components/CustomImage/CustomImage';
import images from '~assets/images';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [generalState] = useGeneralStore(state => [state]);

  const [step, setStep] = useState<number>(1);

  console.log(generalState);

  useEffect(() => {
    if (generalState.isFirstTimeUsersApp) {
      setStep(2);
    } else {
      navigation.replace('Home');
    }
  }, [generalState.isFirstTimeUsersApp, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Block middle center flex>
        <Block center middle>
          <CustomImage source={images.logo} style={{width: 100, height: 100}} />
          <Text
            center
            size={24}
            weight={'500'}
            mt={10}
            style={styles.textNameApp}>
            FLEXICAR
          </Text>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default SplashScreen;
