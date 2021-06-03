import React from 'react';
import {View, StyleSheet} from 'react-native';

import Gravatar from './Gravatar';

const GravatarList = ({state}) => {
  return (
    <View style={styles.list}>
      {Array.apply(null, Array(state.images)).map((_, index) => (
        <Gravatar key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default GravatarList;
