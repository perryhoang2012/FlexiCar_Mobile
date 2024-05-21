import {useTheme} from '@react-navigation/native';
import React from 'react';
import CustomImage from '~components/CustomImage/CustomImage';
import Header from '~components/Header/Header';
import {Block, Text} from '~components/index';
import {verticalScale} from '../../untils/scaling';
import {styles} from './ProfileScreen.styles';
import svg from '~assets/svg';
import {ScrollView} from 'react-native';

interface ListActionType {
  title?: string;
  action?: any;
  icon?: string;
}

const ProfileScreen = () => {
  const {colors} = useTheme();

  const listAction: ListActionType[] = [
    {title: 'Account Profile', action: '', icon: svg.user},
    {title: 'Billing', action: '', icon: svg.card},
    {title: 'Change Password', action: '', icon: svg.securityPassword},
    {title: 'Account Profile', action: '', icon: svg.user},
  ];
  return (
    <Block flex bg={colors.background}>
      <Header title="Profile" />
      <Block flex px={24} mt={20}>
        <Block
          radius={20}
          bg={colors.primary}
          width={'100%'}
          height={verticalScale(80)}
          row
          py={10}
          px={26}>
          <CustomImage
            source={{
              uri: 'https://www.rollingstone.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-15-at-11.24.37-AM.jpg?w=1600&h=900&crop=1',
            }}
            style={styles.avatar}
          />
          <Block ml={10}>
            <Text size={16} weight={'600'} color={'white'}>
              Huynh Hoang
            </Text>
            <Text size={14} color={'white'}>
              #2012
            </Text>
          </Block>
        </Block>

        <ScrollView>
          {listAction.map((item, index) => (
            <Text key={index}>{item.title}</Text>
          ))}
        </ScrollView>
      </Block>
    </Block>
  );
};

export default ProfileScreen;
