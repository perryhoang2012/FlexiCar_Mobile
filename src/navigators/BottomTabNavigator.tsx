import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import svg from '~assets/svg';
import AddCarScreen from '~screens/AddCarScreen/AddCarScreen';
import HomeScreen from '~screens/HomeScreen/HomeScreen';
import MessageScreen from '~screens/MessageScreen/MessageScreen';
import ProfileScreen from '~screens/ProfileScreen/ProfileScreen';
import TripScreen from '~screens/TripScreen/TripScreen';
const BottomTab = createBottomTabNavigator();

const HomeIcon = ({focused}: {focused: boolean}) => (
  <SvgXml xml={focused ? svg.homeActive : svg.home} />
);

const TripIcon = ({focused}: {focused: boolean}) => (
  <SvgXml xml={focused ? svg.carActive : svg.car} />
);

const AddCarIcon = () => <SvgXml xml={svg.addActive} />;

const MessageIcon = ({focused}: {focused: boolean}) => (
  <SvgXml xml={focused ? svg.messageActive : svg.message} />
);

const ProfileIcon = ({focused}: {focused: boolean}) => (
  <SvgXml xml={focused ? svg.profileActive : svg.profile} />
);

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabel: () => {
          return null;
        },
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <BottomTab.Screen
        name="Trip"
        component={TripScreen}
        options={{
          tabBarIcon: TripIcon,
        }}
      />
      <BottomTab.Screen
        name="AddCar"
        component={AddCarScreen}
        options={{
          tabBarIcon: AddCarIcon,
        }}
      />
      <BottomTab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: MessageIcon,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileIcon,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
