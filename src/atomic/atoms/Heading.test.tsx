import React from 'react';
import renderer from 'react-test-renderer';
import Heading from './Heading';

// Mock useThemeColors
jest.mock('@store/useTheme', () => ({
  useThemeColors: () => ({
    PrimaryText: '#000000',
  }),
}));

describe('Heading', () => {
  it('renders correctly with default style', () => {
    const tree = renderer
      .create(<Heading>Default Heading</Heading>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom style', () => {
    const tree = renderer
      .create(
        <Heading style={{ fontSize: 20, color: 'red' }}>
          Custom Styled Heading
        </Heading>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
