import React from 'react';
import {Text, StyleSheet} from 'react-native';
import  { useThemeColors } from '@store/useTheme';

const Label = ({children, style}: any) => {
  const colors = useThemeColors();

  const styles = getStyles(colors);
  return <Text style={[styles.label, style]}>{children}</Text>;
};
export default React.memo(Label);

const getStyles = (colors: any) => StyleSheet.create({
  label: {
    fontSize: 14,
    color: colors.PrimaryText,
  },
});


