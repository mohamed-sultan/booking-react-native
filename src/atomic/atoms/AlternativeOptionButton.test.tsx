import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AlternativeOptionButton from './AlternativeOptionButton';

// ✅ Mock useThemeColors
jest.mock('@store/useTheme', () => ({
  useThemeColors: () => ({
    LightBackground: '#f0f0f0',
    PrimaryText: '#333',
  }),
}));

// ✅ Mock ArrowRight icon component
jest.mock('./ArrowRight', () => () => {
  return <></>; // Return empty fragment as a placeholder
});

describe('AlternativeOptionButton', () => {
  it('renders with correct text', () => {
    const { getByText } = render(<AlternativeOptionButton onPress={jest.fn()} />);
    expect(getByText("I'd prefer to speak with a GP")).toBeTruthy();
  });

  it('calls onPress when tapped', () => {
    const onPressMock = jest.fn();
    const { getByRole } = render(<AlternativeOptionButton onPress={onPressMock} />);
    const button = getByRole('button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('matches the snapshot', () => {
    const tree = render(<AlternativeOptionButton onPress={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
