import LottieView from 'lottie-react-native';
import React from 'react';
import {Modal, Text} from 'react-native';
import {Block} from '..';
import {styles} from './Loading.styles';

type Props = {
  open: boolean;
  title?: string;
  subTitle?: string;
};

const Loading = (props: Props) => {
  const {open, title, subTitle} = props;
  console.log(open);
  return (
    <Modal animationType="none" transparent={true} visible={open}>
      <Block middle center style={styles.container}>
        <Block style={styles.body}>
          {title && <Text>{title}</Text>}
          {subTitle && <Text>{subTitle}</Text>}
          <LottieView
            source={require('./loading.json')}
            style={{width: '100%', height: '100%'}}
            autoPlay
            loop
          />
        </Block>
      </Block>
    </Modal>
  );
};

export default Loading;
