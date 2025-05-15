import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

// Mock the theme hook
jest.mock('@store/useTheme', () => ({
  useThemeColors: () => ({
    PrimaryText: '#000000',
    LightBackground: '#f0f0f0',
    LightText: '#999999',
  }),
}));

describe('Input', () => {
  it('renders correctly with placeholder', () => {
    const tree = renderer
      .create(
        <Input
          value=""
          onChangeText={() => {}}
          placeholder="Enter your name"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with value and custom style', () => {
    const tree = renderer
      .create(
        <Input
          value="Hello"
          onChangeText={() => {}}
          placeholder="Type here"
          style={{ fontSize: 18, color: 'blue' }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with additional props (e.g., multiline)', () => {
    const tree = renderer
      .create(
        <Input
          value="Multiline text"
          onChangeText={() => {}}
          placeholder="Type here"
          multiline
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
