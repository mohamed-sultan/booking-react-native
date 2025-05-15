import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonGroup from './ButtonGroup';

// Mock the useThemeColors hook
jest.mock('@store/useTheme', () => ({
  useThemeColors: () => ({
    PrimaryBackground: '#6200ee',
  }),
}));

describe('ButtonGroup', () => {
  it('renders correctly', () => {
    const { toJSON, getByText } = render(
      <ButtonGroup onPrevious={jest.fn()} onContinue={jest.fn()} disabled={false} />
    );

    expect(getByText('Previous')).toBeTruthy();
    expect(getByText('Continue')).toBeTruthy();

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when Continue button is disabled', () => {
    const { toJSON } = render(
      <ButtonGroup onPrevious={jest.fn()} onContinue={jest.fn()} disabled={true} />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('calls onPrevious when Previous button is pressed', () => {
    const onPreviousMock = jest.fn();
    const { getByText } = render(
      <ButtonGroup onPrevious={onPreviousMock} onContinue={jest.fn()} disabled={false} />
    );

    fireEvent.press(getByText('Previous'));
    expect(onPreviousMock).toHaveBeenCalledTimes(1);
  });

  it('calls onContinue when Continue button is pressed', () => {
    const onContinueMock = jest.fn();
    const { getByText } = render(
      <ButtonGroup onPrevious={jest.fn()} onContinue={onContinueMock} disabled={false} />
    );

    fireEvent.press(getByText('Continue'));
    expect(onContinueMock).toHaveBeenCalledTimes(1);
  });
});
