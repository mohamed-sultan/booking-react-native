import React from 'react';
import { StyleSheet} from 'react-native';
import  { useThemeColors } from '@store/useTheme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppText from '@molecules/AppText';

const PoweredBy = () => {
  const colors = useThemeColors();

  const styles = getStyles(colors);
  return (
    <AppText style={styles.poweredBy}>
      Powered by <AppText style={styles.brand}>spectrum.life</AppText>
    </AppText>
  );
};

const getStyles = (colors: any) => StyleSheet.create({
  poweredBy: {
    textAlign: 'center',
    fontSize: hp(2.2),
    color: colors.LightText,
    marginTop: 24,
  },
  brand: {
    color: colors.PrimaryBackground,
    fontWeight: 'bold',
  },
});

export default PoweredBy;
