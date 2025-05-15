import React from 'react';
import {Switch} from 'react-native-switch';
import useTheme from '@store/useTheme';
import {lightColors} from '@constants/colors';

const ThemeToggleButton = () => {
  const {toggleTheme, isDark} = useTheme();

  return (
    <Switch
      value={isDark}
      barHeight={30}
      onValueChange={toggleTheme}
      backgroundActive={lightColors.PrimaryText} //done
      backgroundInactive={lightColors.LightText}
      circleActiveColor={'#000000'} // done
      circleInActiveColor={lightColors.PrimaryBackground}
      circleSize={30}
      switchWidthMultiplier={2.8}
    />
  );
};

export default ThemeToggleButton;
