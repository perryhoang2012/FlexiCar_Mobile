import {useTheme} from '@react-navigation/native';
import {Platform, Text as TextBase} from 'react-native';
import {styles} from './Text.styles';

export interface Props {
  flex?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  style?: any;
  pa?: number;
  px?: number;
  py?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  ma?: number;
  mx?: number;
  my?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  primary?: boolean;
  secondary?: boolean;
  title?: boolean;
  size?: number;
  weight?: string | number;
  height?: number;
  color?: string;
  numberOfLines?: number;
  italic?: boolean;
  children?: any;
}

const Text: React.FC<Props> = props => {
  const {
    children,
    flex,
    center,
    left,
    right,
    style,
    pa,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    ma,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    title,
    size,
    weight,
    height,
    italic,
    color,
  } = props;

  const {colors} = useTheme();

  const textStyles: any = [
    {color: color || colors.text},
    flex && {flex: 1},
    !size && {lineHeight: 20},
    title && styles.title,
    center && styles.center,
    left && styles.left,
    right && styles.right,
    pa && {padding: pa},
    px && {paddingHorizontal: px},
    py && {paddingVertical: py},
    pl && {paddingLeft: pl},
    pr && {paddingRight: pr},
    pt && {paddingTop: pt},
    pb && {paddingBottom: pb},
    ma && {margin: ma},
    mx && {marginHorizontal: mx},
    my && {marginVertical: my},
    ml && {marginLeft: ml},
    mr && {marginRight: mr},
    mt && {marginTop: mt},
    mb && {marginBottom: mb},
    height && {lineHeight: height},
    weight && {
      fontWeight: weight === 'bold' && Platform.OS === 'ios' ? '500' : weight,
    },
    size && {fontSize: size},
    italic && {fontStyle: 'italic'},
    style,
  ];

  return (
    <TextBase {...props} style={textStyles}>
      {children}
    </TextBase>
  );
};

export default Text;
