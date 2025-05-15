import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

// Mock the useThemeColors hook
jest.mock('@store/useTheme', () => ({
  useThemeColors: () => ({
    PrimaryBackground: '#6200ee',
  }),
}));

describe('Button', () => {
  it('renders correctly with given title', () => {
    const { getByText, toJSON } = render(
      <Button title="Press me" onPress={jest.fn()} />
    );
    expect(getByText('Press me')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when disabled', () => {
    const { toJSON } = render(
      <Button title="Disabled" onPress={jest.fn()} disabled />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Click me" onPress={onPressMock} />);
    fireEvent.press(getByText('Click me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
