import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import  { useThemeColors } from '@store/useTheme';

const Input = ({value, onChangeText, placeholder, style, ...props}: any) => {
  const colors = useThemeColors();

  const styles = getStyles(colors);
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.LightText}
      {...props}
    />
  );
};
export default React.memo(Input);

const getStyles = (colors: any) => StyleSheet.create({
  input: {
    paddingVertical: 8,
    fontSize: 16,
    textAlign: 'left',
    color: colors.PrimaryText,
    backgroundColor: colors.LightBackground,
  },
});

