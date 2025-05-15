import React from 'react';
import renderer from 'react-test-renderer';
import SpecialtyDescription from './SpecialtyDescription'; // Adjust the path as needed

// Mock the theme hook
jest.mock('@store/useTheme', () => ({
  useThemeColors: () => ({
    LightBackground: '#f5f5f5',
    PrimaryText: '#111111',
  }),
}));

// Mock the TipIcon component to simplify snapshot output
jest.mock('./TipIcon', () => {
  return ({ size }: any) => `MockedTipIcon size=${size}`;
});

describe('SpecialtyDescription', () => {
  it('renders correctly with title and description', () => {
    const tree = renderer
      .create(
        <SpecialtyDescription
          title="Sample Title"
          description="This is a sample specialty description."
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with an empty description', () => {
    const tree = renderer
      .create(
        <SpecialtyDescription
          title="Title Only"
          description=""
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
