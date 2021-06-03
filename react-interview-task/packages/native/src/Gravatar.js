import React, {useRef} from 'react';
import {Image, TouchableWithoutFeedback, Animated, Easing} from 'react-native';

import {gravatarUrl, IMAGE_SIZE} from './utils';

const Gravatar = () => {
  const spinAnimation = useRef(new Animated.Value(0)).current;

  const startSpin = () => {
    spinAnimation.setValue(0);

    Animated.timing(spinAnimation, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const spin = spinAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  return (
    <TouchableWithoutFeedback onPress={startSpin}>
      <Animated.View
        testID="animatedview-testid"
        style={[
          {
            transform: [{rotate: spin}],
          },
        ]}>
        <Image
          accessibilityLabel="Image for Gravatar"
          style={{
            width: IMAGE_SIZE,
            height: IMAGE_SIZE,
            borderRadius: IMAGE_SIZE / 2,
          }}
          source={{
            uri: gravatarUrl(IMAGE_SIZE),
          }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(Gravatar);
