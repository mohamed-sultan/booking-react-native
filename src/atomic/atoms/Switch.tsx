import React from 'react';
import renderer from 'react-test-renderer';
import Switch from './Switch';

// Mock react-native Switch component so tests run without error
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    ...RN,
    Switch: (props: any) => <mock-switch {...props} />,
  };
});

describe('Switch', () => {
  it('renders correctly with value=false', () => {
    const tree = renderer.create(<Switch value={false} onValueChange={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with value=true', () => {
    const tree = renderer.create(<Switch value={true} onValueChange={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when disabled', () => {
    const tree = renderer.create(<Switch value={true} disabled onValueChange={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom thumbColor and trackColor', () => {
    const tree = renderer
      .create(
        <Switch
          value={true}
          onValueChange={() => {}}
          thumbColor="blue"
          trackColor={{ true: 'green', false: 'gray' }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
