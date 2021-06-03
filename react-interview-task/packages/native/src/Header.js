import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header = ({children}) => {
  return (
    <Text testID="header-testid" style={styles.header}>
      {children || 'Facewall'}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    textAlign: 'center',
  },
});

export default Header;
