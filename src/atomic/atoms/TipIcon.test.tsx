import React from 'react';
import renderer from 'react-test-renderer';
import TipIcon from './TipIcon'; 
// Mock react-native-vector-icons
jest.mock('react-native-vector-icons/Ionicons', () => {
  return ({ name, size }: any) => {
    return `Ionicon name=${name} size=${size}`;
  };
});

describe('TipIcon', () => {
  it('renders correctly with a given size', () => {
    const tree = renderer.create(<TipIcon size={24} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a different size', () => {
    const tree = renderer.create(<TipIcon size={32} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
