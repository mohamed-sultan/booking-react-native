import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import  { useThemeColors } from '@store/useTheme';

const Button = ({title, onPress, style, textStyle, disabled}: any) => {
  const colors = useThemeColors();
  const styles = getStyles(colors);
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, style, disabled && styles.disabledButton]}
      onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);

const getStyles = (colors: any) => StyleSheet.create({
  button: {
    backgroundColor: colors.PrimaryBackground,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: colors.PrimaryBackground,
    opacity: 0.5,
  },
});
