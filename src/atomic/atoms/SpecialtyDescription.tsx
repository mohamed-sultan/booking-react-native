import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useThemeColors } from '@store/useTheme';
import Info from '@svg/Info';
import AppText from '@molecules/AppText';

const SpecialtyDescription = ({ title, description }: any) => {
  const colors = useThemeColors();

  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Info />
        <AppText style={styles.title}>{title}</AppText>
      </View>
      <AppText style={styles.description}>{description}</AppText>
    </View>
  );
};
export default React.memo(SpecialtyDescription);

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.lightBg,
      paddingHorizontal: wp(3.5),
      borderRadius: wp(3),
      paddingVertical: hp(2),
      opacity: 0.7,
    },
    title: {
      fontSize: hp(2),
      marginBottom: hp(1),
      color: colors.darkText,
      marginStart: wp(1.5),
      lineHeight: hp(2.5),
      fontWeight: '700',
    },
    description: {
      fontSize: hp(1.8),
      color: colors.PrimaryText,
      lineHeight: hp(3),
      fontWeight: '650',
    },
    titleContainer: {
      flexDirection: 'row',
    },
  });
