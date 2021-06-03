import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Gravatar from './Gravatar';

const mockStart = jest.fn();

jest.mock('react-native/Libraries/Animated/src/Animated.js', () => {
  const originalModule = jest.requireActual(
    'react-native/Libraries/Animated/src/Animated.js',
  );

  return {
    ...originalModule,
    timing: () => ({start: mockStart}),
  };
});

describe('Gravatar', () => {
  it('should create an image with a random gravatar src', () => {
    const {getByLabelText} = render(<Gravatar />);
    const imgElement = getByLabelText('Image for Gravatar');
    expect(imgElement.props.source).toMatchObject({
      uri: expect.stringMatching(
        /^http:\/\/www\.gravatar\.com\/avatar\/[a-z0-9]{32}\?d=identicon&s=64$/,
      ),
    });
  });

  it('should toggle its highlight when pressed', () => {
    const {getByTestId} = render(<Gravatar />);

    fireEvent.press(getByTestId('animatedview-testid'));

    expect(mockStart).toHaveBeenCalled();
  });
});
