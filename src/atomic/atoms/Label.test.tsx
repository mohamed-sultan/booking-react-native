import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label'; 

// Mock the theme hook
jest.mock('@store/useTheme', () => ({
  useThemeColors: () => ({
    PrimaryText: '#000000',
  }),
}));

describe('Label', () => {
  it('renders correctly with default style', () => {
    const tree = renderer
      .create(<Label>Hello Label</Label>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom style', () => {
    const tree = renderer
      .create(
        <Label style={{ fontSize: 18, color: 'red' }}>
          Custom Styled Label
        </Label>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
