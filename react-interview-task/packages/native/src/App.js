import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import {calculateNumberOfImages} from './utils';

import Header from './Header';
import GravatarList from './GravatarList';

const App = () => {
  const [state, setState] = useState({images: calculateNumberOfImages()});

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          testID="scrollview-testid"
          onScroll={({nativeEvent: {contentOffset}}) =>
            setState({
              images: calculateNumberOfImages({
                offsetX: contentOffset.x,
                offsetY: contentOffset.y,
              }),
            })
          }
          scrollEventThrottle={0}>
          <Header />

          <GravatarList state={state} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
});

export default App;
