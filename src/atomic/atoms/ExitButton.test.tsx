import React from 'react';
import { render } from '@testing-library/react-native';
import ExitButton from './ExitButton';

// Mock useThemeColors hook
jest.mock('@store/useTheme', () => ({
  useThemeColors: () => ({
    PrimaryText: '#000000',
    LightBackground: '#ffffff',
  }),
}));

// Mock react-native-vector-icons/Ionicons
jest.mock('react-native-vector-icons/Ionicons', () => {
  return (props: any) => <mock-icon {...props} />;
});

describe('ExitButton', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<ExitButton onPress={jest.fn()} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
