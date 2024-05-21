import React, {useState} from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import images from '~assets/images';
import {styles} from './CustomImage.styles';

interface CustomImageProps extends FastImageProps {
  containerStyle?: ViewStyle;
  children?: React.ReactNode;
}

const CustomImage: React.FC<CustomImageProps> = ({
  containerStyle,
  source,
  style,
  children,
  ...props
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={[styles.container, containerStyle]}>
      <FastImage
        source={source || images.image_blank}
        style={style}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        {...props}>
        {children}
      </FastImage>
      {loading && (
        <ActivityIndicator style={styles.activityIndicatorContainer} />
      )}
    </View>
  );
};

export default React.memo(CustomImage);
