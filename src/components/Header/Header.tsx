import React from 'react';
import {Block, Button, Text} from '..';
import {styles} from './Header.style';
import {SvgXml} from 'react-native-svg';
import svg from '~assets/svg';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title?: string;
  isBack?: boolean;
};

const Header = (props: Props) => {
  const {title, isBack} = props;
  const navigation = useNavigation();

  return (
    <Block style={styles.container}>
      {title && (
        <Text size={26} weight={'700'}>
          {title}
        </Text>
      )}
      {isBack && (
        <Button onPress={() => navigation.goBack()}>
          <SvgXml xml={svg.arrowLeft} width={30} height={30} />
        </Button>
      )}
    </Block>
  );
};

export default Header;
