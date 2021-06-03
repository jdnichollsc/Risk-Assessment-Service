import 'react-native';
import React from 'react';
import App from './App';
import {render, fireEvent} from '@testing-library/react-native';

describe('App', () => {
  it('renders header', async () => {
    const {getByText} = render(<App />);
    expect(getByText('Facewall')).toBeTruthy();
  });

  it('should have header inside a ScrollView', async () => {
    const {getByTestId} = render(<App />);
    const scrollView = getByTestId('scrollview-testid');
    expect(scrollView.children).toContainEqual(getByTestId('header-testid'));
  });

  it('should setup scroll listener', () => {
    const {getByTestId} = render(<App />);
    const scrollView = getByTestId('scrollview-testid');

    expect(scrollView.props).toHaveProperty('onScroll');
  });

  it('reacts to scroll event', () => {
    const {getAllByLabelText, getByTestId} = render(<App />);
    let imageElements = getAllByLabelText('Image for Gravatar');
    expect(imageElements.length).toEqual(275);

    fireEvent.scroll(getByTestId('scrollview-testid'), {
      nativeEvent: {contentOffset: {x: 0, y: 1600}},
    });

    imageElements = getAllByLabelText('Image for Gravatar');
    expect(imageElements.length).toEqual(550);
  });
});
