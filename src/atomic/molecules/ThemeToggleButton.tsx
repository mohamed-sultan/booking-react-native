import React from 'react';
import Button from '@atoms/Button';
import Switch from '@atoms/Switch';
import useTheme from '@store/useTheme';

const ThemeToggleButton = () => {
  const {toggleTheme, isDark} = useTheme();
  return (
    <Button onPress={toggleTheme} style={{marginRight: 10}}>
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
      />
    </Button>
  );
};

export default ThemeToggleButton;
