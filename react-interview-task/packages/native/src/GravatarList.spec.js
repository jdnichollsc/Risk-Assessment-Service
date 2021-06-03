import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import GravatarList from './GravatarList';

describe('GravatarList', () => {
  it('renders given amount of images', () => {
    const {getAllByLabelText} = render(<GravatarList state={{images: 50}} />);
    const imgElements = getAllByLabelText('Image for Gravatar');
    expect(imgElements.length).toEqual(50);
  });
});
