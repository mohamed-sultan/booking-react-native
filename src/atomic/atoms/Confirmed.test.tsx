import React from 'react';
import { render } from '@testing-library/react-native';
import Confirmed from './Confirmed';

// Mock react-native-vector-icons/Ionicons to avoid rendering issues
jest.mock('react-native-vector-icons/Ionicons', () => {
  return (props: any) => {
    // Return a simple View with testID for snapshot
    return <mock-icon {...props} />;
  };
});

// Mock the colors module
jest.mock('@constants/colors', () => ({
  lightColors: {
    success: '#00FF00',
  },
}));

describe('Confirmed', () => {
  it('renders correctly with given size', () => {
    const { toJSON } = render(<Confirmed size={32} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
