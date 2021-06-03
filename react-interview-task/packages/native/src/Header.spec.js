import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Header from './Header';

describe('Header', () => {
  it('should have a text', () => {
    const {getByText} = render(<Header>Foo</Header>);
    const headerElement = getByText(/foo/i);
    expect(headerElement).toBeTruthy();
  });
});
