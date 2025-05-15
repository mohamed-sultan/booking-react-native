import React from 'react';
import renderer from 'react-test-renderer';
import TextButton from './TextButton';

// Mock the theme hook
jest.mock('@store/useTheme', () => ({
  useThemeColors: () => ({
    LightBackground: '#ccc',
    PrimaryBackground: '#007bff',
    PrimaryText: '#000',
  }),
}));

describe('TextButton', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <TextButton label="Click Me" onPress={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when selected', () => {
    const tree = renderer.create(
      <TextButton label="Selected" selected={true} onPress={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
