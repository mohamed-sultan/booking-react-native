import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './ProgressBar';

// Mock useThemeColors
jest.mock('@store/useTheme', () => ({
  useThemeColors: () => ({
    LightBackground: '#e0e0e0',
    PrimaryBackground: '#00aaff',
  }),
}));

describe('ProgressBar', () => {
  it('renders correctly with default progress', () => {
    const tree = renderer.create(<ProgressBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with 0% progress', () => {
    const tree = renderer.create(<ProgressBar progress={0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with 50% progress', () => {
    const tree = renderer.create(<ProgressBar progress={0.5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with 100% progress', () => {
    const tree = renderer.create(<ProgressBar progress={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
