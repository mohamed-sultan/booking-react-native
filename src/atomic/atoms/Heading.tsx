import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useThemeColors } from '@store/useTheme';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Heading = ({ children, style }: any) => {
  const colors = useThemeColors();

  const styles = getStyles(colors);
  return <Text style={[styles.heading, style]}>{children}</Text>;
};
export default React.memo(Heading);

const getStyles = (colors: any) =>
  StyleSheet.create({
    heading: {
      fontSize: hp(2),
      lineHeight: hp(3),
      fontWeight: '800',
      marginBottom: hp(3),
      color: colors.PrimaryText,
    },
  });
