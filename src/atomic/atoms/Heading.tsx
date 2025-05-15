import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { useThemeColors } from '@store/useTheme';

const Heading = ({children, style}: any) => {
  const colors = useThemeColors();

  const styles = getStyles(colors);
  return <Text style={[styles.heading, style]}>{children}</Text>;
};
export default React.memo(Heading);

const getStyles = (colors: any) => StyleSheet.create({
  heading: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '800',
    marginBottom: 25,
    color: colors.PrimaryText,
  },
});


