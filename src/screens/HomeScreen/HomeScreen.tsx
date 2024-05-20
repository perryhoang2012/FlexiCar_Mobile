import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Block, Button, Text} from '~components/index';
import useGeneralStore from '../../store/useGeneralStore';

const HomeScreen = () => {
  const {colors} = useTheme();

  // const page = 1;

  // const res = useQuery({
  //   queryKey: ['students', page],
  //   queryFn: () => {
  //     return getStudents(page, 10);
  //   },
  // });

  const [generalState, setDarkMode] = useGeneralStore(state => [
    state,
    state.setDarkMode,
  ]);

  return (
    <Block middle center flex bg={colors.primary}>
      <Button
        onPress={() => {
          setDarkMode(!generalState.isDarkMode);
        }}>
        <Text>123123</Text>
      </Button>
    </Block>
  );
};

export default HomeScreen;
